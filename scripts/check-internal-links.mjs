/**
 * Playwright link audit on prerendered dist (EN + DE new pages).
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';
import { resolveRouteFromLocation } from '../public/zuraio-comparison/js/site-routes.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.LINK_CHECK_PORT || 4177);
const GOTO_TIMEOUT_MS = 15_000;
const SELECTOR_TIMEOUT_MS = 15_000;

setTimeout(() => {
  console.error('link check watchdog: exceeded 4 min');
  process.exit(1);
}, 240_000).unref();

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

const EN_PREVIEW_ROUTE_EXPECT = {
  about: 'homepage-preview.html#team',
  faq: 'homepage-preview.html#faq',
  'it-partner': '../technical-architecture.html',
};

function assertEnPreviewRouteResolution(failures) {
  const pathname = '/en/homepage-preview.html';
  for (const [routeKey, expected] of Object.entries(EN_PREVIEW_ROUTE_EXPECT)) {
    const href = resolveRouteFromLocation(routeKey, 'en', pathname);
    if (href !== expected) {
      failures.push(`en preview route ${routeKey}: expected ${expected}, got ${href}`);
    }
  }
}

async function checkEnPreviewLinkHrefs(page, baseUrl, failures) {
  const pagePath = '/en/homepage-preview.html';
  await page.goto(`${baseUrl}${pagePath}`, {
    waitUntil: 'domcontentloaded',
    timeout: GOTO_TIMEOUT_MS,
  });
  await page.waitForSelector('.alt-home-faq-links', { timeout: SELECTOR_TIMEOUT_MS });

  const hrefs = await page.evaluate(() => {
    const navAbout = document.querySelector('#site-header a[data-route="about"]')?.getAttribute('href') ?? '';
    const faqLinks = [...document.querySelectorAll('.alt-home-faq-links a[data-route]')];
    const linkAll = faqLinks.find((a) => a.getAttribute('data-route') === 'faq')?.getAttribute('href') ?? '';
    const linkIt = faqLinks.find((a) => a.getAttribute('data-route') === 'it-partner')?.getAttribute('href') ?? '';
    const footerFaq = document.querySelector('#site-footer a[data-route="faq"]')?.getAttribute('href') ?? '';
    return { navAbout, linkAll, linkIt, footerFaq };
  });

  const expected = {
    navAbout: EN_PREVIEW_ROUTE_EXPECT.about,
    linkAll: EN_PREVIEW_ROUTE_EXPECT.faq,
    linkIt: EN_PREVIEW_ROUTE_EXPECT['it-partner'],
    footerFaq: EN_PREVIEW_ROUTE_EXPECT.faq,
  };

  for (const [key, exp] of Object.entries(expected)) {
    if (hrefs[key] !== exp) {
      failures.push(`${pagePath}: ${key} href expected ${exp}, got ${hrefs[key] || '(missing)'}`);
    }
  }

  const docBase = `${baseUrl.replace(/\/$/, '')}${pagePath}`;
  const toFetch = [...new Set(Object.values(hrefs).filter(Boolean))];
  for (const href of toFetch) {
    const url = new URL(href, docBase);
    url.hash = '';
    const res = await page.request.get(url.toString());
    if (!res.ok()) {
      failures.push(`${pagePath}: GET ${href} resolved to ${url.href} → ${res.status()}`);
    }
  }
}

async function run() {
  if (!fs.existsSync(DIST)) {
    console.error('check-internal-links: dist/ missing');
    return 1;
  }

  let server;
  let browser;
  let exitCode = 0;
  let totalLinks = 0;
  const failures = [];

  try {
    server = await startStaticDistServer(DIST, PORT);
    browser = await chromium.launch({ headless: true });

    assertEnPreviewRouteResolution(failures);

    for (const { path: pagePath } of PAGES) {
      const page = await browser.newPage();
      try {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(`http://127.0.0.1:${PORT}${pagePath}`, {
          waitUntil: 'domcontentloaded',
          timeout: GOTO_TIMEOUT_MS,
        });
        await page.waitForSelector('#site-header', { timeout: SELECTOR_TIMEOUT_MS });

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        );
        if (overflow) failures.push(`${pagePath}: horizontal scroll at 1280`);

        const result = await page.evaluate(() => {
          const forbidden =
            /(?:data-control|deployment-models|ai-governance|knowledge)\.html|(?:resources|pricing|preise|new-in-zuraio|neu-bei-zuraio)\.html/;
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
      } finally {
        await page.close().catch(() => {});
      }
    }

    {
      const page = await browser.newPage();
      try {
        await checkEnPreviewLinkHrefs(page, `http://127.0.0.1:${PORT}`, failures);
      } finally {
        await page.close().catch(() => {});
      }
    }

    console.log(`check-internal-links: ${totalLinks} links scanned across ${PAGES.length} pages`);
    if (failures.length) {
      console.error(failures.join('\n'));
      exitCode = 1;
    } else {
      console.log('check-internal-links: OK');
    }
  } catch (err) {
    console.error('check-internal-links: fatal', err);
    exitCode = 1;
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) await server.close().catch(() => {});
  }

  return exitCode;
}

const code = await run();
process.exit(code);
