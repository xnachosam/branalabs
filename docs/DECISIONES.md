# Decisiones

Solo lo que tiene que decidir el dueño del proyecto. Cada una lleva la recomendación del orquestador; con responder "ok" se toma la recomendada.

## Pendientes

### D6 — Webhooks de Make: generar URLs nuevas y cargarlas en Vercel (acción tuya, ~10 min) ⚠️ bloquea el deploy de los formularios
Las URLs actuales estuvieron públicas en el HTML y quedan en el historial de git: cualquiera puede mandarles datos basura salteando el antispam. Para que la protección sirva:
1. **Recomendado:** en Make, en cada escenario (Brana y Atalaya), abrí el módulo Webhook → "Add" para crear un webhook nuevo → copiá la URL nueva. Si Make pide "Redetermine data structure", hacelo después del primer envío de prueba (lo hago yo). Borrá el webhook viejo cuando confirmemos que el nuevo anda.
   _Alternativa rápida:_ usar las URLs actuales (`vodd…` y `7n9i…`) y rotarlas más adelante.
2. En Vercel → proyecto branalabs → Settings → Environment Variables, agregá (marcando Production y Preview):
   - `MAKE_WEBHOOK_ATALAYA` = URL del webhook de Atalaya
   - `MAKE_WEBHOOK_BRANA` = URL del webhook de Brana
3. Avisame: mergeo a main, hago un envío de prueba real a cada formulario (nombre "Prueba Claude") y verifico que llegue.

### D7 — Activar Vercel Web Analytics (acción tuya, 1 min)
Vercel → proyecto branalabs → Analytics → Enable. El código ya está listo.

### D5b — Dónde se guardan los leads
Hoy los formularios mandan los datos a Make.com y no sabemos dónde terminan. Hay que definirlo para la política de privacidad y para no perder leads. Opciones a evaluar juntos: Google Sheets (lo más simple), un CRM (HubSpot free, Notion) o una base propia.

## Resueltas

| # | Decisión | Fecha |
|---|---|---|
| D1 | Titular de Atalaya: **"pierdas"** (elegido por el dueño en lugar de "perdás") | 2026-11-02 |
| D2 | El sitio de Brana se edita en el repo (`public/`). Claude Design queda para explorar diseños | 2026-11-02 |
| D3 | Borrar las ramas `feat/vercel-deploy-*`: aprobado y ejecutado | 2026-11-02 |
| D4 | Analytics: Vercel Web Analytics. **El dueño tiene que activarlo en el dashboard de Vercel** | 2026-11-02 |
| D5 | Responsable de los datos: Juan Ignacio Sambrana, jsambrana@branalabs.com | 2026-11-02 |
