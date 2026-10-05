const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function snapContact() {
  const browser = await puppeteer.launch({ executablePath: BROWSER_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/tv-unit-catalogue', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  const el = await page.$('#tv-unit-contact');
  if (el) {
    await el.screenshot({ path: 'scratch/verify_tv_unit_contact.png' });
    console.log('Saved scratch/verify_tv_unit_contact.png');
  }
  await browser.close();
}
snapContact().catch(console.error);
