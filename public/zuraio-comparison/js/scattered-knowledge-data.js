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
 * Reference-style light scribble — hairline cubic curves, dense centre hub,
 * wide sweeping arcs, low opacity so overlaps read darker in the middle.
 */
export const SCATTERED_PATHS = [
  /* Centre hub — tight loops and knots */
  { d: 'M 49 41 C 53 39, 55 43, 51 47 C 47 45, 45 41, 49 41', stroke: '#b5c07a', width: 0.54, opacity: 0.3, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 51 43 C 55 47, 49 49, 47 45 C 49 41, 53 43, 51 43', stroke: '#c2cda8', width: 0.52, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 48 44 C 52 40, 56 44, 52 48 C 48 46, 44 48, 48 44', stroke: '#a8b86e', width: 0.53, opacity: 0.29, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 50 42 C 54 46, 50 50, 46 46 C 48 42, 52 42, 50 42', stroke: '#d0d8bc', width: 0.52, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 47 43 C 51 41, 55 45, 51 49 C 47 47, 43 45, 47 43', stroke: '#b5c07a', width: 0.54, opacity: 0.3, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 52 44 C 48 40, 44 44, 48 48 C 52 46, 56 44, 52 44', stroke: '#c2cda8', width: 0.52, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 50 40 C 46 44, 50 48, 54 44 C 52 40, 48 38, 50 40', stroke: '#a8b86e', width: 0.53, opacity: 0.29, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 49 45 C 53 43, 57 47, 53 51 C 49 49, 45 47, 49 45', stroke: '#d0d8bc', width: 0.52, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 51 41 C 47 45, 51 49, 55 45 C 53 41, 49 39, 51 41', stroke: '#b5c07a', width: 0.54, opacity: 0.3, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 48 42 C 52 46, 48 50, 44 46 C 46 42, 50 40, 48 42', stroke: '#c2cda8', width: 0.52, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 50 44 C 42 38, 58 38, 50 44 C 42 50, 58 50, 50 44', stroke: '#a8b86e', width: 0.53, opacity: 0.29, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 46 44 C 50 40, 54 44, 50 48 C 46 46, 42 44, 46 44', stroke: '#d0d8bc', width: 0.52, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  /* Wide sweeps — pass through centre, fade before edges */
  { d: 'M 14 16 C 26 30, 38 40, 50 44 C 62 48, 74 34, 86 18', stroke: '#b5c07a', width: 0.55, opacity: 0.28, animate: 'fade', delay: 0.2, duration: 14 },
  { d: 'M 12 72 C 24 60, 38 50, 50 44 C 62 38, 76 52, 88 74', stroke: '#c2cda8', width: 0.54, opacity: 0.27, animate: 'fade', delay: 0.6, duration: 15 },
  { d: 'M 18 12 C 32 24, 42 36, 50 44 C 58 52, 70 64, 84 78', stroke: '#a8b86e', width: 0.55, opacity: 0.28, animate: 'fade', delay: 1.0, duration: 16 },
  { d: 'M 88 14 C 74 26, 60 38, 50 44 C 40 50, 28 62, 16 78', stroke: '#d0d8bc', width: 0.54, opacity: 0.27, animate: 'fade', delay: 1.4, duration: 15 },
  { d: 'M 86 72 C 72 58, 58 48, 50 44 C 42 40, 28 28, 14 14', stroke: '#b5c07a', width: 0.55, opacity: 0.28, animate: 'fade', delay: 1.8, duration: 14 },
  { d: 'M 16 14 C 28 28, 40 38, 50 44 C 60 50, 72 60, 84 72', stroke: '#c2cda8', width: 0.54, opacity: 0.27, animate: 'fade', delay: 2.2, duration: 16 },
  { d: 'M 84 12 C 70 22, 58 34, 50 44 C 42 54, 30 66, 18 82', stroke: '#a8b86e', width: 0.55, opacity: 0.28, animate: 'fade', delay: 0.4, duration: 15 },
  { d: 'M 12 38 C 24 40, 38 42, 50 44 C 62 46, 76 44, 88 40', stroke: '#d0d8bc', width: 0.53, opacity: 0.26, animate: 'fade', delay: 0.8, duration: 13 },
  { d: 'M 14 52 C 26 50, 38 48, 50 44 C 62 40, 74 36, 86 32', stroke: '#b5c07a', width: 0.54, opacity: 0.27, animate: 'fade', delay: 1.2, duration: 14 },
  { d: 'M 20 20 C 34 32, 44 40, 50 44 C 56 48, 66 58, 78 70', stroke: '#c2cda8', width: 0.55, opacity: 0.28, animate: 'fade', delay: 1.6, duration: 15 },
  { d: 'M 80 20 C 66 32, 56 40, 50 44 C 44 48, 34 58, 22 70', stroke: '#a8b86e', width: 0.54, opacity: 0.27, animate: 'fade', delay: 2.0, duration: 15 },
  { d: 'M 22 82 C 34 68, 44 56, 50 44 C 56 32, 66 22, 78 12', stroke: '#d0d8bc', width: 0.55, opacity: 0.28, animate: 'fade', delay: 2.4, duration: 16 },
  /* S-curves weaving through icon field */
  { d: 'M 16 14 C 24 32, 36 44, 50 44 C 64 44, 76 32, 84 12', stroke: '#b5c07a', width: 0.54, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 18 62 C 28 54, 40 48, 50 44 C 60 40, 72 48, 90 54', stroke: '#c2cda8', width: 0.53, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 8 78 C 18 64, 28 52, 50 44 C 72 36, 82 48, 94 28', stroke: '#a8b86e', width: 0.54, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 10 38 C 20 36, 30 40, 50 44 C 70 48, 80 44, 96 60', stroke: '#d0d8bc', width: 0.53, opacity: 0.26, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 26 32 C 34 38, 42 42, 50 44 C 58 46, 66 52, 74 16', stroke: '#b5c07a', width: 0.54, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 34 78 C 40 66, 46 54, 50 44 C 54 34, 60 24, 62 20', stroke: '#c2cda8', width: 0.53, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 56 86 C 52 72, 52 58, 50 44 C 48 30, 46 20, 44 8', stroke: '#a8b86e', width: 0.54, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 82 76 C 74 64, 64 52, 50 44 C 36 36, 26 48, 18 62', stroke: '#d0d8bc', width: 0.53, opacity: 0.26, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 88 68 C 76 58, 62 50, 50 44 C 38 38, 24 28, 16 14', stroke: '#b5c07a', width: 0.54, opacity: 0.28, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 36 92 C 42 78, 48 62, 50 44 C 52 26, 58 14, 84 12', stroke: '#c2cda8', width: 0.53, opacity: 0.27, animate: 'static', delay: 0, duration: 0 },
  /* Peripheral wisps — sparse outer curves */
  { d: 'M 14 22 C 22 30, 30 36, 38 40', stroke: '#a8b86e', width: 0.52, opacity: 0.24, animate: 'fade', delay: 0.3, duration: 12 },
  { d: 'M 86 18 C 78 26, 70 32, 62 36', stroke: '#d0d8bc', width: 0.52, opacity: 0.23, animate: 'fade', delay: 0.7, duration: 12 },
  { d: 'M 16 68 C 24 60, 32 54, 40 50', stroke: '#b5c07a', width: 0.52, opacity: 0.24, animate: 'fade', delay: 1.1, duration: 11 },
  { d: 'M 84 68 C 76 60, 68 54, 60 50', stroke: '#c2cda8', width: 0.52, opacity: 0.23, animate: 'fade', delay: 1.5, duration: 11 },
  { d: 'M 22 84 C 30 74, 38 64, 46 56', stroke: '#a8b86e', width: 0.52, opacity: 0.24, animate: 'fade', delay: 1.9, duration: 12 },
  { d: 'M 78 84 C 70 74, 62 64, 54 56', stroke: '#d0d8bc', width: 0.52, opacity: 0.23, animate: 'fade', delay: 2.3, duration: 12 },
  { d: 'M 12 44 C 20 42, 28 40, 36 38', stroke: '#b5c07a', width: 0.52, opacity: 0.22, animate: 'fade', delay: 2.7, duration: 10 },
  { d: 'M 88 48 C 80 46, 72 44, 64 42', stroke: '#c2cda8', width: 0.52, opacity: 0.22, animate: 'fade', delay: 0.5, duration: 10 },
  /* Long flowing arcs — reference light-painting feel */
  { d: 'M 15 16 C 30 20, 42 32, 50 44 C 58 56, 68 68, 82 76', stroke: '#a8b86e', width: 0.54, opacity: 0.27, animate: 'fade', delay: 0.9, duration: 17 },
  { d: 'M 85 16 C 70 22, 58 34, 50 44 C 42 54, 32 66, 18 76', stroke: '#d0d8bc', width: 0.54, opacity: 0.27, animate: 'fade', delay: 1.3, duration: 17 },
  { d: 'M 16 14 C 32 18, 44 30, 50 44 C 56 58, 64 72, 72 84', stroke: '#b5c07a', width: 0.55, opacity: 0.28, animate: 'fade', delay: 1.7, duration: 18 },
  { d: 'M 84 12 C 68 18, 56 30, 50 44 C 44 58, 36 72, 28 84', stroke: '#c2cda8', width: 0.54, opacity: 0.27, animate: 'fade', delay: 2.1, duration: 18 },
  { d: 'M 10 40 C 22 38, 36 40, 50 44 C 64 48, 78 52, 90 58', stroke: '#a8b86e', width: 0.53, opacity: 0.26, animate: 'fade', delay: 2.5, duration: 14 },
  { d: 'M 10 50 C 22 48, 36 46, 50 44 C 64 42, 78 40, 90 36', stroke: '#d0d8bc', width: 0.53, opacity: 0.26, animate: 'fade', delay: 0.1, duration: 14 },
  { d: 'M 20 12 C 34 24, 44 36, 50 44 C 56 52, 64 64, 74 74', stroke: '#b5c07a', width: 0.54, opacity: 0.27, animate: 'fade', delay: 0.15, duration: 16 },
  { d: 'M 80 12 C 66 24, 56 36, 50 44 C 44 52, 36 64, 26 74', stroke: '#c2cda8', width: 0.54, opacity: 0.27, animate: 'fade', delay: 2.9, duration: 16 },
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
