// /api/panel/contenidos/[id]
// GET: devuelve un contenido para editarlo.
// PUT: guarda los cambios de un contenido (no cambia si es borrador o publicado).

import { NextResponse } from "next/server";
import { exigirAccesoPanel } from "../../../../../utils/acceso_panel";
import {
  obtenerContenidoPorId,
  actualizarContenido,
  validarContenido,
  esNumeroRepetido,
} from "../../../../../utils/contenidos_panel";

export const dynamic = "force-dynamic";

// El id de la URL debe ser un número entero positivo
function leerId(texto) {
  const id = Number(texto);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function GET(req, { params }) {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  // Desde Next 15, params es una promesa: hay que esperarla
  const { id: textoId } = await params;
  const id = leerId(textoId);
  if (!id) {
    return NextResponse.json({ error: "Id no válido" }, { status: 400 });
  }

  try {
    const contenido = await obtenerContenidoPorId(id);
    if (!contenido) {
      return NextResponse.json({ error: "Contenido no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ contenido });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al consultar el contenido" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  const { id: textoId } = await params;
  const id = leerId(textoId);
  if (!id) {
    return NextResponse.json({ error: "Id no válido" }, { status: 400 });
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
    const contenido = await actualizarContenido(id, datos);
    if (!contenido) {
      return NextResponse.json({ error: "Contenido no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ contenido });
  } catch (error) {
    if (esNumeroRepetido(error)) {
      return NextResponse.json(
        { error: `Ya existe otro contenido de ese tipo con el número ${datos.numero}.` },
        { status: 409 }
      );
    }
    console.error(error);
    return NextResponse.json({ error: "Error al guardar el contenido" }, { status: 500 });
  }
}
