# Datos de los geovisores RIOUC

Todos los recursos cartográficos generados o actualizados en `public/data/` utilizan el sistema de referencia WGS84 (`EPSG:4326` / `CRS84`) con orden `[longitud, latitud]`, precisión máxima de cinco decimales, codificación UTF-8 sin sangría y únicamente datos agregados o institucionales sin registros personales.

## Resumen de archivos cartográficos

| Archivo en `public/data/` | Tipo de geometría | Entidades | Tamaño (bytes) | Límite aplicable | Datos personales |
|---|---|---:|---:|---:|---|
| `parroquias_geojson.geojson` | `MultiPolygon` | 15 | 248 565 | ≤ 300 KB (≤ 1 MB general) | No |
| `cuadras_bellavista.geojson` | `Polygon` | 155 | 57 299 | ≤ 1 MB | No (solo agregados por cuadra) |
| `empresas_canar.geojson` | `Point` | 42 | 8 894 | ≤ 1 MB | No (solo nombre comercial y actividad) |

## Mapa de parroquias

El recurso publicado por el visor es `public/data/parroquias_geojson.geojson`. La referencia inicial de esta revisión es `3eaa23d`. El archivo de origen declara `CRS84` y usa longitud y latitud WGS84 en ese orden (`656 551` bytes en copia de trabajo Windows CRLF; `656 529` bytes en blob LF de Git).

Para preparar el archivo, mantener el orden de las entidades, polígonos y anillos. Redondear cada coordenada a cinco decimales. Sobre esa cuadrícula, eliminar los puntos consecutivos iguales y los vértices intermedios que estén exactamente sobre el segmento entre sus vecinos (`cross === 0 && dot >= 0`). Mantener el cierre de cada anillo y sus propiedades originales. Guardar el JSON en UTF-8 sin sangría y con salto de línea final LF.

| Comprobación | Origen | Resultado |
|---|---:|---:|
| Tamaño en bytes | 656 551 (CRLF) / 656 529 (LF) | 248 565 |
| Entidades | 15 | 15 |
| Vértices, incluido el cierre | 14 582 | 11 818 |

Se compararon los atributos de las entidades, la cantidad de polígonos y anillos y el cierre de cada contorno. Se rasterizaron ambas versiones con la misma extensión y un color por parroquia. Cambió el 0,026 % de los píxeles a 390 × 249 y el 0,024 % a 1440 × 920. Esta comparación mide los cambios de contorno en la extensión completa del archivo. La comprobación visual en el visor a sus niveles de zoom queda pendiente para la entrega del PR.

## Cuadras de Bellavista

El archivo `public/data/cuadras_bellavista.geojson` se extrajo del arreglo `const cuadras` definido en `src/app/proyectos/saludbucal/page.js` (referencia `3eaa23d`). El arreglo original declara 157 objetos: los primeros 155 corresponden a las cuadras numeradas (`Cuadra 1` a `Cuadra 155`) y los 2 elementos finales corresponden a polígonos institucionales etiquetados como `"UCACUE"`. Para respetar el inventario de 155 cuadras de Bellavista se conservaron exclusivamente las 155 entidades cuyo nombre coincide con `/^Cuadra \d+$/`, manteniendo su orden original.

Para generar el GeoJSON:

1. Invertir cada vértice del orden Leaflet `[lat, lon]` al estándar GeoJSON `[lon, lat]` en WGS84 (`EPSG:4326`) y redondear cada coordenada a cinco decimales (`Math.round(v * 1e5) / 1e5`).
2. Aplicar sobre la cuadrícula de cinco decimales la eliminación de puntos consecutivos idénticos y de vértices intermedios exactamente colineales (`cross === 0 && dot >= 0`).
3. Cerrar explícitamente el anillo exterior de cada polígono repitiendo el primer vértice al final y verificar que todos los anillos tengan al menos cuatro posiciones (`length >= 4`).
4. Publicar únicamente atributos agregados por cuadra (`id_cuadra`, `nombre`, `color`, `descripcion`): 124 cuadras contienen nivel económico (`color` de `1` a `5`) e ingreso promedio agregado, y 31 cuadras registran `color: null` con `["Datos inconclusos."]`.

| Comprobación | Origen (`page.js`) | Resultado (`cuadras_bellavista.geojson`) |
|---|---:|---:|
| Tamaño en bytes | — | 57 299 |
| Entidades (`Cuadra 1`..`Cuadra 155`) | 155 | 155 |
| Vértices | 815 (anillos abiertos) | 970 (anillos cerrados) |

## Empresas de Cañar

El archivo `public/data/empresas_canar.geojson` se extrajo de los 42 elementos `<Circle>` declarados en `src/app/proyectos/canar/page.js` (referencia `3eaa23d`). En el código fuente cada punto está escrito en `center={[lat, lon]}` con radio fijo de `300` metros y un `<Popup>` con el nombre de la organización/empresa y su actividad productiva.

Para generar el GeoJSON:

1. Extraer en orden de aparición (`1` a `42`) cada bloque `<Circle>` y normalizar espacios en el nombre y la actividad.
2. Convertir `center={[lat, lon]}` a geometría `Point` con `[lon, lat]` en WGS84 (`EPSG:4326`) redondeado a cinco decimales.
3. Conservar únicamente los atributos agregados e institucionales (`id_empresa`, `nombre`, `actividad`, `radio`), sin incluir registros ni datos personales.

