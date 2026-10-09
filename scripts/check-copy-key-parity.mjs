/**
 * Every key path in `en` must exist in de, fr, and it for alt preview copy modules.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const jsDir = path.join(root, 'public/zuraio-comparison/js');

const MODULES = [
  { file: 'copy-alt-home.js', exportName: 'copyAltHome' },
  { file: 'copy-alt-home-skills-tabs.js', exportName: 'skillsTabsMeta' },
  { file: 'copy-how-it-helps.js', exportName: 'copyHowItHelps' },
  { file: 'copy-security.js', exportName: 'copySecurity' },
  { file: 'copy-integrations.js', exportName: 'copyIntegrations' },
  { file: 'copy-technical.js', exportName: 'copyTechnical' },
  { file: 'copy-about.js', exportName: 'copyAbout' },
  { file: 'copy-contact.js', exportName: 'copyContact' },
  { file: 'copy-faq.js', exportName: 'copyFaq' },
];

const REQUIRED = ['de', 'fr', 'it'];

function collectKeyPaths(obj, prefix = '') {
  const paths = new Set();
  if (obj === null || typeof obj !== 'object') return paths;
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      for (const p of collectKeyPaths(item, `${prefix}[${i}]`)) paths.add(p);
    });
    return paths;
  }
  for (const key of Object.keys(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    paths.add(next);
    for (const p of collectKeyPaths(obj[key], next)) paths.add(p);
  }
  return paths;
}

async function loadExport(file, exportName) {
  const url = new URL(`../public/zuraio-comparison/js/${file}`, import.meta.url);
  const mod = await import(url.href);
  return mod[exportName];
}

const missing = [];

for (const { file, exportName } of MODULES) {
  const bundle = await loadExport(file, exportName);
  const enPaths = collectKeyPaths(bundle.en);
  for (const loc of REQUIRED) {
    if (!bundle[loc]) {
      missing.push(`${file}: missing locale block "${loc}"`);
      continue;
    }
    const locPaths = collectKeyPaths(bundle[loc]);
    for (const p of enPaths) {
      if (!locPaths.has(p)) {
        missing.push(`${file}: ${loc} missing key "${p}" (present in en)`);
      }
    }
  }
}

const enPrivacy = await loadExport('privacy-copy-en.js', 'privacyPage');
const enPrivacyPaths = collectKeyPaths(enPrivacy);
for (const loc of REQUIRED) {
  const bundle = await loadExport(`privacy-copy-${loc}.js`, 'privacyPage');
  const locPaths = collectKeyPaths(bundle);
  for (const p of enPrivacyPaths) {
    if (!locPaths.has(p)) {
      missing.push(`privacy-copy-${loc}.js: missing key "${p}" (present in privacy-copy-en.js)`);
    }
  }
}

if (missing.length) {
  console.error('check-copy-key-parity: FAIL\n' + missing.slice(0, 80).map((m) => `  ${m}`).join('\n'));
  if (missing.length > 80) console.error(`  … and ${missing.length - 80} more`);
  process.exit(1);
}

console.log(
  `check-copy-key-parity: OK (${MODULES.length} modules + privacy legal copy, en keys checked in de/fr/it)`,
);
