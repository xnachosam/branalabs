# Decisiones

Solo lo que tiene que decidir el dueño del proyecto. Cada una lleva la recomendación del orquestador; con responder "ok" se toma la recomendada.

## Pendientes

### D6 — Cargar las URLs de Make en Vercel (acción tuya, ~3 min) ⚠️ bloquea el deploy de los formularios
Vercel → proyecto branalabs → Settings → Environment Variables → agregar dos variables (entorno: Production y Preview):
- `MAKE_WEBHOOK_ATALAYA` = la URL del webhook de Atalaya (la que empieza con `https://hook.us2.make.com/vodd…`; está en Make, o en `public/atalaya/index.html` de `main`).
- `MAKE_WEBHOOK_BRANA` = la URL del webhook de Brana (`https://hook.us2.make.com/7n9i…`).
Después avisame y hago el deploy y la prueba.

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
