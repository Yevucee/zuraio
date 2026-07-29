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

console.log('set-main-site: root and /zuraio/ now redirect to', MAIN_SITE);
