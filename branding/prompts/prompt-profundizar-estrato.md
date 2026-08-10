# Prompt para Claude Design — Profundizar "Estrato" (sistema de marca completo)

## Contexto

De las 4 variantes hermanas de Membrana (B1 Membrana, B2 Estrato, B3 Intervalo, B4 Paralelo), la elegida es **B2 · Estrato** — "pila isométrica, índigo".

Sistema definido hasta ahora:

- **Logo**: wordmark "Brana", lockup principal, wordmark solo, versión vertical, favicon 32/16px, versión sobre fondo claro.
- **Paleta (dark, default)**: fondo `#0B0C10`, superficie `#14161D`, borde `#242836`, texto `#F2F3F8`, secundario `#9BA0AE`, terciario `#5C616F`, acento "Índigo Brana" `#6A5BEA` (hover `#8B7FEF`, sobre claro `#5443C9`). Light mode: fondo `#F7F8FB`, borde `#E3E6EE`, texto `#14161D`.
- **Tipografía**: Space Grotesk (wordmark y headings, 500/600/700), Hanken Grotesk (body y UI, 400/500/600/700), IBM Plex Mono (etiquetas y datos, 400/500).
- **Concepto**: pila isométrica / capas — "Capas de producto. Una sola base."

Esta dirección queda elegida y cerrada. Ahora necesitamos profundizarla hasta tener un **sistema de marca completo e implementable**, antes de pasar a diseño de redes sociales y de la web de Brana.

## Qué necesito que profundice

1. **Colores de estado** — éxito, error, warning, info, focus ring, disabled, overlay/scrim. Deben sentirse parte de la misma familia que el índigo de acento (no colores genéricos de Bootstrap).

2. **Escala tipográfica completa** — agregar H3, H4, tamaños de botón, links (con estado hover/visited si aplica), line-height y letter-spacing para cada nivel. Mantener Space Grotesk para headings/wordmark, Hanken Grotesk para body/UI, IBM Plex Mono para datos/labels.

3. **Sistema de espaciado, radios y sombras** — escala de espaciado (idealmente base 4px u 8px), radios de borde (cards, botones, inputs), y elevación/sombras para dark mode (que funcionen sobre fondo `#0B0C10`/`#14161D` sin verse genéricas).

4. **Reglas de uso del logo** — tamaño mínimo, área de seguridad/clear space, versión monocromo (blanco y negro), comportamiento del isotipo en app icon / favicon, qué NO hacer (do's & don'ts).

5. **Desarrollo del motivo "pila isométrica"** como sistema de ilustración/gráfica de marca — cómo se aplica en: hero de la landing, separadores de sección, iconos de producto, estados vacíos (empty states), loaders. Debe poder generar variaciones (no ser siempre la misma imagen).

6. **Iconografía** — estilo de set de iconos coherente con Space Grotesk (geométrico, trazos consistentes), pensado para nav, features, estados.

7. **Componentes base de UI** — botones (primario, secundario, ghost, destructivo), inputs/selects, badges/tags, barra de navegación, cards — cada uno con estados hover/active/focus/disabled, en dark y light mode.

8. **Tono de voz** — guía breve de copy (cómo "habla" Brana: directo, técnico pero accesible, sin jerga de marketing vacía).

## Entregable esperado

Un sistema de marca consolidado y listo para implementar con CSS puro (variables CSS, Google Fonts), que sirva como base directa para: (a) kit de redes sociales (LinkedIn, OG images, avatares) y (b) diseño de las páginas de branalabs.com (home, productos, nosotros, contacto).
