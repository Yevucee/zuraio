# Team headshots

Individual portraits used on the About page and homepage “Why we built it” section.

| File | Person |
|------|--------|
| `Michael.png` / `Michael.webp` | Michael C. Wili |
| `Marcelo.png` / `Marcelo.webp` | Marcelo Zanette |
| `Samuel.png` / `Samuel.webp` | Samuel A. Polley |
| `Roland.png` / `Roland.webp` | Roland Steiner |

Referenced from the marketing site as `../zuraio/assets/Michael.png` (and `.webp` in `<picture>`).

**Source files:** Put full-resolution originals in `team-source/` (same filenames). The build script crops each face to a consistent head size, then writes optimized `Name.png` + `Name.webp` here.

Run `node scripts/optimize-team-images.mjs` (included in `npm run build`) to apply face-normalized 800×800 crops and compress.

Replace a portrait by overwriting the PNG in `team-source/`, then rebuild.
