import db from "../../../utils/database";
import { NextRequest, NextResponse } from "next/server";

const MAX_PG_INT = 2147483647;

export async function GET(req: NextRequest) {
  try {
    const idProvinciaRaw = req.nextUrl.searchParams.get("id_provincia");
    const params: number[] = [];
    let whereClause = "";

    if (idProvinciaRaw !== null) {
      if (!/^\d+$/.test(idProvinciaRaw)) {
        return NextResponse.json(
          { error: "Parámetro id_provincia inválido" },
          { status: 400 }
        );
      }
      const idProvincia = Number(idProvinciaRaw);
      if (!Number.isSafeInteger(idProvincia) || idProvincia <= 0 || idProvincia > MAX_PG_INT) {
        return NextResponse.json(
          { error: "Parámetro id_provincia inválido" },
          { status: 400 }
        );
      }
      params.push(idProvincia);
      whereClause = "WHERE id_provincia = $1";
    }

    const sql = `SELECT id_provincia, provincia, poblacion_prov FROM poblacion ${whereClause} ORDER BY id_provincia`;
    const data = await db.any(sql, params);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // No exponer el detalle del error de la base al cliente
    console.error(error);
    return NextResponse.json(
      { error: "Error al consultar los datos" },
      { status: 500 }
    );
  }
}
