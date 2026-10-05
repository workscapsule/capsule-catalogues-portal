const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function snap() {
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });

  const filePath = 'file:///' + path.resolve('scratch/review_tv_units_48.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Wait for all images
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = res; img.onerror = res; })));
  });

  await new Promise(r => setTimeout(r, 1000));

  // Take 4 slices: 1-12, 13-24, 25-36, 37-48
  // Or scroll down and capture
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total height:', totalHeight);

  // Slice 1: top
  await page.screenshot({ path: 'scratch/tv_slice_1_12.png', clip: { x: 0, y: 0, width: 1400, height: 1050 } });
  // Slice 2
  await page.screenshot({ path: 'scratch/tv_slice_13_24.png', clip: { x: 0, y: 1050, width: 1400, height: 1050 } });
  // Slice 3
  await page.screenshot({ path: 'scratch/tv_slice_25_36.png', clip: { x: 0, y: 2100, width: 1400, height: 1050 } });
  // Slice 4
  await page.screenshot({ path: 'scratch/tv_slice_37_48.png', clip: { x: 0, y: 3150, width: 1400, height: Math.min(1050, totalHeight - 3150) } });

  console.log('Screenshots saved!');
  await browser.close();
}

snap().catch(console.error);
