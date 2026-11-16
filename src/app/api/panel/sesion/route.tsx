import { NextResponse } from "next/server";
import { exigirAccesoPanel } from "../../../../utils/acceso_panel";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const acceso = await exigirAccesoPanel();
    if (!acceso.ok) {
      return NextResponse.json({ autorizado: false }, { status: acceso.status });
    }
    return NextResponse.json({ autorizado: true, correo: acceso.correo });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al comprobar el acceso" }, { status: 500 });
  }
}
