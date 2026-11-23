# Versión paginada — Transportes Especiales Mejía

Base: `Paginated/original/index.html` (landing propuestaV2 + Observaciones No. 3). Se conservan colores, tipografías, textos aprobados y comportamientos (formulario, horario en vivo, WhatsApp, contadores). Cambia la estructura: de una sola página a **12 páginas por sección**, más la nueva **Galería**.

## Páginas
| Archivo | Contenido |
|---|---|
| index.html | Héroe, indicadores, servicios, accesos a cada sección (con foto) y muestra de galería |
| nosotros.html | Nosotros, misión y visión, valor diferencial |
| principios-valores.html | Principios y valores corporativos |
| sistemas-de-gestion.html | Sistemas de gestión |
| sostenibilidad.html | Sostenibilidad y responsabilidad ambiental |
| servicios.html | Servicios y nuestra flota |
| politicas.html | Políticas corporativas (política integrada desplegable) |
| **galeria.html** | **40 fotografías: filtros, visor ampliado** |
| canal-de-denuncias.html | Canal de denuncias |
| contacto.html | Servicio al cliente/PQRS y horarios en vivo |
| trabaja-con-nosotros.html | Formulario de postulación (simulado) |
| blogs.html | Blogs (contenido pendiente del cliente) |

## Navegación
- Menú de escritorio con desplegables (Nosotros, Servicios, Políticas); enlaces apuntan a página + ancla. Se añade **Galería**. La página actual se marca (aria-current).
- Menú móvil plano, con subpáginas de Nosotros.
- Cada página interior: banner con foto de la galería, migas de pan y botones **Anterior / Siguiente** en orden del menú.
- Transición suave entre páginas (View Transitions) donde el navegador la soporta; en los demás, navegación normal.
- Cambios de id: `proposito` → `mision-vision`, `confianza` → `valor-diferencial`.

## Galería
- 40 fotos optimizadas (≈29 MB en total, de ≈1 GB originales): versión grande 2200 px y miniatura 800 px en WebP, perfil sRGB, sin metadatos/GPS.
- Categorías: Flota (22), Conductores (8), Interiores (5), Instalaciones (5). Filtros con enlace directo: `galeria.html#conductores`.
- Carga diferida con color de fondo previo; texto alternativo por foto.
- Visor: teclado (←, →, Esc), deslizar en móvil, contador, clic fuera para cerrar, foco devuelto a la miniatura.

## Estructura de carpetas
`assets/css/styles.css`, `assets/js/main.js` (+ `galeria.js` solo en la galería), `assets/img/` (logos, flota, valores, gestión, contacto), `assets/galeria/` (+`min/`, `manifest.json`), `assets/banners/`.
Las fotos originales (`original/img/Galery`) NO forman parte de la carpeta publicable.

## Por validar con el cliente
1. **Imagen de personas:** 8 fotos muestran conductores identificables; confirmar autorización de uso de imagen antes de publicar.
2. **Estación de servicio:** las fotos 36–37 muestran la estación; la Obs. 18 pidió eliminar «Estación de servicio propia» del texto. Confirmar si estas fotos se mantienen.
3. Vehículo 1040: en los textos de las fotos aparece como «Vehículo 1040», sin nombrarlo Micro/Buseta, hasta confirmar la denominación.
4. Agrupación de páginas y la inclusión de Galería en el menú son propuesta; ajustable.

---

# Observaciones No. 4 (3 nov 2026) — «página viva pero limpia»

Criterio aplicado: fotos nítidas, sin velos ni degradados encima del texto; la animación (aparición al desplazar, contadores, aura de WhatsApp) se conserva.

