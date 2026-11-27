-- Base local de desarrollo. Todos los datos son FICTICIOS.
-- Replica la estructura de producción (PostgreSQL 14) para poblacion y canarencuesta sin registros personales.
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
  id_empresa integer PRIMARY KEY,
  nombre     varchar(100),
  canton     varchar(100),
  parroquia  varchar(100)
);

INSERT INTO canarencuesta (id_empresa, nombre, canton, parroquia) VALUES
  (1, 'Empresa de prueba 1', 'Azogues', 'Javier Loyola'),
  (2, 'Empresa de prueba 2', 'Azogues', 'Cojitambo'),
  (3, 'Empresa de prueba 3', 'Biblián', 'Nazón'),
  (4, 'Empresa de prueba 4', 'Cañar', 'Ingapirca'),
  (5, 'Empresa de prueba 5', 'La Troncal', 'Manuel J. Calle');

-- Página /proyectos/modelogeovisor (GET /api/poblacion)
-- id_provincia se compara con properties.id_prov del GeoJSON (1 a 25): debe ser integer.
CREATE TABLE poblacion (
  id_provincia   integer PRIMARY KEY,
  provincia      varchar(50),
  poblacion_prov integer
);

INSERT INTO poblacion (id_provincia, provincia, poblacion_prov) VALUES
  (1, 'AZUAY', 125000),
  (2, 'BOLIVAR', 150000),
  (3, 'CAÑAR', 175000),
  (4, 'CARCHI', 200000),
  (5, 'COTOPAXI', 225000),
  (6, 'CHIMBORAZO', 250000),
  (7, 'EL ORO', 275000),
  (8, 'ESMERALDAS', 300000),
  (9, 'GUAYAS', 325000),
  (10, 'IMBABURA', 350000),
  (11, 'LOJA', 375000),
  (12, 'LOS RIOS', 400000),
  (13, 'MANABI', 425000),
  (14, 'MORONA SANTIAGO', 450000),
  (15, 'NAPO', 475000),
  (16, 'PASTAZA', 500000),
  (17, 'PICHINCHA', 525000),
  (18, 'TUNGURAHUA', 550000),
  (19, 'ZAMORA CHINCHIPE', 575000),
  (20, 'GALAPAGOS', 600000),
  (21, 'SUCUMBIOS', 625000),
  (22, 'ORELLANA', 650000),
  (23, 'SANTO DOMINGO DE LOS TSACHILAS', 675000),
  (24, 'SANTA ELENA', 700000),
  (25, 'ZONA NO DELIMITADA', 725000);

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
