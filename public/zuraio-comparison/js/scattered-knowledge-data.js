/** Fragment positions use percentage coordinates within the visual stage. */
export const SCATTERED_FRAGMENTS = [
  { id: 'document', type: 'document', x: 16, y: 18, drift: 5.5, delay: 0.1, pulse: 6.2, flash: true },
  { id: 'email', type: 'email', x: 74, y: 14, drift: 6.8, delay: 0.6, pulse: 7.4 },
  { id: 'folder', type: 'folder', x: 26, y: 58, drift: 5.2, delay: 1.1, pulse: 5.8, flash: true },
  { id: 'database', type: 'database', x: 84, y: 50, drift: 7.2, delay: 0.4, pulse: 6.6 },
  { id: 'calendar', type: 'calendar', x: 54, y: 10, drift: 6.4, delay: 1.8, pulse: 7.8, secondary: true },
  { id: 'cloud', type: 'cloud', x: 90, y: 26, drift: 5.8, delay: 0.9, pulse: 6.0 },
  { id: 'chat', type: 'chat', x: 12, y: 74, drift: 7.0, delay: 1.4, pulse: 5.4, flash: true },
  { id: 'magnifier', type: 'magnifier', x: 50, y: 44, drift: 4.8, delay: 0.3, pulse: 8.2, hub: true },
  { id: 'browser', type: 'browser', x: 36, y: 26, drift: 6.1, delay: 2.0, pulse: 7.1, secondary: true },
  { id: 'spreadsheet', type: 'spreadsheet', x: 76, y: 70, drift: 5.6, delay: 1.6, pulse: 6.9, secondary: true },
  { id: 'video', type: 'video', x: 58, y: 80, drift: 7.5, delay: 0.7, pulse: 5.9 },
  { id: 'grid', type: 'grid', x: 44, y: 66, drift: 6.3, delay: 1.2, pulse: 7.0 },
  { id: 'brain', type: 'brain', x: 22, y: 36, drift: 5.4, delay: 2.2, pulse: 6.5, secondary: true },
  { id: 'question', type: 'question', x: 62, y: 48, drift: 4.5, delay: 0.5, pulse: 8.0, hub: true },
];

/** Label positions and styling tiers — text comes from i18n. */
export const SCATTERED_LABELS = [
  { id: 'whereIsIt', x: 8, y: 56, tier: 'emphasis', fade: 3.2, delay: 0.2 },
  { id: 'whoKnows', x: 80, y: 64, tier: 'large', fade: 4.1, delay: 0.8 },
  { id: 'latestVersion', x: 40, y: 86, tier: 'medium', fade: 3.6, delay: 1.4 },
  { id: 'alreadyDone', x: 70, y: 20, tier: 'subtle', fade: 4.8, delay: 0.5 },
  { id: 'whichDocument', x: 50, y: 72, tier: 'subtle', fade: 3.9, delay: 1.9 },
  { id: 'whoHasAccess', x: 18, y: 24, tier: 'emphasis', fade: 3.4, delay: 1.1 },
  { id: 'wasUpdated', x: 88, y: 38, tier: 'subtle', fade: 5.0, delay: 2.3 },
];

