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
