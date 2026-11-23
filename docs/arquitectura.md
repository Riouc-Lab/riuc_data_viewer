# Convención de Arquitectura - RIOUC Data Viewer

Este documento define las convenciones para los componentes, estructura y estilos que se creen o modifiquen en el proyecto.

## 1. Estructura y nomenclatura de componentes

- **Ubicación:** Todos los componentes reutilizables deben ubicarse dentro de `src/components/`, agrupados en subcarpetas según su tipo o función (por ejemplo: `common/`, `cards/`, `layout/`, `maps/`).
- **Nomenclatura:** Nombrar tanto los archivos como los componentes exportados en **PascalCase** (ejemplo: `SearchInput.jsx`, `PaginationBar.jsx`, `PaginatedList.jsx`).
- **Extensión única:** Utilizar únicamente la extensión **`.jsx`** para todos los archivos de componentes de interfaz, unificando las extensiones mixtas actuales.

## 2. Estilos

- Usar **Tailwind CSS** como framework de estilos por defecto para todos los componentes nuevos o migrados.
- Mantener los estilos mediante clases de utilidad directamente en el componente, evitando crear nuevos archivos `.css` o `.scss` salvo casos estrictamente necesarios.

## 3. Componentes comunes y comportamiento estándar

Los listados del portal (`/Novedades`, `/articulos`, `/proyectos`, `/boletin`, `/vdos` y `/laboratorios`) utilizarán componentes comunes configurables mediante props:

- **Buscador:** Al realizar una búsqueda, la paginación debe reiniciarse automáticamente a la **página 1**. Si no existen coincidencias, se debe mostrar un mensaje claro al usuario.
- **Paginación:** El cálculo del total de páginas debe realizarse siempre sobre los **resultados filtrados** actuales y no sobre la lista completa.
- **Rutas:** Se mantienen intactas todas las URLs públicas actuales del portal para no romper enlaces existentes.

## 4. Cuadrículas y layouts responsivos

