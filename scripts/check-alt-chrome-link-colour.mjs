/**
 * Playwright: body text links on alt-chrome pages must use the olive link token (--alt-link).
 */
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.LINK_COLOUR_PORT || 4178);

const PAGES = [
  '/security.html',
  '/de/security.html',
  '/integrations.html',
  '/de/integrations.html',
  '/how-it-helps.html',
  '/de/how-it-helps.html',
  '/contact.html',
  '/de/contact.html',
  '/about.html',
  '/de/about.html',
  '/faq.html',
  '/de/faq.html',
  '/technical-architecture.html',
  '/de/technical-architecture.html',
  '/en/homepage-preview.html',
  '/de/homepage-preview.html',
];

const OLIVE_DEEP = { r: 120, g: 138, b: 54 };
const OLIVE_DARK = { r: 74, g: 82, b: 40 };
const TEAL = { r: 28, g: 133, b: 125 };
const TOL = 2;

function parseRgb(color) {
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
}

function near(a, b) {
  return Math.abs(a.r - b.r) <= TOL && Math.abs(a.g - b.g) <= TOL && Math.abs(a.b - b.b) <= TOL;
}

function isAllowedLinkRgb(rgb) {
  return near(rgb, OLIVE_DEEP) || near(rgb, OLIVE_DARK);
}

function isTeal(rgb) {
  return near(rgb, TEAL);
}

async function auditPage(page, pagePath, failures) {
  await page.goto(`${baseUrl}${pagePath}`, { waitUntil: 'domcontentloaded', timeout: 20_000 });
  await page.waitForSelector('body[data-alt-chrome]', { timeout: 20_000 });
  await page.waitForSelector('main', { timeout: 20_000 });

  await page.evaluate(() => {
    document.querySelectorAll('.faq-q[aria-expanded="false"]').forEach((btn) => btn.click());
  });

  const offenders = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return [];

    const out = [];
    const links = main.querySelectorAll('a[href]');
    for (const a of links) {
      if (a.closest('.marquee-track, .marquee-inner, [data-alt-marquee]')) continue;
      if (a.classList.contains('btn') || a.classList.contains('alt-page-cta__btn')) continue;
      if (a.classList.contains('alt-home-cta')) continue;
      if (a.classList.contains('alt-home-it-link')) continue;
      if (a.closest('.section-link')) continue;
      if (a.closest('.alt-int-wordmark-grid')) continue;

      const style = getComputedStyle(a);
      if (style.display === 'none' || style.visibility === 'hidden') continue;

      const text = (a.textContent || '').trim();
      if (!text) continue;

      out.push({
        text: text.slice(0, 80),
        color: style.color,
        cls: a.className || '',
      });
    }
    return out;
  });

  for (const o of offenders) {
    const rgb = parseRgb(o.color);
    if (!rgb) {
      failures.push(`${pagePath}: unparsed color "${o.color}" on "${o.text}"`);
      continue;
    }
    if (isTeal(rgb) || !isAllowedLinkRgb(rgb)) {
      failures.push(`${pagePath}: link "${o.text}" color ${o.color} (class: ${o.cls || '—'})`);
    }
  }
}

const server = await startStaticDistServer(DIST, PORT);
const baseUrl = `http://127.0.0.1:${PORT}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const failures = [];

for (const p of PAGES) {
  await auditPage(page, p, failures);
}

await browser.close();
await server.close();

if (failures.length) {
  console.error('ALT_CHROME_LINK_COLOUR_FAIL', failures.length);
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
}

console.log('ALT_CHROME_LINK_COLOUR_OK', PAGES.length, 'pages');
process.exit(0);
