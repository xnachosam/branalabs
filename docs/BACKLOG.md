# Backlog

Lo mantiene el orquestador. Estados: `pendiente`, `en curso`, `bloqueado (D#)` (esperando una decisión de `DECISIONES.md`), `hecho`.

## P1 — Para salir bien

| # | Tarea | Sitio | Agente | Estado |
|---|---|---|---|---|
| T1 | Corregir el titular "Nunca más perdas" | Atalaya | copy-marca | bloqueado (D1) |
| T2 | Formularios: mostrar éxito solo si Make responde OK, mostrar error y reintento si falla, bloquear doble envío, sacar `console.log` | ambos | web-dev | pendiente |
| T3 | Proteger el webhook: honeypot antispam + proxy en una función serverless de Vercel (`/api/lead`) para no exponer la URL de Make | ambos | web-dev | pendiente |
| T4 | Migrar el sitio de Brana a HTML plano: sacar React/Babel/Tweaks, mismo diseño, fijar el fondo "halo" | Brana | web-dev | bloqueado (D2) |
| T5 | Meta description, Open Graph y Twitter cards + imagen de preview para compartir | ambos | web-dev + copy-marca | pendiente |
| T6 | Analytics + capturar UTM y página de origen en cada lead | ambos | web-dev | bloqueado (D4) |

## P2 — Mejoras

| # | Tarea | Sitio | Agente | Estado |
|---|---|---|---|---|
| T7 | Política de privacidad (Ley 25.326) + link desde los formularios | ambos | copy-marca + web-dev | bloqueado (D5) |
| T8 | Reemplazar emojis por íconos SVG (features, trust, bandera del footer) | Atalaya | web-dev | pendiente |
| T9 | Accesibilidad: asociar labels del form, aria-label en el botón ✕ del drawer | Atalaya | web-dev | pendiente |
| T10 | Copy de Brana: sacar "Vertical · Seguros" y el "Powered by Brana" redundante | Brana | copy-marca | pendiente |
| T11 | Única fuente de verdad: `public/` como fuente de los sitios, borrar duplicados en `branding/*/uploads/` | repo | web-dev | bloqueado (D2) |
| T12 | Borrar las ramas viejas `feat/vercel-deploy-*` (local y remoto) | repo | orquestador | bloqueado (D3) |
| T13 | Sacar `atalaya-ui.css` de `public/` (no se usa) | Atalaya | web-dev | pendiente |
| T14 | `robots.txt` + `sitemap.xml` | ambos | web-dev | pendiente |
