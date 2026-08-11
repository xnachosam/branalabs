// Membrana v2 — refined direction (naming: "Brana", sin "Labs")
// plus three sister variants sharing the same visual language:
// dark neutral base, parallel-planes geometry, single accent, sans + mono.

const HANKEN = "'Hanken Grotesk', sans-serif";
const SPACEG = "'Space Grotesk', sans-serif";
const PLEXM = "'IBM Plex Mono', monospace";

const MBASE = {
  brandName: 'Brana',
  head: HANKEN, body: HANKEN, mono: PLEXM, headWeight: 700,
  bg: '#0B0C10', surface: '#14161D', border: '#242836',
  text: '#F2F3F8', muted: '#9BA0AE', faint: '#5C616F',
  lightBg: '#F7F8FB', lightSurface: '#FFFFFF', lightBorder: '#E3E6EE',
  lightText: '#14161D', lightMuted: '#686E7E',
  eyebrow: 'Brana — Casa matriz de software',
  sub: 'Brana desarrolla y opera productos SaaS verticales. Cada uno con identidad propia, todos sobre la misma base técnica.',
  tagline: 'Casa matriz de software vertical',
  lockupUsesIso: true,
};

const baseGroups = (accentLabel, accentItems) => [
  { label: 'Fondos · Dark (default)', items: [
    { hex: '#0B0C10', name: 'Base', use: 'Fondo principal' },
    { hex: '#14161D', name: 'Superficie', use: 'Cards, paneles' },
    { hex: '#242836', name: 'Borde', use: 'Divisores, strokes' },
  ]},
  { label: 'Texto', items: [
    { hex: '#F2F3F8', name: 'Texto', use: 'Títulos, énfasis' },
    { hex: '#9BA0AE', name: 'Secundario', use: 'Body, descripciones' },
    { hex: '#5C616F', name: 'Terciario', use: 'Metadatos, hints' },
  ]},
  { label: accentLabel, items: accentItems },
  { label: 'Light mode', light: true, items: [
    { hex: '#F7F8FB', name: 'Fondo', use: 'Fondo claro' },
    { hex: '#E3E6EE', name: 'Borde', use: 'Divisores' },
    { hex: '#14161D', name: 'Texto', use: 'Texto principal' },
  ]},
];

const hankenFamilies = [
  { family: HANKEN, name: 'Hanken Grotesk', role: 'Headings, body y UI', weights: '400 · 500 · 600 · 700', specimenWeight: 700 },
  { family: PLEXM, name: 'IBM Plex Mono', role: 'Etiquetas y datos', weights: '400 · 500', specimenWeight: 400 },
];

// ============ M1 · MEMBRANA (refinada) ============

const IsoM1 = ({ size = 64, fg = '#F2F3F8', accent = '#4A6BE8' }) => {
  const bar = Math.max(Math.round(size * 0.2), 2);
  const w = size * 0.68;
  const step = size - w;
  return (
    <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: w, height: bar, background: fg }}></div>
      <div style={{ position: 'absolute', top: '50%', marginTop: -bar / 2, left: step / 2, width: w, height: bar, background: accent }}></div>
      <div style={{ position: 'absolute', bottom: 0, left: step, width: w, height: bar, background: fg }}></div>
    </div>
  );
};

const WordM1 = ({ size = 40, color = '#F2F3F8' }) => (
  <span style={{ fontFamily: HANKEN, fontWeight: 700, fontSize: size, letterSpacing: '-0.025em', lineHeight: 1, color }}>Brana</span>
);

const ThemeM1 = {
  ...MBASE,
  id: 'm1',
  name: 'B1 · Membrana',
  concept: 'La dirección elegida, refinada con el naming "Brana". Tres planos desplazados — el del medio en azul: la matriz sostiene productos que no se tocan.',
  accent: '#4A6BE8', accentHover: '#6D88EE', accentInk: '#FFFFFF', accentOnLight: '#3A53C4',
  eyebrowColor: '#6D88EE',
  headline: 'Una matriz. Múltiples planos.',
  Isotipo: IsoM1, Wordmark: WordM1,
  families: hankenFamilies,
  swatchGroups: baseGroups('Acento · Azul Brana', [
    { hex: '#4A6BE8', name: 'Azul Brana', use: 'CTAs, links, foco' },
    { hex: '#6D88EE', name: 'Azul hover', use: 'Estados hover' },
    { hex: '#3A53C4', name: 'Azul sobre claro', use: 'Acento en light mode' },
  ]),
};

// ============ M2 · ESTRATO ============
// Pila isométrica: capas con profundidad. Space Grotesk en wordmark
// y headings para una voz más geométrica. Índigo.

const IsoM2 = ({ size = 64, fg = '#F2F3F8', accent = '#6A5BEA' }) => {
  const d = size * 0.58;
  const layer = (top, color, z) => (
    <div key={top} style={{
      position: 'absolute', left: '50%', top, width: d, height: d, zIndex: z,
      transform: 'translateX(-50%) scaleY(0.5) rotate(45deg)', background: color,
    }}></div>
  );
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {layer(size * 0.34, fg, 1)}
      {layer(size * 0.17, accent, 2)}
      {layer(0, fg, 3)}
    </div>
  );
};

const WordM2 = ({ size = 40, color = '#F2F3F8' }) => (
  <span style={{ fontFamily: SPACEG, fontWeight: 700, fontSize: size, letterSpacing: '-0.03em', lineHeight: 1, color }}>Brana</span>
);

