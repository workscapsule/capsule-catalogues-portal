const puppeteer = require('puppeteer-core');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const HTML_PATH = 'file:///' + path.resolve(__dirname, '..', 'capsule-catalogue-index.html').replace(/\\/g, '/');

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(HTML_PATH, { waitUntil: 'load' });
  await page.evaluate(() => {
    const card = document.querySelector('a[href="wall-panel-catalogue.html"]');
    if (card) card.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'catalogue-index-wall-panel-card.png') });
  console.log('Snapped catalogue index card!');
  await browser.close();
})();