Las listas y cuadrículas de tarjetas utilizarán una distribución responsiva estándar con clases de Tailwind (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`):

| Dispositivo | Columnas |
|---|---:|
| Móvil | 1 |
| Tablet | 2 |
| Escritorio | 3 |

- Utilizar `gap-8` como espaciado uniforme entre elementos.

## 5. Geovisores

Los geovisores del portal utilizarán una plantilla común basada en Leaflet y `react-leaflet`, evitando duplicar código de mapas, controles, paneles laterales o estados de carga en cada página.

### 5.1. Arquitectura de componentes

Todos los componentes de mapas se ubicarán en `src/components/maps/` respetando la nomenclatura en **PascalCase** y extensión **`.jsx`**:

- `GeoVisor.jsx`: Contenedor principal que recibe la ficha de configuración y orquesta el mapa, el panel de capas, la leyenda y la ficha metodológica.
- `MapaBase.jsx`: Mapa base de Leaflet con fondos seleccionables de uno en uno (`OpenStreetMap` por defecto y capas de Esri), control de zoom, escala y pantalla completa.
- `CapaPoligonos.jsx`: Renderizado de geometrías poligonales con estilos por rangos o categorías y ventanas emergentes (*popups*).
- `CapaPuntos.jsx`: Renderizado de marcadores puntuales con *popups* informativos.
- `CapaCalor.jsx`: Renderizado unificado de mapas de calor (`leaflet.heat`), cargado únicamente en los geovisores que lo requieran.
- `PanelCapas.jsx`: Panel lateral de control de capas y filtros, plegable en dispositivos móviles.
- `Leyenda.jsx`: Leyenda dinámica generada a partir de los colores y rangos definidos en la ficha.
- `EstadoCarga.jsx`: Avisos visuales para los estados de carga, sin datos o error de red con opción de reintento.

### 5.2. Ubicación de las fichas de configuración

- Cada geovisor se definirá mediante una ficha de configuración en **`src/utils/geovisores/<nombre>.js`**.
- Las fichas contienen únicamente datos estructurados (textos, coordenadas, rangos, colores, rutas de archivos o endpoints), sin código JSX ni lógica de renderizado.
- La página correspondiente en `src/app/proyectos/<nombre>/page.js` debe limitarse a importar su ficha y renderizar `<GeoVisor config={...} />` (menos de 30–50 líneas), conservando intactas las URLs públicas actuales.

### 5.3. Tipos de capa soportados

| Tipo (`tipo`) | Componente | Uso principal |
|---|---|---|
| `poligonos` | `CapaPoligonos.jsx` | Divisiones territoriales (provincias, cantones, parroquias o cuadras) coloreadas por rangos o categorías. |
| `puntos` | `CapaPuntos.jsx` | Ubicación georreferenciada de organizaciones, establecimientos o puntos de muestreo. |
| `calor` | `CapaCalor.jsx` | Densidad o intensidad espacial de variables continuas sobre un área. |

### 5.4. Formato y almacenamiento de datos

- **Ubicación:** Todos los archivos geográficos estáticos deben alojarse en `public/data/` y consumirse mediante rutas relativas (`/data/<archivo>.geojson`), nunca embebidos dentro de archivos `.js` o `.jsx`.
- **Formato y proyección:** Formato **GeoJSON** en sistema de coordenadas geográficas **WGS84 (`EPSG:4326`)**.
- **Precisión y peso:** Coordenadas redondeadas a **5 decimales** (precisión aproximada de ~1 m). Ningún archivo de mapa debe superar **1 MB** de tamaño.
- **Privacidad y fuentes:** Solo se publican datos agregados (nunca microdatos por persona). Las consultas a APIs internas (`/api/...`) deben devolver columnas explícitas en formato JSON.

### 5.5. Ejemplo completo de ficha de configuración

```js
// src/utils/geovisores/indicadorAzuay.js
export const indicadorAzuayConfig = {
  nombre: "indicador-azuay",
  titulo: "Indicador de ejemplo por cantón del Azuay",
  descripcion:
    "Muestra la distribución territorial de un indicador socioeconómico por cantón en la provincia del Azuay.",
  observatorio: "Observatorio de Fenómenos Socioeconómicos",
  vistaInicial: {
    centro: [-2.9, -79.0],
    zoom: 9,
    fondoPorDefecto: "OpenStreetMap",
  },
  capas: [
    {
      id: "cantones-indicador",
      nombre: "Indicador cantonal",
      tipo: "poligonos",
      visiblePorDefecto: true,
      geometria: "/data/cantones_azuay.geojson",
      fuenteDatos: {
        tipo: "geojson", // "geojson" | "api"
        url: "/data/cantones_azuay.geojson",
        campoUnion: "codigo_canton",
        campoValor: "valor",
      },
      clasificacion: {
        metodo: "cuantiles",
        rangos: [
          { min: 0, max: 20, etiqueta: "0 – 20 (Muy bajo)", color: "#fef0d9" },
          { min: 21, max: 40, etiqueta: "21 – 40 (Bajo)", color: "#fdcc8a" },
          { min: 41, max: 60, etiqueta: "41 – 60 (Medio)", color: "#fc8d59" },
          { min: 61, max: 80, etiqueta: "61 – 80 (Alto)", color: "#e34a33" },
          { min: 81, max: 100, etiqueta: "81 – 100 (Muy alto)", color: "#b30000" },
        ],
        sinDatos: { etiqueta: "Sin datos", color: "#9ca3af" },
      },
      popup: [
        { campo: "nombre_canton", etiqueta: "Cantón" },
        { campo: "valor", etiqueta: "Valor del indicador" },
      ],
    },
  ],
  filtros: [
    {
      id: "canton",
      etiqueta: "Cantón",
      campo: "nombre_canton",
    },
  ],
  descarga: {
    habilitada: true,
    formatos: ["csv", "geojson"],
    nombreArchivo: "indicador_cantonal_azuay",
    campos: ["codigo_canton", "nombre_canton", "valor"],
  },
  fichaMetodologica: {
    observatorio: "Observatorio de Fenómenos Socioeconómicos",
    objetivo: "Presentar el comportamiento espacial del indicador por cantón en Azuay.",
    fuente: "Encuesta institucional del Observatorio.",
    periodo: "2026",
    cobertura: "15 cantones de la provincia del Azuay.",
    unidad: "Índice porcentual (0 a 100).",
    clasificacion: "5 rangos por cuantiles.",
    limitaciones: "Datos agregados a nivel cantonal.",
    ultimaActualizacion: "Noviembre de 2026",
    comoCitar:
      "RIOUC (2026). Geovisor Indicador por cantón del Azuay. Universidad Católica de Cuenca.",
    contacto: "observatorios@ucacue.edu.ec",
  },
};
```
