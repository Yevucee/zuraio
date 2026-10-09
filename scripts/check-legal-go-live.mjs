/**
 * Production go-live guard: Impressum and privacy pages must not ship with
 * visible “to be confirmed” markers or bracket placeholders. Run from the
 * Mcwili sync workflow only (not npm run build).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');

const LEGAL_PAGES = ['impressum.html', 'privacy.html'];
const LEGAL_DIRS = ['', 'de', 'fr', 'it'];

const FORBIDDEN = [
  'Noch zu bestätigen',
  'To be confirmed',
  'À confirmer',
  'Da confermare',
];

function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  return main.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ');
}

function checkFile(absPath, rel) {
  if (!fs.existsSync(absPath)) {
    console.error(`check-legal-go-live: missing ${rel}`);
    return false;
  }
  const text = mainText(fs.readFileSync(absPath, 'utf8'));
  let ok = true;
  for (const phrase of FORBIDDEN) {
    if (text.includes(phrase)) {
      console.error(`check-legal-go-live: ${rel} contains forbidden phrase: ${phrase}`);
      ok = false;
    }
  }
  if (/\[[^\]]+\]/.test(text)) {
    console.error(`check-legal-go-live: ${rel} contains bracket placeholder text`);
    ok = false;
  }
  return ok;
}

if (!fs.existsSync(DIST)) {
  console.error('check-legal-go-live: dist/ not found — run npm run build first');
  process.exit(1);
}

let allOk = true;
for (const dir of LEGAL_DIRS) {
  for (const page of LEGAL_PAGES) {
    const rel = dir ? `${dir}/${page}` : page;
    const abs = path.join(DIST, rel);
    if (!checkFile(abs, rel)) allOk = false;
  }
}

if (!allOk) {
  console.error(
    'check-legal-go-live: FAILED — replace Impressum/privacy placeholders before Mcwili production sync.',
  );
  process.exit(1);
}

console.log('check-legal-go-live: OK (no Impressum/privacy go-live blockers in dist)');
