const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200 });

  const filePath = 'file:///' + path.resolve('scratch/review_all_50_concrete.html').replace(/\\/g, '/');
  console.log('Loading', filePath);
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Take full page screenshot or 4 slices
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Body height:', bodyHeight);

  // Take 4 screenshots covering the 50 cards
  for (let i = 0; i < 4; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 1100);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `scratch/concrete_overview_${i + 1}.png` });
    console.log(`Saved scratch/concrete_overview_${i + 1}.png`);
  }

  await browser.close();
}

run().catch(console.error);
