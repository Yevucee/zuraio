/** Seeded PRNG for deterministic tangle geometry across renders. */
export function createSeededRandom(seed = 42) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/** Replaceable icon slots — swap `type` or add `logo` later. */
export const SCATTERED_ICONS = [
  { id: 'google', type: 'google', x: 0.5, y: 0.44, scale: 1.15, opacity: 0.72 },
  { id: 'whatsapp', type: 'chat', x: 0.2, y: 0.3, scale: 0.88, opacity: 0.55 },
  { id: 'cloud', type: 'cloud', x: 0.78, y: 0.24, scale: 0.82, opacity: 0.48 },
  { id: 'document', type: 'document', x: 0.32, y: 0.58, scale: 0.86, opacity: 0.52 },
  { id: 'sharepoint', type: 'grid', x: 0.64, y: 0.52, scale: 0.84, opacity: 0.5 },
  { id: 'hubspot', type: 'sprocket', x: 0.84, y: 0.46, scale: 0.78, opacity: 0.46 },
  { id: 'brain', type: 'brain', x: 0.38, y: 0.36, scale: 0.8, opacity: 0.44 },
  { id: 'outlook', type: 'envelope', x: 0.58, y: 0.68, scale: 0.86, opacity: 0.5 },
  { id: 'database', type: 'database', x: 0.72, y: 0.34, scale: 0.76, opacity: 0.42 },
];

/** Question fragment positions (text comes from i18n). */
export const SCATTERED_QUESTIONS = [
  { id: 'latestVersion', x: 0.1, y: 0.74, size: 'md', rotate: -6 },
  { id: 'whoKnows', x: 0.76, y: 0.7, size: 'lg', rotate: 4 },
  { id: 'alreadyDone', x: 0.42, y: 0.82, size: 'sm', rotate: -2 },
  { id: 'whereIsIt', x: 0.22, y: 0.48, size: 'md', rotate: 8 },
  { id: 'mark', x: 0.88, y: 0.22, size: 'xl', rotate: 0 },
];

