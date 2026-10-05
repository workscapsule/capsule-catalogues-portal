const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const HTML_PATH = 'file:///' + path.resolve(__dirname, 'review-local.html').replace(/\\/g, '/');
const SNAP_DIR = path.join(__dirname, 'category_snaps');

if (!fs.existsSync(SNAP_DIR)) fs.mkdirSync(SNAP_DIR, { recursive: true });

async function snapCategories() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1600,1200']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'load', timeout: 30000 });

  await new Promise(r => setTimeout(r, 2000));

  const sections = await page.$$('.cat-section');
  console.log(`Found ${sections.length} category sections`);

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const id = await page.evaluate(el => el.id, sec);
    const snapFile = path.join(SNAP_DIR, `${id}.png`);
    await sec.screenshot({ path: snapFile });
    console.log(`Snapped: ${id}.png`);
  }

  await browser.close();
  console.log('All category snaps saved successfully!');
}

snapCategories().catch(console.error);
