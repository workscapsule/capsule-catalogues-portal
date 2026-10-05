const puppeteer = require('puppeteer-core');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });

  await page.goto('http://localhost:5173/review-bar-counter.html', { waitUntil: 'networkidle0' });

  // Take 4 screenshots covering the 40 cards
  for (let i = 0; i < 4; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: `scratch/bar_counter_overview_${i + 1}.png` });
    console.log(`Saved scratch/bar_counter_overview_${i + 1}.png`);
  }

  await browser.close();
}

run().catch(console.error);