| # | Observación | Qué se hizo |
|---|---|---|
| 1 | No poner difuminadas las fotos | Se eliminan los degradados oscuros sobre las fotos (banners, héroe y accesos del inicio). Banner: foto limpia arriba y título sobre franja verde sólida debajo. |
| 2 | No poner esa foto en la portada | Se retira `hero-bus1000.jpg` (fondo de la estación). |
| 3 | Colocar la foto indicada | Portada con el bus 1030 (foto 15 de la galería), a la derecha y sin velo; el texto va sobre verde sólido a la izquierda. En móvil la foto va arriba y el texto debajo. |
| 4 | Cambiar la foto oscura de Contacto (pared) | Contacto usa ahora la foto 20 (flota y conductores sobre césped). Se retiran de banners las fotos de la estación y de la sede (37, 38, 40). Políticas pasa a la foto 09 y Canal de denuncias a la 12. |
| 5 | Unificar el tamaño de las fotos | Galería en cuadrícula 2×2, todas en proporción 3:2. Accesos del inicio, también 3:2. |
| 6 | Galería: sin secciones, solo 4 fotos | Se quitan filtros y categorías. Quedan las 4 fotos del documento: 15 (bus 1030), 25 (buseta 19), 21 (buses alineados), 20 (buses con conductores). Se mantiene el visor ampliado. |
| 7 | Buseta 19 pax / Bus de 40 pax / Bus 38 pax | Flota: 19 pax → foto 25; 40 pax → foto 21; la tarjeta de 30 pax pasa a **38 pasajeros** con la foto 20. Fotos nuevas en `assets/img/flota-*.webp`. |
| 8 | Letra más grande (servicios) | Tarjetas de servicios: título 1,14 → 1,4 rem; texto 0,98 → 1,12 rem. |
| 9 | Contacto: «Escríbanos o llámenos estamos para atenderle» sin dos puntos | Queda «Escríbanos o llámenos, estamos para atenderle.» (coma en lugar de dos puntos). |
| 10 | Sin dos puntos en «Priorizamos el bienestar humano…» | Queda «…como motor de la seguridad, disponemos de orientación psicológica…». |

## Decisiones tomadas que conviene confirmar
1. En 9 y 10 el cliente escribió la frase sin signo; se usó coma. Si prefiere punto o sin puntuación, es un cambio de una línea.
2. «Buseta 19 pax»: se mantiene el nombre **Micro** acordado en la Obs. 16 de la ronda anterior; confirmar si el cliente quiere «Buseta».
3. «Bus 38 pax» cambia la capacidad de 30 a 38 en la tarjeta; el indicador «3 capacidades de vehículo» no cambia.
4. La foto 20 (conductores identificables) se usa en flota, galería y Contacto; sigue pendiente la confirmación de uso de imagen.

## Archivos que ya no se usan (pueden borrarse de `paginada/assets/`)
- `galeria/` salvo `15, 20, 21, 25` (y sus `min/`); los accesos del inicio y los banners usan además `min/` de 09, 18, 19, 22, 23, 24 — conservar esas miniaturas.
- `banners/37.webp, 38.webp, 40.webp`; `img/hero-bus1000.jpg`, `img/flota-30pax.jpg`, `img/flota-40pax.jpg`, `img/flota-buseta.jpg`.

---

# Ajuste: fotos completas (17 nov 2026)

Criterio: las fotos de la flota son la carta de presentación. Ninguna foto se recorta, se difumina ni queda incompleta.

1. **Portada:** texto a la izquierda sobre verde sólido; foto del bus 1030 **completa** (3:2) a la derecha, enmarcada con esquinas redondeadas. En móvil, la foto completa va arriba y el texto debajo.
2. **Banners de páginas interiores:** mismo esquema. Título a la izquierda, foto **completa** a la derecha (en móvil, foto arriba). Los banners se regeneraron desde la foto entera (1200 px, sin recorte); se descartan los recortes panorámicos anteriores.
3. **Sin zoom al pasar el cursor** sobre fotos (el zoom recortaba los bordes).
4. **Nosotros y Sistemas de gestión:** la foto lateral se muestra en su proporción original (antes se recortaba a 4:3).
5. **Sostenibilidad:** tarjetas con la foto completa arriba y el texto debajo, sin velo oscuro (antes la foto era fondo recortado bajo el texto).
6. **Accesos del inicio:** «Principios y valores» usa la foto 02 (3:2), porque la 18 es panorámica (16:9) y no encaja sin recorte; todas las tarjetas quedan del mismo tamaño.
7. Verificación automática en las 12 páginas (escritorio 1366 px y móvil 390 px): 0 imágenes recortadas.

