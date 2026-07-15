export const HERO_COMPARISON_ENABLED = true;
/** Show prev/next/dots bar — off for public design; use ?hero=1–5 or arrow keys to compare. */
export const HERO_CONTROLS_VISIBLE = false;
/** Auto-advance interval (ms) when controls are hidden. */
export const HERO_AUTO_PLAY_MS = 7000;
export const DEFAULT_HERO_OPTION = 1;
export const PROBLEM_COMPARISON_ENABLED = true;
/** Auto-advance interval (ms) for problem section title options. */
export const PROBLEM_AUTO_PLAY_MS = 5000;
export const DEFAULT_PROBLEM_OPTION = 1;
/** Auto-advance interval (ms) for platform demo showcase slides. */
export const DEMO_AUTO_PLAY_MS = 5500;
export const SPINE_ENABLED = false;

/** When true, show internal TODO labels, ownership and review panels. */
export const INTERNAL_REVIEW_MODE = false;

/** When true, show decorative logo-derived background watermarks. */
export const LOGO_WATERMARKS_ENABLED = true;

export const SITE = {
  name: 'Zuraio',
  tagline: 'AI for Swiss companies that need control of their data.',
  internalLabel: 'Hero Comparison — Five Messaging Options',
  heroBackground: '../zuraio/assets/hero-and-popup.png',
  heroPlatform: '../zuraio/assets/zuraio-platform-ui.png',
  problemDiagram: '../zuraio/assets/zuraio_knowledge_background_right_aligned.png',
  integrationsBackground: '../zuraio/assets/260707-fits-into-the-tools.png',
  heroImage: '../zuraio/assets/zuraio-hero.jpg',
  contactEmail: 'hello@zuraio.ch',
  logo: 'assets/zuraio-logo.png',
};

/** Platform screenshots for the assistant demo carousel (index.html). */
export const DEMO_SHOWCASE_SLIDES = [
  { id: 'mail', image: '../zuraio/assets/zuraio-demo-mail.png' },
  { id: 'project-summary', image: '../zuraio/assets/zuraio-demo-project-summary.png' },
  { id: 'appointment-reply', image: '../zuraio/assets/zuraio-demo-appointment-reply.png' },
  { id: 'meeting-transcript', image: '../zuraio/assets/zuraio-demo-meeting-transcript.png' },
  { id: 'tasks', image: '../zuraio/assets/zuraio-demo-tasks.png' },
  { id: 'briefing', image: '../zuraio/assets/zuraio-demo-briefing.png' },
];
