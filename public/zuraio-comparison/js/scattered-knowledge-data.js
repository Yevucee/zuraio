/** Search hub — dead centre of the diagram field. */
export const SCATTERED_HUB = { x: 50, y: 50 };

/** Icon assets from the shared Icon-cloud library. */
const ICON = '../zuraio/assets/Icon-cloud';

function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function clampCoord(v) {
  return Math.max(8, Math.min(92, Math.round(v * 10) / 10));
}

const HUB_CLEAR = 10;

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function nearHub(x, y) {
  return dist({ x, y }, SCATTERED_HUB) < HUB_CLEAR;
}

/** Stratified grid slots shuffled — fills the field evenly, not just a ring. */
function buildGridSlots(cols, rows, rand, pad = 7) {
  const slots = [];
  const w = (100 - pad * 2) / cols;
  const h = (100 - pad * 2) / rows;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = pad + (col + 0.5) * w;
      const cy = pad + (row + 0.5) * h;
      if (nearHub(cx, cy)) continue;

      slots.push({
        x: clampCoord(cx + (rand() - 0.5) * w * 0.62),
        y: clampCoord(cy + (rand() - 0.5) * h * 0.62),
      });
    }
  }

  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }

  return slots;
}

/** Pick label slots maximally separated from icon positions. */
function pickLabelSlots(iconPts, candidateSlots, count, minDist) {
  const remaining = [...candidateSlots];
  const labels = [];

  for (let i = 0; i < count && remaining.length; i++) {
    let bestIdx = 0;
    let bestScore = -1;

    remaining.forEach((slot, idx) => {
      const nearestIcon = Math.min(...iconPts.map((p) => dist(slot, p)));
      const nearestLabel = labels.length
        ? Math.min(...labels.map((p) => dist(slot, p)))
        : minDist;
      const score = Math.min(nearestIcon, nearestLabel);
      if (score > bestScore) {
        bestScore = score;
        bestIdx = idx;
      }
    });

    if (bestScore < minDist * 0.55 && remaining.length > 1) {
      remaining.splice(bestIdx, 1);
      i -= 1;
      continue;
    }

    labels.push(remaining.splice(bestIdx, 1)[0]);
  }

  return labels;
}

const layoutRng = createRng(626060);
const allSlots = buildGridSlots(7, 6, layoutRng);
const iconSlots = allSlots.slice(0, 20);
const labelCandidates = allSlots.slice(20);
const labelSlots = pickLabelSlots(iconSlots, labelCandidates, 10, 11);

const FRAGMENT_DEFS = [
  { id: 'word-doc', type: 'word', drift: 6.2, delay: 0.1, fade: 6.4, flash: true },
  { id: 'gmail', type: 'gmail', drift: 6.8, delay: 0.6, fade: 7.2, flash: true },
  { id: 'pdf', type: 'pdf', drift: 5.8, delay: 1.1, fade: 5.6 },
  { id: 'database', type: 'database', drift: 7.0, delay: 0.4, fade: 6.8, flash: true },
  { id: 'clock-upper', type: 'clock', clockVariant: 1, drift: 6.4, delay: 1.8, fade: 7.6, secondary: true },
  { id: 'cloud', type: 'cloud', drift: 5.8, delay: 0.9, fade: 5.8 },
  { id: 'slack', type: 'slack', drift: 7.0, delay: 1.4, fade: 6.2, flash: true },
  { id: 'outlook', type: 'outlook', drift: 6.1, delay: 2.0, fade: 6.9, secondary: true },
  { id: 'teams', type: 'teams', drift: 5.6, delay: 1.6, fade: 5.4, secondary: true },
  { id: 'voice', type: 'voice', drift: 7.2, delay: 0.7, fade: 6.6 },
  { id: 'sharepoint', type: 'sharepoint', drift: 6.3, delay: 1.2, fade: 5.9 },
  { id: 'question', type: 'questionmark', drift: 4.5, delay: 0.5, fade: 8.0 },
  { id: 'brain-upper', type: 'brain', drift: 5.0, delay: 0.8, fade: 5.2 },
  { id: 'brain-ne', type: 'brain', drift: 5.9, delay: 1.7, fade: 7.4, secondary: true },
  { id: 'brain-left', type: 'brain', drift: 6.2, delay: 0.4, fade: 7.0 },
  { id: 'brain-sw', type: 'brain', drift: 4.8, delay: 1.5, fade: 6.4 },
  { id: 'brain-lower', type: 'brain', drift: 5.4, delay: 1.3, fade: 6.2 },
  { id: 'brain-right', type: 'brain', drift: 6.6, delay: 0.9, fade: 5.6 },
  { id: 'brain-se', type: 'brain', drift: 5.8, delay: 2.1, fade: 4.8 },
  { id: 'clock-left', type: 'clock', clockVariant: 2, drift: 6.2, delay: 0.4, fade: 6.0, clockAnim: 28 },
];

