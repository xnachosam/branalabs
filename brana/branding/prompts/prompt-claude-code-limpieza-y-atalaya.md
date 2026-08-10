# Brief para Claude Code — Limpieza de archivos + revisión final de Atalaya

Dos partes: primero limpiar la estructura del proyecto, después hacer una pasada final sobre la landing de Atalaya.

---

## PARTE 1 — Limpiar archivos duplicados

El proyecto tiene dos versiones de cada HTML. Borrar los archivos viejos y quedarse solo con los actualizados.

### Archivos a eliminar

```
C:\Dev\brana\vigente-v4.html
```
→ Reemplazado por `branding/atalaya-sistema-de-marca/atalaya/atalaya.html`. Ya no sirve.

```
C:\Dev\brana\branding\brana-web-design\branalabs.html
```
→ Reemplazado por `branding/brana-web-design/branalabs-standalone.html`. Ya no sirve.

### Archivos a conservar (fuentes de verdad)

| Producto | Archivo |
|---|---|
| Brana web | `branding/brana-web-design/branalabs-standalone.html` |
| Brana tokens | `branding/brana-sistema-de-marca/css/brana-tokens.css` |
| Brana UI | `branding/brana-sistema-de-marca/css/brana-ui.css` |
| Atalaya landing | `branding/atalaya-sistema-de-marca/atalaya/atalaya.html` |
| Atalaya tokens | `branding/atalaya-sistema-de-marca/atalaya/atalaya-tokens.css` |
| Atalaya UI | `branding/atalaya-sistema-de-marca/atalaya/atalaya-ui.css` |

### Actualizar CLAUDE.md

`C:\Dev\brana\CLAUDE.md` todavía describe la estructura vieja (menciona `vigente-v4.html` como archivo principal). Reemplazar la sección **Estructura del proyecto** con:

```
## Estructura del proyecto

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

---

## PARTE 2 — Revisión final de la landing de Atalaya

**Archivo:** `branding/atalaya-sistema-de-marca/atalaya/atalaya.html`

El archivo ya tiene el rename (Vigente → Atalaya), los tokens CSS conectados y los elementos de convivencia con Brana. Esta pasada es de calidad y consistencia — no es un rediseño.

### 2a. Verificar que los tokens estén aplicados correctamente

Revisar el bloque `<style>` interno y confirmar que:

- Todos los colores de fondo (`#080E1C`, `#060B18`, etc.) están reemplazados por `var(--bg)`, `var(--surface)`, `var(--surface-2)`.
- Los verdes hardcodeados (`#1A7A5E`, `#3db897`) están reemplazados por `var(--accent)` y `var(--accent-hover)`.
- Los bordes y sombras usan `var(--border)`, `var(--border-strong)`, `var(--e1)`, `var(--e2)`.
- El espaciado usa `var(--s1)` a `var(--s9)` donde corresponde (no hace falta 100% de cobertura — valores muy específicos de layout pueden quedarse hardcodeados).
- Los radios usan `var(--r-sm)`, `var(--r-md)`, `var(--r-lg)`, `var(--r-full)`.

Si quedan hex hardcodeados de los colores principales, reemplazarlos. El resultado visual no debe cambiar.

### 2b. Revisar el emoji del float chip en el hero

En el hero hay este elemento:
```html
<span class="chip-ico">🔔</span>
```

Los emojis pueden no renderizar bien en todos los sistemas. Si hay un SVG o ícono más robusto disponible, reemplazarlo. Si no, dejarlo como está — no es bloqueante.

### 2c. Verificar consistencia del isotipo en nav y footer

El `by Brana` del nav usa esta estructura:
```html
<span class="stack" style="--s:13px"><i></i><i class="a"></i><i></i></span>
```

El `Powered by Brana` del footer usa la misma estructura con `--s:14px`.

Verificar que ambos tengan el CSS del `.stack` correctamente definido en el `<style>` interno (que la capa `.a` tenga `background: var(--accent-hover)` = `#3db897`). Si el CSS falta o está incompleto, completarlo.

### 2d. Revisar el formulario — campo "herramienta_otro"

Hay lógica JS que muestra/oculta el campo `#otro-wrap` cuando se selecciona "Otro" en el select de herramienta. Verificar que ese JS funciona correctamente (debería estar en el bloque `<script>` al final).

### 2e. Webhook — dejar el placeholder claro

Buscar en el JS la lógica de submit del formulario (`#lf`). Asegurarse de que haya un comentario claro marcando exactamente dónde va el endpoint:

```js
/* CONECTAR WEBHOOK AQUÍ:
   fetch("https://TU-ENDPOINT", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data)
   });
*/
```

Si ya existe, verificar que el comentario sea claro. Si no existe, agregarlo en el lugar correcto dentro del handler de submit.

---

## Resultado esperado

Al finalizar:
- `vigente-v4.html` eliminado
- `branalabs.html` eliminado
- `CLAUDE.md` actualizado con la nueva estructura
- `atalaya.html` con tokens verificados, consistencia de marca confirmada y webhook marcado claramente
