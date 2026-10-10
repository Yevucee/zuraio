/**
 * On-disk paths for the 36-page preview site after set-main-site (dist root).
 */
import fs from 'node:fs';
import path from 'node:path';

export const PREVIEW_SUBPAGES = [
  'about.html',
  'how-it-helps.html',
  'contact.html',
  'technical-architecture.html',
  'security.html',
  'integrations.html',
  'faq.html',
  'privacy.html',
];

export const HOMEPAGE_INDEX_PATHS = [
  'index.html',
  'de/index.html',
  'fr/index.html',
  'it/index.html',
];

/** @deprecated redirect stubs only */
export const HOMEPAGE_PREVIEW_PATHS = [
  'en/homepage-preview.html',
  'de/homepage-preview.html',
  'fr/homepage-preview.html',
  'it/homepage-preview.html',
];

/** @param {string} distRoot */
export function listPreviewSiteHtmlFiles(distRoot) {
  const files = [];
  for (const sub of PREVIEW_SUBPAGES) {
    files.push(path.join(distRoot, sub));
    for (const loc of ['de', 'fr', 'it']) {
      files.push(path.join(distRoot, loc, sub));
    }
  }
  for (const hp of HOMEPAGE_INDEX_PATHS) {
    files.push(path.join(distRoot, hp));
  }
  return files.filter((f) => fs.existsSync(f));
}
