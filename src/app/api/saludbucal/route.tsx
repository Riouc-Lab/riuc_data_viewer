import db from '../../../utils/database'


import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string
}

export async function GET(req: NextRequest) {
  try {
    const data = await db.query("SELECT * FROM parroquias");
    return NextResponse.json({ data: data }, { status: 200 })
  } catch (error) {
    // No exponer el detalle del error de la base al cliente
    console.error(error);
    return NextResponse.json({ error: "Error al consultar los datos" }, { status: 500 });
  }
}