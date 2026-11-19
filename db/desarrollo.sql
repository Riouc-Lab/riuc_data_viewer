-- Base local de desarrollo. Todos los datos son FICTICIOS.
-- Solo incluye las columnas que usa el código hoy; la base de producción puede tener más.
-- Se puede ejecutar varias veces: borra y vuelve a crear las tablas.
-- Ejecutar con psql (usa \ir para cargar db/migraciones/).

\set ON_ERROR_STOP on

DROP TABLE IF EXISTS canarencuesta;
DROP TABLE IF EXISTS poblacion;
DROP TABLE IF EXISTS parroquias;
DROP TABLE IF EXISTS contenidos;
DROP TABLE IF EXISTS usuarios_autorizados;

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

-- Panel de contenidos: mismas tablas y contenidos iniciales que en producción.
\ir migraciones/001_contenidos.sql
\ir migraciones/002_usuarios_autorizados.sql
\ir migraciones/003_contenidos_iniciales.sql

-- Un borrador de cada tipo, para probar que el borrador no sale en la web pública.
INSERT INTO contenidos (tipo, numero, titulo, resumen, cuerpo, imagen_url, archivo_url, autor, periodo, estado, fecha_publicacion) VALUES
  ('boletin', 8, 'Boletín de prueba 8 (borrador)', 'Resumen del boletín de prueba 8.', '<p>Contenido del boletín de prueba 8.</p>',
   NULL, NULL, NULL, 'mayo - agosto 2026', 'borrador', NULL),
  ('novedad', 8, 'Novedad de prueba 8 (borrador)', 'Resumen de la novedad de prueba 8.', '<p>Contenido de la novedad de prueba 8.</p>',
   NULL, NULL, 'Autor de prueba', NULL, 'borrador', NULL);

-- Correo ficticio (example.com está reservado para ejemplos y no pertenece a nadie).
-- Para entrar al panel agrega el tuyo en tu base (ver README), nunca en este archivo.
INSERT INTO usuarios_autorizados (correo) VALUES
  ('autorizado@example.com');
