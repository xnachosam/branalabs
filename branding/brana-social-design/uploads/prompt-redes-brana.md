# Prompt para Claude Design — Kit de redes sociales Brana

## Contexto

El sistema de marca "Estrato" y el sitio branalabs.com ya están cerrados (`branding/brana-sistema-de-marca/` y `branding/brana-web-design/`). Identidad: dark-first `#0B0C10`, acento índigo `#6A5BEA`, isotipo "pila isométrica" de 3 capas (capa media en índigo), wordmark "Brana" en Space Grotesk 700. Voz: directa, técnica, sin emojis ni exclamaciones.

Redes ya definidas en el sitio: Instagram `instagram.com/branalabs`, LinkedIn `linkedin.com/company/branalabs`, contacto `hola@branalabs.com`.

## Qué necesito

Kit de assets de redes sociales para Brana, reusando el isotipo (pila de 3 capas, capa media índigo) y la paleta/tipografía ya definidas — no crear elementos nuevos, derivar todo del sistema existente.

1. **Avatares / foto de perfil** — versión cuadrada del isotipo (pila de 3 capas) para LinkedIn e Instagram, en fondo `#0B0C10` y alternativa en fondo claro `#F7F8FB`. Debe leerse bien en tamaños chicos (circular crop).

2. **Banner de LinkedIn** (1128×191) — wordmark "Brana" + tagline corta ("Capas de producto. Una sola base." o variante), motivo Estrato como elemento gráfico de fondo, dark.

3. **Imagen OG / social share** (1200×630) — para compartir el sitio y futuras publicaciones. Versión genérica (Brana, casa matriz) y una plantilla reusable para anuncios de producto (ej. lanzamiento de Atalaya), donde la capa media del isotipo tome el color del producto correspondiente (verde para Atalaya), siguiendo la regla ya definida en el sistema ("la capa media toma el color del producto").

4. **Plantilla de post cuadrado** (1080×1080, Instagram/LinkedIn feed) — 1-2 variantes: anuncio genérico (texto + isotipo) y anuncio de producto (con espacio para nombre + descripción corta de producto).

5. **Favicon / app icons** — set de tamaños (16, 32, 180, 192, 512px) a partir del isotipo, dark y light.

## Consideraciones

- Todo debe poder exportarse como SVG/PNG estáticos o generarse con HTML+CSS (igual que el resto del sistema) para que Claude Code pueda producir los archivos finales.
- Mantener consistencia con `css/brana-tokens.css` (colores, tipografías) — no introducir nuevos tonos de índigo ni tipografías adicionales.
- Las plantillas de producto deben funcionar para Atalaya (verde `#1A7A5E`/`#3db897`) y para verticales futuros sin rediseñar la plantilla.

## Entregable esperado

Mockups/specimens de cada pieza (avatar, banner LinkedIn, OG image genérica y de producto, post cuadrado, favicons), listos para que Claude Code genere los archivos finales.
