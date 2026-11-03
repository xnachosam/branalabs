# Brana Labs — sitios web + sistemas de marca

Repo de **Brana** (empresa de software para industrias concretas, Santa Fe, Argentina) y su primer producto, **Atalaya** (SaaS para brokers y productores asesores de seguros — PAS — independientes). Antes el producto se llamaba "Vigente"; todo lo que diga Vigente es legacy.

Repo: `github.com/xnachosam/branalabs` · Deploy: **Vercel**, sirve la carpeta `public/` (`vercel.json → outputDirectory: public`). Cada push a `main` despliega a producción.

## Estructura

```
public/                          ← LO QUE SE PUBLICA (producción)
  index.html                     ← branalabs.com  (copia de branding/brana-web-design/branalabs-standalone.html)
  favicon.svg
  atalaya/
    index.html                   ← branalabs.com/atalaya  (copia de atalaya.html con rutas absolutas /atalaya/...)
    atalaya-tokens.css
    atalaya-ui.css               ← (no está linkeado desde index.html)
    atalaya-favicon.svg
branding/                        ← fuentes de diseño (Claude Design) y briefs
  brana-sistema-de-marca/        ← sistema de marca Brana "Estrato" (tokens, UI, guidelines, JSX del canvas)
  brana-web-design/              ← fuente del sitio Brana (standalone bundle) + tweaks-panel.jsx
  brana-social-design/           ← kit de redes
  atalaya-sistema-de-marca/atalaya/  ← fuente de la landing Atalaya + tokens/UI/guidelines
  prompts/                       ← briefs para Claude Code / Claude Design
  favicon.svg, atalaya-favicon.svg
vercel.json
```

No hay build system ni dependencias. Se abre cada HTML directo en el navegador.

**Duplicación a tener en cuenta:** los HTML de `public/` son copias de los de `branding/`. Cualquier cambio en un sitio hay que hacerlo en ambos lados (o, mejor, definir `public/` como única fuente — ver pendientes). Los `uploads/` de cada carpeta de branding son copias idénticas de los CSS/prompts originales.

## Sitio Brana (`public/index.html`)

- Es un **export "standalone" de Claude Design**: el HTML real está serializado como JSON dentro de `<script type="__bundler/template">`, y fuentes + scripts van en base64/gzip en `__bundler/manifest`. Se desempaqueta en el navegador.
- Incluye React (dev) + ReactDOM (dev) + Babel standalone (~4 MB) **solo para el panel "Tweaks"** de revisión de diseño. El sitio en sí es HTML/CSS/JS vanilla.
- Editar este archivo a mano es frágil (JSON escapado). Para cambios de contenido, editar el template con cuidado o migrar a HTML plano.
- Secciones: Nav · Hero · Enfoque · Productos (Atalaya + próximo) · Nosotros · Contacto (form) · Footer. Tema claro/oscuro persistente en `localStorage` (`brana-theme`).
- Tokens: fondo `#0B0C10`, acento índigo `#6A5BEA`. Fuentes: Space Grotesk (display), Hanken Grotesk (cuerpo), IBM Plex Mono (labels).
- Form `#contactForm` (name, email, message) → webhook Make.com (`hook.us2.make.com/7n9i…`).

## Landing Atalaya (`public/atalaya/index.html`)

Secciones: Hero (mockup + float chip) · Proof strip (aseguradoras) · Pain (timeline) · Statement · Features (Core + Próximamente) · Form de investigación/waitlist · Footer ("Powered by Brana").

- Tokens en `atalaya-tokens.css`: fondo `#080E1C`, verde `#1A7A5E` / `#3db897`. Fuentes Syne 700/800 + Inter 400/500/600 (Google Fonts).
- Nombre inyectado por JS: `const BRAND = "Atalaya";` sobre `[data-brand]`.
- Form `#lf` → webhook Make.com (`hook.us2.make.com/vodd…`), envía JSON con los campos:

| Campo | Tipo | Requerido |
|---|---|---|
| perfil | select | sí |
| clientes | select | sí |
| herramienta | select | sí |
| herramienta_otro | text | solo si herramienta = "Otro" |
| perdida | radio | sí |
| falta | textarea | no |
| precio | select | no |
| nombre | text | sí |
| contacto | text | sí |

Decisiones de diseño: nav con scroll-spy; logo = botón de inicio (`#top`); hero grid `50% 1fr` con `align-items: start` y `gap: 48px`; float chip absoluto en desktop y relativo en ≤ 960px; radios con `margin-left: 20px` en el span (no `gap`). Mobile: `100svh`, `-webkit-mask-image`, `-webkit-appearance: none`, `touch-action: manipulation`, meta `theme-color`.

## Modo de operación (Claude administra el proyecto)

La sesión principal es el **orquestador**: planifica, delega, verifica, commitea y reporta. El dueño solo toma las decisiones importantes.

Al empezar cada sesión: leer `docs/BACKLOG.md`, `docs/DECISIONES.md` y lo último de `docs/BITACORA.md`, y retomar desde ahí.

**Agentes** (`.claude/agents/`):
- `web-dev`: implementa código en los sitios. No commitea.
- `qa-reviewer`: revisa cada cambio antes de publicarlo. Solo lectura. Su veredicto es obligatorio antes de pushear a `main`.
- `copy-marca`: textos visibles al público, con el tono de marca. No commitea.

**Ciclo por tarea:** tomar tarea del backlog → delegar a `web-dev`/`copy-marca` → `qa-reviewer` revisa → el orquestador verifica → commit → push → actualizar BACKLOG y BITACORA (en el mismo commit o el siguiente).

**Decide el orquestador solo:** arreglos de bugs, performance, accesibilidad, SEO técnico, limpieza de código, refactors sin cambio visual, orden del backlog.

**Va a `docs/DECISIONES.md` y se espera al dueño:** cambios de copy que alteren el posicionamiento (titulares, promesas, precios), cambios visuales de diseño, temas legales, cuentas o servicios externos (Vercel, Make, dominios, analytics), costos, y cualquier borrado difícil de deshacer (ramas remotas, historial). Cada decisión lleva una recomendación. Mientras tanto se sigue con lo que no esté bloqueado.

## Flujo de git

- Todo cambio se commitea y se pushea (el usuario quiere todo trackeado).
- Trabajar en `main` o en una rama corta por tema que se mergea a `main`. Push a `main` = deploy a producción en Vercel; push a otra rama = preview URL.
- Commits en español, estilo `feat:` / `fix:` / `docs:` / `chore:`.
