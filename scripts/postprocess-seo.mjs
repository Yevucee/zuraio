/**
 * Inject canonical, hreflang, Open Graph, JSON-LD and fix locale paths.
 */
import * as en from '../public/zuraio-comparison/js/copy-en.js';
import * as de from '../public/zuraio-comparison/js/copy-de.js';
import * as fr from '../public/zuraio-comparison/js/copy-fr.js';
import * as it from '../public/zuraio-comparison/js/copy-it.js';
import {
  CANONICAL_BASE,
  LOCALES,
  OG_IMAGE_PATH,
  OG_LOCALE,
  SOFTWARE_APP_PAGES,
  canonicalUrl,
} from './seo-config.mjs';

const copies = { en, de, fr, it };

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const PAGE_ID_BY_FILE = {
  'about.html': 'about',
  'how-it-helps.html': 'howItHelps',
  'contact.html': 'contact',
  'resources.html': 'resources',
  'technical-architecture.html': 'technicalArchitecture',
  'knowledge.html': 'knowledge',
  'data-control.html': 'dataControl',
  'deployment-models.html': 'deploymentModels',
  'ai-governance.html': 'aiGovernance',
  'integrations.html': 'integrations',
  'faq.html': 'faq',
  'impressum.html': 'impressum',
  'privacy.html': 'privacy',
  'terms.html': 'terms',
  'cookies.html': 'cookies',
};

function resolvePageId(page) {
  return PAGE_ID_BY_FILE[page] ?? page.replace('.html', '');
}

function getMeta(locale, page) {
  const copy = copies[locale] ?? copies.en;
  if (page === 'index.html') {
    const m = copy.home?.meta ?? {};
    return {
      title: m.title ?? 'Zuraio',
      description: m.description ?? '',
      ogTitle: m.ogTitle ?? m.title ?? 'Zuraio',
      ogDescription: m.ogDescription ?? m.description ?? '',
    };
  }
  const pid = resolvePageId(page);
  const p = copy.pages?.[pid];
  if (p) {
    return {
      title: p.title ?? 'Zuraio',
      description: p.description ?? p.hero?.lede ?? '',
      ogTitle: p.ogTitle ?? p.title ?? 'Zuraio',
      ogDescription: p.ogDescription ?? p.description ?? p.hero?.lede ?? '',
    };
  }
  return { title: 'Zuraio', description: '', ogTitle: 'Zuraio', ogDescription: '' };
}

function buildHreflangLinks(page) {
  return LOCALES.map(
    (loc) =>
      `<link rel="alternate" hreflang="${loc}" href="${escapeHtml(canonicalUrl(loc, page))}">`,
  ).join('\n');
}

function buildJsonLd(locale, page) {
  const blocks = [];
  const copy = copies[locale] ?? copies.en;
  const url = canonicalUrl(locale, page);

  if (page === 'index.html') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zuraio',
      url: CANONICAL_BASE + '/',
      email: 'michael.wili@zuraio.ch',
      description: copy.home?.meta?.description ?? copy.site?.tagline ?? '',
    });
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zuraio',
      url: CANONICAL_BASE + '/',
      inLanguage: locale,
      description: copy.home?.meta?.description ?? '',
    });
  }

  if (SOFTWARE_APP_PAGES.has(page)) {
    const meta = getMeta(locale, page);
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Zuraio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url,
      description: meta.description || copy.site?.tagline || '',
      provider: {
        '@type': 'Organization',
        name: 'Zuraio',
        url: CANONICAL_BASE + '/',
      },
    });
  }

  if (!blocks.length) return '';
  return blocks
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
    .join('\n');
}

