// Consultas públicas para boletines y novedades desde la tabla "contenidos".
// Solo devuelve registros con estado = 'publicado'.

import db from "./database";

const COLUMNAS_PUBLICAS = `
  id, tipo, numero, titulo, resumen, cuerpo, imagen_url, archivo_url,
  autor, periodo, to_char(fecha_publicacion, 'YYYY-MM-DD') AS fecha_publicacion
`;

export async function listarPublicadosPorTipo(tipo) {
  return db.any(
    `SELECT ${COLUMNAS_PUBLICAS}
     FROM contenidos
     WHERE tipo = $1 AND estado = 'publicado'
     ORDER BY fecha_publicacion DESC NULLS LAST, numero DESC`,
    [tipo]
  );
}

export async function obtenerPublicado(tipo, numero) {
  return db.oneOrNone(
    `SELECT ${COLUMNAS_PUBLICAS}
     FROM contenidos
     WHERE tipo = $1 AND numero = $2 AND estado = 'publicado'`,
    [tipo, numero]
  );
}
