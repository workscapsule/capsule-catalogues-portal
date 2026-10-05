const puppeteer = require('puppeteer-core');

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

  // Scroll down to models 28-40
  await page.evaluate(() => window.scrollTo(0, 3200));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/bar_counter_overview_5.png' });

  await page.evaluate(() => window.scrollTo(0, 4200));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/bar_counter_overview_6.png' });

  await browser.close();
}

run().catch(console.error);
