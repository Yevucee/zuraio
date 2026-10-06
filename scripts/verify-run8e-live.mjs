const CACHE = '20261006c';
const base = 'https://yevucee.github.io/zuraio';

const css = await fetch(`${base}/css/homepage-preview.css?v=${CACHE}`).then((r) => {
  if (!r.ok) throw new Error(`css ${r.status}`);
  return r.text();
});
if (!css.includes('padding-left: calc(18px + 6px)')) {
  console.error('missing fig--hl padding fix in live CSS');
  process.exit(1);
}

for (const locale of ['en', 'de']) {
  const html = await fetch(`${base}/${locale}/homepage-preview.html?v=${CACHE}`).then((r) => r.text());
  if (!html.includes(`homepage-preview.css?v=${CACHE}`)) {
    console.error('missing css cache on page', locale);
    process.exit(1);
  }
  console.log('ok', locale);
}
console.log('live verify passed', CACHE);
