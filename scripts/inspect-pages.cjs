const puppeteer = require('puppeteer-core');
const path = require('path');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  const htmlPath = path.join(__dirname, 'wooden-polish-catalogue-template.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'load' });

  const pages = await page.$$('.a4-page');
  console.log('Total pages found:', pages.length);

  // Page 2: pages[1]
  // Page 12: pages[11]
  // Page 13: pages[12]
  // Page 14: pages[13]
  await pages[1].screenshot({ path: path.join(__dirname, '..', 'scratch', 'inspect_page_02.jpg'), type: 'jpeg', quality: 90 });
  await pages[11].screenshot({ path: path.join(__dirname, '..', 'scratch', 'inspect_page_12.jpg'), type: 'jpeg', quality: 90 });
  await pages[12].screenshot({ path: path.join(__dirname, '..', 'scratch', 'inspect_page_13.jpg'), type: 'jpeg', quality: 90 });
  await pages[13].screenshot({ path: path.join(__dirname, '..', 'scratch', 'inspect_page_14.jpg'), type: 'jpeg', quality: 90 });

  console.log('Saved page inspections!');
  await browser.close();
})();
