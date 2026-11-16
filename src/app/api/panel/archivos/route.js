// /api/panel/archivos
// POST: sube un PDF o una imagen a la carpeta UPLOAD_DIR.
//
// El navegador manda el archivo tal cual en el cuerpo de la petición (no como
// formulario). Así se puede ir guardando por partes, sin cargar el archivo
// entero en memoria: el servidor solo tiene 1.9 GiB de RAM.
//
// Responde { url } con la dirección pública del archivo, por ejemplo
// /subidas/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed.pdf

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { Readable } from "stream";
import { once } from "events";
import { NextResponse } from "next/server";
import { exigirAccesoPanel } from "../../../../utils/acceso_panel";
import {
  detectarTipo,
  LIMITE_MAXIMO,
  PREFIJO_URL,
  textoTamano,
} from "../../../../utils/archivos_panel";

export const dynamic = "force-dynamic";

const MENSAJE_TIPOS = "Tipo de archivo no permitido. Solo se aceptan PDF, JPG, PNG o WebP.";

// Error con el código HTTP que se debe responder
class ErrorSubida extends Error {
  constructor(mensaje, estado) {
    super(mensaje);
    this.estado = estado;
  }
}

function mensajeLimite(tipo) {
  if (tipo) {
    return `El archivo supera el límite de ${textoTamano(tipo.limite)} para ${tipo.extension.toUpperCase()}.`;
  }
  return `El archivo supera el límite de ${textoTamano(LIMITE_MAXIMO)}.`;
}

export async function POST(req) {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  const carpeta = process.env.UPLOAD_DIR;
  if (!carpeta) {
    console.error("Falta la variable de entorno UPLOAD_DIR");
    return NextResponse.json({ error: "La subida de archivos no está configurada" }, { status: 500 });
  }

  // Si el navegador avisa el tamaño y ya es demasiado grande, ni se empieza
  const largo = Number(req.headers.get("content-length"));
  if (largo > LIMITE_MAXIMO) {
    return NextResponse.json({ error: mensajeLimite(null) }, { status: 413 });
  }
  if (!req.body) {
    return NextResponse.json({ error: "No se recibió ningún archivo" }, { status: 400 });
  }

  // turbopackIgnore: la carpeta viene de UPLOAD_DIR y está fuera del proyecto;
  // sin este comentario, el build incluiría todo el proyecto en el servidor.
  await fs.promises.mkdir(/*turbopackIgnore: true*/ carpeta, { recursive: true });

  // Nombre aleatorio: el nombre original nunca se usa para guardar
  const nombreBase = crypto.randomUUID();
  const rutaTemporal = path.join(/*turbopackIgnore: true*/ carpeta, `${nombreBase}.parcial`);
  const escritor = fs.createWriteStream(rutaTemporal, { flags: "wx" });
  let errorEscritura = null;
  escritor.on("error", (error) => {
    errorEscritura = error;
  });

  let tipo = null;
  let total = 0;
  let inicio = Buffer.alloc(0);

  try {
    for await (const pedazo of Readable.fromWeb(req.body)) {
      if (errorEscritura) throw errorEscritura;
      total += pedazo.length;

      // Con los primeros 12 bytes ya se sabe el tipo real del archivo
      if (!tipo) {
        inicio = Buffer.concat([inicio, pedazo]);
        if (inicio.length >= 12) {
          tipo = detectarTipo(inicio);
          if (!tipo) throw new ErrorSubida(MENSAJE_TIPOS, 415);
        }
      }

      const limite = tipo ? tipo.limite : LIMITE_MAXIMO;
      if (total > limite) throw new ErrorSubida(mensajeLimite(tipo), 413);

      // Si el disco va más lento que la red, se espera antes de seguir
      if (!escritor.write(pedazo)) await once(escritor, "drain");
    }

    if (total === 0) throw new ErrorSubida("El archivo está vacío", 400);
    if (!tipo) {
      // Archivo de menos de 12 bytes: se revisa con lo que haya
      tipo = detectarTipo(inicio);
      if (!tipo) throw new ErrorSubida(MENSAJE_TIPOS, 415);
    }

    escritor.end();
    await once(escritor, "finish");
    if (errorEscritura) throw errorEscritura;

    const nombreFinal = `${nombreBase}.${tipo.extension}`;
    await fs.promises.rename(rutaTemporal, path.join(/*turbopackIgnore: true*/ carpeta, nombreFinal));

    return NextResponse.json(
      { url: `${PREFIJO_URL}/${nombreFinal}`, tipo: tipo.extension, bytes: total },
      { status: 201 }
    );
  } catch (error) {
    // Si algo falla, se borra el archivo a medias
    escritor.destroy();
    await fs.promises.rm(rutaTemporal, { force: true });

    if (error instanceof ErrorSubida) {
      return NextResponse.json({ error: error.message }, { status: error.estado });
    }
    console.error(error);
    return NextResponse.json({ error: "Error al guardar el archivo" }, { status: 500 });
  }
}

