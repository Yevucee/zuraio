/** Search hub — dead centre of the diagram field. */
export const SCATTERED_HUB = { x: 50, y: 50 };

/** Icon assets from the shared Icon-cloud library. */
const ICON = '../zuraio/assets/Icon-cloud';

/** Fragment positions — spread around the centred search hub. */
export const SCATTERED_FRAGMENTS = [
  { id: 'magnifier', type: 'magnifier', x: 50, y: 50, drift: 5.5, delay: 0.3, fade: 7.8, hub: true },
  { id: 'word-doc', type: 'word', x: 18, y: 18, drift: 6.2, delay: 0.1, fade: 6.4, flash: true },
  { id: 'gmail', type: 'gmail', x: 82, y: 16, drift: 6.8, delay: 0.6, fade: 7.2, flash: true },
  { id: 'pdf', type: 'pdf', x: 22, y: 62, drift: 5.8, delay: 1.1, fade: 5.6 },
  { id: 'database', type: 'database', x: 86, y: 52, drift: 7.0, delay: 0.4, fade: 6.8, flash: true },
  { id: 'clock-upper', type: 'clock', clockVariant: 1, x: 46, y: 14, drift: 6.4, delay: 1.8, fade: 7.6, secondary: true },
  { id: 'cloud', type: 'cloud', x: 88, y: 30, drift: 5.8, delay: 0.9, fade: 5.8 },
  { id: 'slack', type: 'slack', x: 14, y: 76, drift: 7.0, delay: 1.4, fade: 6.2, flash: true },
  { id: 'outlook', type: 'outlook', x: 30, y: 34, drift: 6.1, delay: 2.0, fade: 6.9, secondary: true },
  { id: 'teams', type: 'teams', x: 78, y: 72, drift: 5.6, delay: 1.6, fade: 5.4, secondary: true },
  { id: 'voice', type: 'voice', x: 54, y: 84, drift: 7.2, delay: 0.7, fade: 6.6 },
  { id: 'sharepoint', type: 'sharepoint', x: 36, y: 76, drift: 6.3, delay: 1.2, fade: 5.9 },
  { id: 'question', type: 'questionmark', x: 64, y: 24, drift: 4.5, delay: 0.5, fade: 8.0 },
  { id: 'brain-upper', type: 'brain', x: 60, y: 22, drift: 5.0, delay: 0.8, fade: 5.2 },
  { id: 'brain-ne', type: 'brain', x: 72, y: 20, drift: 5.9, delay: 1.7, fade: 7.4, secondary: true },
  { id: 'brain-left', type: 'brain', x: 16, y: 40, drift: 6.2, delay: 0.4, fade: 7.0 },
  { id: 'brain-sw', type: 'brain', x: 26, y: 56, drift: 4.8, delay: 1.5, fade: 6.4 },
  { id: 'brain-lower', type: 'brain', x: 40, y: 88, drift: 5.4, delay: 1.3, fade: 6.2 },
  { id: 'brain-right', type: 'brain', x: 92, y: 58, drift: 6.6, delay: 0.9, fade: 5.6 },
  { id: 'brain-se', type: 'brain', x: 84, y: 66, drift: 5.8, delay: 2.1, fade: 4.8 },
  { id: 'clock-left', type: 'clock', clockVariant: 2, x: 12, y: 58, drift: 6.2, delay: 0.4, fade: 6.0, clockAnim: 28 },
  { id: 'clock-lower', type: 'clock', clockVariant: 3, x: 48, y: 88, drift: 5.4, delay: 1.3, fade: 5.8, clockAnim: 32 },
];

/** Labels placed in open gaps — never on icon coordinates. */
export const SCATTERED_LABELS = [
  { id: 'whereIsIt', x: 8, y: 52, tier: 'medium', fade: 5.2, delay: 0.3 },
  { id: 'whoKnows', x: 70, y: 86, tier: 'large', fade: 7.4, delay: 1.1 },
  { id: 'latestVersion', x: 50, y: 96, tier: 'subtle', fade: 6.1, delay: 2.4 },
  { id: 'alreadyDone', x: 66, y: 8, tier: 'subtle', fade: 8.2, delay: 0.6 },
  { id: 'whichDocument', x: 46, y: 68, tier: 'medium', fade: 5.8, delay: 1.8 },
  { id: 'whoHasAccess', x: 6, y: 18, tier: 'emphasis', fade: 6.5, delay: 0.9 },
  { id: 'wasUpdated', x: 94, y: 40, tier: 'subtle', fade: 7.8, delay: 2.8 },
  { id: 'whoHasContext', x: 16, y: 70, tier: 'medium', fade: 5.5, delay: 1.5 },
  { id: 'howLong', x: 40, y: 26, tier: 'subtle', fade: 8.6, delay: 3.2 },
  { id: 'doneBefore', x: 74, y: 42, tier: 'emphasis', fade: 6.8, delay: 2.0 },
];

