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
