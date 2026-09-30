/**
 * Fail the build if alt-home preview copy contains en-dash or em-dash in user-facing strings.
 * Middle dots (·) in source lines are allowed.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const copyPath = path.join(root, '../public/zuraio-comparison/js/copy-alt-home.js');
const raw = readFileSync(copyPath, 'utf8');

/** Strip block and line comments so only string content is checked. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '');
}

const body = stripComments(raw);
const stringLiteral = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g;
const offenders = [];

for (const match of body.matchAll(stringLiteral)) {
  const lit = match[0];
  if (lit.includes(' – ') || lit.includes('—')) {
    offenders.push(lit.slice(0, 120) + (lit.length > 120 ? '…' : ''));
  }
}

if (offenders.length) {
  console.error('copy-alt-home.js: remove en-dash ( – ) and em-dash (—) from user-facing strings:\n');
  offenders.forEach((s) => console.error('  ', s));
  process.exit(1);
}

console.log('check-alt-home-copy-dashes: OK');
