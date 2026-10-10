/**
 * Inline script for EN bare homepage (/) first-visit locale routing.
 * Exported for tests and postprocess injection.
 */
export const HOME_LOCALE_REDIRECT_SCRIPT = `(function(){
var ua=navigator.userAgent||'';
if(navigator.webdriver||/bot|crawl|spider|slurp|preview|facebookexternalhit|linkedinbot|whatsapp|slack|twitterbot/i.test(ua))return;
var path=location.pathname.replace(/\\/+$/, '')||'/';
if(path!=='/'&&path!=='/index.html')return;
try{
var q=new URLSearchParams(location.search).get('lang');
if(q&&['en','de','fr','it'].indexOf(q)>=0)return;
if(localStorage.getItem('zuraio-locale'))return;
}catch(e){return;}
var tz='';
try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}
var inCH=tz==='Europe/Zurich'||tz==='Europe/Vaduz'||tz==='Europe/Busingen';
var primary=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();
var code=primary.split('-')[0]||'';
var suffix=(location.search||'')+(location.hash||'');
if(code==='fr'){location.replace('/fr/'+suffix);return;}
if(code==='it'){location.replace('/it/'+suffix);return;}
if(code==='de'){location.replace('/de/'+suffix);return;}
if(inCH){location.replace('/de/'+suffix);return;}
})();`;

export function injectHomeLocaleRedirectEarly(html, locale, page) {
  if (locale !== 'en' || page !== 'index.html') return html;
  if (html.includes('data-zuraio-home-locale-redirect')) return html;
  const tag = `<script data-zuraio-home-locale-redirect>${HOME_LOCALE_REDIRECT_SCRIPT}</script>`;
  return html.replace(/<head([^>]*)>/i, `<head$1>\n${tag}`);
}
