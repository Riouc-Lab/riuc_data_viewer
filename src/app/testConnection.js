const db = require('../utils/database');

async function testConnection() {
    try {
      const result = await db.query('SELECT NOW() as current_time');
      console.log('Conexión exitosa. Hora actual del servidor de base de datos:', result[0].current_time);
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error.message);
    } finally {
      db.$pool.end();
    }
  }

  testConnection();
  