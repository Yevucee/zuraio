/**
 * Playwright link audit on prerendered dist (EN + DE new pages).
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.LINK_CHECK_PORT || 4177);
const LINK_CHECK_TIMEOUT_MS = Number(process.env.LINK_CHECK_TIMEOUT_MS || 120000);

setTimeout(() => {
  console.error('check-internal-links: timed out');
  process.exit(1);
}, LINK_CHECK_TIMEOUT_MS).unref();

const PAGES = [
  { path: '/security.html', locale: 'en' },
  { path: '/de/security.html', locale: 'de' },
  { path: '/integrations.html', locale: 'en' },
  { path: '/de/integrations.html', locale: 'de' },
  { path: '/how-it-helps.html', locale: 'en' },
  { path: '/de/how-it-helps.html', locale: 'de' },
  { path: '/contact.html', locale: 'en' },
  { path: '/de/contact.html', locale: 'de' },
  { path: '/technical-architecture.html', locale: 'en' },
  { path: '/de/technical-architecture.html', locale: 'de' },
  { path: '/en/homepage-preview.html', locale: 'en' },
  { path: '/de/homepage-preview.html', locale: 'de' },
];

const FORBIDDEN =
  /(?:data-control|deployment-models|ai-governance|knowledge)\.html|(?:resources|pricing|preise|new-in-zuraio|neu-bei-zuraio)\.html|^index\.html$/;

function waitForServer() {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const tick = () => {
      http.get(`http://127.0.0.1:${PORT}/`, (res) => {
        res.resume();
        resolve();
      }).on('error', () => {
        tries += 1;
        if (tries > 40) reject(new Error('server timeout'));
        else setTimeout(tick, 400);
      });
    };
    tick();
  });
}

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['serve', DIST, '-l', String(PORT), '--no-clipboard'], { stdio: 'pipe', shell: true });
    proc.on('error', reject);
    waitForServer().then(() => resolve(proc)).catch((e) => {
      proc.kill('SIGTERM');
      reject(e);
    });
  });
}

if (!fs.existsSync(DIST)) {
  console.error('check-internal-links: dist/ missing');
  process.exit(1);
}

const server = await startServer();
const browser = await chromium.launch({ headless: true });
let totalLinks = 0;
const failures = [];

for (const { path: pagePath } of PAGES) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`http://127.0.0.1:${PORT}${pagePath}`, { waitUntil: 'load', timeout: 60000 });
  await page.waitForSelector('#site-header', { timeout: 45000 });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (overflow) failures.push(`${pagePath}: horizontal scroll at 1280`);

  const result = await page.evaluate(() => {
    const forbidden = /(?:data-control|deployment-models|ai-governance|knowledge)\.html|(?:resources|pricing|preise|new-in-zuraio|neu-bei-zuraio)\.html/;
    const links = [...document.querySelectorAll('a[href]')];
    const errors = [];
    for (const a of links) {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) continue;
      if (forbidden.test(href)) errors.push(`forbidden ${href}`);
      if (a.target === '_blank' && !href.startsWith('http')) errors.push(`target blank internal ${href}`);
      if (href.includes('#')) {
        const [file, hash] = href.split('#');
        if (hash && file && !file.startsWith('http')) {
          const targetPath = file || location.pathname.split('/').pop();
          const el = document.querySelector(`#${CSS.escape(hash)}`);
          if (file === '' || file === location.pathname.split('/').pop() || !file.includes('.html')) {
            if (!document.getElementById(hash)) errors.push(`missing anchor #${hash} for ${href}`);
          }
        }
      }
    }
    return { count: links.length, errors };
  });

  totalLinks += result.count;
  for (const e of result.errors) failures.push(`${pagePath}: ${e}`);
  await page.close();
}

await browser.close();
if (server?.kill) server.kill('SIGKILL');

console.log(`check-internal-links: ${totalLinks} links scanned across ${PAGES.length} pages`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('check-internal-links: OK');
