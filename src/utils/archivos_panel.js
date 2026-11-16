// Reglas para los archivos que se suben desde el panel de contenidos.
// Los archivos se guardan en la carpeta UPLOAD_DIR, fuera del repositorio.
// En producción los sirve nginx en /subidas/; en local, la ruta de
// desarrollo src/app/subidas/[nombre]/route.js.

const MB = 1024 * 1024;

// Tipos permitidos. "firma" revisa los primeros bytes del archivo: así se
// comprueba el tipo real, no solo la extensión o lo que diga el navegador.
export const TIPOS_PERMITIDOS = [
  {
    extension: "pdf",
    mime: "application/pdf",
    limite: 60 * MB, // el PDF más grande actual pesa 58 MB
    firma: (b) => b.length >= 5 && b.subarray(0, 5).toString("latin1") === "%PDF-",
  },
  {
    extension: "png",
    mime: "image/png",
    limite: 5 * MB,
    firma: (b) =>
      b.length >= 8 &&
      b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 &&
      b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a,
  },
  {
    extension: "jpg",
    mime: "image/jpeg",
    limite: 5 * MB,
    firma: (b) => b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    extension: "webp",
    mime: "image/webp",
    limite: 5 * MB,
    firma: (b) =>
      b.length >= 12 &&
      b.subarray(0, 4).toString("latin1") === "RIFF" &&
      b.subarray(8, 12).toString("latin1") === "WEBP",
  },
];

// El límite más grande de todos (se usa antes de saber el tipo)
export const LIMITE_MAXIMO = Math.max(...TIPOS_PERMITIDOS.map((t) => t.limite));

// Ruta pública de los archivos subidos
export const PREFIJO_URL = "/subidas";

// Los archivos se guardan con un nombre aleatorio (uuid) y la extensión del tipo real
export const NOMBRE_VALIDO =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(pdf|png|jpg|webp)$/;

// Devuelve el tipo que corresponde a los primeros bytes, o null si no está permitido
export function detectarTipo(inicio) {
  return TIPOS_PERMITIDOS.find((tipo) => tipo.firma(inicio)) || null;
}

// Busca el tipo por su extensión ("pdf", "jpg"...)
export function tipoPorExtension(extension) {
  return TIPOS_PERMITIDOS.find((tipo) => tipo.extension === extension) || null;
}

// Para mostrar tamaños al usuario: 5242880 -> "5 MB"
export function textoTamano(bytes) {
  return `${Math.round(bytes / MB)} MB`;
}
