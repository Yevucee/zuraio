/**
 * Playwright prerender: write fully localized HTML for all pages and locales.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';
import { HTML_PAGES, LOCALES, LOCALE_DIRS, canonicalUrl } from './seo-config.mjs';
import { postprocessHtml, injectLangRedirect } from './postprocess-seo.mjs';

function rewriteAssetPathsForLocale(html, locale) {
  if (locale === 'en') return html;
  return html
    .replace(/\bhref="assets\//g, 'href="../assets/')
    .replace(/\bsrc="assets\//g, 'src="../assets/')
    .replace(/\bhref="css\//g, 'href="../css/')
    .replace(/\bsrc="js\//g, 'src="../js/')
    .replace(/\bhref="zuraio\//g, 'href="../zuraio/')
    .replace(/\bsrc="zuraio\//g, 'src="../zuraio/')
    .replace(/srcset="\.\.\/zuraio\//g, 'srcset="../zuraio/')
    .replace(/srcset="zuraio\//g, 'srcset="../zuraio/');
}

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.PRERENDER_PORT || 4175);
const GOTO_TIMEOUT_MS = 15_000;

function prerenderPath(htmlPage, locale) {
  if (htmlPage === 'impressum.html' && locale === 'en') {
    return '/en/impressum.html';
  }
  const dir = LOCALE_DIRS[locale];
  if (!dir) {
    return htmlPage === 'index.html' ? '/' : `/${htmlPage}`;
  }
  return htmlPage === 'index.html' ? `/${dir}/` : `/${dir}/${htmlPage}`;
}

function prerenderOutDir(htmlPage, locale) {
  if (htmlPage === 'impressum.html' && locale === 'en') {
    return path.join(DIST, 'en');
  }
  const dirKey = LOCALE_DIRS[locale];
  return dirKey ? path.join(DIST, dirKey) : DIST;
}

async function waitForPageReady(page, pageName, locale) {
  await page.waitForSelector('#site-header nav a', { timeout: 45000 });
  await page.waitForSelector('main', { timeout: 45000 });

  if (pageName === 'index.html') {
    await page.waitForFunction(
      () => document.querySelector('[data-hero-headline]')?.textContent?.trim().length > 8,
      { timeout: 45000 },
    );
    await page.waitForFunction(
      () => (document.querySelector('.hero-trust-bar__list')?.children.length ?? 0) >= 4,
      { timeout: 45000 },
    );
    if (locale !== 'en') {
      await page.waitForFunction(
        (loc) => document.documentElement.lang === loc,
        locale,
        { timeout: 45000 },
      );
    }
  }

  if (pageName === 'faq.html') {
    await page.waitForSelector('#faq-main h1', { timeout: 45000 });
    await page.waitForSelector('.faq-q', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  if (pageName === 'about.html') {
    await page.waitForSelector('#about-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  const dataPage = await page.evaluate(() => document.body.dataset.page || '');
  if (pageName === 'integrations.html') {
    await page.waitForSelector('#integrations-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  if (pageName === 'security.html') {
    await page.waitForSelector('#security-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  if (pageName === 'how-it-helps.html') {
    await page.waitForSelector('#how-it-helps-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  if (pageName === 'contact.html') {
    await page.waitForSelector('#contact-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  if (pageName === 'technical-architecture.html') {
    await page.waitForSelector('#tech-arch-main h1', { timeout: 45000 });
    await page.waitForFunction(
      (loc) => document.documentElement.lang === loc,
      locale,
      { timeout: 45000 },
    );
  }

  const needsBody = ['knowledge', 'integrations'];
  if (needsBody.includes(dataPage)) {
    await page.waitForFunction(
      () => (document.querySelector('main')?.textContent?.trim().length ?? 0) > 300,
      { timeout: 45000 },
    );
  }

  if (['impressum', 'privacy', 'terms', 'cookies'].includes(dataPage)) {
    await page.waitForSelector('.legal-content h2', { timeout: 45000 });
  }

  await page.waitForTimeout(600);
}

const LEGACY_REDIRECTS = [
  ['data-control.html', 'security.html'],
  ['deployment-models.html', 'security.html#hosting'],
  ['ai-governance.html', 'security.html#good-to-know'],
  ['knowledge.html', 'how-it-helps.html#skills'],
];

function writeLegacySecurityRedirect(outDir, locale, legacyFile, target) {
  const [page, hash = ''] = target.split('#');
  const canonical = `${canonicalUrl(locale, page)}${hash ? `#${hash}` : ''}`;
  const refreshUrl = `${target}`;
  const label = page.includes('how-it-helps') ? 'How it helps' : 'Security';
  const html = `<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${canonical}">
<meta http-equiv="refresh" content="0;url=${refreshUrl}">
<title>Redirecting to ${label}</title>
</head>
<body>
<p>Redirecting to <a href="${refreshUrl}">${label}</a>.</p>
</body>
</html>
`;
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, legacyFile), html);
}

async function runPrerender() {
  if (!fs.existsSync(DIST)) {
    console.error('prerender-site: dist/ not found');
    return 1;
  }

  const baseTemplates = Object.fromEntries(
    HTML_PAGES.map((page) => [page, fs.readFileSync(path.join(DIST, page), 'utf8')]),
  );

  function bootstrapLocaleDir(locale) {
    const dirKey = LOCALE_DIRS[locale];
    if (!dirKey) return;
    const outDir = path.join(DIST, dirKey);
    fs.mkdirSync(outDir, { recursive: true });
    for (const htmlPage of HTML_PAGES) {
      const dest = path.join(outDir, htmlPage);
      fs.writeFileSync(dest, rewriteAssetPathsForLocale(baseTemplates[htmlPage], locale));
    }
  }

  let server;
  let browser;
  let exitCode = 0;

  try {
    server = await startStaticDistServer(DIST, PORT);
    browser = await chromium.launch({ headless: true });

    for (const locale of LOCALES) {
      bootstrapLocaleDir(locale);
      const context = await browser.newContext();
      const page = await context.newPage();

      for (const htmlPage of HTML_PAGES) {
        const url = `http://127.0.0.1:${PORT}${prerenderPath(htmlPage, locale)}`;
        console.log(`prerender-site: ${locale} ${htmlPage}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: GOTO_TIMEOUT_MS });
        await waitForPageReady(page, htmlPage, locale);
        let html = await page.content();

        html = postprocessHtml(html, locale, htmlPage);
        html = injectLangRedirect(html);

        const outDir = prerenderOutDir(htmlPage, locale);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, htmlPage), html);
      }

      await context.close();
    }

    for (const locale of LOCALES) {
      const dirKey = LOCALE_DIRS[locale];
      const outDir = dirKey ? path.join(DIST, dirKey) : DIST;
      for (const [legacy, target] of LEGACY_REDIRECTS) {
        writeLegacySecurityRedirect(outDir, locale, legacy, target);
      }
    }

    console.log('prerender-site: complete');
  } catch (err) {
    console.error('prerender-site: fatal', err);
    exitCode = 1;
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) await server.close().catch(() => {});
  }

  return exitCode;
}

process.exit(await runPrerender());
