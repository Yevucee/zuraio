/**
 * Playwright checks for EN / first-visit locale redirect (Run 12).
 */
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.HOME_LOCALE_PORT || 4194);

/** @param {import('playwright').BrowserContext} context */
async function mockEnv(context, { timeZone, languages, language, userAgent, webdriver }) {
  await context.addInitScript(
    ({ tz, langs, lang, wd }) => {
      if (tz) {
        const proto = Intl.DateTimeFormat.prototype;
        const orig = proto.resolvedOptions;
        proto.resolvedOptions = function resolvedOptions() {
          const o = orig.call(this);
          o.timeZone = tz;
          return o;
        };
      }
      if (langs) {
        Object.defineProperty(navigator, 'languages', { get: () => langs, configurable: true });
      }
      if (lang) {
        Object.defineProperty(navigator, 'language', { get: () => lang, configurable: true });
      }
      if (wd !== undefined) {
        Object.defineProperty(navigator, 'webdriver', { get: () => wd, configurable: true });
      }
    },
    {
      tz: timeZone ?? null,
      langs: languages ?? null,
      lang: language ?? (languages?.[0] ?? 'en-US'),
      wd: webdriver ?? null,
    },
  );
  if (userAgent) {
    await context.setExtraHTTPHeaders({});
  }
}

async function finalPath(page) {
  const u = new URL(page.url());
  return u.pathname.replace(/\/index\.html$/i, '/').replace(/\/+$/, '/') || '/';
}

const cases = [
  {
    name: 'Europe/Zurich + en-US → /de/',
    tz: 'Europe/Zurich',
    languages: ['en-US'],
    path: '/',
    expect: '/de/',
  },
  {
    name: 'Europe/Zurich + de-CH → /de/',
    tz: 'Europe/Zurich',
    languages: ['de-CH'],
    path: '/',
    expect: '/de/',
  },
  {
    name: 'Europe/Zurich + fr-CH → /fr/',
    tz: 'Europe/Zurich',
    languages: ['fr-CH'],
    path: '/',
    expect: '/fr/',
  },
  {
    name: 'Europe/Zurich + it-CH → /it/',
    tz: 'Europe/Zurich',
    languages: ['it-CH'],
    path: '/',
    expect: '/it/',
  },
  {
    name: 'Europe/London + en-GB → /',
    tz: 'Europe/London',
    languages: ['en-GB'],
    path: '/',
    expect: '/',
  },
  {
    name: 'America/New_York + en-US → /',
    tz: 'America/New_York',
    languages: ['en-US'],
    path: '/',
    expect: '/',
  },
  {
    name: 'Europe/Berlin + de-DE → /de/',
    tz: 'Europe/Berlin',
    languages: ['de-DE'],
    path: '/',
    expect: '/de/',
  },
  {
    name: 'Europe/Madrid + es-ES → /',
    tz: 'Europe/Madrid',
    languages: ['es-ES'],
    path: '/',
    expect: '/',
  },
  {
    name: 'Googlebot UA on / → /',
    tz: 'Europe/Zurich',
    languages: ['de-CH'],
    path: '/',
    expect: '/',
    userAgent:
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  },
  {
    name: '/security.html direct (Zurich + de-CH) → no redirect',
    tz: 'Europe/Zurich',
    languages: ['de-CH'],
    path: '/security.html',
    expect: '/security.html',
  },
];

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const base = `http://127.0.0.1:${PORT}`;
const results = [];
const failures = [];

try {
  for (const tc of cases) {
    const context = await browser.newContext(
      tc.userAgent ? { userAgent: tc.userAgent } : {},
    );
    await mockEnv(context, {
      timeZone: tc.tz,
      languages: tc.languages,
      webdriver: tc.userAgent ? false : undefined,
    });
    const page = await context.newPage();
    await page.goto(`${base}${tc.path}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.waitForTimeout(150);
    const got = tc.path === '/' ? await finalPath(page) : new URL(page.url()).pathname;
    const normalized =
      got === '/security.html' ? got : got.replace(/\/index\.html$/i, '/').replace(/\/+$/, '/') || '/';
    const expectNorm = tc.expect.replace(/\/index\.html$/i, '/');
    const pass = normalized === expectNorm || normalized + '/' === expectNorm || normalized === expectNorm + '/';
    results.push({ ...tc, got: normalized, pass });
    if (!pass) failures.push(`${tc.name}: expected ${expectNorm}, got ${normalized}`);
    await context.close();
  }

  {
    const name = 'After EN switcher choice, Zurich + de-CH on / → /';
    const context = await browser.newContext();
    await mockEnv(context, { timeZone: 'Europe/Zurich', languages: ['de-CH'] });
    const page = await context.newPage();
    await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => {
      try {
        localStorage.setItem('zuraio-locale', 'en');
      } catch {
        /* ignore */
      }
    });
    await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    const got = await finalPath(page);
    const pass = got === '/';
    results.push({ name, got, pass, expect: '/' });
    if (!pass) failures.push(`${name}: expected /, got ${got}`);
    await context.close();
  }
} finally {
  await browser.close().catch(() => {});
  await server.close().catch(() => {});
}

console.log(JSON.stringify(results, null, 2));

if (failures.length) {
  console.error('check-home-locale-redirect: FAIL');
  for (const f of failures) console.error('  -', f);
  process.exit(1);
}

console.log('check-home-locale-redirect: OK');
