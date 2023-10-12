const express = require('express');
const app = express();
const port = 3000; // El puerto en el que se ejecutará el servidor.

// Habilita el análisis de datos JSON en las solicitudes POST.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establece las cabeceras para evitar problemas de CORS (puedes ajustarlas según tus necesidades).
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


const db = require('./database'); // Importa la instancia de la base de datos.

app.get('/poblacion/:provincia', async (req, res) => {
  const provincia = req.params.provincia;
  try {
    const data = await db.oneOrNone('SELECT poblacion FROM poblacion WHERE provincia = $1', [provincia]);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: 'Provincia no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de población.' });
  }
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
  });
  