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

`db/desarrollo.sql` crea las tablas con datos ficticios. Puedes volver a ejecutarlo para reiniciarlas. El último comando debe listar 5 tablas: `canarencuesta`, `contenidos`, `parroquias`, `poblacion` y `usuarios_autorizados`. Las dos del panel de contenidos se crean con las migraciones de `db/migraciones/` (ver su `README.md`).

Para entrar al panel de contenidos, agrega tu correo de Gmail a la lista de autorizados de **tu base local**, en minúsculas. Vuelve a hacerlo cada vez que ejecutes `db/desarrollo.sql`, porque reinicia la tabla:

```bash
psql -d "postgresql://riouc_dev:CAMBIA_ESTA_CLAVE@localhost:5432/riouc_dev" -c "INSERT INTO usuarios_autorizados (correo) VALUES ('tu.correo@gmail.com')"
```

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

`GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` pueden quedar vacíos para ejecutar el sitio, pero sin ellos falla el inicio de sesión. Si tu tarea necesita probarlo, crea tu propio cliente de desarrollo:

1. En [Google Cloud Console](https://console.cloud.google.com/), crea un proyecto con tu cuenta.
2. Configura la pantalla de consentimiento con público **Externo**, en modo de prueba, y agrega como usuarios de prueba las cuentas que vayas a usar.
3. Crea un cliente de tipo **Aplicación web**, con origen autorizado `http://localhost:3000` y URI de redirección `http://localhost:3000/api/auth/callback/google`.
4. Copia el ID y el secreto en `.env.local`.

Si trabajas en el panel de contenidos, pon `PANEL_DOMINIO=gmail.com` en `.env.local`. Sin esa variable nadie puede entrar al panel. Para comprobar tu acceso, inicia sesión y abre <http://localhost:3000/api/panel/sesion>: responde `{"autorizado":true}` solo si tu correo es de ese dominio y está en `usuarios_autorizados`.

### 4. Ejecutar

```bash
npm run dev
```

Abre <http://localhost:3000>. Para comprobar la conexión a la base (no revisa que existan las tablas):

```bash
node --env-file=.env.local src/app/testConnection.js
```

## Panel de contenidos

En `/panel` las cuentas autorizadas crean, editan, guardan como borrador y publican boletines y novedades, y suben sus PDF e imágenes.

Para usarlo en local:

1. En `.env.local`, pon `PANEL_DOMINIO=gmail.com` y en `UPLOAD_DIR` una carpeta **fuera del proyecto** (por ejemplo `C:\Users\tu_usuario\riouc-uploads`).
2. Configura tu cliente de Google (paso 3) y agrega tu Gmail a `usuarios_autorizados` (paso 2).
3. Ejecuta `npm run dev` y abre `http://localhost:3000/panel`.

| Parte | Dónde está |
|---|---|
| Pantallas | `src/app/panel/` y `src/components/panel/` |
| Rutas que escriben | `src/app/api/panel/` (todas revisan el acceso en el servidor) |
| Acceso | `src/utils/acceso_panel.js`, `correo_panel.js` y `auth.js` |
| Base de datos | `src/utils/contenidos_panel.js` |
| Reglas de archivos | `src/utils/archivos_panel.js` (PDF hasta 60 MB; JPG, PNG y WebP hasta 5 MB; se revisa el tipo real) |

Los archivos subidos se guardan en `UPLOAD_DIR` con un nombre aleatorio y se publican en `/subidas/<nombre>`. En local los muestra `src/app/subidas/[nombre]/route.js`, que **no funciona en producción**.

**Para el servidor (lo hace el responsable de RIOUC):**

- Agregar `PANEL_DOMINIO=ucacue.edu.ec` y `UPLOAD_DIR` al `.env.local` del servidor. La carpeta debe existir y el usuario que ejecuta PM2 debe poder escribir en ella.
- En nginx, servir la carpeta en `/subidas/` y permitir subidas de al menos 60 MB:

  ```nginx
  client_max_body_size 60M;

  location /subidas/ {
      alias /ruta/de/UPLOAD_DIR/;
      add_header X-Content-Type-Options nosniff;
  }
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
| `db/` | Base local de desarrollo y migraciones (`db/migraciones/`) |

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
4. Documenta el cambio en el registro de cambios, en este orden: título, descripción general y detalle técnico. Sin esa entrada, el PR no se aprueba.
5. Abre el PR hacia `develop`.

## Seguridad

Este repositorio es **público**: todo lo que se sube, incluido el historial, lo puede ver cualquiera.

- Nunca subas contraseñas, tokens ni claves. Van en `.env.local`, que Git ignora.
- Si necesitas una variable nueva, agrégala a `.env.example` sin su valor real.
- Trabaja siempre con tu base local, nunca con la de producción.
- Si subes un secreto por error, avisa de inmediato a tu tutor. Borrarlo con otro commit no basta: hay que cambiarlo.
