-- 001: contenidos del panel (boletines y novedades).
-- Compatible con PostgreSQL 14. Se aplica una sola vez, en orden (ver db/migraciones/README.md).

BEGIN;

CREATE TABLE contenidos (
  id                bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tipo              text NOT NULL CHECK (tipo IN ('boletin', 'novedad')),
  -- Número de la URL pública: /boletin/n1 -> numero 1, /Novedades/1 -> numero 1.
  numero            integer NOT NULL CHECK (numero > 0),
  titulo            text NOT NULL CHECK (btrim(titulo) <> ''),
  resumen           text,
  -- HTML del editor. Se sanea antes de mostrarlo en la web.
  cuerpo            text,
  imagen_url        text,
  -- PDF del boletín: en UPLOAD_DIR o, para los actuales, en public/.
  archivo_url       text,
  autor             text,
  -- Periodo del boletín en texto libre, por ejemplo 'mayo - agosto 2023'.
  periodo           text,
  estado            text NOT NULL DEFAULT 'borrador' CHECK (estado IN ('borrador', 'publicado')),
  fecha_publicacion date,
  -- Correo de quien lo creó desde el panel. Vacío en el contenido migrado.
  creado_por        text,
  creado_en         timestamptz NOT NULL DEFAULT now(),
  -- La aplicación lo actualiza en cada UPDATE.
  actualizado_en    timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT contenidos_tipo_numero_unico UNIQUE (tipo, numero),
  CONSTRAINT contenidos_publicado_con_fecha
    CHECK (estado <> 'publicado' OR fecha_publicacion IS NOT NULL)
);

-- Listados públicos: publicados de un tipo, del más reciente al más antiguo.
CREATE INDEX contenidos_listado_idx ON contenidos (tipo, estado, fecha_publicacion DESC);

COMMIT;
