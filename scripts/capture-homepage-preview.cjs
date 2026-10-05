const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function capture() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/temple-catalogue', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);

  const el = await page.$('#temple-cover');
  if (el) {
    await el.screenshot({ path: 'scratch/new_homepage_preview.png' });
    console.log('Captured scratch/new_homepage_preview.png');
  } else {
    console.log('Could not find #temple-cover');
  }

  await browser.close();
}

capture().catch(console.error);
