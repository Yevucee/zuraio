/**
 * Hero layout guard: copy must not overlap the visual; primary H1 ≤ 2 lines at ≥1024.
 */
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.HERO_LAYOUT_PORT || 4191);

const LOCALES = [
  { loc: 'en', path: '/en/homepage-preview.html' },
  { loc: 'de', path: '/de/homepage-preview.html' },
  { loc: 'fr', path: '/fr/homepage-preview.html' },
  { loc: 'it', path: '/it/homepage-preview.html' },
];

const WIDTHS = [1024, 1280, 1440, 1920];

function rectsOverlap(a, b, tolerance = 1) {
  return !(
    a.right <= b.left + tolerance ||
    a.left >= b.right - tolerance ||
    a.bottom <= b.top + tolerance ||
    a.top >= b.bottom - tolerance
  );
}

async function measureHero(page, url, width) {
  await page.setViewportSize({ width, height: 1000 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForSelector('.alt-home-hero__line--primary', { timeout: 30_000 });
  await page.waitForSelector('.alt-home-hero__frame', { timeout: 30_000 });

  return page.evaluate(() => {
    const rectsOverlap = (a, b, tolerance = 1) =>
      !(
        a.right <= b.left + tolerance ||
        a.left >= b.right - tolerance ||
        a.bottom <= b.top + tolerance ||
        a.top >= b.bottom - tolerance
      );

    const frame = document.querySelector('.alt-home-hero__frame');
    const copy = document.querySelector('.alt-home-hero__copy');
    const visual = document.querySelector('.alt-home-hero__visual');
    const primary = document.querySelector('.alt-home-hero__line--primary');

    const frameRect = frame?.getBoundingClientRect();
    const copyRect = copy?.getBoundingClientRect();

    const textSelectors = [
      '.alt-home-hero__stack h1',
      '.alt-home-hero__sub',
      '.alt-home-hero__actions',
      '.alt-home-hero__micro',
      '.alt-home-hero__trust',
    ];

    const overlaps = [];
    if (frameRect && frameRect.width > 0) {
      for (const sel of textSelectors) {
        const el = copy?.querySelector(sel) ?? document.querySelector(sel);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && rectsOverlap(r, frameRect, 2)) {
          overlaps.push(sel);
        }
      }
    }

    const lineCount = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const lh = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.05;
      return Math.max(1, Math.round(el.getBoundingClientRect().height / lh));
    };

    let columnGap = null;
    if (copyRect && frameRect && visual) {
      const vRect = visual.getBoundingClientRect();
      if (vRect.left > copyRect.right - 2) {
        columnGap = Math.round(vRect.left - copyRect.right);
      }
    }

    return {
      heroPrimaryLines: lineCount(primary),
      overlaps,
      columnGap,
      frameWidth: frameRect ? Math.round(frameRect.width) : null,
    };
  });
}

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const failures = [];
const report = [];

try {
  const page = await browser.newPage();
  const base = `http://127.0.0.1:${PORT}`;

  for (const { loc, path: pagePath } of LOCALES) {
    for (const width of WIDTHS) {
      const url = `${base}${pagePath}`;
      const m = await measureHero(page, url, width);
      report.push({ loc, width, ...m });

      if (m.overlaps.length) {
        failures.push(`${loc}@${width}: copy overlaps image (${m.overlaps.join(', ')})`);
      }
      if (width >= 1024 && m.heroPrimaryLines != null && m.heroPrimaryLines > 2) {
        failures.push(`${loc}@${width}: primary H1 has ${m.heroPrimaryLines} lines (max 2)`);
      }
      if (width >= 1280 && m.columnGap != null && m.columnGap < 48) {
        failures.push(`${loc}@${width}: copy/image gap ${m.columnGap}px (min 48)`);
      }
    }
  }

  await page.close();
} finally {
  await browser.close().catch(() => {});
  await server.close().catch(() => {});
}

console.log(JSON.stringify(report, null, 2));

if (failures.length) {
  console.error('check-hero-layout: FAIL');
  for (const f of failures) console.error('  -', f);
  process.exit(1);
}

console.log('check-hero-layout: OK');
