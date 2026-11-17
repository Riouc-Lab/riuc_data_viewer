// /api/panel/contenidos
// GET:  lista todos los contenidos (borradores incluidos) para el panel.
// POST: crea un contenido nuevo como borrador.
// Las dos comprueban en el servidor que el usuario esté autorizado.

import { NextResponse } from "next/server";
import { exigirAccesoPanel } from "../../../../utils/acceso_panel";
import {
  listarContenidosPanel,
  crearContenido,
  validarContenido,
  esNumeroRepetido,
} from "../../../../utils/contenidos_panel";

// Siempre se consulta la base: nunca se guarda en caché ni se fija en el build
export const dynamic = "force-dynamic";

export async function GET() {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  try {
    const contenidos = await listarContenidosPanel();
    return NextResponse.json({ contenidos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al consultar los contenidos" }, { status: 500 });
  }
}

export async function POST(req) {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  let entrada;
  try {
    entrada = await req.json();
  } catch {
    return NextResponse.json({ error: "Los datos enviados no son válidos" }, { status: 400 });
  }

  const { datos, errores } = validarContenido(entrada);
  if (errores.length > 0) {
    return NextResponse.json({ error: errores.join(" ") }, { status: 400 });
  }

  try {
    const contenido = await crearContenido(datos, acceso.correo);
    return NextResponse.json({ contenido }, { status: 201 });
  } catch (error) {
    if (esNumeroRepetido(error)) {
      return NextResponse.json(
        { error: `Ya existe un ${datos.tipo === "boletin" ? "boletín" : "contenido de novedades"} con el número ${datos.numero}.` },
        { status: 409 }
      );
    }
    console.error(error);
    return NextResponse.json({ error: "Error al guardar el contenido" }, { status: 500 });
  }
}
