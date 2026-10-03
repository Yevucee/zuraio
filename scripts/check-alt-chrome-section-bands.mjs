/**
 * Playwright: adjacent main > section bands on alt-chrome pages must not share the same background.
 */
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.BAND_CHECK_PORT || 4179);

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

function normalizeBg(color) {
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return color.trim();
  return `rgb(${m[1]},${m[2]},${m[3]})`;
}

async function auditPage(page, pagePath, failures) {
  await page.goto(`${baseUrl}${pagePath}`, { waitUntil: 'domcontentloaded', timeout: 20_000 });
  await page.waitForSelector('body[data-alt-chrome]', { timeout: 20_000 });
  await page.waitForSelector('main', { timeout: 20_000 });

  const pairs = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return [];
    const sections = [...main.querySelectorAll(':scope > section')];
    const rows = sections.map((s) => ({
      id: s.id || '',
      cls: (s.className || '').split(/\s+/).filter(Boolean).slice(0, 4).join(' '),
      bg: getComputedStyle(s).backgroundColor,
    }));
    const dupes = [];
    for (let i = 1; i < rows.length; i++) {
      if (rows[i].bg === rows[i - 1].bg) {
        dupes.push({ prev: rows[i - 1], curr: rows[i], index: i });
      }
    }
    return dupes;
  });

  for (const d of pairs) {
    failures.push(
      `${pagePath}: sections ${d.index - 1}→${d.index} same bg ${normalizeBg(d.curr.bg)} (#${d.prev.id || '—'} → #${d.curr.id || '—'})`,
    );
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
  console.error('ALT_CHROME_BAND_FAIL', failures.length);
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
}

console.log('ALT_CHROME_BAND_OK', PAGES.length, 'pages');
process.exit(0);
