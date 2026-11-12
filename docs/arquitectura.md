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
