# Brief para Claude Code — Webs de Brana y Atalaya

Dos tareas independientes sobre los dos sitios del proyecto. Empezar por Brana, luego Atalaya.

---

## TAREA 1 — branalabs.com: reescribir el copy

### Archivo a editar
`C:\Dev\brana\branding\brana-web-design\branalabs-standalone.html`

### Qué hacer
Reescribir todos los textos del sitio para que sean más humanos, directos y accesibles. El problema con el copy actual es que habla de la arquitectura interna de Brana ("verticales", "base técnica", "infraestructura") en lugar de hablar de los problemas que resuelven los productos. El visitante no es un técnico.

**Leer el brief completo antes de tocar el archivo:** `C:\Dev\brana\branding\prompts\prompt-copy-brana.md`  
Ese documento tiene: el contexto del negocio, el tono buscado, y cada texto actual con su dirección de reescritura.

### Reglas
- No tocar CSS, estructura HTML ni JS.
- No cambiar los títulos de sección (`Enfoque`, `Productos`, `Nosotros`, `Contacto`) ni los CTAs de botones (`Ver productos`, `Hablemos`, `Enviar mensaje`).
- Mantener longitudes similares al original — no agregar párrafos nuevos.
- El texto de Atalaya dentro de la card de productos puede ajustarse levemente pero debe seguir siendo específico (menciona "productores de seguros", "pólizas", "vencimientos" — ese nivel de detalle es correcto).
- La descripción del "Próximo vertical 2026" placeholder puede humanizarse: evitar "Otra capa sobre la misma base. En definición." — algo como "Próximo producto · 2026 / Otro sector. Mismo cuidado." funciona mejor.

---

## TAREA 2 — Atalaya: rename + convivencia

### Archivo a editar
`C:\Dev\brana\branding\atalaya-sistema-de-marca\atalaya\vigente-v4.html`

Este archivo ya tiene `atalaya-tokens.css` conectado y los valores hardcodeados reemplazados por `var(--token)`. Solo faltan estas dos cosas:

### 2a. Rename Vigente → Atalaya

Reemplazar todas las ocurrencias de "Vigente" por "Atalaya":

| Línea aprox. | Qué cambiar |
|---|---|
| `<title>` | `Vigente — Para brokers…` → `Atalaya — Para brokers…` |
| `<span data-brand>Vigente</span>` (×2 en el HTML) | → `<span data-brand>Atalaya</span>` |
| `<span class="footer-copy">© 2026 <span data-brand>Vigente</span>` | → `Atalaya` |
| `const BRAND = "Vigente";` en el JS | → `const BRAND = "Atalaya";` |

### 2b. Agregar elementos de convivencia Brana ↔ Atalaya

**En el nav** — agregar una referencia sutil a Brana junto al logo de Atalaya. Opciones por orden de preferencia:
1. Texto pequeño `by Brana` a la derecha del `.nav-logo`, con `font-size: 11px; color: var(--text-3); letter-spacing: .04em;`
2. O un link discreto a `branalabs.com` debajo del logo (menos preferido — no distraer del CTA principal)

El objetivo es que el visitante sepa que detrás hay una empresa, sin que compita visualmente con la identidad verde de Atalaya.

**En el footer** — agregar el badge "Powered by Brana" con el isotipo de 3 capas.

HTML del badge (copiar tal cual):
```html
<span class="pwr-badge">
  <span class="brana-stack" aria-hidden="true"></span>
  Powered by Brana
</span>
```

CSS a agregar en el `<style>`:
```css
/* ── Convivencia Brana ── */
.pwr-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 11px; letter-spacing: .06em; color: var(--text-3);
  padding: 5px 10px; border-radius: var(--r-sm);
  background: var(--surface-2); border: 1px solid var(--border);
}

/* Isotipo Brana — 3 capas, capa media en verde Atalaya */
.brana-stack {
  --bs: 14px;
  display: inline-block; position: relative; flex-shrink: 0;
  width: calc(var(--bs) * 1.5); height: calc(var(--bs) * 1.05);
}
.brana-stack::before,
.brana-stack::after,
.brana-stack span {
  content: ''; display: block; position: absolute;
  left: 50%; width: var(--bs); height: var(--bs);
  transform: translateX(-50%) scaleY(.5775) rotate(45deg);
  border-radius: calc(var(--bs) * 0.13);
}
/* Alternativa más simple: usar un solo elemento <svg> inline con las 3 capas si los pseudo-elementos no alcanzan */
```

Si los pseudo-elementos no son suficientes para las 3 capas, usar directamente un SVG inline:
```html
<svg width="21" height="15" viewBox="0 0 21 15" fill="none" aria-hidden="true">
  <!-- capa top -->
  <rect x="5.5" y="0.5" width="10" height="10" rx="1.2"
        transform="rotate(45 10.5 5.5) scale(1 0.5775)"
        fill="var(--border-strong)"/>
  <!-- capa media — verde Atalaya -->
  <rect x="5.5" y="3.5" width="10" height="10" rx="1.2"
        transform="rotate(45 10.5 8.5) scale(1 0.5775)"
        fill="#3db897"/>
  <!-- capa bottom -->
  <rect x="5.5" y="6.5" width="10" height="10" rx="1.2"
        transform="rotate(45 10.5 11.5) scale(1 0.5775)"
        fill="var(--border-strong)"/>
</svg>
```

Ubicación en el footer: al lado del copyright, o en una línea propia debajo del logo de Atalaya — lo que quede más limpio con el layout existente.

### 2c. Renombrar el archivo

Al terminar, renombrar `vigente-v4.html` → `atalaya.html` dentro de la misma carpeta.

---

## Archivos de referencia

| Archivo | Para qué |
|---|---|
| `branding/prompts/prompt-copy-brana.md` | Brief completo de copy para Brana |
| `branding/atalaya-sistema-de-marca/atalaya/atalaya-tokens.css` | Tokens ya creados para Atalaya |
| `branding/atalaya-sistema-de-marca/atalaya/atalaya-ui.css` | Componentes UI de Atalaya |
| `branding/brana-web-design/branalabs-standalone.html` | Web de Brana a editar |
| `branding/atalaya-sistema-de-marca/atalaya/vigente-v4.html` | Landing de Atalaya a editar |

## Resultado esperado

Al finalizar, estos dos archivos deben estar editados y funcionales:
- `branding/brana-web-design/branalabs-standalone.html` — con copy humano
- `branding/atalaya-sistema-de-marca/atalaya/atalaya.html` — renombrado, con brand "Atalaya" y elementos de convivencia Brana
