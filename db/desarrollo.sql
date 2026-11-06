-- Base local de desarrollo. Todos los datos son FICTICIOS.
-- Solo incluye las columnas que usa el código hoy; la base de producción puede tener más.
-- Se puede ejecutar varias veces: borra y vuelve a crear las tablas.

DROP TABLE IF EXISTS canarencuesta;
DROP TABLE IF EXISTS poblacion;
DROP TABLE IF EXISTS parroquias;

-- Página /proyectos/canar (GET /api/canarencuesta)
CREATE TABLE canarencuesta (
  id        serial PRIMARY KEY,
  nombre    text NOT NULL,
  canton    text NOT NULL,
  parroquia text NOT NULL
);

INSERT INTO canarencuesta (nombre, canton, parroquia) VALUES
  ('Persona de prueba 1', 'Azogues', 'Javier Loyola'),
  ('Persona de prueba 2', 'Azogues', 'Cojitambo'),
  ('Persona de prueba 3', 'Biblián', 'Nazón'),
  ('Persona de prueba 4', 'Cañar', 'Ingapirca'),
  ('Persona de prueba 5', 'La Troncal', 'Manuel J. Calle');

-- Página /proyectos/modelogeovisor (GET /api/poblacion)
-- id_provincia se compara con properties.id_prov del GeoJSON (1 a 25): debe ser integer.
CREATE TABLE poblacion (
  id_provincia   integer PRIMARY KEY,
  poblacion_prov integer NOT NULL
);

INSERT INTO poblacion (id_provincia, poblacion_prov)
SELECT n, 100000 + n * 25000
FROM generate_series(1, 25) AS n;

-- GET /api/saludbucal (ninguna página la consume todavía)
CREATE TABLE parroquias (
  id        serial PRIMARY KEY,
  nombre    text NOT NULL,
  canton    text NOT NULL,
  provincia text NOT NULL
);

INSERT INTO parroquias (nombre, canton, provincia) VALUES
  ('Parroquia de prueba 1', 'Cantón de prueba 1', 'Provincia de prueba 1'),
  ('Parroquia de prueba 2', 'Cantón de prueba 1', 'Provincia de prueba 1'),
  ('Parroquia de prueba 3', 'Cantón de prueba 2', 'Provincia de prueba 2');
