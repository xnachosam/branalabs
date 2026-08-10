# Brief para Claude Code — Tokens de Atalaya alineados a Brana (Nivel 2)

## Contexto

Brana (casa matriz) tiene su sistema de marca "Estrato" cerrado en `branding/brana-sistema-de-marca/css/brana-tokens.css`. Atalaya (`vigente-v4.html`, archivo único, todavía con naming "Vigente") tiene su propia identidad visual ya validada: fondo `#080E1C`/`#060B18`, acento verde `#1A7A5E`/`#3db897`, tipografías Syne (headings) + Inter (body) — **toda hardcodeada, sin sistema de variables CSS**.

Decisión tomada: **Nivel 2 de alineación** — Atalaya mantiene su identidad visual (colores y tipografías propias) intacta, pero adopta la **estructura de tokens** de Brana (misma taxonomía de espaciado, radios y elevación) para que ambos proyectos "hablen el mismo idioma" a nivel de mantenimiento, sin que Atalaya se vea como Brana.

## Qué hacer

### 1. Crear `atalaya-tokens.css`

Mirror de la estructura de `brana-tokens.css`, mismo naming de variables, pero con los valores propios de Atalaya:

- **Color**: mapear los hex actuales de `vigente-v4.html` a variables `--bg`, `--surface`, `--surface-2`, `--border`, `--border-strong`, `--text`, `--text-2`, `--text-3`, `--accent` (verde `#1A7A5E`), `--accent-hover`/`--accent-light` (`#3db897`), más estados (`--success`, `--error`, `--warning`, `--info`) si no existen aún — inferir de colores ya usados o derivar del verde si no hay equivalentes.
- **Tipografía**: `--font-display: 'Syne'`, `--font-body: 'Inter'`. Si no hay una fuente mono en uso, definir `--font-mono` solo si se necesita para algún dato/label; si no aplica, omitir esa variable (no forzar IBM Plex Mono).
- **Espaciado**: escala `--s1` a `--s9` en base 4px — igual que Brana. Auditar los valores de padding/margin actuales en `vigente-v4.html` y mapearlos a la escala más cercana (redondear, no reinventar valores nuevos).
- **Radios**: `--r-sm`, `--r-md`, `--r-lg`, `--r-full` — tomar los radios ya usados en Atalaya y normalizarlos a esta escala de 4 niveles.
- **Elevación**: `--e1`, `--e2`, `--e3` para sombras — definir equivalentes ajustados al fondo oscuro de Atalaya (`#080E1C`), siguiendo el mismo patrón de Brana (sombra + borde sutil).

### 2. Refactor de `vigente-v4.html`

Reemplazar los valores hardcodeados de color, espaciado, radios y sombras por `var(--token)` donde corresponda, cargando `atalaya-tokens.css`. **No cambiar ningún valor visual** — el resultado debe verse exactamente igual que ahora. Esto es un refactor de mantenibilidad, no un redesign.

### 3. Elementos de convivencia con Brana

Agregar (siguiendo los mockups ya diseñados en la exploración "Estrato · convivencia con Atalaya"):

- **Header**: referencia sutil a "Brana" como casa matriz (sub-marca), sin competir con el branding de Atalaya.
- **Footer**: badge "Powered by Brana" con el isotipo de pila de 3 capas, donde la capa media toma el color de Atalaya (`#3db897`) — regla ya definida ("la capa media toma el color del producto").

El isotipo y el patrón del badge están documentados en `branding/brana-sistema-de-marca/Brana - Sistema de marca.html` (sección Motivo Estrato) y en `branding/brana-social-design/` (OG image variante de producto, que ya implementa esta regla).

## Restricciones

- No tocar el rename "Vigente" → "Atalaya" en este pase salvo que se pida explícitamente — son cambios independientes (puede hacerse en el mismo PR o en otro, a criterio).
- No introducir las fuentes ni colores de Brana en el cuerpo de la página de Atalaya — solo en el badge "Powered by Brana" (que sí puede usar el índigo de Brana en el isotipo, ya que representa a Brana, no a Atalaya).
- Mantener el archivo único (HTML + CSS + JS), sin build system, salvo el nuevo archivo `atalaya-tokens.css` como `<link>` adicional — consistente con cómo Brana separa `brana-tokens.css` de `brana-ui.css`.
