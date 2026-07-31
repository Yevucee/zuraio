/**
 * After Vite build, point the repo root at the static marketing site and
 * disconnect legacy homepage entry points.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const MAIN_SITE = 'zuraio-comparison/index.html';

function redirectHtml(target, title = 'Zuraio') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="./zuraio-comparison/assets/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="./zuraio-comparison/assets/favicon-32x32.png" sizes="32x32" type="image/png" />
  <link rel="icon" href="./zuraio-comparison/assets/favicon-16x16.png" sizes="16x16" type="image/png" />
  <link rel="shortcut icon" href="./zuraio-comparison/assets/favicon.ico" />
  <link rel="apple-touch-icon" href="./zuraio-comparison/assets/apple-touch-icon.png" />
  <meta http-equiv="refresh" content="0; url=${target}" />
  <link rel="canonical" href="${target}" />
  <title>${title}</title>
  <script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
  <p><a href="${target}">Continue to Zuraio</a></p>
</body>
</html>
`;
}

if (!fs.existsSync(DIST)) {
  console.error('set-main-site: dist/ not found — run vite build first');
  process.exit(1);
}

fs.writeFileSync(path.join(DIST, 'index.html'), redirectHtml(`./${MAIN_SITE}`));
fs.writeFileSync(
  path.join(DIST, 'zuraio', 'index.html'),
  redirectHtml(`../${MAIN_SITE}`),
);

const faviconSrc = path.join(DIST, 'zuraio-comparison', 'assets', 'favicon.svg');
const faviconDest = path.join(DIST, 'favicon.svg');
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, faviconDest);
}

for (const name of ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'apple-touch-icon.png']) {
  const src = path.join(DIST, 'zuraio-comparison', 'assets', name);
  const dest = path.join(DIST, name);
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
}

console.log('set-main-site: root and /zuraio/ now redirect to', MAIN_SITE);
