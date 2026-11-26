import db from "../../../utils/database";
import { NextRequest, NextResponse } from "next/server";

const MAX_PG_INT = 2147483647;

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const idRaw = searchParams.get("id");
    const cantonRaw = searchParams.get("canton");
    const provinciaRaw = searchParams.get("provincia");

    const conditions: string[] = [];
    const params: Array<number | string> = [];

    if (idRaw !== null) {
      if (!/^\d+$/.test(idRaw)) {
        return NextResponse.json(
          { error: "Parámetro id inválido" },
          { status: 400 }
        );
      }
      const id = Number(idRaw);
      if (!Number.isSafeInteger(id) || id <= 0 || id > MAX_PG_INT) {
        return NextResponse.json(
          { error: "Parámetro id inválido" },
          { status: 400 }
        );
      }
      params.push(id);
      conditions.push(`id = $${params.length}`);
    }

    if (cantonRaw !== null) {
      const canton = cantonRaw.trim();
      if (canton.length === 0 || canton.length > 100) {
        return NextResponse.json(
          { error: "Parámetro canton inválido" },
          { status: 400 }
        );
      }
      params.push(canton);
      conditions.push(`LOWER(canton) = LOWER($${params.length})`);
    }

    if (provinciaRaw !== null) {
      const provincia = provinciaRaw.trim();
      if (provincia.length === 0 || provincia.length > 100) {
        return NextResponse.json(
          { error: "Parámetro provincia inválido" },
          { status: 400 }
        );
      }
      params.push(provincia);
      conditions.push(`LOWER(provincia) = LOWER($${params.length})`);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
    const sql = `SELECT id, nombre, canton, provincia FROM parroquias ${whereClause} ORDER BY id`;
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
