Run 10: add French and Italian to the new preview site (all 8 pages). Only Yevucee/zuraio. Don't touch Mcwili/zuraio or run the production sync.

I've attached a folder `zuraio-fr-it/`. Copy it into the repo at `docs/zuraio-site-copy-fr-it/` (keep it as the source of truth), then:

1. COPY
- Files 01 to 08 contain `fr:` and `it:` blocks that mirror the existing `en:` blocks key for key. Paste each into the matching module: copy-alt-home.js, copy-alt-home-skills-tabs.js, copy-how-it-helps.js, copy-security.js, copy-integrations.js (GROUPS + copyIntegrations), copy-technical.js, copy-about.js, copy-contact.js, copy-faq.js.
- Use the text exactly as written. Don't re-translate, shorten or "improve" it. Keep typographic apostrophes (’), «guillemets» and the non-breaking spaces before colons in French.
- If any EN key has no FR/IT value in my files, don't invent one: list the missing keys in the report and fall back to EN for that key only.
- FAQ item ids and group ids stay identical to EN/DE.
- Header, footer and shared UI labels: use the table in 00-README (mirror the current EN footer structure exactly).
- Run a key-parity check in CI: every key path in `en` must exist in `de`, `fr` and `it` for every copy module. Fail the build if not.

2. SKILLS DOCUMENTS
- File 02 Part B has the FR and IT versions of the three invented documents (quote, monthly report, tenant email). Add fr/it branches in alt-skills-sector.js with the same markup, the same highlight numbers and the same rules as EN/DE (one continuous <mark> per highlight, marker 2 padding in the figures block, only the first sentence highlighted for "Your tone").

3. LOCALES AND PAGES
- Add 'fr' and 'it' to every *_LOCALES list and make every getter return copy[locale] ?? copy.en (not `locale === 'de' ? 'de' : 'en'`).
- Replace every hard-coded two-language check (`=== 'de' ? 'de' : 'en'`, e.g. previewLocale, viewingLocale, formLocale in contact-form.js, alt-skills-sector.js, alt-page-cta.js, integrations marquee aria) with one shared `currentLocale()` helper that returns de, en, fr or it from the path. Grep for `'de' ? 'de'` and `=== 'de'` afterwards and list what's left.
- Create the FR and IT pages exactly like the DE ones: fr/homepage-preview.html, fr/how-it-helps.html, fr/security.html, fr/integrations.html, fr/technical-architecture.html, fr/about.html, fr/faq.html, fr/contact.html, and the same under it/. Correct <html lang="fr-CH"> / "it-CH" (and de-CH, en for the others if not already), titles and meta descriptions from the copy.
- If old-site files already exist at those fr/ or it/ paths, the new pages replace them (same approach as DE). Old redirect stubs under fr/ and it/ (data-control, deployment-models, ai-governance, knowledge) point to the new FR/IT pages, like the DE stubs do.
- site-routes.js: add fr and it paths for every route key, including faq anchors and #skills-* hashes.
- Language switcher: Deutsch, English, Français, Italiano. Goes to the same page in the other language and keeps the #hash.
- hreflang alternates for de-CH, en, fr-CH, it-CH plus x-default on every page; sitemap.xml includes the FR and IT pages again.
- FAQPage JSON-LD per locale.

4. IMAGES
- Add zuraio-hero-reply-fr@2x.webp, zuraio-hero-reply-it@2x.webp, zuraio-hero-reply-fr-mobile@3x.webp (1170×909) and zuraio-hero-reply-it-mobile@3x.webp (1170×969) to the hero assets folder. Wire them in HERO_REPLY_IMAGE and HERO_REPLY_IMAGE_MOBILE with correct width/height.
- The demo video stays the same for all languages for now (it's being re-recorded).

5. LAYOUT CHECKS (French and Italian run longer)
- Header nav must fit on one line at 1280 and 1024 in FR and IT ("Comment Zuraio aide", "Come aiuta Zuraio"). If it doesn't at 1024, switch to the mobile menu earlier for all locales rather than shrinking text.
- H1 targets as before: max 2 lines at 1280, max 3 at 390 (homepage: primary line max 2, secondary 1 at 1280). Report any FR/IT page that misses it; don't change copy to fix it, tell me which line.
- Skills tabs: the three tab labels must fit or scroll inside the tab row on mobile, no page overflow.
- Hosting table and figures block in the Treuhand/fiduciary document: no wrapping that breaks alignment.
- No horizontal scroll at 390 on any of the 32 pages.

6. CHECKS
- Dash guard (– — −) on the new strings, key-parity check, link check across all 32 pages, link-colour and band checks, check-dist-asset-cache.
- Language switch regression: from fr/faq.html#chatgpt-copilot to it/ keeps the hash and opens the item.

Ship: PR to main (not draft), merge, wait for the Pages deploy (if the deploy job waits for approval, tell me), verify on the live URLs.
Report:
1. Live URLs for all FR and IT pages.
2. Screenshots at 1280 and 390: FR homepage (hero + skills tabs), IT homepage (hero + skills tabs), FR faq, IT contact.
3. H1 line counts for every FR and IT page at 1280 and 390.
4. Link check output (pages and links checked, 0 failures) and key-parity output.
5. Any missing keys or remaining hard-coded locale checks.
