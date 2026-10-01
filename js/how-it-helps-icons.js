import { ROUTES_ICONS_WITH } from './workflow-icons.js';

const stroke = 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';

/** Use-case cards: calendar, mail, file-text, search, check-square, list-checks */
export const HOW_IT_HELPS_USE_CASE_ICONS = [
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m20 20-3.2-3.2"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 12 2 2 4-4"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><path d="M11 18H3"/><path d="m15 18 2 2 4-4"/><path d="M21 6H3"/><path d="m15 10 2 2 4-4"/></svg>`,
];

/** Skills section: workflow/sliders, check badge, history/version */
export const HOW_IT_HELPS_SKILL_ICONS = [
  ROUTES_ICONS_WITH[1],
  ROUTES_ICONS_WITH[3],
  `<svg viewBox="0 0 24 24" fill="none" ${stroke} aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 12h4"/><path d="M12 3v4"/><path d="m16 8 2-2"/><path d="M19 5v3"/></svg>`,
];
