# Bitácora del proyecto

Registro de cada suceso y cambio. Lo mantiene el orquestador (Claude). Lo más reciente arriba.

Formato: **fecha · tipo** — qué pasó · por qué · commit · resultado.
Tipos: `cambio`, `análisis`, `decisión`, `incidente`, `deploy`.

---

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
