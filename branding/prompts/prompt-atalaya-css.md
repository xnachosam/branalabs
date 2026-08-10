# Brief para Claude Code — CSS de Atalaya

## Contexto del proyecto

**Brana** es la empresa matriz. Su sistema de diseño "Estrato" ya está cerrado y vive en:
- `branding/brana-sistema-de-marca/css/brana-tokens.css` — variables CSS (colores, tipografía, espaciado, radios, elevación)
- `branding/brana-sistema-de-marca/css/brana-ui.css` — clases de componentes UI

**Atalaya** es el primer producto de Brana: un SaaS para productores asesores de seguros (PAS) independientes en Argentina. Su landing page vive en `vigente-v4.html` (archivo único: HTML + CSS + JS). El archivo todavía dice "Vigente" en varios lugares — ese rename se trata por separado.

## Identidad visual de Atalaya (a preservar tal cual)

Atalaya tiene su propia identidad, **independiente** de la de Brana. No hereda los colores ni tipografías de Brana. Lo que sí adopta es la **estructura de tokens** (misma taxonomía de variables) para que ambos proyectos sean mantenibles de la misma manera.

**Paleta actual de Atalaya** (extraída de `vigente-v4.html`):
- Fondo principal: `#080E1C`
- Fondo secciones oscuras: `#060B18`
- Verde primario (accent): `#1A7A5E`
- Verde claro / hover / acento secundario: `#3db897`

**Tipografías actuales de Atalaya:**
- Headings/display: `Syne` (700, 800) — Google Fonts
- Cuerpo / UI: `Inter` (400, 500, 600) — Google Fonts
- No usa fuente monoespaciada por el momento

**Todo esto está hardcodeado** como valores hex directos en el `<style>` de `vigente-v4.html`. No existe ningún sistema de variables CSS.

## Decisión de alineación: Nivel 2

Atalaya adopta la **estructura** del sistema Brana (mismos nombres de variables, misma escala de espaciado y radios) pero con sus propios valores. Resultado: los dos proyectos "hablan el mismo idioma" a nivel de mantenimiento, pero visualmente son distintos.

---

## Tarea 1 — Crear `atalaya-tokens.css`

Crear el archivo `atalaya-tokens.css` en la raíz del proyecto (junto a `vigente-v4.html`), espejando la estructura exacta de `brana-tokens.css` pero con los valores de Atalaya.

### Estructura requerida

```css
/* ============================================================
   Atalaya — Design tokens
   Dark-first. Cargar fuentes vía <link> de Google Fonts:
   Syne 700/800 · Inter 400/500/600
   ============================================================ */

:root {
  /* ---- Color · base dark ---- */
  --bg: #080E1C;
  --surface: /* derivar: un paso más claro que --bg, más oscuro que --surface-2 */;
  --surface-2: /* derivar: ligeramente más claro que --surface */;
  --border: /* derivar: borde sutil sobre fondo oscuro */;
  --border-strong: /* derivar: borde más visible */;

  --text: #F2F3F8;          /* heredar de Brana — texto blanco es universal */
  --text-2: #9BA0AE;
  --text-3: #5C616F;

  /* ---- Acento · Verde Atalaya ---- */
  --accent: #1A7A5E;
  --accent-hover: #3db897;
  --accent-active: /* derivar: más oscuro que --accent */;
  --accent-ink: #FFFFFF;
  --accent-soft: rgba(29, 122, 94, 0.14);
  --accent-border: rgba(29, 122, 94, 0.40);

  /* ---- Estados ---- */
  /* Usar los mismos valores de Brana — son colores semánticos universales */
  --success: #4CB782;
  --success-soft: rgba(76, 183, 130, 0.13);
  --error: #E25D6E;
  --error-soft: rgba(226, 93, 110, 0.13);
  --warning: #D9963C;
  --warning-soft: rgba(217, 150, 60, 0.13);
  --info: #4D9FDB;
  --info-soft: rgba(77, 159, 219, 0.13);

  --link: #3db897;
  --link-hover: /* derivar: más claro que --link */;

  --focus-ring: 0 0 0 3px rgba(61, 184, 151, 0.35);
  --disabled-fg: #5C616F;
  --disabled-bg: /* derivar: sobre fondo oscuro de Atalaya */;
  --overlay: rgba(4, 8, 20, 0.65);

  /* ---- Tipografía ---- */
  --font-display: 'Syne', sans-serif;     /* headings */
  --font-body: 'Inter', sans-serif;       /* body + UI */
  /* --font-mono: no se usa en Atalaya por ahora */

  /* Escala tipográfica: mismos tamaños que Brana */
  --display-size: 64px; --display-lh: 1.05; --display-ls: -0.03em; --display-w: 800;
  --h1-size: 48px;      --h1-lh: 1.08;      --h1-ls: -0.025em;     --h1-w: 800;
  --h2-size: 32px;      --h2-lh: 1.15;      --h2-ls: -0.02em;      --h2-w: 700;
  --h3-size: 24px;      --h3-lh: 1.25;      --h3-ls: -0.015em;     --h3-w: 700;
  --h4-size: 18px;      --h4-lh: 1.35;      --h4-ls: -0.01em;      --h4-w: 600;
  --body-lg-size: 18px; --body-lg-lh: 1.6;
  --body-size: 16px;    --body-lh: 1.6;
  --small-size: 14px;   --small-lh: 1.5;
  --caption-size: 12.5px; --caption-lh: 1.4;
  --btn-size: 15px;     --btn-sm-size: 13.5px;
  --label-size: 12px;   --label-ls: 0.08em;

  /* ---- Espaciado (base 4px) — idéntico a Brana ---- */
  --s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px; --s5: 24px;
  --s6: 32px; --s7: 48px; --s8: 64px; --s9: 96px;

  /* ---- Radios — idénticos a Brana ---- */
  --r-sm: 4px;
  --r-md: 6px;
  --r-lg: 10px;
  --r-full: 999px;

  /* ---- Elevación (ajustada al fondo oscuro de Atalaya) ---- */
  --e1: 0 1px 2px rgba(0, 0, 0, 0.50), 0 0 0 1px var(--border);
  --e2: 0 4px 14px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--border);
  --e3: 0 16px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px var(--border-strong);
  --e-accent: 0 0 0 1px var(--accent-border), 0 8px 24px rgba(29, 122, 94, 0.18);
}
```

