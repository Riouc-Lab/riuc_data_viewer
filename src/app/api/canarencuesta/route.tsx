import db from "../../../utils/database";
import { NextRequest, NextResponse } from "next/server";

const MAX_PG_INT = 2147483647;

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const idEmpresaRaw = searchParams.get("id_empresa");
    const cantonRaw = searchParams.get("canton");
    const parroquiaRaw = searchParams.get("parroquia");

    const conditions: string[] = [];
    const params: Array<number | string> = [];

    if (idEmpresaRaw !== null) {
      if (!/^\d+$/.test(idEmpresaRaw)) {
        return NextResponse.json(
          { error: "Parámetro id_empresa inválido" },
          { status: 400 }
        );
      }
      const idEmpresa = Number(idEmpresaRaw);
      if (!Number.isSafeInteger(idEmpresa) || idEmpresa <= 0 || idEmpresa > MAX_PG_INT) {
        return NextResponse.json(
          { error: "Parámetro id_empresa inválido" },
          { status: 400 }
        );
      }
      params.push(idEmpresa);
      conditions.push(`id_empresa = $${params.length}`);
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

    if (parroquiaRaw !== null) {
      const parroquia = parroquiaRaw.trim();
      if (parroquia.length === 0 || parroquia.length > 100) {
        return NextResponse.json(
          { error: "Parámetro parroquia inválido" },
          { status: 400 }
        );
      }
      params.push(parroquia);
      conditions.push(`LOWER(parroquia) = LOWER($${params.length})`);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
    const sql = `SELECT id_empresa, nombre, canton, parroquia FROM canarencuesta ${whereClause} ORDER BY id_empresa`;
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
