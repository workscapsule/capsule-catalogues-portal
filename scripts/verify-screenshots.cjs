const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function capture() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/temple-catalogue', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);

  const targets = [
    { id: 'temple-page-1', file: 'scratch/verify_model_01.png' },
    { id: 'temple-page-2', file: 'scratch/verify_model_02.png' },
    { id: 'temple-page-10', file: 'scratch/verify_model_10.png' },
    { id: 'temple-page-42', file: 'scratch/verify_model_42.png' }
  ];

  for (const t of targets) {
    const el = await page.$(`#${t.id}`);
    if (el) {
      await el.screenshot({ path: t.file });
      console.log(`Captured ${t.file}`);
    } else {
      console.log(`Could not find #${t.id}`);
    }
  }

  await browser.close();
}

capture().catch(console.error);
