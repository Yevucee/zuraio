/** Fragment positions — percentage coordinates within the visual stage. */
export const SCATTERED_FRAGMENTS = [
  { id: 'document', type: 'document', x: 14, y: 16, drift: 5.5, delay: 0.1, pulse: 6.2, flash: true },
  { id: 'email', type: 'email', x: 72, y: 12, drift: 6.8, delay: 0.6, pulse: 7.4, flash: true },
  { id: 'folder', type: 'folder', x: 24, y: 56, drift: 5.2, delay: 1.1, pulse: 5.8 },
  { id: 'database', type: 'database', x: 86, y: 48, drift: 7.2, delay: 0.4, pulse: 6.6, flash: true },
  { id: 'calendar', type: 'calendar', x: 52, y: 8, drift: 6.4, delay: 1.8, pulse: 7.8, secondary: true },
  { id: 'cloud', type: 'cloud', x: 92, y: 24, drift: 5.8, delay: 0.9, pulse: 6.0 },
  { id: 'chat', type: 'chat', x: 10, y: 72, drift: 7.0, delay: 1.4, pulse: 5.4, flash: true },
  { id: 'magnifier', type: 'magnifier', x: 52, y: 46, drift: 4.8, delay: 0.3, pulse: 8.2, hub: true },
  { id: 'browser', type: 'browser', x: 34, y: 24, drift: 6.1, delay: 2.0, pulse: 7.1, secondary: true },
  { id: 'spreadsheet', type: 'spreadsheet', x: 78, y: 68, drift: 5.6, delay: 1.6, pulse: 6.9, secondary: true },
  { id: 'video', type: 'video', x: 60, y: 78, drift: 7.5, delay: 0.7, pulse: 5.9 },
  { id: 'grid', type: 'grid', x: 42, y: 64, drift: 6.3, delay: 1.2, pulse: 7.0 },
  { id: 'question', type: 'question', x: 66, y: 44, drift: 4.5, delay: 0.5, pulse: 8.0 },
  { id: 'brain-upper', type: 'brain', x: 48, y: 26, drift: 5.0, delay: 0.8, brainPulse: 5.2 },
  { id: 'brain-center', type: 'brain', x: 56, y: 50, drift: 4.6, delay: 1.5, brainPulse: 6.4, hub: true },
  { id: 'brain-lower', type: 'brain', x: 80, y: 62, drift: 5.8, delay: 2.1, brainPulse: 4.8 },
  { id: 'clock-left', type: 'clock', x: 6, y: 40, drift: 6.2, delay: 0.4, clockAnim: 28 },
  { id: 'clock-lower', type: 'clock', x: 44, y: 86, drift: 5.4, delay: 1.3, clockAnim: 32 },
  { id: 'clock-right', type: 'clock', x: 94, y: 56, drift: 6.6, delay: 0.9, clockAnim: 26 },
  { id: 'clock-upper', type: 'clock', x: 68, y: 18, drift: 5.9, delay: 1.7, clockAnim: 30, secondary: true },
];

/** Label positions — text from i18n; each has independent fade timing. */
export const SCATTERED_LABELS = [
  { id: 'whereIsIt', x: 6, y: 54, tier: 'medium', fade: 5.2, delay: 0.3 },
  { id: 'whoKnows', x: 82, y: 66, tier: 'large', fade: 7.4, delay: 1.1 },
  { id: 'latestVersion', x: 38, y: 88, tier: 'subtle', fade: 6.1, delay: 2.4 },
  { id: 'alreadyDone', x: 68, y: 18, tier: 'subtle', fade: 8.2, delay: 0.6 },
  { id: 'whichDocument', x: 48, y: 74, tier: 'medium', fade: 5.8, delay: 1.8 },
  { id: 'whoHasAccess', x: 16, y: 22, tier: 'emphasis', fade: 6.5, delay: 0.9 },
  { id: 'wasUpdated', x: 90, y: 36, tier: 'subtle', fade: 7.8, delay: 2.8 },
  { id: 'whoHasContext', x: 28, y: 38, tier: 'medium', fade: 5.5, delay: 1.5 },
  { id: 'howLong', x: 58, y: 58, tier: 'subtle', fade: 8.6, delay: 3.2 },
  { id: 'doneBefore', x: 74, y: 82, tier: 'emphasis', fade: 6.8, delay: 2.0 },
];