const ThemeM2 = {
  ...MBASE,
  id: 'm2',
  name: 'B2 · Estrato',
  concept: 'La pila isométrica: capas con profundidad — los productos se apilan sobre la base. Wordmark y headings en Space Grotesk (voz más geométrica). Acento índigo.',
  head: SPACEG,
  accent: '#6A5BEA', accentHover: '#8B7FEF', accentInk: '#FFFFFF', accentOnLight: '#5443C9',
  eyebrowColor: '#8B7FEF',
  headline: 'Capas de producto. Una sola base.',
  Isotipo: IsoM2, Wordmark: WordM2,
  families: [
    { family: SPACEG, name: 'Space Grotesk', role: 'Wordmark y headings', weights: '500 · 600 · 700', specimenWeight: 700 },
    { family: HANKEN, name: 'Hanken Grotesk', role: 'Body y UI', weights: '400 · 500 · 600 · 700', specimenWeight: 500 },
    { family: PLEXM, name: 'IBM Plex Mono', role: 'Etiquetas y datos', weights: '400 · 500', specimenWeight: 400 },
  ],
  swatchGroups: baseGroups('Acento · Índigo', [
    { hex: '#6A5BEA', name: 'Índigo Brana', use: 'CTAs, links, foco' },
    { hex: '#8B7FEF', name: 'Índigo hover', use: 'Estados hover' },
    { hex: '#5443C9', name: 'Índigo sobre claro', use: 'Acento en light mode' },
  ]),
};

// ============ M3 · INTERVALO ============
// La membrana es el espacio ENTRE planos: un bloque sólido con una
// ranura, y un plano celeste deslizándose en ella. Wordmark lowercase.

const IsoM3 = ({ size = 64, fg = '#F2F3F8', accent = '#4D9FDB' }) => (
  <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '42%', background: fg }}></div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '42%', background: fg }}></div>
    <div style={{ position: 'absolute', top: '46%', left: 0, width: '40%', height: '8%', background: accent }}></div>
  </div>
);

const WordM3 = ({ size = 40, color = '#F2F3F8', accent = '#4D9FDB' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.14 }}>
    <span style={{ fontFamily: HANKEN, fontWeight: 600, fontSize: size, letterSpacing: '-0.02em', lineHeight: 1, color }}>brana</span>
    <span style={{ width: size * 0.15, height: size * 0.15, background: accent, display: 'inline-block', flexShrink: 0 }}></span>
  </span>
);

const ThemeM3 = {
  ...MBASE,
  id: 'm3',
  name: 'B3 · Intervalo',
  concept: 'La membrana es el espacio entre planos: bloque sólido con una ranura y un plano celeste entrando en ella. Wordmark en minúsculas con punto-plano.',
  headWeight: 600,
  accent: '#4D9FDB', accentHover: '#74B6E5', accentInk: '#0A1620', accentOnLight: '#2F7BB5',
  eyebrowColor: '#74B6E5',
  headline: 'Productos distintos, matriz común.',
  Isotipo: IsoM3, Wordmark: WordM3,
  families: hankenFamilies,
  swatchGroups: baseGroups('Acento · Celeste', [
    { hex: '#4D9FDB', name: 'Celeste Brana', use: 'CTAs, links, foco' },
    { hex: '#74B6E5', name: 'Celeste hover', use: 'Estados hover' },
    { hex: '#2F7BB5', name: 'Celeste sobre claro', use: 'Acento en light mode' },
  ]),
};

// ============ M4 · PARALELO ============
// Dos planos verticales lado a lado: matriz y producto, uno a uno.
// Wordmark en mayúsculas con tracking. Acero sereno.

const IsoM4 = ({ size = 64, fg = '#F2F3F8', accent = '#7C8EC9' }) => (
  <div style={{ width: size, height: size, display: 'flex', gap: size * 0.16, justifyContent: 'center', flexShrink: 0 }}>
    <div style={{ width: size * 0.28, height: '100%', background: fg }}></div>
    <div style={{ width: size * 0.28, height: '76%', alignSelf: 'flex-end', background: accent }}></div>
  </div>
);

const WordM4 = ({ size = 40, color = '#F2F3F8' }) => (
  <span style={{ fontFamily: HANKEN, fontWeight: 800, fontSize: size * 0.9, letterSpacing: '0.12em', lineHeight: 1, color, textTransform: 'uppercase' }}>Brana</span>
);

const ThemeM4 = {
  ...MBASE,
  id: 'm4',
  name: 'B4 · Paralelo',
  concept: 'Dos planos en paralelo: matriz y producto, uno a uno. Wordmark en mayúsculas con tracking amplio; acero sereno como acento — la opción más sobria.',
  accent: '#7C8EC9', accentHover: '#97A6D6', accentInk: '#0B0C10', accentOnLight: '#56689F',
  eyebrowColor: '#97A6D6',
  headline: 'Software vertical, en paralelo.',
  Isotipo: IsoM4, Wordmark: WordM4,
  families: [
    { family: HANKEN, name: 'Hanken Grotesk', role: 'Headings, body y UI', weights: '400 · 500 · 600 · 700 · 800', specimenWeight: 800 },
    { family: PLEXM, name: 'IBM Plex Mono', role: 'Etiquetas y datos', weights: '400 · 500', specimenWeight: 400 },
  ],
  swatchGroups: baseGroups('Acento · Acero', [
    { hex: '#7C8EC9', name: 'Acero Brana', use: 'CTAs, links, foco' },
    { hex: '#97A6D6', name: 'Acero hover', use: 'Estados hover' },
    { hex: '#56689F', name: 'Acero sobre claro', use: 'Acento en light mode' },
  ]),
};

Object.assign(window, { ThemeM1, ThemeM2, ThemeM3, ThemeM4 });
