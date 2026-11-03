# Bitácora del proyecto

Registro de cada suceso y cambio. Lo mantiene el orquestador (Claude). Lo más reciente arriba.

Formato: **fecha · tipo** — qué pasó · por qué · commit · resultado.
Tipos: `cambio`, `análisis`, `decisión`, `incidente`, `deploy`.

---

### 2026-11-02 · cambio — QA aprobó `feat/forms-proxy`
- Veredicto de qa-reviewer: **APROBADO**, sin bloqueantes. Verificó migración de Brana idéntica (CSS + markup), fuentes con md5 igual al original, contrato cliente↔`/api/lead`, accesibilidad y paridad public/branding.
- Menores corregidos (`a40e7c0`): el error de "Otro" ahora aparece en su propio campo; el mensaje de error de envío se inyecta al mostrarse para que lo anuncien los lectores de pantalla.
- Menores aceptados: si Make tarda >10 s puede llegar un lead duplicado tras un reintento (no se pierde nada); si un autocompletado llenara el honeypot, el lead se descarta (revisar si baja el volumen).
- Hallazgo de seguridad pasado al dueño: las URLs viejas de Make son públicas → rotarlas (D6).

### 2026-11-02 · cambio — Formularios por /api/lead + sitio Brana liviano (rama `feat/forms-proxy`)
- **Endpoint `/api/lead`** (`api/lead.js`, commit `03ba62a`, ya en producción): recibe los dos formularios y los reenvía a Make. Honeypot antispam, valida campos, descarta campos desconocidos, agrega `sitio`, `fecha`, UTM y página de origen. Las URLs de Make salen del código y pasan a variables de entorno de Vercel (el sistema de permisos frenó el primer intento por tenerlas escritas en el código, y es lo correcto). Probado en producción: GET → 405, honeypot → descartado.
- **Sitio Brana a HTML plano** (`3457915`, agente web-dev): 1.6 MB → 49 KB + 152 KB de fuentes propias. Sin React/Babel/Tweaks. Mismo markup de contenido.
- **Formulario Atalaya** (`45919b5`): éxito solo si el envío se confirma, error visible con reintento, sin doble envío, sin `console.log`. Labels accesibles. Analytics en los dos sitios.
- **Ramas viejas** `feat/vercel-deploy-*` borradas (D3). **Titular** "pierdas" corregido (`c4b28ff`, D1).
- Estado: rama en revisión de QA. **No se mergea a main hasta que el dueño cargue las variables de entorno (D6)**, porque sin ellas los formularios fallarían.

### 2026-11-02 · cambio — Sistema de gestión con agentes
- Se crearon los agentes `web-dev`, `qa-reviewer` y `copy-marca` en `.claude/agents/`.
- Se crearon `docs/BITACORA.md`, `docs/BACKLOG.md` y `docs/DECISIONES.md`.
- Se documentó el modo de operación en `CLAUDE.md`.
- Por qué: el dueño delega la gestión completa del proyecto y quiere decidir solo lo importante.

### 2026-11-02 · cambio — CLAUDE.md actualizado
- Describía la landing vieja "Vigente". Ahora refleja Brana + Atalaya, Vercel, `public/` y el flujo de git.
- Commit `bde96af` en `main`. Sin impacto en los sitios publicados.

### 2026-11-02 · análisis — Auditoría completa del repo
- Estado: dos sitios en producción (branalabs.com y branalabs.com/atalaya), formularios conectados a Make.com. Las tareas de los briefs anteriores están completas.
- Hallazgos principales (detalle en `BACKLOG.md`):
  - El sitio de Brana pesa 1.6 MB y carga ~4 MB de JS (React dev + Babel) solo para un panel de revisión de diseño invisible al público.
  - Los formularios muestran "Gracias" aunque el envío falle; el webhook está expuesto y sin antispam.
  - El titular de Atalaya dice "perdas" (error).
  - No hay analytics, meta description ni Open Graph en Atalaya, ni política de privacidad.
  - Archivos duplicados entre `branding/` y `public/`; 9 ramas viejas `feat/vercel-deploy-*`.