const STROKES = ['#b5c07a', '#c2cda8', '#a8b86e', '#d0d8bc', '#9aab78'];
const BEZIER_K = 0.5522847498;

/** Keep scribbles well inside the frame — never hugging edges. */
const SAFE = { min: 26, max: 74 };
const CLUSTER_RADIUS = 24;

function fmt(value) {
  return (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, '');
}

function distFromHub(x, y) {
  return Math.hypot(x - SCATTERED_HUB.x, y - SCATTERED_HUB.y);
}

function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/** Pull points back toward the central confusion cluster. */
function constrainPoint(x, y, rand) {
  let nx = x;
  let ny = y;

  if (nx < SAFE.min) nx = SAFE.min + rand() * 4;
  if (nx > SAFE.max) nx = SAFE.max - rand() * 4;
  if (ny < SAFE.min) ny = SAFE.min + rand() * 4;
  if (ny > SAFE.max) ny = SAFE.max - rand() * 4;

  const dist = distFromHub(nx, ny);
  if (dist > CLUSTER_RADIUS) {
    const angle = Math.atan2(ny - SCATTERED_HUB.y, nx - SCATTERED_HUB.x);
    const r = CLUSTER_RADIUS * (0.78 + rand() * 0.2);
    nx = SCATTERED_HUB.x + Math.cos(angle) * r;
    ny = SCATTERED_HUB.y + Math.sin(angle) * r;
  }

  return { x: nx, y: ny };
}