const LABEL_DEFS = [
  { id: 'whereIsIt', tier: 'medium', fade: 5.2, delay: 0.3 },
  { id: 'whoKnows', tier: 'large', fade: 7.4, delay: 1.1 },
  { id: 'latestVersion', tier: 'subtle', fade: 6.1, delay: 2.4 },
  { id: 'alreadyDone', tier: 'subtle', fade: 8.2, delay: 0.6 },
  { id: 'whichDocument', tier: 'medium', fade: 5.8, delay: 1.8 },
  { id: 'whoHasAccess', tier: 'emphasis', fade: 6.5, delay: 0.9 },
  { id: 'wasUpdated', tier: 'subtle', fade: 7.8, delay: 2.8 },
  { id: 'whoHasContext', tier: 'medium', fade: 5.5, delay: 1.5 },
  { id: 'howLong', tier: 'subtle', fade: 8.6, delay: 3.2 },
  { id: 'doneBefore', tier: 'emphasis', fade: 6.8, delay: 2.0 },
];

/** Fragment positions — stratified grid across the full field. */
export const SCATTERED_FRAGMENTS = [
  { id: 'magnifier', type: 'magnifier', x: 50, y: 50, drift: 5.5, delay: 0.3, fade: 7.8, hub: true },
  ...FRAGMENT_DEFS.map((def, i) => ({ ...def, ...iconSlots[i] })),
];

/** Labels — placed in remaining grid cells, spaced away from icons. */
export const SCATTERED_LABELS = LABEL_DEFS.map((def, i) => ({
  ...def,
  ...labelSlots[i],
}));

const STROKES = ['#b5c07a', '#c2cda8', '#a8b86e', '#d0d8bc', '#9aab78'];

/** Inset from frame — lines wander the interior, never hugging edges. */
const SAFE = { min: 12, max: 88 };

function fmt(value) {
  return (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, '');
}

/** Soft clamp — keeps geometry off the diagram frame without bunching in the centre. */
function constrainPoint(x, y, rand) {
  let nx = x;
  let ny = y;

  const margin = 3;
  if (nx < SAFE.min) nx = SAFE.min + rand() * margin;
  if (nx > SAFE.max) nx = SAFE.max - rand() * margin;
  if (ny < SAFE.min) ny = SAFE.min + rand() * margin;
  if (ny > SAFE.max) ny = SAFE.max - rand() * margin;

  return { x: nx, y: ny };
}

function randomInField(rand) {
  return {
    x: SAFE.min + rand() * (SAFE.max - SAFE.min),
    y: SAFE.min + rand() * (SAFE.max - SAFE.min),
    a: rand() * Math.PI * 2,
  };
}

/** Distance from nearest edge (for gentle inward nudge only at borders). */
function distFromEdge(x, y) {
  return Math.min(x - SAFE.min, SAFE.max - x, y - SAFE.min, SAFE.max - y);
}

/** Meandering curvy stroke — wanders randomly across the field interior. */
function scribbleStroke(rand, segments, startX, startY, startAngle) {
  let x = startX;
  let y = startY;
  let angle = startAngle ?? rand() * Math.PI * 2;
  let d = `M ${fmt(x)} ${fmt(y)}`;

  for (let i = 0; i < segments; i++) {
    angle += (rand() - 0.5) * (2.6 + rand() * 2.8);

    if (rand() < 0.18) {
      angle += (rand() < 0.5 ? 1 : -1) * (1.6 + rand() * 2.4);
    }

    const edgeDist = distFromEdge(x, y);
    if (edgeDist < 8) {
      const toCentre = Math.atan2(SCATTERED_HUB.y - y, SCATTERED_HUB.x - x);
      const pull = (8 - edgeDist) / 8;
      angle = angle * (1 - pull * 0.6) + toCentre * (pull * 0.6) + (rand() - 0.5) * 0.8;
    }

    const len = 3 + rand() * 9;
    const cpLen = len * (0.58 + rand() * 0.48);
    const wobble = (rand() - 0.5) * 2.6;
    const bend = (rand() - 0.5) * 2.2;

    const cp1 = constrainPoint(
      x + Math.cos(angle - 0.85 + wobble) * cpLen,
      y + Math.sin(angle - 0.85 + wobble) * cpLen,
      rand,
    );
    const cp2 = constrainPoint(
      x + Math.cos(angle + 0.95 + bend) * cpLen,
      y + Math.sin(angle + 0.95 + bend) * cpLen,
      rand,
    );
    const end = constrainPoint(
      x + Math.cos(angle + bend * 0.3) * len,
      y + Math.sin(angle + bend * 0.3) * len,
      rand,
    );

    d += ` C ${fmt(cp1.x)} ${fmt(cp1.y)}, ${fmt(cp2.x)} ${fmt(cp2.y)}, ${fmt(end.x)} ${fmt(end.y)}`;
    x = end.x;
    y = end.y;
  }

  return d;
}

/**
 * Smooth scribbles spread across the field — random wandering curves only,
 * no closed loops or circles. Densest near centre, present throughout.
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

  for (let i = 0; i < 55; i++) {
    const start = randomInField(rand);
    const segments = 5 + Math.floor(rand() * 6);
    push(scribbleStroke(rand, segments, start.x, start.y, start.a));
  }

  for (let i = 0; i < 20; i++) {
    const angle = rand() * Math.PI * 2;
    const r = 8 + rand() * 32;
    const start = {
      x: SCATTERED_HUB.x + Math.cos(angle) * r,
      y: SCATTERED_HUB.y + Math.sin(angle) * r,
      a: rand() * Math.PI * 2,
    };
    const p = constrainPoint(start.x, start.y, rand);
    const segments = 4 + Math.floor(rand() * 4);
    push(scribbleStroke(rand, segments, p.x, p.y, start.a), {
      opacity: 0.22 + rand() * 0.08,
    });
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
