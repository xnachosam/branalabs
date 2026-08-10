// Shared board components for the Brana Labs branding canvas.
// Consumes a "theme" object (see brand/directions.jsx) and renders
// the standard artboards: LogoBoard, PaletteBoard, TypeBoard,
// HeroBoard, AtalayaBoard, OGBoard.

const AT_GREEN = '#1A7A5E';
const AT_MINT = '#3db897';
const SYNE = "'Syne', sans-serif";

// ---------- primitives ----------

const Board = ({ theme, label, children, style }) => (
  <div
    data-screen-label={label}
    style={{
      width: '100%', height: '100%', boxSizing: 'border-box',
      background: theme.bg, color: theme.text, fontFamily: theme.body,
      padding: 32, display: 'flex', flexDirection: 'column', ...style,
    }}
  >
    {children}
  </div>
);

const Mono = ({ theme, children, color, size = 10, style }) => (
  <span style={{
    fontFamily: theme.mono, fontSize: size, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: color || theme.faint, ...style,
  }}>{children}</span>
);

const Tile = ({ theme, light, label, children, style }) => (
  <div style={{
    background: light ? theme.lightBg : theme.surface,
    border: `1px solid ${light ? theme.lightBorder : theme.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', boxSizing: 'border-box', ...style,
  }}>
    {children}
    {label ? (
      <span style={{
        position: 'absolute', bottom: 8, left: 10, fontFamily: theme.mono,
        fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: light ? theme.lightMuted : theme.faint,
      }}>{label}</span>
    ) : null}
  </div>
);

const BoardTitle = ({ theme, children }) => (
  <div style={{ marginBottom: 16 }}>
    <Mono theme={theme}>{children}</Mono>
  </div>
);

// ---------- Logo board ----------

const LogoBoard = ({ theme }) => {
  const Iso = theme.Isotipo;
  const Word = theme.Wordmark;
  return (
    <Board theme={theme} label={`${theme.name} — Logo`}>
      <BoardTitle theme={theme}>{theme.name} · Sistema de logo</BoardTitle>

      <Tile theme={theme} label="Lockup principal" style={{ height: 200, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {theme.lockupUsesIso ? <Iso size={52} fg={theme.text} bg={theme.surface} accent={theme.accent} /> : null}
          <Word size={48} color={theme.text} sub={theme.muted} accent={theme.accent} />
        </div>
      </Tile>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Tile theme={theme} label="Wordmark solo" style={{ height: 150 }}>
          <Word size={34} color={theme.text} sub={theme.muted} accent={theme.accent} />
        </Tile>
        <Tile theme={theme} label="Vertical" style={{ height: 150 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <Iso size={40} fg={theme.text} bg={theme.surface} accent={theme.accent} />
            <Word size={22} color={theme.text} sub={theme.muted} accent={theme.accent} />
          </div>
        </Tile>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.6fr', gap: 14 }}>
        <Tile theme={theme} label="64px" style={{ height: 120 }}>
          <Iso size={64} fg={theme.text} bg={theme.surface} accent={theme.accent} />
        </Tile>
        <Tile theme={theme} label="Favicon 32" style={{ height: 120 }}>
          <Iso size={32} fg={theme.text} bg={theme.surface} accent={theme.accent} />
        </Tile>
        <Tile theme={theme} label="16" style={{ height: 120 }}>
          <Iso size={16} fg={theme.text} bg={theme.surface} accent={theme.accent} />
        </Tile>
        <Tile theme={theme} light label="Sobre fondo claro" style={{ height: 120 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {theme.lockupUsesIso ? <Iso size={26} fg={theme.lightText} bg={theme.lightBg} accent={theme.accentOnLight || theme.accent} /> : null}
            <Word size={24} color={theme.lightText} sub={theme.lightMuted} accent={theme.accentOnLight || theme.accent} />
          </div>
        </Tile>
      </div>
    </Board>
  );
};

// ---------- Palette board ----------

const Swatch = ({ theme, item, light }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 }}>
    <div style={{
      height: 44, background: item.hex,
      border: `1px solid ${item.hex.toLowerCase() === theme.bg.toLowerCase() || light ? theme.border : 'transparent'}`,
      boxSizing: 'border-box',
    }}></div>
    <div style={{ lineHeight: 1.35 }}>
      <div style={{ fontSize: 12, fontWeight: 500, display: 'flex', justifyContent: 'space-between', gap: 6 }}>
        <span>{item.name}</span>
        <span style={{ fontFamily: theme.mono, fontSize: 10, color: theme.muted, fontWeight: 400 }}>{item.hex}</span>
      </div>
      <div style={{ fontSize: 10.5, color: theme.faint }}>{item.use}</div>
    </div>
  </div>
);

const PaletteBoard = ({ theme }) => (
  <Board theme={theme} label={`${theme.name} — Paleta`}>
    <BoardTitle theme={theme}>{theme.name} · Paleta</BoardTitle>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
      {theme.swatchGroups.map((g) => (
        <div key={g.label}>
          <div style={{ marginBottom: 8 }}>
            <Mono theme={theme} size={9.5} color={theme.muted}>{g.label}</Mono>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.max(g.items.length, 3)}, 1fr)`, gap: 14 }}>
            {g.items.map((it) => <Swatch key={it.hex + it.name} theme={theme} item={it} light={g.light} />)}
          </div>
        </div>
      ))}
    </div>
  </Board>
);

