/** Search hub — dead centre of the diagram field. */
export const SCATTERED_HUB = { x: 50, y: 50 };

/** Fragment positions — spread around the centred search hub. */
export const SCATTERED_FRAGMENTS = [
  { id: 'magnifier', type: 'magnifier', x: 50, y: 50, drift: 5.5, delay: 0.3, fade: 7.8, hub: true },
  { id: 'document', type: 'document', x: 16, y: 14, drift: 6.2, delay: 0.1, fade: 6.4, flash: true },
  { id: 'email', type: 'email', x: 84, y: 12, drift: 6.8, delay: 0.6, fade: 7.2, flash: true },
  { id: 'folder', type: 'folder', x: 18, y: 62, drift: 5.8, delay: 1.1, fade: 5.6 },
  { id: 'database', type: 'database', x: 90, y: 54, drift: 7.0, delay: 0.4, fade: 6.8, flash: true },
  { id: 'calendar', type: 'calendar', x: 44, y: 8, drift: 6.4, delay: 1.8, fade: 7.6, secondary: true },
  { id: 'cloud', type: 'cloud', x: 94, y: 28, drift: 5.8, delay: 0.9, fade: 5.8 },
  { id: 'chat', type: 'chat', x: 8, y: 78, drift: 7.0, delay: 1.4, fade: 6.2, flash: true },
  { id: 'browser', type: 'browser', x: 26, y: 32, drift: 6.1, delay: 2.0, fade: 6.9, secondary: true },
  { id: 'spreadsheet', type: 'spreadsheet', x: 82, y: 76, drift: 5.6, delay: 1.6, fade: 5.4, secondary: true },
  { id: 'video', type: 'video', x: 56, y: 86, drift: 7.2, delay: 0.7, fade: 6.6 },
  { id: 'grid', type: 'grid', x: 34, y: 78, drift: 6.3, delay: 1.2, fade: 5.9 },
  { id: 'brain-upper', type: 'brain', x: 62, y: 20, drift: 5.0, delay: 0.8, fade: 5.2 },
  { id: 'brain-ne', type: 'brain', x: 74, y: 16, drift: 5.9, delay: 1.7, fade: 7.4, secondary: true },
  { id: 'brain-left', type: 'brain', x: 10, y: 38, drift: 6.2, delay: 0.4, fade: 7.0 },
  { id: 'brain-sw', type: 'brain', x: 22, y: 58, drift: 4.8, delay: 1.5, fade: 6.4 },
  { id: 'brain-lower', type: 'brain', x: 36, y: 92, drift: 5.4, delay: 1.3, fade: 6.2 },
  { id: 'brain-right', type: 'brain', x: 96, y: 60, drift: 6.6, delay: 0.9, fade: 5.6 },
  { id: 'brain-se', type: 'brain', x: 88, y: 68, drift: 5.8, delay: 2.1, fade: 4.8 },
];

/** Labels placed in open gaps — never on icon coordinates. */
export const SCATTERED_LABELS = [
  { id: 'whereIsIt', x: 6, y: 54, tier: 'medium', fade: 5.2, delay: 0.3 },
  { id: 'whoKnows', x: 72, y: 88, tier: 'large', fade: 7.4, delay: 1.1 },
  { id: 'latestVersion', x: 52, y: 98, tier: 'subtle', fade: 6.1, delay: 2.4 },
  { id: 'alreadyDone', x: 68, y: 6, tier: 'subtle', fade: 8.2, delay: 0.6 },
  { id: 'whichDocument', x: 48, y: 70, tier: 'medium', fade: 5.8, delay: 1.8 },
  { id: 'whoHasAccess', x: 4, y: 16, tier: 'emphasis', fade: 6.5, delay: 0.9 },
  { id: 'wasUpdated', x: 98, y: 38, tier: 'subtle', fade: 7.8, delay: 2.8 },
  { id: 'whoHasContext', x: 14, y: 72, tier: 'medium', fade: 5.5, delay: 1.5 },
  { id: 'howLong', x: 42, y: 24, tier: 'subtle', fade: 8.6, delay: 3.2 },
  { id: 'doneBefore', x: 76, y: 40, tier: 'emphasis', fade: 6.8, delay: 2.0 },
];

