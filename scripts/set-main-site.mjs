/**
 * Promote the static marketing site (public/zuraio-comparison) to dist root
 * for GitHub Pages production, with legacy redirects from old paths.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const SITE_SRC = path.join(DIST, 'zuraio-comparison');

const TEXT_EXTENSIONS = new Set(['.html', '.js', '.css', '.json', '.md']);

function redirectHtml(target) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="${target}" />
  <title>Zuraio</title>
  <script>
    (function () {
      var target = ${JSON.stringify(target)};
      location.replace(target + location.search + location.hash);
    })();
  </script>
</head>
<body>
  <p><a href="${target}">Continue to Zuraio</a></p>
</body>
</html>
`;
}

function rewriteSitePaths(content) {
  return content.replaceAll('../zuraio/assets/', 'zuraio/assets/');
}

function copyEntry(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyEntry(path.join(src, name), path.join(dest, name));
    }
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const ext = path.extname(src).toLowerCase();
  if (TEXT_EXTENSIONS.has(ext)) {
    const text = fs.readFileSync(src, 'utf8');
    fs.writeFileSync(dest, rewriteSitePaths(text));
    return;
  }
  fs.copyFileSync(src, dest);
}

function removeViteAppArtifacts() {
  const assetsDir = path.join(DIST, 'assets');
  if (!fs.existsSync(assetsDir)) return;
  for (const name of fs.readdirSync(assetsDir)) {
    if (/^index-[A-Za-z0-9_-]+\.(js|css)$/.test(name)) {
      fs.unlinkSync(path.join(assetsDir, name));
    }
  }
}

function writeLegacyRedirects(pages) {
  fs.mkdirSync(SITE_SRC, { recursive: true });
  for (const page of pages) {
    const target = page === 'index.html' ? '../index.html' : `../${page}`;
    fs.writeFileSync(path.join(SITE_SRC, page), redirectHtml(target));
  }
}

function copyFaviconsToRoot() {
  const faviconDir = path.join(DIST, 'assets');
  const names = ['favicon.svg', 'favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'apple-touch-icon.png'];
  for (const name of names) {
    const src = path.join(faviconDir, name);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, name));
    }
  }
}

function updateZuraioEntryRedirect() {
  const zuraioIndex = path.join(DIST, 'zuraio', 'index.html');
  fs.mkdirSync(path.dirname(zuraioIndex), { recursive: true });
  fs.writeFileSync(zuraioIndex, redirectHtml('../index.html'));
}

if (!fs.existsSync(DIST)) {
  console.error('set-main-site: dist/ not found — run vite build first');
  process.exit(1);
}

if (!fs.existsSync(SITE_SRC)) {
  console.error('set-main-site: dist/zuraio-comparison/ not found');
  process.exit(1);
}

const htmlPages = fs
  .readdirSync(SITE_SRC)
  .filter((name) => name.endsWith('.html'));

for (const name of fs.readdirSync(SITE_SRC)) {
  copyEntry(path.join(SITE_SRC, name), path.join(DIST, name));
}

removeViteAppArtifacts();
writeLegacyRedirects(htmlPages);
updateZuraioEntryRedirect();
copyFaviconsToRoot();

if (!fs.existsSync(path.join(DIST, '.nojekyll'))) {
  fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
}

console.log('set-main-site: marketing site promoted to dist root');
console.log('set-main-site: legacy redirects written under dist/zuraio-comparison/');
