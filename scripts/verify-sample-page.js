import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifySample() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/temple-catalogue', { waitUntil: 'networkidle0' });

  const el = await page.$('#temple-sample-page-01');
  if (el) {
    const outPath = path.join(projectRoot, 'scripts', 'sample_temple_page_01_review.png');
    await el.screenshot({ path: outPath });
    console.log('Successfully captured sample_temple_page_01_review.png');
  } else {
    console.log('Element #temple-sample-page-01 not found');
  }

  await browser.close();
}

verifySample().catch(console.error);