function rewriteAssetPaths(html, locale) {
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

function normalizeLocaleLinks(html, locale) {
  if (locale === 'en') return html;
  let out = html;
  for (const loc of LOCALES) {
    if (loc === 'en') continue;
    out = out.replace(new RegExp(`href="${loc}/${loc}/`, 'g'), 'href="');
    out = out.replace(new RegExp(`href="${loc}/`, 'g'), 'href="');
  }
  return out;
}

function rewriteLangLinks(html, locale) {
  let out = html;
  for (const loc of LOCALES) {
    if (loc === 'en') {
      out = out.replace(
        new RegExp(`([?"'])([^"']*)\\.html\\?lang=en([^"']*)`, 'g'),
        (_, q, file, rest) => `${q}${file}.html${rest}`,
      );
    } else {
      out = out.replace(
        new RegExp(`([?"'])(${loc}/)([^"']*)\\.html\\?lang=${loc}`, 'g'),
        (_, q, prefix, file) => `${q}${prefix}${file}.html`,
      );
      out = out.replace(
        new RegExp(`([?"'])([^"']*)\\.html\\?lang=${loc}([^"']*)`, 'g'),
        (_, q, file, rest) => {
          const clean = file.replace(new RegExp(`^(${LOCALES.join('|')})/`), '');
          return locale === 'en'
            ? `${q}${loc}/${clean}.html${rest}`
            : `${q}${clean}.html${rest}`;
        },
      );
    }
  }
  return normalizeLocaleLinks(out, locale);
}

export function postprocessHtml(html, locale, page) {
  const meta = getMeta(locale, page);
  const canonical = canonicalUrl(locale, page);
  const ogImage = `${CANONICAL_BASE}${OG_IMAGE_PATH}`;
  const ogLocale = OG_LOCALE[locale] ?? 'en_CH';
  const altLocales = LOCALES.filter((l) => l !== locale)
    .map((l) => OG_LOCALE[l])
    .filter(Boolean);

  let out = rewriteAssetPaths(html, locale);
  out = rewriteLangLinks(out, locale);

  out = out.replace(/<html lang="[^"]*">/, `<html lang="${locale}">`);

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);

  const descTag = `<meta name="description" content="${escapeHtml(meta.description)}">`;
  if (out.includes('name="description"')) {
    out = out.replace(/<meta name="description" content="[^"]*">/, descTag);
  } else {
    out = out.replace('</head>', `  ${descTag}\n</head>`);
  }

  const headInject = `
  <link rel="canonical" href="${escapeHtml(canonical)}">
  ${buildHreflangLinks(page)}
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl('en', page))}">
  <meta property="og:title" content="${escapeHtml(meta.ogTitle)}">
  <meta property="og:description" content="${escapeHtml(meta.ogDescription)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(ogImage)}">
  <meta property="og:locale" content="${ogLocale}">
${altLocales.map((l) => `  <meta property="og:locale:alternate" content="${l}">`).join('\n')}
  ${buildJsonLd(locale, page)}
`;

  out = out.replace(/<link rel="canonical"[^>]*>\s*/g, '');
  out = out.replace(/<link rel="alternate" hreflang="[^"]*"[^>]*>\s*/g, '');
  out = out.replace(/<meta property="og:[^"]+"[^>]*>\s*/g, '');
  out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '');

  out = out.replace('</head>', `${headInject}</head>`);

  return out;
}

export function injectLangRedirect(html) {
  const snippet = `<script>
(function(){var p=new URLSearchParams(location.search),l=p.get('lang');
if(!l||l==='en'||!['de','fr','it'].includes(l))return;
var seg=location.pathname.split('/').filter(Boolean),base=seg[0]==='zuraio'?'/zuraio':'';
if(base&&['de','fr','it'].includes(seg[1]))return;
if(!base&&['de','fr','it'].includes(seg[0]))return;
var f=location.pathname.split('/').pop()||'index.html';
if(!f.endsWith('.html'))f='index.html';
p.delete('lang');var q=p.toString();
location.replace(base+'/'+l+'/'+f+(q?'?'+q:'')+location.hash);
})();
</script>`;
  return html.replace('</head>', `${snippet}\n</head>`);
}
