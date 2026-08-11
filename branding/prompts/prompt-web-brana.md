# Prompt para Claude Design — Sitio branalabs.com (sobre sistema Estrato)

## Contexto

El sistema de marca de **Brana** está cerrado y consolidado en `branding/brana-sistema-de-marca/` dentro de este proyecto:

- `css/brana-tokens.css` — variables de color (dark default + `[data-theme="light"]`), tipografía, espaciado, radios y sombras.
- `css/brana-ui.css` — clases tipográficas (`.t-display`, `.t-h1`...`.t-h4`, `.t-body`, etc.), wordmark (`.wm`), botones (`.btn`, `.btn-secondary`, `.btn-ghost`, `.btn-danger`), inputs/select, badges, navbar, cards, y el motivo "Estrato" (`.stack`, `.stack-loader`, `.sep`).
- `Brana - Sistema de marca.html` — guía completa de uso (logo, color, tipografía, motivo, iconografía, componentes, voz).

Resumen de la identidad: **Estrato** — pila isométrica de 3 capas como isotipo (capa media en índigo `#6A5BEA` = la matriz que sostiene a los productos), wordmark "Brana" en Space Grotesk 700, body en Hanken Grotesk, datos/labels en IBM Plex Mono. Dark-first (`#0B0C10`), radios contenidos, sombras sutiles con borde. Voz: directa, técnica sin jerga, sin emojis ni exclamaciones, números antes que adjetivos.

## Qué necesito

Diseño completo de **branalabs.com**, el sitio corporativo de Brana (casa matriz de software), usando el sistema Estrato tal cual está definido (no reinventar tokens ni componentes — extenderlos donde falte algo).

### Páginas / secciones

1. **Home**
   - Nav: wordmark Brana + links (Productos, Enfoque, Nosotros, Contacto)
   - Hero: línea de posicionamiento ("Capas de producto. Una sola base." o variante), copy corto explicando qué es Brana, CTAs ("Ver productos" / "Hablemos")
   - Sección "Enfoque" — cómo trabaja Brana (productos verticales, identidad propia por producto, misma base técnica). Usar el motivo Estrato como elemento gráfico (separadores, iconos de capas).
   - Sección "Productos" — card de **Atalaya** (gestión para productores asesores de seguros, link a branalabs.com/atalaya, con badge "Operativo" y algún dato destacado tipo "12.480 pólizas gestionadas"), y un placeholder "Próximo vertical — 2026" para futuros productos.
   - Footer con links, "© 2026 Brana", branalabs.com

2. **Productos** — listado/grid de productos (hoy solo Atalaya + placeholder de próximo vertical), cada uno como card con su propia identidad de color (Atalaya = verde) dentro del layout neutro de Brana.

3. **Nosotros** — quién es Brana (casa matriz fundada por Nacho Sambrana), filosofía de "una base técnica, muchas verticales", tono directo y sin relleno corporativo.

4. **Contacto** — formulario simple (nombre, email, mensaje) usando los componentes `.input`/`.field` ya definidos, o mailto/link directo si se prefiere algo más simple.

### Convivencia con Atalaya

- Mencionar/diseñar cómo el header de Atalaya (branalabs.com/atalaya) muestra la sub-marca "Brana" y cómo el footer de Atalaya lleva el badge "Powered by Brana" — coherente con lo ya definido en las exploraciones anteriores.

## Consideraciones técnicas

- HTML + CSS + JS vanilla, sin build system ni frameworks — mismo enfoque que el proyecto de Atalaya (`vigente-v4.html`, archivo único).
- Reusar `brana-tokens.css` y `brana-ui.css` tal cual; agregar solo el CSS específico de layout de cada página.
- Dark mode por default; soporte de light mode vía `data-theme="light"` ya está en los tokens.
- Mobile-first / responsive, siguiendo los mismos criterios de compatibilidad mobile que Atalaya (safe areas, `-webkit-appearance`, etc.) donde aplique.

## Entregable esperado

Mockups/diseño de las 4 páginas (o secciones de una sola landing si tiene más sentido para un sitio corporativo simple), listos para que Claude Code los implemente como HTML estático.
