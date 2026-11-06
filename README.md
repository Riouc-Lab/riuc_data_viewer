# RIOUC Data Viewer

Portal público de datos y estadísticas de la RIOUC (Universidad Católica de Cuenca), hecho con Next.js 13.
El sitio publicado en [riouc.ucacue.edu.ec](https://riouc.ucacue.edu.ec) se despliega por separado: los cambios en este repositorio no lo afectan.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- [PostgreSQL](https://www.postgresql.org/download/) 14 o superior, con `psql` disponible en la terminal. En Windows, si `psql` no se reconoce, agrega `C:\Program Files\PostgreSQL\<versión>\bin` al `PATH`
- [Git](https://git-scm.com/)

## Puesta en marcha

### 1. Clonar e instalar

```bash
git clone https://github.com/Riouc-Lab/riuc_data_viewer.git
cd riuc_data_viewer
git switch develop
npm ci
```

### 2. Crear la base local

Inventa una contraseña solo con letras y números, y úsala en lugar de `CAMBIA_ESTA_CLAVE`:

```bash
psql -U postgres -c "CREATE ROLE riouc_dev LOGIN PASSWORD 'CAMBIA_ESTA_CLAVE'"
psql -U postgres -c "CREATE DATABASE riouc_dev OWNER riouc_dev"
psql -d "postgresql://riouc_dev:CAMBIA_ESTA_CLAVE@localhost:5432/riouc_dev" -f db/desarrollo.sql
psql -d "postgresql://riouc_dev:CAMBIA_ESTA_CLAVE@localhost:5432/riouc_dev" -c "\dt"
```

`db/desarrollo.sql` crea las tablas con datos ficticios. Puedes volver a ejecutarlo para reiniciarlas. El último comando debe listar 3 tablas: `canarencuesta`, `parroquias` y `poblacion`.

### 3. Configurar las variables de entorno

Copia la plantilla:

```bash
cp .env.example .env.local        # Git Bash, macOS o Linux
copy .env.example .env.local      # PowerShell o CMD
```

En `.env.local`:

1. Pon tu contraseña en `DATABASE_URL`.
2. Genera un valor para `NEXTAUTH_SECRET` con este comando:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

`GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` pueden quedar vacíos para ejecutar el sitio, pero sin ellos falla el inicio de sesión. Si tu tarea necesita probarlo, pídeselos a tu tutor.

### 4. Ejecutar

```bash
npm run dev
```

Abre <http://localhost:3000>. Para comprobar la conexión a la base (no revisa que existan las tablas):

```bash
node --env-file=.env.local src/app/testConnection.js
```

## Comandos

| Comando | Para qué |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | Revisa el código con ESLint |
| `npm run build` | Compila para producción. Ejecútalo antes de abrir un PR |

## Estructura

| Carpeta | Contenido |
|---|---|
| `src/app/` | Páginas (cada carpeta es una ruta) |
| `src/app/api/` | Rutas de la API que leen PostgreSQL y login |
| `src/components/` | Componentes reutilizables |
| `src/utils/` | Conexión a la base y listas de contenido (noticias, proyectos) |
| `public/` | Imágenes, PDF y GeoJSON |
| `db/` | Base local de desarrollo |

Solo `/proyectos/canar` y `/proyectos/modelogeovisor` leen la base de datos. Los mapas también descargan datos de servicios externos, así que necesitan internet.

## Cómo trabajar

| Rama | Uso |
|---|---|
| `main` | Rama estable. No se trabaja directamente aquí |
| `develop` | Integración y pruebas. Tus PR van aquí |
| `feat/...`, `fix/...` | Una rama por tarea |

Se trabaja como miembro del equipo `pasantes-tics`, no con fork.

1. Actualiza `develop` y crea tu rama:

   ```bash
   git switch develop
   git pull
   git switch -c feat/nombre-de-la-tarea
   ```

2. Haz commits pequeños con mensajes claros, en español.
3. Antes de abrir el PR, verifica que pasen `npm run lint` y `npm run build`.
4. Abre el PR hacia `develop`.

## Seguridad

Este repositorio es **público**: todo lo que se sube, incluido el historial, lo puede ver cualquiera.

- Nunca subas contraseñas, tokens ni claves. Van en `.env.local`, que Git ignora.
- Si necesitas una variable nueva, agrégala a `.env.example` sin su valor real.
- Trabaja siempre con tu base local, nunca con la de producción.
- Si subes un secreto por error, avisa de inmediato a tu tutor. Borrarlo con otro commit no basta: hay que cambiarlo.
