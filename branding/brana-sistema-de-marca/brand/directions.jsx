// The three identity directions for Brana Labs.
// Each theme bundles palette, fonts, logo components and copy.

// ============ A · MONOLITO ============
// Monocromo absoluto. La matriz: un bloque sólido con un corte —
// el espacio que Brana deja para que cada producto exista.

const IsoA = ({ size = 64, fg = '#FAFAFA', bg = '#0A0A0A' }) => (
  <div style={{ width: size, height: size, background: fg, position: 'relative', flexShrink: 0 }}>
    <div style={{ position: 'absolute', right: 0, bottom: 0, width: size * 0.42, height: size * 0.42, background: bg }}></div>
  </div>
);

const WordA = ({ size = 40, color = '#FAFAFA', sub = '#9E9E9E' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.28 }}>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: size, letterSpacing: '-0.03em', lineHeight: 1, color }}>Brana</span>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: Math.max(size * 0.3, 8), letterSpacing: '0.26em', lineHeight: 1, color: sub, textTransform: 'uppercase' }}>Labs</span>
  </span>
);

const ThemeA = {
  id: 'monolito',
  name: 'A · Monolito',
  concept: 'Monocromo absoluto. El bloque sólido con un corte: la matriz que deja espacio para cada producto. Sin color propio — el color lo ponen los productos.',
  head: "'Space Grotesk', sans-serif",
  body: "'Instrument Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
  headWeight: 700,
  bg: '#0A0A0A', surface: '#161616', border: '#272727',
  text: '#FAFAFA', muted: '#9E9E9E', faint: '#616161',
  accent: '#FAFAFA', accentHover: '#FFFFFF', accentInk: '#0A0A0A',
  accentOnLight: '#111111',
  lightBg: '#FAFAFA', lightSurface: '#FFFFFF', lightBorder: '#E5E5E5',
  lightText: '#111111', lightMuted: '#6B6B6B',
  eyebrow: 'Brana Labs — Casa matriz de software',
  eyebrowColor: '#9E9E9E',
  headline: 'Productos de software construidos para durar.',
  sub: 'Brana Labs desarrolla y opera SaaS verticales. Cada producto con su propia identidad; una sola matriz detrás.',
  tagline: 'Casa matriz de software vertical',
  Isotipo: IsoA, Wordmark: WordA, lockupUsesIso: true,
  families: [
    { family: "'Space Grotesk', sans-serif", name: 'Space Grotesk', role: 'Headings y wordmark', weights: '500 · 600 · 700', specimenWeight: 700 },
    { family: "'Instrument Sans', sans-serif", name: 'Instrument Sans', role: 'Body y UI', weights: '400 · 500 · 600', specimenWeight: 500 },
    { family: "'IBM Plex Mono', monospace", name: 'IBM Plex Mono', role: 'Etiquetas y datos', weights: '400 · 500', specimenWeight: 400 },
  ],
  swatchGroups: [
    { label: 'Fondos · Dark (default)', items: [
      { hex: '#0A0A0A', name: 'Negro base', use: 'Fondo principal' },
      { hex: '#161616', name: 'Superficie', use: 'Cards, paneles' },
      { hex: '#272727', name: 'Borde', use: 'Divisores, strokes' },
    ]},
    { label: 'Texto', items: [
      { hex: '#FAFAFA', name: 'Texto', use: 'Títulos, énfasis' },
      { hex: '#9E9E9E', name: 'Secundario', use: 'Body, descripciones' },
      { hex: '#616161', name: 'Terciario', use: 'Metadatos, hints' },
    ]},
    { label: 'Acento — el blanco ES el acento', items: [
      { hex: '#FAFAFA', name: 'Acción', use: 'Botones primarios' },
      { hex: '#0A0A0A', name: 'Tinta sobre acción', use: 'Texto en botones' },
      { hex: '#3db897', name: 'Atalaya', use: 'Solo en contexto de producto' },
    ]},
    { label: 'Light mode', light: true, items: [
      { hex: '#FAFAFA', name: 'Fondo', use: 'Fondo claro' },
      { hex: '#E5E5E5', name: 'Borde', use: 'Divisores' },
      { hex: '#111111', name: 'Texto', use: 'Texto principal' },
    ]},
  ],
};

// ============ B · MEMBRANA ============
// "Brana" como brana/membrana: planos paralelos. Tres planos
// desplazados = los productos; la matriz los sostiene. Azul eléctrico mínimo.

const IsoB = ({ size = 64, fg = '#F2F3F8', accent = '#4A6BE8' }) => {
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

const WordB = ({ size = 40, color = '#F2F3F8', sub = '#9BA0AE' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.24 }}>
    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: size, letterSpacing: '-0.025em', lineHeight: 1, color }}>Brana</span>
    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, fontSize: size * 0.52, letterSpacing: '-0.01em', lineHeight: 1, color: sub }}>Labs</span>
  </span>
);