/** Curved connection paths in 0–100 coordinate space. */
export const SCATTERED_PATHS = [
  { d: 'M 16 18 Q 28 24 36 26', stroke: '#b8c878', width: 1.0, opacity: 0.52, animate: 'draw', delay: 0, duration: 8 },
  { d: 'M 36 26 Q 44 34 50 44', stroke: '#cfd6c3', width: 0.9, opacity: 0.42, animate: 'draw', delay: 1.2, duration: 9 },
  { d: 'M 74 14 Q 66 22 62 48', stroke: '#8ca33f', width: 1.1, opacity: 0.48, animate: 'fade', delay: 0.6, duration: 7 },
  { d: 'M 50 44 Q 56 52 58 80', stroke: '#dce7b7', width: 0.8, opacity: 0.38, animate: 'draw', delay: 2.0, duration: 10 },
  { d: 'M 26 58 Q 34 52 44 66', stroke: '#b8c878', width: 1.0, opacity: 0.45, animate: 'fade', delay: 1.5, duration: 8.5 },
  { d: 'M 12 74 Q 20 62 22 36', stroke: '#cfd6c3', width: 0.85, opacity: 0.4, animate: 'draw', delay: 0.3, duration: 9.5 },
  { d: 'M 84 50 Q 74 42 62 48', stroke: '#8ca33f', width: 1.0, opacity: 0.46, animate: 'draw', delay: 1.8, duration: 7.5 },
  { d: 'M 90 26 Q 78 30 74 14', stroke: '#d8dcd5', width: 0.75, opacity: 0.35, animate: 'fade', delay: 2.4, duration: 6 },
  { d: 'M 44 66 Q 52 58 58 80', stroke: '#b8c878', width: 0.9, opacity: 0.4, animate: 'draw', delay: 0.9, duration: 8.8 },
  { d: 'M 76 70 Q 68 62 62 48', stroke: '#cfd6c3', width: 0.85, opacity: 0.38, animate: 'fade', delay: 1.1, duration: 7.2 },
  { d: 'M 54 10 Q 52 24 50 44', stroke: '#dce7b7', width: 0.8, opacity: 0.36, animate: 'draw', delay: 2.6, duration: 9 },
  { d: 'M 22 36 Q 32 40 36 26', stroke: '#b8c878', width: 0.95, opacity: 0.44, animate: 'fade', delay: 0.4, duration: 8.2 },
  { d: 'M 58 80 Q 64 68 76 70', stroke: '#cfd6c3', width: 0.8, opacity: 0.34, animate: 'draw', delay: 1.7, duration: 10.5 },
  { d: 'M 50 44 Q 58 46 62 48', stroke: '#8ca33f', width: 1.05, opacity: 0.5, animate: 'draw', delay: 0.2, duration: 6.5, central: true },
  { d: 'M 62 48 Q 58 54 54 58', stroke: '#b8c878', width: 0.9, opacity: 0.42, animate: 'fade', delay: 0.8, duration: 7, central: true },
  { d: 'M 50 44 Q 48 50 44 66', stroke: '#dce7b7', width: 0.85, opacity: 0.4, animate: 'draw', delay: 1.3, duration: 8, central: true },
  { d: 'M 62 48 Q 68 44 74 14', stroke: '#cfd6c3', width: 0.8, opacity: 0.36, animate: 'fade', delay: 2.1, duration: 9, central: true },
  { d: 'M 50 44 Q 54 38 58 32', stroke: '#b8c878', width: 0.75, opacity: 0.32, animate: 'draw', delay: 1.6, duration: 7.8, central: true, partial: 0.65 },
  { d: 'M 36 26 Q 42 32 44 40', stroke: '#d8dcd5', width: 0.7, opacity: 0.3, animate: 'fade', delay: 2.8, duration: 6.5, partial: 0.55 },
  { d: 'M 16 18 Q 24 30 26 58', stroke: '#b8c878', width: 0.95, opacity: 0.4, animate: 'draw', delay: 0.7, duration: 11 },
  { d: 'M 84 50 Q 86 38 88 26', stroke: '#cfd6c3', width: 0.8, opacity: 0.35, animate: 'fade', delay: 2.2, duration: 8 },
  { d: 'M 26 58 Q 38 48 50 44', stroke: '#8ca33f', width: 1.0, opacity: 0.46, animate: 'draw', delay: 1.0, duration: 9.2 },
];

export const FRAGMENT_SVGS = {
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h6l4 4v12H8z"/><path d="M14 4v4h4M10 12h6M10 16h4"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h6l2 2h8v9H4z"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.2A3.5 3.5 0 0 0 7 17z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/></svg>',
  magnifier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="m18 18-3.2-3.2"/></svg>',
  browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01"/></svg>',
  spreadsheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 14h16M10 4v16M14 4v16"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4C8 4 6 7 6 10c-2 1-2 4 0 5 1 3 3 5 6 5s5-2 6-5c2-1 2-4 0-5 0-3-2-6-6-6z"/><path d="M9 10h.01M15 10h.01M10 14c1 1 3 1 4 0"/></svg>',
  question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 9a2.5 2.5 0 0 1 4.2 1.8c0 2-2.7 2.5-2.7 4.2"/><circle cx="12" cy="18" r=".8" fill="currentColor" stroke="none"/></svg>',
};
