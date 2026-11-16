// Funciones del panel de contenidos para leer y guardar boletines y novedades.
// Usan la tabla "contenidos" (db/migraciones/001_contenidos.sql).
// Solo se deben llamar desde el servidor (rutas de src/app/api/panel/).
// Todas las consultas son parametrizadas ($1, $2...) para evitar inyección SQL.

import db from "./database";

export const TIPOS_CONTENIDO = ["boletin", "novedad"];
export const ESTADOS_CONTENIDO = ["borrador", "publicado"];

// Columnas que se devuelven al panel
// La fecha se devuelve como texto AAAA-MM-DD para que no cambie de día por la zona horaria
const COLUMNAS = `id, tipo, numero, titulo, resumen, cuerpo, imagen_url, archivo_url,
  autor, periodo, estado, to_char(fecha_publicacion, 'YYYY-MM-DD') AS fecha_publicacion,
  creado_por, creado_en, actualizado_en`;

// Limpia el texto: quita espacios y convierte "" en null
function limpiarTexto(valor) {
  if (valor === undefined || valor === null) return null;
  const texto = String(valor).trim();
  return texto === "" ? null : texto;
}

// Revisa los datos que llegan del formulario.
// Devuelve { datos, errores }: si errores tiene algo, no se guarda.
export function validarContenido(entrada) {
  const errores = [];
  const datos = {
    tipo: limpiarTexto(entrada.tipo),
    numero: Number(entrada.numero),
    titulo: limpiarTexto(entrada.titulo),
    resumen: limpiarTexto(entrada.resumen),
    cuerpo: limpiarTexto(entrada.cuerpo),
    imagen_url: limpiarTexto(entrada.imagen_url),
    archivo_url: limpiarTexto(entrada.archivo_url),
    autor: limpiarTexto(entrada.autor),
    periodo: limpiarTexto(entrada.periodo),
  };

  if (!TIPOS_CONTENIDO.includes(datos.tipo)) {
    errores.push("El tipo debe ser boletín o novedad.");
  }
  if (!Number.isInteger(datos.numero) || datos.numero <= 0) {
    errores.push("El número debe ser un entero mayor que cero.");
  }
  if (!datos.titulo) {
    errores.push("El título es obligatorio.");
  } else if (datos.titulo.length > 200) {
    errores.push("El título no puede pasar de 200 caracteres.");
  }
  if (datos.resumen && datos.resumen.length > 500) {
    errores.push("El resumen no puede pasar de 500 caracteres.");
  }
  if (datos.cuerpo && datos.cuerpo.length > 200000) {
    errores.push("El contenido es demasiado largo.");
  }

  // Las URL de archivos solo pueden apuntar al propio sitio, no a otras páginas
  for (const campo of ["imagen_url", "archivo_url"]) {
    const url = datos[campo];
    if (url && (!url.startsWith("/") || url.startsWith("//"))) {
      errores.push(`La dirección ${campo === "imagen_url" ? "de la imagen" : "del archivo"} no es válida.`);
    }
  }

  return { datos, errores };
}

// Todos los contenidos, borradores incluidos, para la lista del panel
export async function listarContenidosPanel() {
  return db.any(
    `SELECT ${COLUMNAS} FROM contenidos ORDER BY tipo, numero DESC`
  );
}

// Un contenido por su id, o null si no existe
export async function obtenerContenidoPorId(id) {
  return db.oneOrNone(`SELECT ${COLUMNAS} FROM contenidos WHERE id = $1`, [id]);
}

// Siguiente número libre de un tipo (para sugerirlo al crear uno nuevo)
export async function siguienteNumero(tipo) {
  const fila = await db.one(
    "SELECT COALESCE(MAX(numero), 0) + 1 AS numero FROM contenidos WHERE tipo = $1",
    [tipo]
  );
  return fila.numero;
}

// Crea un contenido nuevo. Siempre empieza como borrador.
export async function crearContenido(datos, correoAutor) {
  return db.one(
    `INSERT INTO contenidos
       (tipo, numero, titulo, resumen, cuerpo, imagen_url, archivo_url, autor, periodo, estado, creado_por)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'borrador', $10)
     RETURNING ${COLUMNAS}`,
    [
      datos.tipo, datos.numero, datos.titulo, datos.resumen, datos.cuerpo,
      datos.imagen_url, datos.archivo_url, datos.autor, datos.periodo, correoAutor,
    ]
  );
}

// Edita un contenido. No cambia su estado: para eso está cambiarEstado.
// actualizado_en se pone aquí porque la base no lo hace sola.
export async function actualizarContenido(id, datos) {
  return db.oneOrNone(
    `UPDATE contenidos SET
       tipo = $2, numero = $3, titulo = $4, resumen = $5, cuerpo = $6,
       imagen_url = $7, archivo_url = $8, autor = $9, periodo = $10,
       actualizado_en = now()
     WHERE id = $1
     RETURNING ${COLUMNAS}`,
    [
      id, datos.tipo, datos.numero, datos.titulo, datos.resumen, datos.cuerpo,
      datos.imagen_url, datos.archivo_url, datos.autor, datos.periodo,
    ]
  );
}

// Publica un contenido o lo regresa a borrador.
// Al publicar por primera vez se pone la fecha de hoy; si ya tenía fecha, se conserva.
export async function cambiarEstado(id, estado) {
  if (!ESTADOS_CONTENIDO.includes(estado)) {
    throw new Error("Estado no válido");
  }
  return db.oneOrNone(
    `UPDATE contenidos SET
       estado = $2,
       fecha_publicacion = CASE WHEN $2 = 'publicado'
                                THEN COALESCE(fecha_publicacion, CURRENT_DATE)
                                ELSE fecha_publicacion END,
       actualizado_en = now()
     WHERE id = $1
     RETURNING ${COLUMNAS}`,
    [id, estado]
  );
}

// Dice si un error de la base es por número repetido (restricción UNIQUE)
export function esNumeroRepetido(error) {
  return error && error.code === "23505" && error.constraint === "contenidos_tipo_numero_unico";
}
