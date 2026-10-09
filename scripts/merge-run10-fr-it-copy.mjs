/**
 * One-shot helper: inject fr/it blocks from assets/zuraio-fr-it into copy modules.
 * Safe to re-run (replaces existing fr/it blocks).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(ROOT, 'public/zuraio-comparison/assets/zuraio-fr-it');
const JS = path.join(ROOT, 'public/zuraio-comparison/js');

function stripComments(src) {
  return src.replace(/^\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
}

function parseFrItBlocks(filePath, part = null) {
  let raw = fs.readFileSync(filePath, 'utf8');
  if (part === 'A') {
    const idx = raw.search(/\/\/\s*PART B/i);
    if (idx >= 0) raw = raw.slice(0, idx);
  } else if (part === 'B') {
    const idx = raw.search(/\/\/\s*PART B/i);
    if (idx < 0) throw new Error(`No PART B in ${filePath}`);
    raw = raw.slice(idx).replace(/^\/\/\s*PART B[^\n]*\n/, '');
  }
  raw = stripComments(raw);
  if (!raw) throw new Error(`Empty fr/it source: ${filePath}`);
  return new Function(`return ({ ${raw} })`)();
}

function removeLocaleBlocks(text, exportConstName) {
  const start = text.indexOf(`export const ${exportConstName}`);
  if (start < 0) return text;
  const open = text.indexOf('{', start);
  let depth = 0;
  let end = open;
  for (let i = open; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  let inner = text.slice(open + 1, end - 1);
  inner = inner.replace(/\n  fr: \{[\s\S]*?\n  \},(?=\n)/g, '\n');
  inner = inner.replace(/\n  it: \{[\s\S]*?\n  \},(?=\n)/g, '\n');
  return text.slice(0, open + 1) + inner + text.slice(end - 1);
}

function insertFrIt(text, exportConstName, blocks) {
  let cleaned = removeLocaleBlocks(text, exportConstName);
  const marker = `\n};`;
  const exportIdx = cleaned.indexOf(`export const ${exportConstName}`);
  const closeIdx = cleaned.indexOf(marker, exportIdx);
  if (closeIdx < 0) throw new Error(`Could not find closing }; for ${exportConstName}`);
  const frStr = JSON.stringify(blocks.fr, null, 2)
    .replace(/^/gm, '  ')
    .replace(/^  /, '  fr: ')
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/'/g, "\\'");
  // Use original object text from source instead of JSON (preserves typographic chars)
  const frRaw = extractLocaleRaw(fs.readFileSync(blocks._file, 'utf8'), blocks._part, 'fr');
  const itRaw = extractLocaleRaw(fs.readFileSync(blocks._file, 'utf8'), blocks._part, 'it');
  const injection = `\n${frRaw},\n${itRaw},\n`;
  return cleaned.slice(0, closeIdx) + injection + cleaned.slice(closeIdx);
}

function extractLocaleRaw(fileContent, part, locale) {
  let raw = fileContent;
  if (part === 'A') {
    const idx = raw.search(/\/\/\s*PART B/i);
    if (idx >= 0) raw = raw.slice(0, idx);
  } else if (part === 'B') {
    const idx = raw.search(/\/\/\s*PART B/i);
    raw = raw.slice(idx).replace(/^\/\/\s*PART B[^\n]*\n/, '');
  }
  raw = raw.replace(/^\/\/.*$/gm, '');
  const re = new RegExp(`\\n  ${locale}: \\{`, 'm');
  const start = raw.search(re);
  if (start < 0) throw new Error(`Missing ${locale} block`);
  let i = raw.indexOf('{', start);
  let depth = 0;
  let end = i;
  for (; i < raw.length; i++) {
    if (raw[i] === '{') depth++;
    else if (raw[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  return `  ${locale}: ${raw.slice(raw.indexOf('{', start), end)}`;
}

function patchFile(relTarget, exportConstName, sourceFile, part = null) {
  const targetPath = path.join(JS, relTarget);
  let text = fs.readFileSync(targetPath, 'utf8');
  const frRaw = extractLocaleRaw(fs.readFileSync(path.join(ASSETS, sourceFile), 'utf8'), part, 'fr');
  const itRaw = extractLocaleRaw(fs.readFileSync(path.join(ASSETS, sourceFile), 'utf8'), part, 'it');
  text = removeLocaleBlocks(text, exportConstName);
  const exportIdx = text.indexOf(`export const ${exportConstName}`);
  const closeIdx = text.indexOf('\n};', exportIdx);
  if (closeIdx < 0) throw new Error(`close for ${exportConstName}`);
  text = text.slice(0, closeIdx) + `\n${frRaw},\n${itRaw},\n` + text.slice(closeIdx);
  text = text.replace(/,\s*,\n/g, ',\n');
  fs.writeFileSync(targetPath, text);
  console.log(`merge: ${relTarget} (+ fr, it)`);
}

function extractLocaleArrayRaw(fileContent, part, locale) {
  let raw = fileContent;
  if (part === 'A') {
    const idx = raw.search(/\/\/\s*PART B/i);
    if (idx >= 0) raw = raw.slice(0, idx);
  }
  raw = raw.replace(/^\/\/.*$/gm, '');
  const re = new RegExp(`\\n  ${locale}: \\[`, 'm');
  const start = raw.search(re);
  if (start < 0) throw new Error(`Missing ${locale} array block`);
  let i = raw.indexOf('[', start);
  let depth = 0;
  let end = i;
  for (; i < raw.length; i++) {
    if (raw[i] === '[') depth++;
    else if (raw[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  return `  ${locale}: ${raw.slice(raw.indexOf('[', start), end)}`;
}

function patchGroups(sourceFile) {
  const targetPath = path.join(JS, 'copy-integrations.js');
  let text = fs.readFileSync(targetPath, 'utf8');
  const src = fs.readFileSync(path.join(ASSETS, sourceFile), 'utf8');
  const frArr = extractLocaleArrayRaw(src, 'A', 'fr');
  const itArr = extractLocaleArrayRaw(src, 'A', 'it');
  text = text.replace(/\n  fr: \[[\s\S]*?\n  \],/g, '').replace(/\n  it: \[[\s\S]*?\n  \],/g, '');
  const insertAt = text.indexOf('\n};', text.indexOf('const GROUPS'));
  text = text.slice(0, insertAt) + `\n${frArr}\n${itArr}\n` + text.slice(insertAt);
  fs.writeFileSync(targetPath, text);
  console.log('merge: copy-integrations.js GROUPS (+ fr, it)');
}

patchFile('copy-alt-home.js', 'copyAltHome', '01-copy-alt-home.fr-it.js');
patchFile('copy-alt-home-skills-tabs.js', 'skillsTabsMeta', '02-skills-tabs-and-documents.fr-it.js', 'A');
patchFile('copy-how-it-helps.js', 'copyHowItHelps', '03-copy-how-it-helps.fr-it.js');
patchFile('copy-security.js', 'copySecurity', '04-copy-security.fr-it.js');
patchGroups('05-copy-integrations.fr-it.js');
patchFile('copy-integrations.js', 'copyIntegrations', '05-copy-integrations.fr-it.js', 'B');
patchFile('copy-technical.js', 'copyTechnical', '06-copy-technical.fr-it.js');
patchFile('copy-about.js', 'copyAbout', '07-copy-about-contact.fr-it.js', 'A');
patchFile('copy-contact.js', 'copyContact', '07-copy-about-contact.fr-it.js', 'B');
patchFile('copy-faq.js', 'copyFaq', '08-copy-faq.fr-it.js');

console.log('merge-run10-fr-it-copy: done');
