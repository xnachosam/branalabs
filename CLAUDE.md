# Vigente — Landing Page

Landing page de captura de leads para **Vigente**, un SaaS para brokers y productores asesores de seguros (PAS) independientes en Argentina.

## Estructura del proyecto

```
branding/
  brana-sistema-de-marca/        ← sistema de marca Brana "Estrato"
    css/brana-tokens.css
    css/brana-ui.css
    Brana - Sistema de marca.html
  brana-web-design/
    branalabs-standalone.html    ← sitio web branalabs.com (HTML + CSS + JS)
    css/brana-tokens.css
    css/brana-ui.css
  brana-social-design/
    Brana Social Kit.html        ← specimens de redes sociales
  atalaya-sistema-de-marca/
    atalaya/
      atalaya.html               ← landing de Atalaya (HTML + CSS + JS)
      atalaya-tokens.css
      atalaya-ui.css
      atalaya-guidelines.html
  prompts/                       ← briefs para Claude Code y Claude Design
CLAUDE.md
```

No hay build system, bundler ni dependencias locales. Para ver cada archivo: abrirlo directamente en el navegador.

## Qué hace la página

1. **Hero** — propuesta de valor principal con mockup animado de la app
2. **Proof strip** — aseguradoras con las que trabajan los usuarios target
3. **Pain section** — timeline de "cómo se pierde una renovación hoy"
4. **Statement** — párrafo de posicionamiento de marca
5. **Features** — grilla de funcionalidades (Core + Próximamente)
6. **Form** — formulario de investigación / waitlist (lead generation)
7. **Footer**

## Sistema de diseño

| Token | Valor |
|---|---|
| Background principal | `#080E1C` |
| Background secciones dark | `#060B18` |
| Verde primario | `#1A7A5E` |
| Verde claro / acento | `#3db897` |
| Fuente headings | Syne 700/800 (Google Fonts) |
| Fuente cuerpo | Inter 400/500/600 (Google Fonts) |

## Form / webhook

El formulario envía los datos a un endpoint que **todavía no está conectado**. Para conectarlo, buscar el comentario en el JS:

```js
/* CONECTAR WEBHOOK AQUÍ:
fetch("https://TU-ENDPOINT", { method:"POST", ... }); */
```

Reemplazar con el endpoint real (Make, Zapier, n8n, etc.).

## Campos del formulario

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

## Decisiones de diseño relevantes

- **Nav scroll-spy**: el link activo se actualiza dinámicamente según la sección visible. El logo actúa como botón de inicio (`href="#top"`). "Inicio" fue eliminado del menú por ser redundante en una landing.
- **Hero layout**: grid `50% 1fr` con `align-items: start` para evitar que el título se solape visualmente con el mockup. `gap: 48px` de separación entre columnas.
- **Float chip**: en desktop es `position: absolute` animado. En mobile (≤ 960px) pasa a `position: relative` para no cortarse al apilarse en columna única.
- **Radio buttons**: el espaciado entre el círculo y el texto se maneja con `margin-left: 20px` en el span (no con `gap`) por compatibilidad con labels en algunos browsers.

## Compatibilidad mobile

- `min-height: 100svh` en el hero (fix barra de Safari iOS)
- `-webkit-mask-image` en la grilla decorativa del hero
- `-webkit-appearance: none` en inputs y selects
- `touch-action: manipulation` en botones (elimina delay 300ms en iOS)
- `theme-color` meta para status bar en Android/iOS

## Brand name

El nombre de marca se inyecta dinámicamente desde JS:

```js
const BRAND = "Vigente";
document.querySelectorAll("[data-brand]").forEach(el => el.textContent = BRAND);
```

Para cambiar el nombre, modificar solo esa línea.
