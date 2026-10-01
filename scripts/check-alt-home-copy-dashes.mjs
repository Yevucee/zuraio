/**
 * Fail the build if alt preview copy files contain en-dash or em-dash in user-facing strings.
 * Middle dots (·) in source lines are allowed.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

const COPY_FILES = [
  '../public/zuraio-comparison/js/copy-alt-home.js',
  '../public/zuraio-comparison/js/copy-alt-pricing.js',
];

/** Strip block and line comments so only string content is checked. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '');
}

function findDashOffenders(source) {
  const body = stripComments(source);
  const stringLiteral = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g;
  const offenders = [];
  for (const match of body.matchAll(stringLiteral)) {
    const lit = match[0];
    if (lit.includes(' – ') || lit.includes('—')) {
      offenders.push(lit.slice(0, 120) + (lit.length > 120 ? '…' : ''));
    }
  }
  return offenders;
}

let failed = false;

for (const rel of COPY_FILES) {
  const copyPath = path.join(root, rel);
  const raw = readFileSync(copyPath, 'utf8');
  const offenders = findDashOffenders(raw);
  if (offenders.length) {
    failed = true;
    const label = path.basename(copyPath);
    console.error(`${label}: remove en-dash ( – ) and em-dash (—) from user-facing strings:\n`);
    offenders.forEach((s) => console.error('  ', s));
    console.error('');
  }
}

if (failed) {
  process.exit(1);
}

console.log('check-alt-home-copy-dashes: OK (' + COPY_FILES.map((f) => path.basename(f)).join(', ') + ')');