Para los valores marcados como "derivar": auditar los colores que ya existen en `vigente-v4.html` y mapear el más apropiado. Si no existen equivalentes, derivar matemáticamente del verde o del fondo (aclarar/oscurecer en pasos coherentes).

---

## Tarea 2 — Refactor de `vigente-v4.html`

Reemplazar los valores hex hardcodeados por `var(--token)` en todo el bloque `<style>` del archivo.

**Reglas:**
- Agregar `<link rel="stylesheet" href="atalaya-tokens.css">` en el `<head>`, antes del `<style>` interno.
- Reemplazar colores, espaciados, radios y sombras por la variable correspondiente donde exista un token exacto o muy próximo.
- **El resultado visual debe ser idéntico al actual.** Esto es un refactor de mantenibilidad, no un redesign.
- No eliminar el bloque `<style>` interno — solo sacar los valores que pasan a ser tokens.
- Los valores que no tengan token equivalente (colores muy específicos de un componente puntual, etc.) pueden quedarse hardcodeados.

---

## Tarea 3 — Elementos de convivencia Brana ↔ Atalaya

### 3a. Referencia en el header

En el `<nav>` existente, agregar una referencia sutil a Brana como casa matriz. Opciones (elegir la más limpia según el layout actual):
- Un pequeño texto `by Brana` junto al logo de Atalaya
- O una badge discreta que no compita visualmente con la identidad verde de Atalaya

El isotipo de Brana (la pila de 3 capas) se construye con HTML/CSS puro usando esta estructura:
```html
<span class="stack" style="--s:14px"><i></i><i class="a"></i><i></i></span>
```
donde las capas `<i>` toman un color de fondo (en Brana es índigo, en este contexto puede ser el verde de Atalaya o neutro). El CSS del `.stack` vive en `brana-ui.css` — se puede copiar solo esa regla al archivo de Atalaya si no se quiere importar todo `brana-ui.css`.

### 3b. Badge "Powered by Brana" en el footer

En el footer de `vigente-v4.html`, agregar el badge de convivencia. HTML de referencia (ya implementado en `branding/brana-web-design/branalabs-standalone.html`):

```html
<span class="pwr">
  <span class="stack" aria-hidden="true" style="--s:14px"><i></i><i class="a"></i><i></i></span>
  Powered by Brana
</span>
```

CSS del badge:
```css
.pwr {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: .06em;
  color: var(--text-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: var(--r-sm);
  background: var(--surface-2);
  border: 1px solid var(--border);
}
```

CSS del isotipo `.stack` (copiar solo si no se importa `brana-ui.css`):
```css
.stack {
  --s: 20px;
  display: inline-block;
  position: relative;
  width: calc(var(--s) * 1.5);
  height: calc(var(--s) * 1.05);
  flex-shrink: 0;
}
.stack i {
  position: absolute;
  left: 50%;
  width: var(--s);
  height: var(--s);
  transform: translateX(-50%) scaleY(.5775) rotate(45deg);
  border-radius: calc(var(--s) * 0.13);
  background: var(--border-strong);
  display: block;
}
.stack i:nth-child(1) { top: calc(var(--s) * 0.04); z-index: 3; }
.stack i.a            { top: calc(var(--s) * 0.32); z-index: 2; background: #3db897; }
.stack i:nth-child(3) { top: calc(var(--s) * 0.60); z-index: 1; }
```

**La capa media (`i.a`) usa el verde de Atalaya (`#3db897`)** — esta es la regla de convivencia del sistema Estrato: la capa del medio toma el color del producto, identificando de qué vertical viene.

---

## Restricciones generales

- No cambiar el nombre "Vigente" a "Atalaya" en este pase — ese rename es una tarea separada.
- No introducir los colores de Brana (índigo `#6A5BEA`) en el cuerpo de la página de Atalaya. Solo el badge "Powered by Brana" puede hacer referencia visual a Brana, y usando el verde de Atalaya en la capa media del isotipo, no el índigo.
- No cambiar ningún valor visual percibido — mismos colores, mismo espaciado, mismas proporciones.
- Mantener archivo único (`vigente-v4.html` + nuevo `atalaya-tokens.css`). Sin build system.

## Archivos de referencia

| Archivo | Para qué |
|---|---|
| `vigente-v4.html` | Archivo principal a refactorizar |
| `branding/brana-sistema-de-marca/css/brana-tokens.css` | Estructura exacta a espeljar en `atalaya-tokens.css` |
| `branding/brana-web-design/branalabs-standalone.html` | Referencia del badge `.pwr` y del isotipo `.stack` ya implementados |
