# Prompt para Claude Design — Refinar "Membrana" y nuevas variantes

## Contexto

De la exploración de branding anterior (3 direcciones: A. Monolito, B. Membrana, C. Cursor), la dirección elegida es **B. Membrana** — "planos paralelos, azul eléctrico mínimo":

- **Paleta (dark, default)**: fondo `#0B0C10`, superficie `#14161D`, borde `#242836`, texto `#F2F3F8`, secundario `#9BA0AE`, terciario `#5C616F`, acento "Azul Brana" `#4A6BE8` (hover `#6D88EE`, sobre claro `#3A53C4`). Light mode: fondo `#F7F8FB`, borde `#E3E6EE`, texto `#14161D`.
- **Tipografía**: Hanken Grotesk (headings, body, UI — pesos 400/500/600/700) + IBM Plex Mono (etiquetas y datos — 400/500). Ambas son Google Fonts.
- **Concepto visual**: planos/capas paralelas, minimalismo, un solo acento de color (azul) sobre base oscura.

## Cambio de naming

**Decidimos sacar "Labs" del nombre.** La marca es simplemente **"Brana"** — no "Brana Labs". Esto aplica a:

- Wordmark / lockup del logo (versión principal, solo wordmark, vertical, favicon)
- Headers, footers, badges "Powered by"
- Taglines y copy de la landing ("Brana — casa matriz de software", etc.)
- Social preview / OG image

El dominio sigue siendo `branalabs.com` (eso no cambia), pero la marca que se muestra visualmente es **"Brana"** sola, sin "Labs" como parte del lockup.

## Qué necesito

1. **Refinar y pulir la dirección Membrana** con el naming corregido ("Brana" en vez de "Brana Labs") en todos los sistemas: logo (lockup principal, wordmark solo, vertical, favicon 32/16px, versión sobre fondo claro), paleta (dark + light), tipografía, y los mockups de aplicación (header con sub-marca de producto sobre Atalaya, footer "Powered by Brana", social preview 1200×630).

2. **Generar 2-3 propuestas adicionales en la misma línea que Membrana** — mismo lenguaje visual (planos/capas paralelas, minimalismo, acento único de color sobre fondo oscuro, tipografía sans geométrica + mono para datos), pero explorando variaciones: distintos conceptos de isotipo/wordmark para "Brana", y opcionalmente variaciones sutiles de la paleta de acento (manteniendo la base oscura neutra). El objetivo es tener varias hermanas de Membrana para comparar antes de cerrar la decisión final.

## Consideraciones (se mantienen del brief original)

- Implementable con CSS puro (variables CSS, Google Fonts vía `<link>`), sin frameworks de diseño.
- Debe funcionar bien en dark mode (default) y tener variante light mode.
- Debe poder convivir con la identidad de Atalaya (verde `#1A7A5E`/`#3db897`) sin competir — Brana es la marca paraguas, Atalaya es un producto con su propia identidad.
- Escalable para futuros productos verticales aún no definidos.
