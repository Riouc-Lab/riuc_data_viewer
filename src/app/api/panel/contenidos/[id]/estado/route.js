// /api/panel/contenidos/[id]/estado
// PUT con { "estado": "publicado" } o { "estado": "borrador" }.
// Al publicar por primera vez se guarda la fecha de hoy.

import { NextResponse } from "next/server";
import { exigirAccesoPanel } from "../../../../../../utils/acceso_panel";
import { cambiarEstado, ESTADOS_CONTENIDO } from "../../../../../../utils/contenidos_panel";

export const dynamic = "force-dynamic";

export async function PUT(req, { params }) {
  // Acceso (Pasante 6): 401 sin sesión, 403 si el correo no está autorizado
  const acceso = await exigirAccesoPanel();
  if (!acceso.ok) {
    return NextResponse.json({ error: "No autorizado" }, { status: acceso.status });
  }

  const { id: textoId } = await params;
  const id = Number(textoId);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: "Id no válido" }, { status: 400 });
  }

  let entrada;
  try {
    entrada = await req.json();
  } catch {
    return NextResponse.json({ error: "Los datos enviados no son válidos" }, { status: 400 });
  }

  if (!ESTADOS_CONTENIDO.includes(entrada?.estado)) {
    return NextResponse.json({ error: "El estado debe ser borrador o publicado" }, { status: 400 });
  }

  try {
    const contenido = await cambiarEstado(id, entrada.estado);
    if (!contenido) {
      return NextResponse.json({ error: "Contenido no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ contenido });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al cambiar el estado" }, { status: 500 });
  }
}