// ---------- Type board ----------

const TYPE_SCALE = [
  { label: 'Display · 56', size: 42, role: 'head', weightKey: 'headWeight', sample: 'Casa matriz de software' },
  { label: 'H1 · 40', size: 30, role: 'head', weightKey: 'headWeight', sample: 'Productos verticales, una matriz' },
  { label: 'H2 · 26', size: 21, role: 'head', weightKey: 'headWeight', sample: 'Construido y operado por Brana' },
  { label: 'Body · 16', size: 15, role: 'body', weight: 400, sample: (t) => `${t.brandName || 'Brana Labs'} desarrolla y opera SaaS verticales. Cada producto con identidad propia.` },
  { label: 'Small · 13', size: 12.5, role: 'body', weight: 400, sample: 'Texto secundario, ayudas y metadatos de interfaz.' },
  { label: 'Mono · 12', size: 12, role: 'mono', weight: 400, sample: 'branalabs.com/atalaya — v1.0.0' },
];

const TypeBoard = ({ theme }) => (
  <Board theme={theme} label={`${theme.name} — Tipografía`}>
    <BoardTitle theme={theme}>{theme.name} · Tipografía</BoardTitle>

    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${theme.families.length}, 1fr)`, gap: 14, marginBottom: 22 }}>
      {theme.families.map((f) => (
        <div key={f.name} style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: '16px 18px', boxSizing: 'border-box' }}>
          <div style={{ fontFamily: f.family, fontSize: 44, fontWeight: f.specimenWeight || 600, lineHeight: 1, marginBottom: 10 }}>Aa</div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{f.name}</div>
          <div style={{ fontSize: 11, color: theme.muted, marginBottom: 4 }}>{f.role}</div>
          <Mono theme={theme} size={9.5}>{f.weights}</Mono>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
      {TYPE_SCALE.map((row) => {
        const family = row.role === 'head' ? theme.head : row.role === 'mono' ? theme.mono : theme.body;
        const weight = row.weight || theme[row.weightKey] || 400;
        return (
          <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16, alignItems: 'baseline', borderTop: `1px solid ${theme.border}`, paddingTop: 9, paddingBottom: 9 }}>
            <Mono theme={theme} size={9.5}>{row.label}</Mono>
            <div style={{
              fontFamily: family, fontSize: row.size, fontWeight: weight, lineHeight: 1.2,
              letterSpacing: row.role === 'head' ? '-0.02em' : 0,
              color: row.role === 'mono' ? theme.muted : theme.text,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{typeof row.sample === 'function' ? row.sample(theme) : row.sample}</div>
          </div>
        );
      })}
    </div>
  </Board>
);

// ---------- Hero / landing board ----------

const HeroBoard = ({ theme }) => {
  const Iso = theme.Isotipo;
  const Word = theme.Wordmark;
  return (
    <Board theme={theme} label={`${theme.name} — Landing`} style={{ padding: 0 }}>
      {/* nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 44px', height: 74, borderBottom: `1px solid ${theme.border}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {theme.lockupUsesIso ? <Iso size={22} fg={theme.text} bg={theme.bg} accent={theme.accent} /> : null}
          <Word size={19} color={theme.text} sub={theme.muted} accent={theme.accent} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['Productos', 'Enfoque', 'Nosotros'].map((l) => (
            <span key={l} style={{ fontSize: 13.5, color: theme.muted }}>{l}</span>
          ))}
          <span style={{
            fontSize: 13, fontWeight: 500, padding: '8px 16px',
            background: theme.accent, color: theme.accentInk,
          }}>Contacto</span>
        </div>
      </div>

      {/* hero */}
      <div style={{ padding: '0 44px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: 18 }}>
          <Mono theme={theme} color={theme.eyebrowColor || theme.muted} size={11}>{theme.eyebrow}</Mono>
        </div>
        <h1 style={{
          margin: 0, fontFamily: theme.head, fontWeight: theme.headWeight,
          fontSize: 58, lineHeight: 1.06, letterSpacing: '-0.025em',
          maxWidth: 740, textWrap: 'pretty',
        }}>{theme.headline}</h1>
        <p style={{ margin: '20px 0 0', fontSize: 17, lineHeight: 1.55, color: theme.muted, maxWidth: 540 }}>{theme.sub}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
          <span style={{ fontSize: 14, fontWeight: 500, padding: '11px 22px', background: theme.accent, color: theme.accentInk }}>Ver productos</span>
          <span style={{ fontSize: 14, fontWeight: 500, padding: '11px 22px', border: `1px solid ${theme.border}`, color: theme.text }}>Hablemos</span>
        </div>
      </div>

      {/* products strip */}
      <div style={{ padding: '22px 44px 30px', borderTop: `1px solid ${theme.border}`, flexShrink: 0 }}>
        <div style={{ marginBottom: 14 }}>
          <Mono theme={theme} size={9.5}>Productos</Mono>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: theme.surface, border: `1px solid ${theme.border}`, padding: '16px 20px', boxSizing: 'border-box' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: AT_MINT, flexShrink: 0 }}></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 17, color: AT_MINT, lineHeight: 1.2 }}>Atalaya</div>
              <div style={{ fontSize: 12.5, color: theme.muted }}>Gestión para productores de seguros</div>
            </div>
            <span style={{ color: theme.faint, fontSize: 16 }}>→</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px dashed ${theme.border}`, padding: '16px 20px', boxSizing: 'border-box' }}>
            <Mono theme={theme} size={10}>Próximo vertical — 2026</Mono>
          </div>
        </div>
      </div>
    </Board>
  );
};

// ---------- Atalaya coexistence board ----------

const AtalayaBoard = ({ theme }) => {
  const Iso = theme.Isotipo;
  const Word = theme.Wordmark;
  return (
    <Board theme={theme} label={`${theme.name} — Convivencia Atalaya`}>
      <BoardTitle theme={theme}>{theme.name} · Convivencia con Atalaya</BoardTitle>

      {/* 1. shared header */}
      <div style={{ marginBottom: 6 }}>
        <Mono theme={theme} size={9.5} color={theme.muted}>Header con sub-marca de producto</Mono>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: theme.surface, border: `1px solid ${theme.border}`, padding: '0 20px', height: 58, marginBottom: 20, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {theme.lockupUsesIso
            ? <Iso size={20} fg={theme.text} bg={theme.surface} accent={theme.accent} />
            : <Word size={15} color={theme.text} sub={theme.muted} accent={theme.accent} />}
          <span style={{ width: 1, height: 22, background: theme.border }}></span>
          <span style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 17, color: AT_MINT }}>Atalaya</span>
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          {['Pólizas', 'Clientes', 'Cobranzas'].map((l) => (
            <span key={l} style={{ fontSize: 12.5, color: theme.muted }}>{l}</span>
          ))}
        </div>
      </div>

      {/* 2. Atalaya footer */}
      <div style={{ marginBottom: 6 }}>
        <Mono theme={theme} size={9.5} color={theme.muted}>Footer del sitio de Atalaya</Mono>
      </div>
      <div style={{ background: '#0D1714', border: '1px solid #1C2B25', padding: '22px 24px', marginBottom: 20, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 20, color: AT_MINT, marginBottom: 4 }}>Atalaya</div>
            <div style={{ fontSize: 12, color: '#7E948B' }}>La torre de control de tu cartera.</div>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 12, color: '#7E948B' }}>
            <span>Producto</span><span>Precios</span><span>Soporte</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1C2B25', marginTop: 18, paddingTop: 14 }}>
          <span style={{ fontSize: 11, color: '#5E7167' }}>© 2026 Atalaya</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: theme.mono, fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5E7167' }}>Construido por</span>
            <Iso size={13} fg="#C9CFCB" bg="#0D1714" accent={theme.accent} />
            <Word size={12} color="#C9CFCB" sub="#5E7167" accent={theme.accent} />
          </div>
        </div>
      </div>

      {/* 3. badge */}
      <div style={{ marginBottom: 6 }}>
        <Mono theme={theme} size={9.5} color={theme.muted}>Badge "powered by"</Mono>
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1px solid ${theme.border}`, padding: '7px 14px', borderRadius: 99 }}>
          <Iso size={12} fg={theme.text} bg={theme.bg} accent={theme.accent} />
          <span style={{ fontSize: 11.5, color: theme.muted }}>Powered by <span style={{ color: theme.text, fontWeight: 500 }}>Brana</span></span>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: theme.lightBg, border: `1px solid ${theme.lightBorder}`, padding: '7px 14px', borderRadius: 99 }}>
          <Iso size={12} fg={theme.lightText} bg={theme.lightBg} accent={theme.accentOnLight || theme.accent} />
          <span style={{ fontSize: 11.5, color: theme.lightMuted }}>Powered by <span style={{ color: theme.lightText, fontWeight: 500 }}>Brana</span></span>
        </div>
      </div>
    </Board>
  );
};

// ---------- OG board ----------

const OGBoard = ({ theme }) => {
  const Iso = theme.Isotipo;
  const Word = theme.Wordmark;
  return (
    <Board theme={theme} label={`${theme.name} — OG`} style={{ padding: 28, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Iso size={26} fg={theme.text} bg={theme.bg} accent={theme.accent} />
        <Mono theme={theme} size={9}>1200 × 630</Mono>
      </div>
      <div>
        <Word size={40} color={theme.text} sub={theme.muted} accent={theme.accent} />
        <div style={{ fontSize: 14, color: theme.muted, marginTop: 10 }}>{theme.tagline}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: theme.mono, fontSize: 11, color: theme.faint }}>branalabs.com</span>
        <span style={{ width: 28, height: 2, background: theme.accent }}></span>
      </div>
    </Board>
  );
};

Object.assign(window, {
  Board, Mono, Tile, BoardTitle,
  LogoBoard, PaletteBoard, TypeBoard, HeroBoard, AtalayaBoard, OGBoard,
  AT_GREEN, AT_MINT, SYNE,
});