const STROKES = ['#b5c07a', '#c2cda8', '#a8b86e', '#d0d8bc', '#9aab78'];
const BEZIER_K = 0.5522847498;

function fmt(value) {
  return (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, '');
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/** Smooth closed ellipse — small thought loop. */
function ellipseLoop(cx, cy, rx, ry) {
  return [
    `M ${fmt(cx)} ${fmt(cy - ry)}`,
    `C ${fmt(cx + rx * BEZIER_K)} ${fmt(cy - ry)}, ${fmt(cx + rx)} ${fmt(cy - ry * BEZIER_K)}, ${fmt(cx + rx)} ${fmt(cy)}`,
    `C ${fmt(cx + rx)} ${fmt(cy + ry * BEZIER_K)}, ${fmt(cx + rx * BEZIER_K)} ${fmt(cy + ry)}, ${fmt(cx)} ${fmt(cy + ry)}`,
    `C ${fmt(cx - rx * BEZIER_K)} ${fmt(cy + ry)}, ${fmt(cx - rx)} ${fmt(cy + ry * BEZIER_K)}, ${fmt(cx - rx)} ${fmt(cy)}`,
    `C ${fmt(cx - rx)} ${fmt(cy - ry * BEZIER_K)}, ${fmt(cx - rx * BEZIER_K)} ${fmt(cy - ry)}, ${fmt(cx)} ${fmt(cy - ry)}`,
  ].join(' ');
}

/** One continuous smooth scribble — pen never lifts, direction wanders. */
function scribbleStroke(rand, segments, startX, startY, startAngle) {
  let x = startX;
  let y = startY;
  let angle = startAngle ?? rand() * Math.PI * 2;
  let d = `M ${fmt(x)} ${fmt(y)}`;

  for (let i = 0; i < segments; i++) {
    angle += (rand() - 0.5) * 2.6;
    const len = 11 + rand() * 22;
    const cpLen = len * (0.42 + rand() * 0.28);
    const wobble = (rand() - 0.5) * 1.4;

    const cp1x = clamp(x + Math.cos(angle - 0.45 + wobble) * cpLen, 2, 98);
    const cp1y = clamp(y + Math.sin(angle - 0.45 + wobble) * cpLen, 2, 98);
    const cp2x = clamp(x + Math.cos(angle + 0.55 - wobble) * cpLen, 2, 98);
    const cp2y = clamp(y + Math.sin(angle + 0.55 - wobble) * cpLen, 2, 98);
    const nx = clamp(x + Math.cos(angle) * len, 2, 98);
    const ny = clamp(y + Math.sin(angle) * len, 2, 98);

    d += ` C ${fmt(cp1x)} ${fmt(cp1y)}, ${fmt(cp2x)} ${fmt(cp2y)}, ${fmt(nx)} ${fmt(ny)}`;
    x = nx;
    y = ny;
  }

  return d;
}

function edgeStart(rand) {
  const edge = Math.floor(rand() * 4);
  if (edge === 0) return { x: 4 + rand() * 92, y: 3 + rand() * 10, a: Math.PI / 2 + (rand() - 0.5) };
  if (edge === 1) return { x: 90 + rand() * 7, y: 4 + rand() * 92, a: Math.PI + (rand() - 0.5) };
  if (edge === 2) return { x: 4 + rand() * 92, y: 90 + rand() * 7, a: -Math.PI / 2 + (rand() - 0.5) };
  return { x: 3 + rand() * 10, y: 4 + rand() * 92, a: (rand() - 0.5) };
}

/**
 * Messy smooth scribbles — long wandering curves crossing the field,
 * overlapping loops, chaotic but fluid (confusion / tangled thoughts).
 */
function generateConfusionPaths() {
  const rand = createRng(626042);
  const paths = [];
  let idx = 0;

  const push = (d, opts = {}) => {
    paths.push({
      d,
      stroke: STROKES[idx % STROKES.length],
      width: opts.width ?? 0.52 + (idx % 4) * 0.012,
      opacity: opts.opacity ?? 0.28 + rand() * 0.1,
      animate: opts.animate ?? (idx % 5 === 0 ? 'fade' : 'static'),
      delay: opts.delay ?? (idx % 12) * 0.22,
      duration: opts.duration ?? 11 + (idx % 8),
    });
    idx += 1;
  };

  // Long traversing scribbles — enter from edges, wander across the diagram
  for (let i = 0; i < 26; i++) {
    const start = edgeStart(rand);
    const segments = 3 + Math.floor(rand() * 3);
    push(scribbleStroke(rand, segments, start.x, start.y, start.a));
  }

  // Mid-field tangles — start inside, loop back on themselves
  for (let i = 0; i < 16; i++) {
    const x = 12 + rand() * 76;
    const y = 12 + rand() * 76;
    push(scribbleStroke(rand, 4 + Math.floor(rand() * 2), x, y));
  }

  // Loose loops and knots — small circular scribbles at random positions
  for (let i = 0; i < 22; i++) {
    const cx = 8 + rand() * 84;
    const cy = 8 + rand() * 84;
    const r = 1.6 + rand() * 2.6;
    push(ellipseLoop(cx, cy, r * (0.8 + rand() * 0.4), r * (0.8 + rand() * 0.4)), {
      opacity: 0.26 + rand() * 0.12,
      width: 0.5 + rand() * 0.04,
    });
  }

  // Wide crossing arcs — single smooth curves spanning the field
  const arcs = [
    'M 8 18 C 28 8, 48 14, 58 28 C 72 48, 82 62, 92 82',
    'M 92 16 C 74 22, 58 32, 46 44 C 34 58, 22 72, 10 88',
    'M 12 44 C 24 28, 38 22, 54 30 C 68 38, 78 52, 88 68',
    'M 88 42 C 72 36, 58 40, 44 52 C 32 64, 20 76, 8 90',
    'M 16 8 C 32 18, 42 34, 48 50 C 52 66, 58 82, 72 92',
    'M 84 8 C 68 20, 56 36, 52 50 C 48 64, 40 80, 24 92',
    'M 6 62 C 18 54, 32 48, 48 52 C 64 56, 78 60, 94 54',
    'M 94 38 C 80 42, 66 46, 52 48 C 38 50, 24 46, 6 42',
    'M 22 12 C 34 26, 40 42, 38 58 C 36 72, 28 84, 18 94',
    'M 78 12 C 66 26, 60 42, 62 58 C 64 72, 72 84, 82 94',
    'M 14 28 C 26 38, 36 52, 42 66 C 48 78, 58 86, 70 90',
    'M 86 28 C 74 38, 64 52, 58 66 C 52 78, 42 86, 30 90',
  ];

  for (const arc of arcs) {
    push(arc, { opacity: 0.3 + rand() * 0.08, animate: idx % 3 === 0 ? 'fade' : 'static' });
  }

  return paths;
}

export const SCATTERED_PATHS = generateConfusionPaths();

export const FRAGMENT_SVGS = {
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h6l4 4v12H8z"/><path d="M14 4v4h4M10 12h6M10 16h4"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h6l2 2h8v9H4z"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.2A3.5 3.5 0 0 0 7 17z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/></svg>',
  magnifier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m20 20-4.2-4.2"/></svg>',
  browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01"/></svg>',
  spreadsheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 14h16M10 4v16M14 4v16"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 5C6.5 5 5.5 8 5.5 10.5c-1.2 1-1.2 3 0 4 .3 2.2 2.2 4 4.5 4.5 1 1.8 2.5 2.5 4.5 2.5s3.5-.7 4.5-2.5c2.3-.5 4.2-2.3 4.5-4.5 1.2-1 1.2-3 0-4C18.5 8 17.5 5 14.5 5c-1.2 0-2 .4-2.8 1.2C10.5 5.4 9.8 5 9.5 5z"/><path d="M12 5v14"/><path d="M8.5 10.5c1.2.5 2.5.7 3.5.7s2.3-.2 3.5-.7"/><path d="M8.5 13.5c1.2-.4 2.5-.6 3.5-.6s2.3.2 3.5.6"/><path d="M9 16.5c.9.4 1.9.6 3 .6s2.1-.2 3-.6"/></svg>',
};

export const SVG_DEFS = `<defs>
  <marker id="sk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#b8c878" opacity="0.55"/>
  </marker>
</defs>`;
