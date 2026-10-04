import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const PORT = 4182;
const V = '20261004a';

const jobs = [
  { file: 'run7c-skills-en-1280.png', path: `/en/homepage-preview.html?v=${V}`, width: 1280, skills: true },
  { file: 'run7c-skills-de-1280.png', path: `/de/homepage-preview.html?v=${V}`, width: 1280, skills: true },
  { file: 'run7c-skills-en-390.png', path: `/en/homepage-preview.html?v=${V}`, width: 390, skills: true },
  { file: 'run7c-skills-de-390.png', path: `/de/homepage-preview.html?v=${V}`, width: 390, skills: true },
];

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

for (const j of jobs) {
  const page = await browser.newPage({ viewport: { width: j.width, height: 1200 } });
  await page.goto(`${base}${j.path}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForSelector('#skills', { timeout: 30_000 });
  const skills = page.locator('#skills');
  await skills.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await skills.screenshot({ path: path.join(OUT, j.file) });
  console.log('wrote', j.file);
  await page.close();
}

await browser.close();
await server.close();
