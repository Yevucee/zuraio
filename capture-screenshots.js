import puppeteer from 'puppeteer';

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  const url = 'http://127.0.0.1:4173/index.html?lang=en';
  
  // Desktop: 1440px
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/workspace/baseline-home-desktop.png', fullPage: true });
  console.log('Captured desktop screenshot (1440px)');
  
  // Tablet: 768px
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/workspace/baseline-home-tablet.png', fullPage: true });
  console.log('Captured tablet screenshot (768px)');
  
  // Mobile: 390px
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/workspace/baseline-home-mobile.png', fullPage: true });
  console.log('Captured mobile screenshot (390px)');
  
  await browser.close();
}

captureScreenshots().catch(console.error);
