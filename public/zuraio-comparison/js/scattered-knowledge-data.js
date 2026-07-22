/** Fragment positions — spread with ~14% minimum spacing; no stacked icons. */
export const SCATTERED_FRAGMENTS = [
  { id: 'document', type: 'document', x: 16, y: 14, drift: 6.2, delay: 0.1, fade: 6.4, flash: true },
  { id: 'email', type: 'email', x: 84, y: 12, drift: 6.8, delay: 0.6, fade: 7.2, flash: true },
  { id: 'folder', type: 'folder', x: 18, y: 62, drift: 5.8, delay: 1.1, fade: 5.6 },
  { id: 'database', type: 'database', x: 90, y: 54, drift: 7.0, delay: 0.4, fade: 6.8, flash: true },
  { id: 'calendar', type: 'calendar', x: 44, y: 8, drift: 6.4, delay: 1.8, fade: 7.6, secondary: true },
  { id: 'cloud', type: 'cloud', x: 94, y: 28, drift: 5.8, delay: 0.9, fade: 5.8 },
  { id: 'chat', type: 'chat', x: 8, y: 78, drift: 7.0, delay: 1.4, fade: 6.2, flash: true },
  { id: 'magnifier', type: 'magnifier', x: 50, y: 44, drift: 5.5, delay: 0.3, fade: 7.8, hub: true },
  { id: 'browser', type: 'browser', x: 26, y: 32, drift: 6.1, delay: 2.0, fade: 6.9, secondary: true },
  { id: 'spreadsheet', type: 'spreadsheet', x: 82, y: 76, drift: 5.6, delay: 1.6, fade: 5.4, secondary: true },
  { id: 'video', type: 'video', x: 56, y: 86, drift: 7.2, delay: 0.7, fade: 6.6 },
  { id: 'grid', type: 'grid', x: 34, y: 78, drift: 6.3, delay: 1.2, fade: 5.9 },
  { id: 'brain-upper', type: 'brain', x: 62, y: 20, drift: 5.0, delay: 0.8, fade: 5.2 },
  { id: 'brain-mid', type: 'brain', x: 30, y: 46, drift: 4.8, delay: 1.5, fade: 6.4 },
  { id: 'brain-lower', type: 'brain', x: 88, y: 68, drift: 5.8, delay: 2.1, fade: 4.8 },
  { id: 'clock-left', type: 'clock', x: 10, y: 38, drift: 6.2, delay: 0.4, fade: 7.0, clockAnim: 28 },
  { id: 'clock-lower', type: 'clock', x: 36, y: 92, drift: 5.4, delay: 1.3, fade: 6.2, clockAnim: 32 },
  { id: 'clock-right', type: 'clock', x: 96, y: 60, drift: 6.6, delay: 0.9, fade: 5.6, clockAnim: 26 },
  { id: 'clock-upper', type: 'clock', x: 74, y: 16, drift: 5.9, delay: 1.7, fade: 7.4, clockAnim: 30, secondary: true },
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

/**
 * Whole curved paths — connect icons via open corridors; cross in centre but no partial strokes.
 * ~20 paths: tangled but readable.
 */
export const SCATTERED_PATHS = [
  { d: 'M 16 14 Q 38 6 84 12', stroke: '#b8c878', width: 1.0, opacity: 0.46, animate: 'draw', delay: 0, duration: 10 },
  { d: 'M 16 14 Q 8 38 18 62', stroke: '#cfd6c3', width: 0.9, opacity: 0.42, animate: 'fade', delay: 0.8, duration: 9 },
  { d: 'M 84 12 Q 92 30 90 54', stroke: '#8ca33f', width: 1.0, opacity: 0.48, animate: 'draw', delay: 0.4, duration: 11 },
  { d: 'M 18 62 Q 34 54 50 44', stroke: '#b8c878', width: 0.95, opacity: 0.44, animate: 'travel', delay: 1.2, duration: 12, dashed: true },
  { d: 'M 90 54 Q 72 50 50 44', stroke: '#dce7b7', width: 0.85, opacity: 0.4, animate: 'draw', delay: 0.6, duration: 10 },
  { d: 'M 8 78 Q 20 64 30 46', stroke: '#cfd6c3', width: 0.9, opacity: 0.42, animate: 'fade', delay: 1.6, duration: 11 },
  { d: 'M 30 46 Q 40 44 50 44', stroke: '#b8c878', width: 0.9, opacity: 0.44, animate: 'draw', delay: 0.2, duration: 8 },
  { d: 'M 50 44 Q 56 32 62 20', stroke: '#8ca33f', width: 1.0, opacity: 0.46, animate: 'travel', delay: 1.0, duration: 13, dashed: true, dot: true },
  { d: 'M 62 20 Q 74 14 84 12', stroke: '#cfd6c3', width: 0.85, opacity: 0.4, animate: 'fade', delay: 2.0, duration: 9 },
  { d: 'M 94 28 Q 84 36 74 16', stroke: '#d8dcd5', width: 0.8, opacity: 0.36, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 34 78 Q 42 62 50 44', stroke: '#b8c878', width: 0.9, opacity: 0.42, animate: 'draw', delay: 1.4, duration: 10 },
  { d: 'M 56 86 Q 54 66 50 44', stroke: '#dce7b7', width: 0.85, opacity: 0.38, animate: 'fade', delay: 2.4, duration: 11 },
  { d: 'M 88 68 Q 70 58 50 44', stroke: '#b8c878', width: 0.95, opacity: 0.44, animate: 'draw', delay: 0.9, duration: 12 },
  { d: 'M 10 38 Q 18 34 26 32', stroke: '#cfd6c3', width: 0.85, opacity: 0.4, animate: 'travel', delay: 1.8, duration: 14, dashed: true },
  { d: 'M 26 32 Q 28 38 30 46', stroke: '#b8c878', width: 0.85, opacity: 0.38, animate: 'fade', delay: 0.5, duration: 8 },
  { d: 'M 36 92 Q 46 84 56 86', stroke: '#cfd6c3', width: 0.85, opacity: 0.4, animate: 'draw', delay: 2.2, duration: 10 },
  { d: 'M 96 60 Q 94 56 90 54', stroke: '#d8dcd5', width: 0.8, opacity: 0.36, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 18 62 Q 50 74 82 76', stroke: '#8ca33f', width: 0.9, opacity: 0.4, animate: 'fade', delay: 1.1, duration: 12 },
  { d: 'M 84 12 Q 58 28 44 8', stroke: '#b8c878', width: 0.85, opacity: 0.38, animate: 'draw', delay: 2.6, duration: 11, arrow: true },
  { d: 'M 8 78 Q 4 56 10 38', stroke: '#cfd6c3', width: 0.8, opacity: 0.36, animate: 'draw', delay: 1.5, duration: 13 },
  { d: 'M 90 54 Q 88 72 88 68', stroke: '#dce7b7', width: 0.85, opacity: 0.4, animate: 'fade', delay: 0.3, duration: 9 },
  { d: 'M 16 14 Q 32 30 50 44', stroke: '#b8c878', width: 0.9, opacity: 0.42, animate: 'travel', delay: 2.8, duration: 14, dashed: true, dot: true },
];

export const FRAGMENT_SVGS = {
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h6l4 4v12H8z"/><path d="M14 4v4h4M10 12h6M10 16h4"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h6l2 2h8v9H4z"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.2A3.5 3.5 0 0 0 7 17z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/></svg>',
  magnifier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="m18 18-3.2-3.2"/></svg>',
  browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01"/></svg>',
  spreadsheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 14h16M10 4v16M14 4v16"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4C8 4 6 7 6 10c-2 1-2 4 0 5 1 3 3 5 6 5s5-2 6-5c2-1 2-4 0-5 0-3-2-6-6-6z"/><path d="M9 10h.01M15 10h.01M10 14c1 1 3 1 4 0"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><line class="sk-clock-hand sk-clock-hand--hour" x1="12" y1="12" x2="12" y2="7.5"/><line class="sk-clock-hand sk-clock-hand--minute" x1="12" y1="12" x2="16" y2="12"/></svg>',
};

export const SVG_DEFS = `<defs>
  <marker id="sk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#b8c878" opacity="0.55"/>
  </marker>
</defs>`;