export function generateTanglePaths(width, height, rand = createSeededRandom(7)) {
  const cx = width * 0.52;
  const cy = height * 0.46;
  const paths = [];
  const palette = [
    'rgba(159, 175, 82, 0.28)',
    'rgba(159, 175, 82, 0.22)',
    'rgba(120, 138, 54, 0.2)',
    'rgba(70, 70, 70, 0.16)',
    'rgba(108, 111, 102, 0.14)',
    'rgba(208, 220, 154, 0.26)',
    'rgba(180, 170, 150, 0.12)',
  ];

  const point = () => {
    const angle = rand() * Math.PI * 2;
    const radius = Math.pow(rand(), 0.55) * Math.min(width, height) * 0.34;
    return {
      x: cx + Math.cos(angle) * radius + (rand() - 0.5) * 24,
      y: cy + Math.sin(angle) * radius + (rand() - 0.5) * 24,
    };
  };

  for (let i = 0; i < 96; i += 1) {
    const start = point();
    const end = point();
    const mid = {
      x: (start.x + end.x) / 2 + (rand() - 0.5) * 70,
      y: (start.y + end.y) / 2 + (rand() - 0.5) * 70,
    };
    const stroke = palette[Math.floor(rand() * palette.length)];
    const opacity = 0.55 + rand() * 0.45;
    paths.push({
      d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${mid.x.toFixed(1)} ${mid.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
      stroke,
      opacity,
      width: 0.65 + rand() * 0.85,
    });
  }

  for (let i = 0; i < 38; i += 1) {
    const start = point();
    const bend = point();
    const end = point();
    const stroke = palette[Math.floor(rand() * palette.length)];
    paths.push({
      d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${bend.x.toFixed(1)} ${bend.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
      stroke,
      opacity: 0.35 + rand() * 0.4,
      width: 0.5 + rand() * 0.55,
    });
  }

  return paths;
}

export const ICON_RENDERERS = {
  google(s) {
    return `<text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${18 * s}" font-weight="600" fill="rgba(120, 138, 54, 0.75)" font-family="'IBM Plex Sans', sans-serif">G</text>`;
  },
  chat(s) {
    return `<path d="M${-8 * s} ${-6 * s} h${16 * s} a${4 * s} ${4 * s} 0 0 1 ${4 * s} ${4 * s} v${6 * s} l${-4 * s} ${3 * s} v${-3 * s} h${-16 * s} a${4 * s} ${4 * s} 0 0 1 ${-4 * s} ${-4 * s} v${-6 * s} a${4 * s} ${4 * s} 0 0 1 ${4 * s} ${-4 * s}z" fill="none" stroke="rgba(120, 138, 54, 0.62)" stroke-width="1.2"/>`;
  },
  cloud(s) {
    return `<path d="M${-10 * s} ${2 * s} a${5 * s} ${5 * s} 0 0 1 ${9 * s} ${-3 * s} a${6 * s} ${6 * s} 0 0 1 ${11 * s} ${2 * s} a${4 * s} ${4 * s} 0 0 1 ${-1 * s} ${8 * s} h${-18 * s} a${4 * s} ${4 * s} 0 0 1 ${-1 * s} ${-7 * s}z" fill="rgba(208, 220, 154, 0.35)" stroke="rgba(120, 138, 54, 0.45)" stroke-width="1.1"/>`;
  },
  document(s) {
    return `<path d="M${-7 * s} ${-9 * s} h${8 * s} l${5 * s} ${5 * s} v${9 * s} h${-13 * s}z M${1 * s} ${-9 * s} v${5 * s} h${5 * s}" fill="none" stroke="rgba(70, 70, 70, 0.5)" stroke-width="1.15" stroke-linejoin="round"/>`;
  },
  grid(s) {
    return `<rect x="${-8 * s}" y="${-8 * s}" width="${7 * s}" height="${7 * s}" rx="${1 * s}" fill="rgba(208, 220, 154, 0.28)" stroke="rgba(120, 138, 54, 0.5)" stroke-width="1"/><rect x="${1 * s}" y="${-8 * s}" width="${7 * s}" height="${7 * s}" rx="${1 * s}" fill="rgba(208, 220, 154, 0.22)" stroke="rgba(120, 138, 54, 0.45)" stroke-width="1"/><rect x="${-8 * s}" y="${1 * s}" width="${7 * s}" height="${7 * s}" rx="${1 * s}" fill="rgba(208, 220, 154, 0.18)" stroke="rgba(120, 138, 54, 0.4)" stroke-width="1"/>`;
  },
  sprocket(s) {
    return `<circle cx="0" cy="0" r="${7 * s}" fill="none" stroke="rgba(120, 138, 54, 0.55)" stroke-width="1.2"/><circle cx="0" cy="0" r="${3 * s}" fill="rgba(208, 220, 154, 0.35)"/><path d="M0 ${-9 * s} v${2 * s} M0 ${7 * s} v${2 * s} M${-9 * s} 0 h${2 * s} M${7 * s} 0 h${2 * s}" stroke="rgba(120, 138, 54, 0.5)" stroke-width="1.1"/>`;
  },
  brain(s) {
    return `<path d="M0 ${-7 * s} c${-5 * s} 0 ${-7 * s} ${3 * s} ${-6 * s} ${7 * s} c${-4 * s} ${1 * s} ${-4 * s} ${5 * s} 0 ${6 * s} c${1 * s} ${3 * s} ${4 * s} ${5 * s} ${6 * s} ${5 * s} c${2 * s} 0 ${5 * s} ${-2 * s} ${6 * s} ${-5 * s} c${4 * s} ${-1 * s} ${4 * s} ${-5 * s} 0 ${-6 * s} c${1 * s} ${-4 * s} ${-1 * s} ${-7 * s} ${-6 * s} ${-7 * s}z" fill="rgba(108, 111, 102, 0.12)" stroke="rgba(108, 111, 102, 0.48)" stroke-width="1.1"/>`;
  },
  envelope(s) {
    return `<rect x="${-8 * s}" y="${-5 * s}" width="${16 * s}" height="${11 * s}" rx="${1.5 * s}" fill="rgba(208, 220, 154, 0.22)" stroke="rgba(120, 138, 54, 0.52)" stroke-width="1.1"/><path d="M${-8 * s} ${-5 * s} l${8 * s} ${6 * s} l${8 * s} ${-6 * s}" fill="none" stroke="rgba(120, 138, 54, 0.45)" stroke-width="1"/>`;
  },
  database(s) {
    return `<ellipse cx="0" cy="${-5 * s}" rx="${7 * s}" ry="${3 * s}" fill="rgba(208, 220, 154, 0.25)" stroke="rgba(70, 70, 70, 0.45)" stroke-width="1"/><path d="M${-7 * s} ${-5 * s} v${10 * s} c0 ${2 * s} ${3.1 * s} ${3 * s} ${7 * s} ${3 * s} s${7 * s} ${-1 * s} ${7 * s} ${-3 * s} v${-10 * s}" fill="rgba(208, 220, 154, 0.18)" stroke="rgba(70, 70, 70, 0.42)" stroke-width="1"/><ellipse cx="0" cy="${0 * s}" rx="${7 * s}" ry="${3 * s}" fill="none" stroke="rgba(70, 70, 70, 0.35)" stroke-width="0.9"/>`;
  },
};
