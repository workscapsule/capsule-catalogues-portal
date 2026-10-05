const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function checkDetails() {
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 800 });

  // Let's inspect tv-11, tv-17, tv-24
  for (const num of [11, 17, 20, 24]) {
    const filename = `tv-${String(num).padStart(2, '0')}.jpg`;
    const fullPath = 'file:///' + path.resolve('public/assets/catalogues/tv-units', filename).replace(/\\/g, '/');
    await page.goto(fullPath);
    await page.screenshot({ path: `scratch/inspect_${filename}.png` });
    console.log(`Saved inspect_${filename}.png`);
  }

  await browser.close();
}

checkDetails().catch(console.error);
