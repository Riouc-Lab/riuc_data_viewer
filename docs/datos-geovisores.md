# Datos de los geovisores RIOUC

## Mapa de parroquias

El recurso publicado por el visor es `public/data/parroquias_geojson.geojson`. La referencia inicial de esta revisión es `3eaa23d`. El archivo de origen declara CRS84 y usa longitud y latitud WGS84 en ese orden.

Para preparar el archivo, mantener el orden de las entidades, polígonos y anillos. Redondear cada coordenada a cinco decimales. Sobre esa cuadrícula, eliminar los puntos consecutivos iguales y los vértices intermedios que estén exactamente sobre el segmento entre sus vecinos. Mantener el cierre de cada anillo y sus propiedades originales. Guardar el JSON en UTF-8 sin sangría.

| Comprobación | Origen | Resultado |
|---|---:|---:|
| Tamaño en bytes | 656 551 | 248 565 |
| Entidades | 15 | 15 |
| Vértices, incluido el cierre | 14 582 | 11 818 |

Se compararon los atributos de las entidades, la cantidad de polígonos y anillos y el cierre de cada contorno. Se rasterizaron ambas versiones con la misma extensión y un color por parroquia. Cambió el 0,026 % de los píxeles a 390 × 249 y el 0,024 % a 1440 × 920. Esta comparación mide los cambios de contorno en la extensión completa del archivo. La comprobación en el visor a sus niveles de zoom queda pendiente.
