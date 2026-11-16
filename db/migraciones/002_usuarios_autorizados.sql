-- 002: usuarios autorizados para entrar al panel de contenidos.
-- Compatible con PostgreSQL 14. Se aplica una sola vez, en orden (ver db/migraciones/README.md).
-- Además de estar aquí, el correo debe ser del dominio PANEL_DOMINIO.

BEGIN;

CREATE TABLE usuarios_autorizados (
  -- Siempre en minúsculas y sin espacios, para que la comparación sea exacta.
  correo    text PRIMARY KEY
            CHECK (correo = lower(btrim(correo)) AND correo LIKE '_%@_%'),
  -- Desactivar en lugar de borrar deja registro de quién tuvo acceso.
  activo    boolean NOT NULL DEFAULT true,
  creado_en timestamptz NOT NULL DEFAULT now()
);

COMMIT;