Archivos sin uso adicionales: ninguno nuevo; los banners anteriores se sobrescribieron con los mismos nombres.

---

# Refactor: se elimina la Galería (19 nov 2026)

1. Página `galeria.html` (P08) eliminada, con su script `assets/js/galeria.js` y los estilos de galería, filtros y visor.
2. Referencias retiradas: menú de escritorio y móvil, pie de página, Anterior/Siguiente, tarjeta «Galería» del inicio (P01-S4, G23) y sección «muestra de galería» del inicio (P01-S5).
3. Menú: solo páginas, sin secciones. Nosotros agrupa 4 páginas en un desplegable; el resto son enlaces directos.
4. Inicio: 7 accesos, última fila centrada.
5. Carpeta `assets/galeria/` renombrada a `assets/fotos/`; archivos sin uso borrados (fotos 15, 20, 21, 25; miniaturas 02, 15, 23, 25; `banners/23.webp`).
6. Verificación: 11 páginas, 0 enlaces rotos, 0 menciones de «galería», sin desbordes a 1280, 1366, 1440, 1024 y 390 px.

---

# Refinamiento: encabezados interiores alineados arriba (22 nov 2026)

1. En las 10 páginas interiores, el antetítulo, el título y la frase suben y quedan justo debajo de las migas, alineados con el borde superior de la foto (antes quedaban abajo, alineados con el borde inferior).
2. La portada no cambia: su texto sigue centrado respecto a la foto.
3. Móvil y tableta sin cambios (foto arriba, texto debajo).

# Cambio de foto: P04-S2-F1 → G36 (22 nov 2026)

1. Sistemas de gestión, sección S2: la foto del bus 1010 (A05, `img/bus-1010.jpg`, recortada 29 %) se reemplaza por **G36** (bus de la empresa en su estación de servicio), en `assets/fotos/36.webp` (1400 × 934).
2. La foto se muestra **completa** en su proporción original (3:2), sin recorte ni zoom al pasar el cursor.
3. `img/bus-1010.jpg` queda sin uso en el sitio (se conserva en la carpeta).

# Valor diferencial pasa a Servicios y flota (22 nov 2026)

1. La sección «Nuestro valor diferencial» (antes P02-S4, en Nosotros) se mueve al final de Servicios y flota: ahora es **P06-S4**, después de la flota. Conserva título, texto y los 4 pilares (Seguridad, Tecnología, Confort, Calidad).
2. Debajo de los pilares se agregan 3 fotos completas (3:2, sin recorte): **P06-S4-F1 = G31** (asientos e iluminación interior), **P06-S4-F2 = G35** (interior con filas de asientos), **P06-S4-F3 = G37** (vehículo 1040 en la estación de servicio). En móvil se apilan una debajo de otra.
3. Nosotros queda con S1–S3; el código P02-S4 se retira.
4. Tarjeta «Nosotros» del inicio: el texto pasa a «Nuestra historia, misión y visión.»
5. Archivos nuevos: `assets/fotos/31.webp`, `35.webp`, `37.webp` (1400 × 934).

# Encabezado de Servicios y flota: P06-S1-F1 → G27 (22 nov 2026)

1. El encabezado de Servicios y flota usa ahora **G27** (detalle de la rotulación Especiales Mejía en el lateral del vehículo 1040), completa, en `assets/banners/27.webp` (1920 × 1280). Antes era G24.
2. `banners/24.webp` queda sin uso en el sitio (se conserva en la carpeta); la miniatura `fotos/min/24.webp` sigue en la tarjeta «Servicios y flota» del inicio.

# Fotos en «Movilidad para cada necesidad» (P06-S2) (22 nov 2026)

1. Debajo de las 3 tarjetas de servicios se agregan 2 fotos completas (3:2, sin recorte), en dos columnas: **P06-S2-F1 = G22** (frentes de varios buses alineados) y **P06-S2-F2 = G24** (cuatro buses alineados sobre el césped). En móvil van una debajo de otra.
2. Solo en Servicios y flota; la sección de servicios del inicio (P01-S3) no cambia.
3. Archivos nuevos: `assets/fotos/22.webp`, `24.webp` (1400 × 933).

