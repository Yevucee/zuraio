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
const FIELD_MIN = 14;
const FIELD_MAX = 86;

function fmt(value) {
  return (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, '');
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clampField(value) {
  return clamp(value, FIELD_MIN, FIELD_MAX);
}

/** Pull coordinates inward when they drift too close to the diagram edge. */
function insetPoint(x, y) {
  let nx = clampField(x);
  let ny = clampField(y);
  const soft = 6;

  if (x < FIELD_MIN + soft) nx = FIELD_MIN + soft * 0.4 + (x - FIELD_MIN) * 0.35;
  if (x > FIELD_MAX - soft) nx = FIELD_MAX - soft * 0.4 - (FIELD_MAX - x) * 0.35;
  if (y < FIELD_MIN + soft) ny = FIELD_MIN + soft * 0.4 + (y - FIELD_MIN) * 0.35;
  if (y > FIELD_MAX - soft) ny = FIELD_MAX - soft * 0.4 - (FIELD_MAX - y) * 0.35;

  return { x: clampField(nx), y: clampField(ny) };
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

/** One continuous smooth scribble — stays inside the field, away from borders. */
function scribbleStroke(rand, segments, startX, startY, startAngle) {
  let x = clampField(startX);
  let y = clampField(startY);
  let angle = startAngle ?? rand() * Math.PI * 2;
  let d = `M ${fmt(x)} ${fmt(y)}`;

  for (let i = 0; i < segments; i++) {
    angle += (rand() - 0.5) * 2.6;

    // Bias direction toward centre when near an edge — avoids border-hugging
    const edgeDist = Math.min(x - FIELD_MIN, FIELD_MAX - x, y - FIELD_MIN, FIELD_MAX - y);
    if (edgeDist < 14) {
      const toCenter = Math.atan2(50 - y, 50 - x);
      angle = angle * 0.45 + toCenter * 0.55 + (rand() - 0.5) * 0.6;
    }

    const len = 10 + rand() * 18;
    const cpLen = len * (0.42 + rand() * 0.28);
    const wobble = (rand() - 0.5) * 1.4;

    const cp1 = insetPoint(
      x + Math.cos(angle - 0.45 + wobble) * cpLen,
      y + Math.sin(angle - 0.45 + wobble) * cpLen,
    );
    const cp2 = insetPoint(
      x + Math.cos(angle + 0.55 - wobble) * cpLen,
      y + Math.sin(angle + 0.55 - wobble) * cpLen,
    );
    const end = insetPoint(x + Math.cos(angle) * len, y + Math.sin(angle) * len);

    d += ` C ${fmt(cp1.x)} ${fmt(cp1.y)}, ${fmt(cp2.x)} ${fmt(cp2.y)}, ${fmt(end.x)} ${fmt(end.y)}`;
    x = end.x;
    y = end.y;
  }

  return d;
}

function interiorStart(rand) {
  return {
    x: FIELD_MIN + 6 + rand() * (FIELD_MAX - FIELD_MIN - 12),
    y: FIELD_MIN + 6 + rand() * (FIELD_MAX - FIELD_MIN - 12),
    a: rand() * Math.PI * 2,
  };
}

/**
 * Messy smooth scribbles — long wandering curves crossing the field,
 * overlapping loops, chaotic but fluid (confusion / tangled thoughts).
 */
function generateConfusionPaths() {
  const rand = createRng(626043);
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

  // Long traversing scribbles — start inside the field, wander inward
  for (let i = 0; i < 26; i++) {
    const start = interiorStart(rand);
    const segments = 3 + Math.floor(rand() * 3);
    push(scribbleStroke(rand, segments, start.x, start.y, start.a));
  }

  // Mid-field tangles — start inside, loop back on themselves
  for (let i = 0; i < 16; i++) {
    const start = interiorStart(rand);
    push(scribbleStroke(rand, 4 + Math.floor(rand() * 2), start.x, start.y));
  }

  // Loose loops and knots — small circular scribbles, inset from edges
  for (let i = 0; i < 22; i++) {
    const cx = FIELD_MIN + 4 + rand() * (FIELD_MAX - FIELD_MIN - 8);
    const cy = FIELD_MIN + 4 + rand() * (FIELD_MAX - FIELD_MIN - 8);
    const r = 1.6 + rand() * 2.6;
    push(ellipseLoop(cx, cy, r * (0.8 + rand() * 0.4), r * (0.8 + rand() * 0.4)), {
      opacity: 0.26 + rand() * 0.12,
      width: 0.5 + rand() * 0.04,
    });
  }

  // Interior crossing arcs — span the field without hugging the border
  const arcs = [
    'M 22 26 C 34 20, 48 24, 58 36 C 68 48, 74 60, 76 72',
    'M 78 24 C 66 30, 54 38, 46 48 C 38 58, 30 68, 24 76',
    'M 24 44 C 32 32, 42 28, 54 34 C 66 40, 74 52, 78 66',
    'M 76 42 C 68 34, 58 36, 46 48 C 36 58, 28 68, 22 74',
    'M 28 22 C 38 28, 44 40, 48 50 C 52 60, 58 72, 68 78',
    'M 72 22 C 62 28, 56 40, 52 50 C 48 60, 42 72, 32 78',
    'M 20 52 C 28 46, 38 44, 50 48 C 62 52, 72 54, 80 50',
    'M 80 48 C 72 44, 62 46, 50 48 C 38 50, 28 48, 20 46',
    'M 26 28 C 34 38, 38 52, 36 64 C 34 72, 28 78, 22 82',
    'M 74 28 C 66 38, 62 52, 64 64 C 66 72, 72 78, 78 82',
    'M 24 32 C 32 40, 38 52, 42 64 C 46 74, 54 80, 64 82',
    'M 76 32 C 68 40, 62 52, 58 64 C 54 74, 46 80, 36 82',
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
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 5.5C6 5.5 4.5 7.8 4.5 10.2c-1 .5-1.6 1.5-1.6 2.7 0 1.6 1.1 3 2.6 3.4.5 2.4 2.6 4.2 5.2 4.5"/><path d="M15.5 5.5C18 5.5 19.5 7.8 19.5 10.2c1 .5 1.6 1.5 1.6 2.7 0 1.6-1.1 3-2.6 3.4-.5 2.4-2.6 4.2-5.2 4.5"/><path d="M12 5.5v14"/><path d="M8 9.5c1 .6 2.2.9 3.3.7"/><path d="M16 9.5c-1 .6-2.2.9-3.3.7"/><path d="M7.5 13c1.2.8 2.6 1.2 4.1 1.1"/><path d="M16.5 13c-1.2.8-2.6 1.2-4.1 1.1"/><path d="M9 16.5c1 .5 2 .7 3 .7s2-.2 3-.7"/><path d="M9.5 7c.7-.4 1.5-.6 2.5-.5"/><path d="M14.5 7c-.7-.4-1.5-.6-2.5-.5"/></svg>',
};

export const SVG_DEFS = `<defs>
  <marker id="sk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#b8c878" opacity="0.55"/>
  </marker>
</defs>`;
