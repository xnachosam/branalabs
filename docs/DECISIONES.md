# Decisiones

Solo lo que tiene que decidir el dueño del proyecto. Cada una lleva la recomendación del orquestador; con responder "ok" se toma la recomendada.

## Pendientes

### D1 — Titular de Atalaya
Hoy dice "Nunca más **perdas** una renovación", que está mal escrito.
- **Recomendado:** "Nunca más **perdás** una renovación" (voseo, igual que "Gestioná", "Traé" en el resto de la página).
- Alternativa: "Nunca más **pierdas** una renovación" (neutro).

### D2 — Dónde se edita el sitio de Brana de ahora en más
Para que cargue rápido hay que pasarlo a HTML plano (T4). El costo es que deja de ser el export de Claude Design: si después se re-exporta desde Claude Design y se pega encima, se pierden los arreglos.
- **Recomendado:** a partir de ahora se edita en el repo (`public/`). Claude Design queda para explorar diseños nuevos, y lo que se apruebe se baja a código.
- Alternativa: seguir con Claude Design como fuente y solo limpiar el export cada vez que se baje (más trabajo y más frágil).

### D3 — Borrar las 9 ramas `feat/vercel-deploy-*`
Están todas mergeadas en `main` y no tienen nada propio. Borrarlas en GitHub no se puede deshacer fácilmente, aunque los commits siguen en `main`.
- **Recomendado:** borrarlas.

### D4 — Herramienta de analytics
- **Recomendado:** Vercel Web Analytics. Ya están en Vercel, no usa cookies (no hace falta banner) y tiene plan gratuito. Hay que activarlo vos en el dashboard de Vercel (Project → Analytics → Enable).
- Alternativas: Plausible (pago, muy simple) o Google Analytics 4 (gratis, pero requiere banner de cookies y es más invasivo).

### D5 — Datos para la política de privacidad
Para redactarla necesito: razón social o nombre del responsable de los datos, CUIT (opcional), email de contacto para pedidos de baja, y si los leads se guardan en algún lugar además de Make (Google Sheets, CRM, etc.).

## Resueltas

_(ninguna todavía)_