# Encabezados del grupo Nosotros con G18 (22 nov 2026)

1. Las 4 páginas del desplegable Nosotros usan ahora **G18** (cuatro conductores frente a un bus) en su encabezado, completa (16:9):
   - P02 Nosotros: antes G19.
   - P03 Principios y valores: ya era G18 (sin cambio).
   - P04 Sistemas de gestión: antes G22.
   - P05 Sostenibilidad: antes G21.
2. El texto del encabezado sigue alineado arriba y no supera la altura de la foto (1024 a 1920 px).
3. `banners/19.webp`, `21.webp` y `22.webp` quedan sin uso en el sitio (se conservan en la carpeta).

# Cambio de foto: P02-S2-F1 → G01 (22 nov 2026)

1. Nosotros, sección S2 («Una empresa construida sobre la confiabilidad»): la foto anterior del bus 1000 (A04, recortada 12 %) se reemplaza por **G01** (conductor de brazos cruzados frente al bus 1010), en `assets/fotos/01.webp` (1400 × 934).
2. Se muestra completa (3:2), sin recorte ni zoom.
3. `img/bus-1000.jpg` (A04) sigue en uso en Sostenibilidad (P05-S2-F3).

# Encabezado de Políticas: P07-S1-F1 → G38 (22 nov 2026)

1. El encabezado de Políticas corporativas usa ahora **G38** (vehículo 1040 frente a las instalaciones de la empresa), completa, en `assets/banners/38.webp` (1920 × 1280). Antes era G09.
2. `banners/38.webp` se regeneró desde la foto entera; el archivo anterior era un recorte panorámico sin uso (1600 × 520).
3. `banners/09.webp` queda sin uso en el sitio (se conserva); la miniatura `fotos/min/09.webp` sigue en la tarjeta «Políticas» del inicio.

# Foto en «Conducción eficiente» (P05-S2-F4 = G26) (22 nov 2026)

1. Sostenibilidad, mosaico S2: la tarjeta naranja «Conducción eficiente» (antes sin foto) lleva ahora **G26** (vehículo 1040 fotografiado desde un ángulo bajo) arriba, completa (3:2), sin velo ni recorte; debajo siguen el ícono, el título y el texto sobre naranja.
2. Para que la fila quede pareja, la tarjeta vecina «Flota de última generación» se estira a la misma altura y su velo cubre toda la tarjeta (su foto A04 sigue como estaba: recortada y con velo, pendiente).
3. Archivo nuevo: `assets/fotos/26.webp` (1400 × 934).

# Encabezados del grupo Nosotros con G28 (22 nov 2026)

1. Las 4 páginas del desplegable Nosotros (P02 Nosotros, P03 Principios y valores, P04 Sistemas de gestión, P05 Sostenibilidad) usan ahora **G28** (vehículo 1040 bajo los árboles) en su encabezado, completa (3:2), en `assets/banners/28.webp` (1920 × 1280). Reemplaza a G18.
2. El texto del encabezado sigue alineado arriba y no supera la altura de la foto (1024 a 1920 px).
3. `banners/18.webp` queda sin uso en el sitio (se conserva); la miniatura `fotos/min/18.webp` sigue en la tarjeta «Principios y valores» del inicio.

# Sostenibilidad: mosaico sin fotos de fondo (22 nov 2026)

