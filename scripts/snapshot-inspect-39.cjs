const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });
  await page.goto('http://localhost:5173/inspect-all-39.html', { waitUntil: 'networkidle0' });

  // 3 screenshots covering rows
  for (let i = 0; i < 3; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 950);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `scratch/inspect_39_slice_${i + 1}.png` });
    console.log(`Saved scratch/inspect_39_slice_${i + 1}.png`);
  }

  await browser.close();
}

run().catch(console.error);
