/**
 * Run 10 deliverables: FR/IT H1 counts + screenshots.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const ART = '/opt/cursor/artifacts';
const PORT = 4182;

const FR_IT_PAGES = [
  'homepage-preview.html',
  'how-it-helps.html',
  'security.html',
  'integrations.html',
  'technical-architecture.html',
  'about.html',
  'contact.html',
  'faq.html',
];

async function measureH1(page, url, width) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
  await page.waitForSelector('h1', { timeout: 20000 });
  return page.evaluate(() => {
    const h1 = document.querySelector('main h1, #alt-home-main h1');
    if (!h1) return null;
    const style = getComputedStyle(h1);
    const lh = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.05;
    const lines = Math.max(1, Math.round(h1.getBoundingClientRect().height / lh));
    const primary = h1.querySelector('.alt-home-hero__line--primary');
    const secondary = h1.querySelector('.alt-home-hero__line--secondary');
    const lineCount = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const l = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.05;
      return Math.max(1, Math.round(el.getBoundingClientRect().height / l));
    };
    return {
      lines,
      heroPrimaryLines: lineCount(primary),
      heroSecondaryLines: lineCount(secondary),
      text: h1.textContent?.trim().slice(0, 100),
    };
  });
}

async function shot(page, url, file, width, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  if (url.includes('#skills')) {
    await page.waitForSelector('#skills', { timeout: 20000 }).catch(() => {});
    await page.locator('#skills').scrollIntoViewIfNeeded().catch(() => {});
  }
  await page.screenshot({ path: path.join(ART, file), fullPage: width === 390 });
}

async function run() {
  fs.mkdirSync(ART, { recursive: true });
  const server = await startStaticDistServer(DIST, PORT);
  const browser = await chromium.launch({ headless: true });
  const base = `http://127.0.0.1:${PORT}`;
  const h1Rows = [];

  try {
    const page = await browser.newPage();
    for (const loc of ['fr', 'it']) {
      for (const file of FR_IT_PAGES) {
        const p = `/${loc}/${file}`;
        const label = `${loc.toUpperCase()} ${file.replace('.html', '')}`;
        h1Rows.push({
          label,
          at1280: await measureH1(page, `${base}${p}`, 1280),
          at390: await measureH1(page, `${base}${p}`, 390),
        });
      }
    }

    await shot(page, `${base}/fr/homepage-preview.html#skills`, 'run10-fr-home-skills-1280.png', 1280, 1400);
    await shot(page, `${base}/fr/homepage-preview.html`, 'run10-fr-home-390.png', 390, 3000);
    await shot(page, `${base}/it/homepage-preview.html#skills`, 'run10-it-home-skills-1280.png', 1280, 1400);
    await shot(page, `${base}/it/homepage-preview.html`, 'run10-it-home-390.png', 390, 3000);
    await shot(page, `${base}/fr/faq.html`, 'run10-fr-faq-1280.png', 1280);
    await shot(page, `${base}/it/contact.html`, 'run10-it-contact-1280.png', 1280);

    // Language switch: fr/faq#chatgpt-copilot → it keeps hash
    await page.goto(`${base}/fr/faq.html#chatgpt-copilot`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#chatgpt-copilot', { timeout: 20000 });
    const itHref = await page.evaluate(() => {
      const a = [...document.querySelectorAll('a[hreflang="it"]')][0];
      return a?.getAttribute('href') ?? '';
    });
    await page.close();

    fs.writeFileSync(path.join(ART, 'run10-h1-fr-it.json'), JSON.stringify(h1Rows, null, 2));
    fs.writeFileSync(
      path.join(ART, 'run10-lang-switch.txt'),
      `fr faq IT href: ${itHref}\n`,
    );
    console.log('run10-report: OK');
    console.log(JSON.stringify(h1Rows, null, 2));
    console.log('lang-switch it href:', itHref);
  } finally {
    await browser.close().catch(() => {});
    await server.close().catch(() => {});
  }
}

await run();