const ThemeB = {
  id: 'membrana',
  name: 'B · Membrana',
  concept: '"Brana" como membrana: planos paralelos que conviven sin tocarse — cada producto es un plano, la matriz los sostiene. Azul eléctrico en dosis mínimas.',
  head: "'Hanken Grotesk', sans-serif",
  body: "'Hanken Grotesk', sans-serif",
  mono: "'IBM Plex Mono', monospace",
  headWeight: 700,
  bg: '#0B0C10', surface: '#14161D', border: '#242836',
  text: '#F2F3F8', muted: '#9BA0AE', faint: '#5C616F',
  accent: '#4A6BE8', accentHover: '#6D88EE', accentInk: '#FFFFFF',
  accentOnLight: '#3A53C4',
  lightBg: '#F7F8FB', lightSurface: '#FFFFFF', lightBorder: '#E3E6EE',
  lightText: '#14161D', lightMuted: '#686E7E',
  eyebrow: 'Brana Labs — Casa matriz de software',
  eyebrowColor: '#6D88EE',
  headline: 'Una matriz. Múltiples planos.',
  sub: 'Desarrollamos y operamos productos SaaS verticales. Cada uno con identidad propia, todos sobre la misma base técnica.',
  tagline: 'Casa matriz de software vertical',
  Isotipo: IsoB, Wordmark: WordB, lockupUsesIso: true,
  families: [
    { family: "'Hanken Grotesk', sans-serif", name: 'Hanken Grotesk', role: 'Headings, body y UI', weights: '400 · 500 · 600 · 700', specimenWeight: 700 },
    { family: "'IBM Plex Mono', monospace", name: 'IBM Plex Mono', role: 'Etiquetas y datos', weights: '400 · 500', specimenWeight: 400 },
  ],
  swatchGroups: [
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
    { label: 'Acento', items: [
      { hex: '#4A6BE8', name: 'Azul Brana', use: 'CTAs, links, foco' },
      { hex: '#6D88EE', name: 'Azul hover', use: 'Estados hover' },
      { hex: '#3A53C4', name: 'Azul sobre claro', use: 'Acento en light mode' },
    ]},
    { label: 'Light mode', light: true, items: [
      { hex: '#F7F8FB', name: 'Fondo', use: 'Fondo claro' },
      { hex: '#E3E6EE', name: 'Borde', use: 'Divisores' },
      { hex: '#14161D', name: 'Texto', use: 'Texto principal' },
    ]},
  ],
};

// ============ C · CURSOR ============
// Ingenieril. El cursor de terminal como símbolo: Brana escribe
// software. Wordmark lowercase, IBM Plex, ámbar cálido.

const IsoC = ({ size = 64, fg = '#F5F2EA', bg = '#171511', accent = '#E0A43F' }) => (
  <div style={{
    width: size, height: size, background: bg === '#FAF8F3' || bg === '#FFFFFF' ? '#171511' : '#1F1B14',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
    fontSize: size * 0.52, lineHeight: 1, color: '#F5F2EA', flexShrink: 0, boxSizing: 'border-box',
  }}>
    b<span style={{ color: accent }}>_</span>
  </div>
);

const WordC = ({ size = 40, color = '#F5F2EA', sub = '#A8A18F', accent = '#E0A43F' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.22 }}>
    <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: size, letterSpacing: '-0.025em', lineHeight: 1, color }}>brana</span>
    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: size * 0.44, lineHeight: 1, color: sub }}>
      <span style={{ color: accent }}>/</span>labs
    </span>
  </span>
);

const ThemeC = {
  id: 'cursor',
  name: 'C · Cursor',
  concept: 'Ingenieril y cálida. El cursor de terminal: Brana escribe software. Wordmark en minúsculas con "/labs" en mono; ámbar como única nota de color.',
  head: "'IBM Plex Sans', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
  headWeight: 600,
  bg: '#0D0C09', surface: '#171511', border: '#2B2619',
  text: '#F5F2EA', muted: '#A8A18F', faint: '#6A6453',
  accent: '#E0A43F', accentHover: '#EBBA66', accentInk: '#171203',
  accentOnLight: '#9C6F1E',
  lightBg: '#FAF8F3', lightSurface: '#FFFFFF', lightBorder: '#E8E3D7',
  lightText: '#171511', lightMuted: '#6E6859',
  eyebrow: 'brana labs — casa matriz de software',
  eyebrowColor: '#E0A43F',
  headline: 'Software vertical, operado con precisión.',
  sub: 'Construimos y operamos productos SaaS para industrias específicas. Una base técnica, muchas verticales.',
  tagline: 'Casa matriz de software vertical',
  Isotipo: IsoC, Wordmark: WordC, lockupUsesIso: false,
  families: [
    { family: "'IBM Plex Sans', sans-serif", name: 'IBM Plex Sans', role: 'Headings, body y UI', weights: '400 · 500 · 600 · 700', specimenWeight: 600 },
    { family: "'IBM Plex Mono', monospace", name: 'IBM Plex Mono', role: 'Wordmark "/labs", datos', weights: '400 · 500', specimenWeight: 400 },
  ],
  swatchGroups: [
    { label: 'Fondos · Dark (default)', items: [
      { hex: '#0D0C09', name: 'Base', use: 'Fondo principal' },
      { hex: '#171511', name: 'Superficie', use: 'Cards, paneles' },
      { hex: '#2B2619', name: 'Borde', use: 'Divisores, strokes' },
    ]},
    { label: 'Texto', items: [
      { hex: '#F5F2EA', name: 'Texto', use: 'Títulos, énfasis' },
      { hex: '#A8A18F', name: 'Secundario', use: 'Body, descripciones' },
      { hex: '#6A6453', name: 'Terciario', use: 'Metadatos, hints' },
    ]},
    { label: 'Acento', items: [
      { hex: '#E0A43F', name: 'Ámbar Brana', use: 'CTAs, cursor, foco' },
      { hex: '#EBBA66', name: 'Ámbar hover', use: 'Estados hover' },
      { hex: '#9C6F1E', name: 'Ámbar sobre claro', use: 'Acento en light mode' },
    ]},
    { label: 'Light mode', light: true, items: [
      { hex: '#FAF8F3', name: 'Fondo', use: 'Fondo claro' },
      { hex: '#E8E3D7', name: 'Borde', use: 'Divisores' },
      { hex: '#171511', name: 'Texto', use: 'Texto principal' },
    ]},
  ],
};

Object.assign(window, { ThemeA, ThemeB, ThemeC });
