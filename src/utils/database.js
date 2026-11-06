const pgp = require('pg-promise')();

// La cadena de conexión vive en .env.local (nunca en el repositorio).
// Ver .env.example para el formato.
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Falta la variable de entorno DATABASE_URL (ver .env.example)');
}

const db = pgp(connectionString);

module.exports = db;
