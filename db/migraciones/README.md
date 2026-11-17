# Migraciones

Cada archivo cambia la estructura de la base una sola vez. Se aplican **en orden de número** y nunca se editan después de unirse a `develop`: para cambiar algo, se crea una migración nueva con el número siguiente.

| Archivo | Qué hace |
|---|---|
| `001_contenidos.sql` | Crea `contenidos`: boletines y novedades, en borrador o publicados |
| `002_usuarios_autorizados.sql` | Crea `usuarios_autorizados`: correos que pueden entrar al panel |
| `003_contenidos_iniciales.sql` | Inserta los 7 boletines y las 7 novedades existentes como publicados |

## Base local

No hace falta aplicarlas a mano: `db/desarrollo.sql` las incluye. Para reiniciar tu base:

```bash
psql -d "postgresql://riouc_dev:CAMBIA_ESTA_CLAVE@localhost:5432/riouc_dev" -f db/desarrollo.sql
```

## Otra base (producción)

Las aplica el responsable de RIOUC, una por una y en orden. Los pasantes no las ejecutan en el servidor.

```bash
psql -d "<cadena de conexión>" -v ON_ERROR_STOP=1 -f db/migraciones/001_contenidos.sql
psql -d "<cadena de conexión>" -v ON_ERROR_STOP=1 -f db/migraciones/002_usuarios_autorizados.sql
```

## Reglas

- Solo SQL compatible con PostgreSQL 14.
- Cada archivo va dentro de `BEGIN;` y `COMMIT;`: si algo falla, no queda a medias.
- Nunca incluyas correos reales, contraseñas ni datos personales.
