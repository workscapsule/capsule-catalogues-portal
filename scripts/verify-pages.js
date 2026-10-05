import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function captureVerificationScreenshots() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/kitchen-catalogue', { waitUntil: 'networkidle0' });

  // Test elements
  const testIds = [
    { id: 'kitchen-page-0', name: 'pdf_page_01_cover.png' },
    { id: 'kitchen-page-1', name: 'pdf_page_02_intro.png' },
    { id: 'kitchen-page-2', name: 'pdf_page_03_guide.png' },
    { id: 'kitchen-page-3', name: 'pdf_page_04_kitchen01.png' },
    { id: 'kitchen-page-17', name: 'pdf_page_18_kitchen15.png' },
    { id: 'kitchen-page-32', name: 'pdf_page_33_kitchen30.png' },
    { id: 'kitchen-page-33', name: 'pdf_page_34_contact.png' },
  ];

  for (const item of testIds) {
    const el = await page.$(`#${item.id}`);
    if (el) {
      const outPath = path.join(projectRoot, 'scripts', item.name);
      await el.screenshot({ path: outPath });
      console.log(`Captured ${item.name}`);
    }
  }

  await browser.close();
  console.log('Finished capturing verification screenshots.');
}

captureVerificationScreenshots();