/** Curved paths in 0–100 coordinate space. */
export const SCATTERED_PATHS = [
  { d: 'M 14 16 Q 24 22 34 24', stroke: '#b8c878', width: 1.0, opacity: 0.48, animate: 'draw', delay: 0, duration: 9 },
  { d: 'M 34 24 Q 42 32 52 46', stroke: '#cfd6c3', width: 0.9, opacity: 0.42, animate: 'travel', delay: 1.0, duration: 11, dashed: true },
  { d: 'M 72 12 Q 64 20 66 44', stroke: '#8ca33f', width: 1.05, opacity: 0.5, animate: 'draw', delay: 0.5, duration: 8, arrow: true },
  { d: 'M 52 46 Q 56 58 60 78', stroke: '#dce7b7', width: 0.85, opacity: 0.4, animate: 'fade', delay: 2.2, duration: 10 },
  { d: 'M 24 56 Q 32 50 42 64', stroke: '#b8c878', width: 0.95, opacity: 0.46, animate: 'travel', delay: 1.4, duration: 12, dashed: true },
  { d: 'M 10 72 Q 18 58 48 26', stroke: '#cfd6c3', width: 0.8, opacity: 0.38, animate: 'draw', delay: 0.8, duration: 13 },
  { d: 'M 86 48 Q 76 44 66 44', stroke: '#8ca33f', width: 1.0, opacity: 0.48, animate: 'fade', delay: 1.6, duration: 9, arrow: true },
  { d: 'M 92 24 Q 82 28 72 12', stroke: '#d8dcd5', width: 0.75, opacity: 0.36, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 42 64 Q 48 56 52 46', stroke: '#b8c878', width: 0.9, opacity: 0.44, animate: 'draw', delay: 2.0, duration: 10 },
  { d: 'M 78 68 Q 70 58 56 50', stroke: '#cfd6c3', width: 0.85, opacity: 0.4, animate: 'travel', delay: 0.3, duration: 11, dashed: true },
  { d: 'M 52 8 Q 52 22 52 46', stroke: '#dce7b7', width: 0.8, opacity: 0.38, animate: 'fade', delay: 2.6, duration: 8 },
  { d: 'M 48 26 Q 50 36 52 46', stroke: '#b8c878', width: 0.95, opacity: 0.46, animate: 'draw', delay: 0.2, duration: 7, central: true },
  { d: 'M 56 50 Q 54 48 52 46', stroke: '#8ca33f', width: 1.0, opacity: 0.52, animate: 'travel', delay: 1.2, duration: 9, central: true, dot: true },
  { d: 'M 52 46 Q 58 52 56 50', stroke: '#b8c878', width: 0.9, opacity: 0.44, animate: 'fade', delay: 0.7, duration: 8, central: true },
  { d: 'M 66 44 Q 60 48 56 50', stroke: '#cfd6c3', width: 0.85, opacity: 0.42, animate: 'draw', delay: 1.8, duration: 10, central: true },
  { d: 'M 52 46 Q 46 52 42 64', stroke: '#dce7b7', width: 0.8, opacity: 0.4, animate: 'draw', delay: 1.0, duration: 9, central: true, partial: 0.7 },
  { d: 'M 56 50 Q 62 46 66 44', stroke: '#b8c878', width: 0.85, opacity: 0.4, animate: 'fade', delay: 2.4, duration: 11, central: true },
  { d: 'M 52 46 Q 58 40 68 18', stroke: '#cfd6c3', width: 0.8, opacity: 0.36, animate: 'draw', delay: 0.4, duration: 12, partial: 0.55, arrow: true },
  { d: 'M 14 16 Q 22 34 24 56', stroke: '#b8c878', width: 0.95, opacity: 0.42, animate: 'travel', delay: 1.5, duration: 14, dashed: true },
  { d: 'M 86 48 Q 88 36 94 56', stroke: '#d8dcd5', width: 0.75, opacity: 0.34, animate: 'fade', delay: 2.8, duration: 9 },
  { d: 'M 24 56 Q 36 48 52 46', stroke: '#8ca33f', width: 1.0, opacity: 0.48, animate: 'draw', delay: 0.6, duration: 10 },
  { d: 'M 60 78 Q 54 64 52 46', stroke: '#cfd6c3', width: 0.85, opacity: 0.38, animate: 'static', delay: 0, duration: 0 },
  { d: 'M 34 24 Q 40 34 48 26', stroke: '#b8c878', width: 0.9, opacity: 0.4, animate: 'fade', delay: 1.3, duration: 8 },
  { d: 'M 80 62 Q 72 56 56 50', stroke: '#dce7b7', width: 0.85, opacity: 0.42, animate: 'draw', delay: 2.1, duration: 11, dot: true },
  { d: 'M 6 40 Q 20 38 34 24', stroke: '#cfd6c3', width: 0.8, opacity: 0.36, animate: 'travel', delay: 0.9, duration: 13, dashed: true, partial: 0.8 },
  { d: 'M 44 86 Q 48 68 52 46', stroke: '#b8c878', width: 0.9, opacity: 0.4, animate: 'draw', delay: 1.7, duration: 10 },
  { d: 'M 72 12 Q 60 30 52 46', stroke: '#8ca33f', width: 1.0, opacity: 0.46, animate: 'fade', delay: 0.1, duration: 12 },
  { d: 'M 52 46 Q 38 42 28 38', stroke: '#d8dcd5', width: 0.75, opacity: 0.32, animate: 'draw', delay: 2.5, duration: 9, partial: 0.6 },
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
  question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 9a2.5 2.5 0 0 1 4.2 1.8c0 2-2.7 2.5-2.7 4.2"/><circle cx="12" cy="18" r=".8" fill="currentColor" stroke="none"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><line class="sk-clock-hand sk-clock-hand--hour" x1="12" y1="12" x2="12" y2="7.5"/><line class="sk-clock-hand sk-clock-hand--minute" x1="12" y1="12" x2="16" y2="12"/></svg>',
};

export const SVG_DEFS = `<defs>
  <marker id="sk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#b8c878" opacity="0.55"/>
  </marker>
</defs>`;
