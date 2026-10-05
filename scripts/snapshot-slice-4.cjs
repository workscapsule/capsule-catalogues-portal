const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 800 });
  await page.goto('http://localhost:5173/inspect-all-39.html', { waitUntil: 'networkidle0' });

  await page.evaluate(() => window.scrollTo(0, 3000));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'scratch/inspect_39_slice_4.png' });
  console.log('Saved scratch/inspect_39_slice_4.png');

  await browser.close();
}

run().catch(console.error);