1. Las otras tres tarjetas del mosaico (P05-S2) reciben el mismo tratamiento que «Conducción eficiente»: la foto deja de ser fondo recortado con velo oscuro y pasa a mostrarse **completa arriba**, con el título y el texto debajo sobre verde sólido (#3C5A2A).
   - P05-S2-F1 Energía solar (A06, cuadrada)
   - P05-S2-F2 Mantenimiento verde (A07, cuadrada)
   - P05-S2-F3 Flota de última generación (A04, 3:2)
   - P05-S2-F4 Conducción eficiente (G26, 3:2) conserva su fondo naranja e ícono.
2. El mosaico pasa a 2 columnas en escritorio: fila 1 las dos fotos cuadradas, fila 2 las dos 3:2, para que cada fila quede pareja. En móvil, una tarjeta debajo de otra.
3. Sin zoom al pasar el cursor. Con esto se cierra el pendiente «las fotos del mosaico se recortan y llevan velo».

# Encabezado de Blogs: P12-S1-F1 → G25 (22 nov 2026)

1. El encabezado de Blogs usa ahora **G25** (vehículo 1040 en vista de tres cuartos), completa, en `assets/banners/25.webp` (1920 × 1280). Antes era G17.
2. `banners/17.webp` queda sin uso en el sitio (se conserva en la carpeta).

# Sostenibilidad: se revierte el mosaico y G26 va de fondo (23 nov 2026)

1. Por decisión de Arcandan se revierte el cambio anterior del mosaico (P05-S2): vuelve el mosaico original de 3 columnas con las fotos de fondo y velo verde (Energía solar, Mantenimiento verde, Flota de última generación).
2. «Conducción eficiente» conserva la foto **G26**, ahora **de fondo bajo un velo naranja** (misma técnica que las demás tarjetas, en el color de esa tarjeta), con su ícono y texto encima. Excepción consciente al criterio de «no difuminar»: aquí se prefiere por presentación.

# Inicio: «Explore el sitio» con las fotos de los encabezados + versión alternativa (23 nov 2026)

1. Cada acceso usa ahora la foto del encabezado de su página: Nosotros G28, Servicios y flota G27, Políticas G38, Contacto G20.
2. Las 4 páginas del grupo Nosotros se agrupan en un solo acceso: quedan **4 accesos** en vez de 7.
3. **Versión A (`index.html`)**: 4 tarjetas en fila. La tarjeta Nosotros lleva bajo su foto la lista de sus 4 páginas (Nosotros, Principios y valores, Sistemas de gestión, Sostenibilidad), cada una con su enlace.
4. **Versión alternativa (`index-alternativa.html`)**: Nosotros como tarjeta ancha, con la foto completa a la izquierda y sus 4 páginas al lado en botones de 2 × 2 (título + frase + flecha); debajo, Servicios y flota, Políticas y Contacto en 3 tarjetas. Solo cambia esa sección; el resto del inicio es igual. Para verla, abrir `index-alternativa.html` directamente (el menú y el logo llevan a `index.html`).
5. Miniaturas nuevas: `assets/fotos/min/27.webp`, `28.webp`, `38.webp` (800 × 533).

# Inicio: se elige la versión alternativa de «Explore el sitio» (23 nov 2026)

1. Arcandan elige la versión alternativa: `index.html` lleva ahora Nosotros como tarjeta ancha (foto G28 completa a la izquierda, sus 4 páginas en botones 2 × 2 al lado) y debajo Servicios y flota, Políticas y Contacto.
2. Se retira la versión de 4 tarjetas en fila y sus estilos; se borra `index-alternativa.html` (quedó idéntico a `index.html`).

# Contacto: el correo ya no se sale de su recuadro (23 nov 2026)

1. P10-S2, tarjeta «Correo electrónico»: el correo `pasajeros@transportesespecialesmejia.com` usa letra adaptable (de 13,8 px en móvil a 16 px en escritorio) y puede cortarse de forma segura si no cabe.
2. Entre 720 y 899 px, donde las tarjetas son más angostas, las 4 tarjetas de contacto muestran el ícono arriba y el texto debajo, para que el correo quepa en 2 renglones.
3. Verificado de 320 a 1940 px (cada 20 px): ningún texto sale de su tarjeta y no hay desplazamiento horizontal.
4. Mismo cambio aplicado en `entrega-desarrollo/01-sitio`.

# Inicio: se retira «Capacidades de vehículo» (23 nov 2026)

1. P01-S2 (tarjeta de indicadores sobre el héroe): se quita el indicador «3 · Capacidades de vehículo». Quedan «35+ · Años de experiencia» y «3 · Certificaciones vigentes».
2. La tarjeta pasa a 2 columnas, centrada y de 760 px de ancho máximo, para que cada dato conserve el mismo ancho que antes.
3. Mismo cambio en `entrega-desarrollo/01-sitio` y en su documentación (01, 02 y 04).
