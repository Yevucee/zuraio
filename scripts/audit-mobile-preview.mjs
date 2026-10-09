import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts/mobile-audit';
const WIDTH = 390;

const pages = [
  { path: '/en/homepage-preview.html', name: 'home-en' },
  { path: '/de/homepage-preview.html', name: 'home-de' },
  { path: '/en/contact.html', name: 'contact-en' },
  { path: '/en/how-it-helps.html', name: 'how-en' },
  { path: '/en/security.html', name: 'security-en' },
  { path: '/en/integrations.html', name: 'integrations-en' },
];

let server;
try {
  server = await startStaticDistServer(DIST, 4230);
} catch {
  console.error('Run npm run build first');
  process.exit(1);
}

import fs from 'node:fs';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const issues = [];

for (const { path: pagePath, name } of pages) {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: 844 } });
  await page.goto(`http://127.0.0.1:4230${pagePath}`, { waitUntil: 'load', timeout: 90000 });
  await page.waitForTimeout(name.startsWith('home') ? 2500 : 800);

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflowX = doc.scrollWidth > doc.clientWidth + 1;
    const offenders = [];
    document.querySelectorAll('body *').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;
      if (r.right > window.innerWidth + 2) {
        const tag = el.tagName.toLowerCase();
        const cls = el.className && typeof el.className === 'string' ? el.className.split(/\s+/)[0] : '';
        offenders.push({ tag, cls, right: Math.round(r.right), w: Math.round(r.width) });
      }
    });
    offenders.sort((a, b) => b.right - a.right);
    const tiny = [];
    document.querySelectorAll('button, a.btn, .nav-toggle').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44)) {
        tiny.push({ tag: el.tagName, cls: el.className?.slice?.(0, 40), w: r.width, h: r.height });
      }
    });
    return { overflowX, scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, offenders: offenders.slice(0, 8), tiny: tiny.slice(0, 6) };
  });

  if (metrics.overflowX) {
    issues.push({ page: name, type: 'horizontal-overflow', ...metrics });
  }
  if (metrics.tiny.length) {
    issues.push({ page: name, type: 'small-tap-targets', tiny: metrics.tiny });
  }

  await page.screenshot({ path: path.join(OUT, `${name}-top.png`), fullPage: false });
  if (name.startsWith('home')) {
    for (const id of ['#skills', '#how-start', '#hero']) {
      const loc = page.locator(id);
      if (await loc.count()) {
        await loc.scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);
        await loc.screenshot({ path: path.join(OUT, `${name}-${id.slice(1)}.png`) }).catch(() => {});
      }
    }
  }
  console.log(name, metrics.overflowX ? 'OVERFLOW' : 'ok', metrics.scrollWidth, metrics.offenders[0]?.cls ?? '');
  await page.close();
}

await browser.close();
await server.close();

fs.writeFileSync(path.join(OUT, 'issues.json'), JSON.stringify(issues, null, 2));
console.log('issues', issues.length);