| Comprobación | Origen (`page.js`) | Resultado (`empresas_canar.geojson`) |
|---|---:|---:|
| Tamaño en bytes | — | 8 894 |
| Entidades | 42 | 42 |

## Procedimiento reproducible de generación y comprobación

### Generación de `cuadras_bellavista.geojson` y `empresas_canar.geojson`

Ejecutar desde la raíz del repositorio (`riuc_data_viewer/`):

```bash
node -e '
const fs = require("fs");
const round5 = (v) => Math.round(v * 1e5) / 1e5;

function simplifyOpenRing(coordsLatLon) {
  let pts = coordsLatLon.map(([lat, lon]) => [round5(lon), round5(lat)]);
  let dedup = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const p = dedup[dedup.length - 1];
    if (pts[i][0] !== p[0] || pts[i][1] !== p[1]) dedup.push(pts[i]);
  }
  if (dedup.length > 1 && dedup[0][0] === dedup[dedup.length - 1][0] && dedup[0][1] === dedup[dedup.length - 1][1]) {
    dedup.pop();
  }
  if (dedup.length >= 3) {
    const out = [dedup[0]];
    for (let i = 1; i < dedup.length - 1; i++) {
      const a = out[out.length - 1], b = dedup[i], c = dedup[i + 1];
      const ax = Math.round(a[0] * 1e5), ay = Math.round(a[1] * 1e5);
      const bx = Math.round(b[0] * 1e5), by = Math.round(b[1] * 1e5);
      const cx = Math.round(c[0] * 1e5), cy = Math.round(c[1] * 1e5);
      if ((bx - ax) * (cy - ay) - (by - ay) * (cx - ax) === 0 && (bx - ax) * (cx - bx) + (by - ay) * (cy - by) >= 0) continue;
      out.push(b);
    }
    out.push(dedup[dedup.length - 1]);
    dedup = out;
  }
  const last = dedup[dedup.length - 1];
  if (last[0] !== dedup[0][0] || last[1] !== dedup[0][1]) dedup.push([dedup[0][0], dedup[0][1]]);
  return dedup;
}

const sb = fs.readFileSync("src/app/proyectos/saludbucal/page.js", "utf8");
const cuadrasBlock = sb.slice(sb.indexOf("const cuadras = ["), sb.indexOf("export default function"));
const cuadras = (new Function(cuadrasBlock + "; return cuadras;"))().filter((c) => /^Cuadra \d+$/.test(c.nombre));
fs.writeFileSync("public/data/cuadras_bellavista.geojson", JSON.stringify({
  type: "FeatureCollection",
  name: "cuadras_bellavista",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: cuadras.map((c, idx) => ({
    type: "Feature",
    properties: { id_cuadra: idx + 1, nombre: c.nombre, color: c.color ?? null, descripcion: c.descripcion },
    geometry: { type: "Polygon", coordinates: [simplifyOpenRing(c.coordenadas)] },
  })),
}) + "\n", "utf8");

const ca = fs.readFileSync("src/app/proyectos/canar/page.js", "utf8");
const blocks = ca.split("<Circle").slice(1).map((s) => "<Circle" + s.split("</Circle>")[0] + "</Circle>");
const clean = (s) => s.replace(/\{" "\}/g, " ").replace(/\s+/g, " ").trim();
fs.writeFileSync("public/data/empresas_canar.geojson", JSON.stringify({
  type: "FeatureCollection",
  name: "empresas_canar",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: blocks.map((b, idx) => {
    const cm = b.match(/center=\{\[\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\]\}/);
    const rm = b.match(/radius=\{(\d+)\}/);
    const h2m = b.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const pm = b.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    return {
      type: "Feature",
      properties: { id_empresa: idx + 1, nombre: clean(h2m[1]), actividad: clean(pm[1]), radio: Number(rm[1]) },
      geometry: { type: "Point", coordinates: [round5(Number(cm[2])), round5(Number(cm[1]))] },
    };
  }),
}) + "\n", "utf8");
'
```

### Comprobación de tamaños, recuentos, cierre y precisión

```bash
node -e '
const fs = require("fs");
for (const [file, expected] of [
  ["public/data/parroquias_geojson.geojson", 15],
  ["public/data/cuadras_bellavista.geojson", 155],
  ["public/data/empresas_canar.geojson", 42],
]) {
  const raw = fs.readFileSync(file, "utf8");
  const gj = JSON.parse(raw);
  let coords = 0, unclosed = 0, maxDec = 0;
  const checkCoord = ([lon, lat]) => {
    coords++;
    for (const v of [lon, lat]) {
      const s = String(v), i = s.indexOf(".");
      if (i !== -1) maxDec = Math.max(maxDec, s.length - i - 1);
    }
  };
  const checkRing = (r) => {
    if (r.length < 4 || r[0][0] !== r[r.length - 1][0] || r[0][1] !== r[r.length - 1][1]) unclosed++;
    r.forEach(checkCoord);
  };
  for (const f of gj.features) {
    if (f.geometry.type === "Point") checkCoord(f.geometry.coordinates);
    else if (f.geometry.type === "Polygon") f.geometry.coordinates.forEach(checkRing);
    else if (f.geometry.type === "MultiPolygon") f.geometry.coordinates.forEach((p) => p.forEach(checkRing));
  }
  console.log({ file, bytes: Buffer.byteLength(raw, "utf8"), features: gj.features.length, expectedOk: gj.features.length === expected, coords, unclosed, maxDec });
}
'
```
