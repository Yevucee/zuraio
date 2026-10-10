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

const PREVIEW_SUBPAGES = [
  'security.html',
  'integrations.html',
  'how-it-helps.html',
  'contact.html',
  'about.html',
  'faq.html',
  'technical-architecture.html',
];

const PAGES = [
  ...PREVIEW_SUBPAGES.flatMap((p) => [
    { path: `/${p}`, locale: 'en' },
    { path: `/de/${p}`, locale: 'de' },
    { path: `/fr/${p}`, locale: 'fr' },
    { path: `/it/${p}`, locale: 'it' },
  ]),
  { path: '/', locale: 'en' },
  { path: '/de/', locale: 'de' },
  { path: '/fr/', locale: 'fr' },
  { path: '/it/', locale: 'it' },
  { path: '/privacy.html', locale: 'en' },
  { path: '/de/privacy.html', locale: 'de' },
  { path: '/fr/privacy.html', locale: 'fr' },
  { path: '/it/privacy.html', locale: 'it' },
];

const EN_PREVIEW_ROUTE_EXPECT = {
  about: 'about.html',
  faq: 'faq.html',
  'it-partner': 'technical-architecture.html',
};

function assertEnPreviewRouteResolution(failures) {
  const pathname = '/';
  for (const [routeKey, expected] of Object.entries(EN_PREVIEW_ROUTE_EXPECT)) {
    const href = resolveRouteFromLocation(routeKey, 'en', pathname);
    if (href !== expected) {
      failures.push(`en preview route ${routeKey}: expected ${expected}, got ${href}`);
    }
  }
}

async function checkEnPreviewLinkHrefs(page, baseUrl, failures) {
  const pagePath = '/';
  await page.goto(`${baseUrl}${pagePath}`, {
    waitUntil: 'domcontentloaded',
    timeout: GOTO_TIMEOUT_MS,
  });
  await page.waitForSelector('.alt-home-faq-view-all a[data-route="faq"]', { timeout: SELECTOR_TIMEOUT_MS });
  await page.waitForSelector('.alt-home-faq-links', { timeout: SELECTOR_TIMEOUT_MS });

  const hrefs = await page.evaluate(() => {
    const navAbout = document.querySelector('#site-header a[data-route="about"]')?.getAttribute('href') ?? '';
    const linkAll =
      document.querySelector('.alt-home-faq-view-all a[data-route="faq"]')?.getAttribute('href') ??
      document.querySelector('.alt-home-faq-links a[data-route="faq"]')?.getAttribute('href') ??
      '';
    const linkIt = document.querySelector('.alt-home-faq-links a[data-route="it-partner"]')?.getAttribute('href') ?? '';
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

  await page.waitForSelector('#same-question .alt-sq-link-wrap a', { timeout: SELECTOR_TIMEOUT_MS });
  const compareHref = await page.locator('#same-question .alt-sq-link-wrap a').getAttribute('href');
  if (!compareHref?.includes('faq.html') || !compareHref.includes('chatgpt-copilot')) {
    failures.push(
      `${pagePath}: same-question link must target faq.html#chatgpt-copilot, got ${compareHref ?? '(missing)'}`,
    );
  } else {
    await page.locator('#same-question .alt-sq-link-wrap a').click();
    await page.waitForURL(/faq\.html/, { timeout: SELECTOR_TIMEOUT_MS });
    await page.waitForFunction(
      () =>
        document.getElementById('chatgpt-copilot')?.querySelector('.faq-q')?.getAttribute('aria-expanded') ===
        'true',
      null,
      { timeout: SELECTOR_TIMEOUT_MS },
    );
  }
}

async function checkFaqHashAndLangSwitch(page, baseUrl, failures) {
  const faqPath = '/faq.html#can-we-see-which-sources-were-used';
  await page.goto(`${baseUrl}${faqPath}`, { waitUntil: 'domcontentloaded', timeout: GOTO_TIMEOUT_MS });
  await page.waitForSelector('#can-we-see-which-sources-were-used', { timeout: SELECTOR_TIMEOUT_MS });
  await page.waitForFunction(
    () => {
      const link = [...document.querySelectorAll('#site-header a[hreflang="de"], #site-footer a[hreflang="de"]')][0];
      return link?.getAttribute('href')?.includes('can-we-see-which-sources-were-used') ?? false;
    },
    null,
    { timeout: SELECTOR_TIMEOUT_MS },
  );
  const open = await page.evaluate(
    () =>
      document.getElementById('can-we-see-which-sources-were-used')?.querySelector('.faq-q')?.getAttribute('aria-expanded') ===
      'true',
  );
  if (!open) {
    failures.push('faq.html#can-we-see-which-sources-were-used: item not open from hash');
  }

  const deHref = await page.evaluate(() => {
    const link = [...document.querySelectorAll('#site-header .lang-dropdown-option, #site-footer a[hreflang]')].find(
      (a) => a.getAttribute('hreflang') === 'de',
    );
    return link?.getAttribute('href') ?? '';
  });
  if (!deHref.includes('de/faq.html') || !deHref.includes('#can-we-see-which-sources-were-used')) {
    failures.push(`faq.html lang switch to DE must keep hash, got ${deHref || '(missing)'}`);
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
        const baseUrl = `http://127.0.0.1:${PORT}`;
        await checkEnPreviewLinkHrefs(page, baseUrl, failures);
        await checkFaqHashAndLangSwitch(page, baseUrl, failures);
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
