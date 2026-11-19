# Carpeta de trabajo — sitio paginado Transportes Especiales Mejía

Esta es la carpeta activa. Se creó el 17 nov 2026 como copia limpia de la versión B (solo los archivos que el sitio usa: 9,5 MB frente a 35 MB de `paginada`).

## Versiones de referencia (no se editan)
| Carpeta | Versión | Rasgo principal |
|---|---|---|
| `../paginada-A-franja/` | A — franja (Obs. 4) | Fotos a todo el ancho, recortadas en franja panorámica; portada con corte diagonal. |
| `../paginada/` | B — fotos completas | Fotos enteras en su proporción original, enmarcadas junto al título; sin zoom ni velo. |

## Estado actual: versión VA (17 nov 2026)
`paginada-trabajo` = versión A como base visual + **encabezado unificado: texto grande a la izquierda, foto completa a la derecha, sin diagonal**.

1. **Mismo ordenamiento en las 11 páginas:** texto 45 % / foto 55 %, foto pegada al borde derecho, completa (proporción original), esquinas izquierdas redondeadas y sombra suave. Sin diagonal, sin velo, sin recorte.
2. **Texto del mismo alto que la foto:**
   - Páginas interiores: las migas de pan se alinean con el borde superior de la foto y el bloque de título con su borde inferior.
   - Portada: el bloque (razón social, título, párrafo, botones, sellos) se centra y mide aprox. lo mismo que la foto (1366 px: texto 445 / foto 501; 1920 px: 641 / 704).
3. **Tipografía (identidad: Manrope + naranja institucional):**
   - Antetítulo en mayúsculas espaciadas, naranja claro.
   - Título grande (Manrope 800): interiores de 2,6 a 6 rem según el ancho; portada de 2,2 a 4,1 rem.
   - Filete naranja de 84 × 5 px bajo el título.
   - Texto de apoyo de 1,2 a 1,9 rem, en verde muy claro sobre verde oscuro.
4. **Margen izquierdo del texto:** alineado con el ancho de la cabecera (no con el del contenido), para que la columna de texto tenga más espacio.
5. **Portada entre 900 y 1199 px:** se apila (foto completa arriba, texto debajo) porque su texto es más largo que la foto a ese ancho.
6. **Móvil (< 900 px):** foto completa arriba a todo el ancho, texto debajo.
7. **Resto del contenido:** igual que la versión A.

## Refactor: Galería eliminada (19 nov 2026)
1. Se elimina la página **Galería (P08)** y todas sus referencias: menú, pie de página, tarjeta de acceso del inicio (P01-S4, foto G23), muestra de galería del inicio (P01-S5), botones Anterior/Siguiente, `galeria.html`, `assets/js/galeria.js` y los estilos de galería/visor.
2. **Menú solo con páginas** (sin anclas a secciones): Inicio · Nosotros ▾ (Nosotros, Principios y valores, Sistemas de gestión, Sostenibilidad) · Servicios y flota · Políticas · Canal de denuncias · Contacto · Trabaja con nosotros · Blogs. «Nosotros» se marca cuando la página actual está en su grupo.
3. Accesos del inicio: 7 tarjetas; la última fila queda centrada.
4. `assets/galeria/` → `assets/fotos/` (solo quedan las 7 miniaturas que usan los accesos). Borrados: fotos grandes 15, 20, 21, 25, miniaturas 02, 15, 23, 25 y `banners/23.webp`.
5. Los códigos del mapa del sitio se mantienen estables: P08 queda retirado, P09–P12 conservan su número.

## Diferencias A → B (solo capa visual; el contenido es el mismo)
1. Portada: foto a sangre con corte diagonal → foto completa enmarcada a la derecha del texto.
2. Banners interiores: franja panorámica recortada → título a la izquierda + foto completa a la derecha (móvil: foto arriba).
3. Nosotros / Sistemas de gestión: foto recortada a 4:3 → proporción original.
4. Sostenibilidad: foto de fondo con texto encima → foto completa arriba, texto debajo.
5. Accesos del inicio: tarjeta «Principios y valores» con foto 18 (16:9, recortada) → foto 02 (3:2).
6. Zoom al pasar el cursor: sí → no.

## Historial de cambios
Ver `CAMBIOS-paginada.md` (rondas: paginación + galería, Observaciones No. 4, fotos completas).
