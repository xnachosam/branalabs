// Proxy de leads: recibe los formularios de branalabs.com y /atalaya y los reenvía a Make.com.
// Mantiene las URLs de los webhooks fuera del HTML público y filtra spam básico.
//
// Contrato: POST /api/lead  (JSON)  { site: "brana" | "atalaya", ...campos, website (honeypot), utm_*, pagina, referrer }
// Respuestas: 200 { ok: true } · 4xx/5xx { ok: false, error }

// Las URLs de Make se configuran como variables de entorno en Vercel (Project → Settings → Environment Variables).
const WEBHOOKS = {
  brana: process.env.MAKE_WEBHOOK_BRANA,
  atalaya: process.env.MAKE_WEBHOOK_ATALAYA,
};

// Campos aceptados por sitio (el resto se descarta). `required` = obligatorios.
const FIELDS = {
  brana: {
    allowed: ["name", "email", "message"],
    required: ["name", "email", "message"],
  },
  atalaya: {
    allowed: ["perfil", "clientes", "herramienta", "herramienta_otro", "perdida", "falta", "precio", "nombre", "contacto"],
    required: ["perfil", "clientes", "herramienta", "perdida", "nombre", "contacto"],
  },
};

const META = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "pagina", "referrer"];
const MAX_LEN = 4000;
const ALLOWED_HOSTS = /^(branalabs\.com|www\.branalabs\.com|[a-z0-9-]+\.vercel\.app|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // algunos navegadores no lo mandan en same-origin
  try { return ALLOWED_HOSTS.test(new URL(origin).host); } catch { return false; }
}

function clean(v) {
  if (v === undefined || v === null) return "";
  return String(v).trim().slice(0, MAX_LEN);
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body);
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return send(res, 405, { ok: false, error: "method_not_allowed" });
  }
  if (!originAllowed(req)) return send(res, 403, { ok: false, error: "forbidden" });

  let body;
  try { body = await readBody(req); } catch { return send(res, 400, { ok: false, error: "invalid_json" }); }
  if (!body || typeof body !== "object") return send(res, 400, { ok: false, error: "invalid_json" });

  const site = clean(body.site);
  const spec = FIELDS[site];
  if (!spec) return send(res, 400, { ok: false, error: "unknown_site" });

  // Honeypot: si un bot completó el campo oculto, respondemos OK sin reenviar.
  if (clean(body.website)) return send(res, 200, { ok: true });

  const lead = {};
  for (const k of spec.allowed) lead[k] = clean(body[k]);
  const missing = spec.required.filter((k) => !lead[k]);
  if (site === "atalaya" && lead.herramienta === "Otro" && !lead.herramienta_otro) missing.push("herramienta_otro");
  if (site === "brana" && lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) missing.push("email");
  if (missing.length) return send(res, 422, { ok: false, error: "missing_fields", fields: missing });

  for (const k of META) { const v = clean(body[k]); if (v) lead[k] = v; }
  lead.sitio = site;
  lead.fecha = new Date().toISOString();

  if (!WEBHOOKS[site]) {
    console.error("webhook_not_configured", site);
    return send(res, 500, { ok: false, error: "not_configured" });
  }

  try {
    const r = await fetch(WEBHOOKS[site], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) {
      console.error("make_error", site, r.status);
      return send(res, 502, { ok: false, error: "upstream_error" });
    }
  } catch (e) {
    console.error("make_unreachable", site, e && e.message);
    return send(res, 502, { ok: false, error: "upstream_unreachable" });
  }
  return send(res, 200, { ok: true });
};
