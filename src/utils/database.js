const pgp = require('pg-promise')();

// La cadena de conexión vive en .env.local (nunca en el repositorio).
// Ver .env.example para el formato.
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Falta la variable de entorno DATABASE_URL (ver .env.example)');
}

// Next carga este archivo una vez por cada parte de la aplicación (rutas,
// páginas...). Se guarda la conexión en globalThis para crear una sola y
// evitar el aviso "Creating a duplicate database object for the same connection".
if (!globalThis.conexionRiouc) {
  globalThis.conexionRiouc = pgp(connectionString);
}

const db = globalThis.conexionRiouc;

module.exports = db;
