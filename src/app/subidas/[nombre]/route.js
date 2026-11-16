// /subidas/[nombre] — SOLO PARA DESARROLLO.
// Muestra en local los archivos subidos desde el panel, que están en UPLOAD_DIR.
// En producción esta ruta responde 404: ahí los sirve nginx directamente
// desde la carpeta UPLOAD_DIR (location /subidas/).

import fs from "fs";
import path from "path";
import { Readable } from "stream";
import { NOMBRE_VALIDO, tipoPorExtension } from "../../../utils/archivos_panel";

export const dynamic = "force-dynamic";

function noEncontrado() {
  return new Response("No encontrado", { status: 404 });
}

export async function GET(req, { params }) {
  if (process.env.NODE_ENV === "production") return noEncontrado();

  const carpeta = process.env.UPLOAD_DIR;
  const { nombre } = await params;

  // Solo nombres generados por el panel: evita leer archivos fuera de la carpeta
  if (!carpeta || !NOMBRE_VALIDO.test(nombre)) return noEncontrado();

  const ruta = path.join(/*turbopackIgnore: true*/ carpeta, nombre);
  let info;
  try {
    info = await fs.promises.stat(ruta);
  } catch {
    return noEncontrado();
  }

  const tipo = tipoPorExtension(nombre.split(".").pop());
  const flujo = Readable.toWeb(fs.createReadStream(ruta));

  return new Response(flujo, {
    headers: {
      "Content-Type": tipo.mime,
      "Content-Length": String(info.size),
      "X-Content-Type-Options": "nosniff",
    },
  });
}
