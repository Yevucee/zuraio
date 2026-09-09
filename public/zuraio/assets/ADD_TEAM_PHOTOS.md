# Team headshots

Individual portraits used on the About page and homepage “Why we built it” section.

| File | Person |
|------|--------|
| `Michael.png` / `Michael.webp` | Michael C. Wili |
| `Marcelo.png` / `Marcelo.webp` | Marcelo Zanette |
| `Samuel.png` / `Samuel.webp` | Samuel A. Polley |
| `Roland.png` / `Roland.webp` | Roland Steiner |

Referenced from the marketing site as `../zuraio/assets/Michael.png` (and `.webp` in `<picture>`).

Run `node scripts/optimize-team-images.mjs` (included in `npm run build`) to resize to 800×800 and compress.

Replace a portrait by overwriting the PNG in this folder, then rebuild.
