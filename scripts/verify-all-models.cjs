const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/temple-catalogue', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  
  const data = await page.evaluate(() => {
    const articles = Array.from(document.querySelectorAll('article.temple-magazine-page'));
    return articles.map(a => {
      const h1 = a.querySelector('h1')?.innerText;
      const img = a.querySelector('img[alt*="Capsule Temple Design"]')?.getAttribute('src');
      const code = a.querySelector('div[class*="bg-neutral-900"] span.text-amber-300')?.innerText;
      const pageNum = a.querySelector('footer div.font-mono')?.innerText;
      return { h1, code, img, pageNum };
    });
  });
  
  console.log('Total articles found:', data.length);
  data.forEach((d, i) => console.log(`${String(i+1).padStart(2, '0')}: [${d.code}] ${d.h1} -> ${d.img} (${d.pageNum})`));
  
  // Capture screenshot of Model 02 (PRANAV) and Model 03 (AURA) and Model 04 (SHANTI)
  const articles = await page.$$('article.temple-magazine-page');
  if (articles.length >= 3) {
    await articles[1].screenshot({ path: 'scripts/sample_model_02.png' });
    await articles[2].screenshot({ path: 'scripts/sample_model_03.png' });
    await articles[3].screenshot({ path: 'scripts/sample_model_04.png' });
    console.log('Captured sample screenshots for Models 2, 3, and 4.');
  }

  await browser.close();
})();