function randomInCluster(rand) {
  const angle = rand() * Math.PI * 2;
  const r = Math.pow(rand(), 0.55) * CLUSTER_RADIUS * 0.92;
  return {
    x: SCATTERED_HUB.x + Math.cos(angle) * r,
    y: SCATTERED_HUB.y + Math.sin(angle) * r,
    a: rand() * Math.PI * 2,
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

/** Meandering curvy stroke — wanders randomly within the central tangle. */
function scribbleStroke(rand, segments, startX, startY, startAngle) {
  let x = startX;
  let y = startY;
  let angle = startAngle ?? rand() * Math.PI * 2;
  let d = `M ${fmt(x)} ${fmt(y)}`;

  for (let i = 0; i < segments; i++) {
    const dist = distFromHub(x, y);
    const edgeFactor = Math.min(1, dist / (CLUSTER_RADIUS * 0.65));

    angle += (rand() - 0.5) * (2.8 + rand() * 2.4);

    if (edgeFactor > 0.55) {
      const toHub = Math.atan2(SCATTERED_HUB.y - y, SCATTERED_HUB.x - x);
      angle = angle * 0.25 + toHub * 0.75 + (rand() - 0.5) * 1.4;
    } else if (rand() < 0.22) {
      angle += (rand() < 0.5 ? 1 : -1) * (1.8 + rand() * 2.2);
    }

    const len = 2.5 + rand() * 6;
    const cpLen = len * (0.55 + rand() * 0.55);
    const wobble = (rand() - 0.5) * 2.4;
    const bend = (rand() - 0.5) * 2.0;

    const cp1 = constrainPoint(
      x + Math.cos(angle - 0.9 + wobble) * cpLen,
      y + Math.sin(angle - 0.9 + wobble) * cpLen,
      rand,
    );
    const cp2 = constrainPoint(
      x + Math.cos(angle + 1.0 + bend) * cpLen,
      y + Math.sin(angle + 1.0 + bend) * cpLen,
      rand,
    );
    const end = constrainPoint(
      x + Math.cos(angle + bend * 0.35) * len,
      y + Math.sin(angle + bend * 0.35) * len,
      rand,
    );

    d += ` C ${fmt(cp1.x)} ${fmt(cp1.y)}, ${fmt(cp2.x)} ${fmt(cp2.y)}, ${fmt(end.x)} ${fmt(end.y)}`;
    x = end.x;
    y = end.y;
  }

  return d;
}

/** Tight figure-eight loop for extra visual confusion. */
function figureEightLoop(rand, cx, cy) {
  const r = 1.4 + rand() * 2.2;
  const tilt = rand() * Math.PI;
  const cos = Math.cos(tilt);
  const sin = Math.sin(tilt);
  const rot = (px, py) => ({
    x: cx + px * cos - py * sin,
    y: cy + px * sin + py * cos,
  });

  const a = rot(-r, 0);
  const b = rot(0, -r * 0.75);
  const c = rot(r, 0);
  const e = constrainPoint(c.x, c.y, rand);

  return [
    `M ${fmt(a.x)} ${fmt(a.y)}`,
    `C ${fmt(b.x)} ${fmt(b.y)}, ${fmt(b.x)} ${fmt(b.y)}, ${fmt(e.x)} ${fmt(e.y)}`,
    `C ${fmt(b.x + r * 0.3)} ${fmt(b.y + r * 0.3)}, ${fmt(a.x)} ${fmt(a.y + r * 0.5)}, ${fmt(a.x)} ${fmt(a.y)}`,
  ].join(' ');
}

/**
 * Central tangle of smooth scribbles — dense at the hub, wandering randomly
 * within the middle of the field. Lines never reach the diagram frame edges.
 */
function generateConfusionPaths() {
  const rand = createRng(626045);
  const paths = [];
  let idx = 0;

  const push = (d, opts = {}) => {
    paths.push({
      d,
      stroke: STROKES[idx % STROKES.length],
      width: opts.width ?? 0.5 + (idx % 4) * 0.012,
      opacity: opts.opacity ?? 0.26 + rand() * 0.1,
      animate: opts.animate ?? (idx % 5 === 0 ? 'fade' : 'static'),
      delay: opts.delay ?? (idx % 12) * 0.22,
      duration: opts.duration ?? 11 + (idx % 8),
    });
    idx += 1;
  };

  for (let i = 0; i < 48; i++) {
    const start = randomInCluster(rand);
    const segments = 6 + Math.floor(rand() * 5);
    push(scribbleStroke(rand, segments, start.x, start.y, start.a));
  }

  for (let i = 0; i < 32; i++) {
    const start = randomInCluster(rand);
    const r = 0.9 + rand() * 2.0;
    const p = constrainPoint(start.x, start.y, rand);
    push(ellipseLoop(p.x, p.y, r * (0.7 + rand() * 0.5), r * (0.7 + rand() * 0.5)), {
      opacity: 0.24 + rand() * 0.12,
      width: 0.48 + rand() * 0.04,
    });
  }

  for (let i = 0; i < 14; i++) {
    const start = randomInCluster(rand);
    push(figureEightLoop(rand, start.x, start.y), {
      opacity: 0.28 + rand() * 0.1,
      width: 0.5 + rand() * 0.03,
    });
  }

  for (let i = 0; i < 10; i++) {
    const start = randomInCluster(rand);
    const r = 1.2 + rand() * 1.6;
    const gap = r * 0.5;
    const p = constrainPoint(start.x, start.y, rand);
    push(ellipseLoop(p.x - gap, p.y, r * 0.8, r), { opacity: 0.28 + rand() * 0.08 });
    push(ellipseLoop(p.x + gap, p.y, r * 0.85, r * 0.9), { opacity: 0.26 + rand() * 0.08 });
  }

  return paths;
}

export const SCATTERED_PATHS = generateConfusionPaths();

/** Asset-backed icons from Icon-cloud uploads. */
export const FRAGMENT_ICON_SRC = {
  brain: `${ICON}/brain.svg`,
  cloud: `${ICON}/cloud.svg`,
  database: `${ICON}/database.svg`,
  gmail: `${ICON}/gmail.svg`,
  outlook: `${ICON}/outlook.svg`,
  slack: `${ICON}/slack.svg`,
  teams: `${ICON}/teams.svg`,
  sharepoint: `${ICON}/sharepoint.svg`,
  word: `${ICON}/word.svg`,
  pdf: `${ICON}/pdf.svg`,
  voice: `${ICON}/voice.svg`,
  questionmark: `${ICON}/questionmark.svg`,
};

export function clockIconSrc(variant = 1) {
  const n = Math.max(1, Math.min(5, variant));
  return `${ICON}/clock-${n}.svg`;
}

/** Inline SVGs for types without uploaded assets. */
export const FRAGMENT_SVGS = {
  magnifier:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m20 20-4.2-4.2"/></svg>',
};

export const SVG_DEFS = `<defs>
  <marker id="sk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#b8c878" opacity="0.55"/>
  </marker>
</defs>`;
