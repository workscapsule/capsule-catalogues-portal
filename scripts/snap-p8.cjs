const puppeteer = require('puppeteer-core');
const path = require('path');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.5 });
  const htmlPath = path.resolve('scripts/upvc-catalogue-template.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'load', timeout: 60000 });
  
  const pages = await page.$$('.a4-page');
  console.log('Pages found:', pages.length);
  if (pages.length >= 8) {
    await pages[7].screenshot({ path: path.resolve('scratch/upvc_preview_p08_model7.jpg'), type: 'jpeg', quality: 90 });
    console.log('Screenshot of Page 8 saved to scratch/upvc_preview_p08_model7.jpg');
  }
  await browser.close();
})();
