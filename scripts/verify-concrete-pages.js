import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyConcrete() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/concrete-catalogue', { waitUntil: 'networkidle0' });

  // Wait for images
  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) return resolve();
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );
  });

  const testIds = [
    { id: 'concrete-cover', name: 'concrete_page_01_cover.png' },
    { id: 'concrete-page-1', name: 'concrete_page_02_model01.png' },
    { id: 'concrete-page-25', name: 'concrete_page_26_model25.png' },
    { id: 'concrete-page-50', name: 'concrete_page_51_model50.png' },
    { id: 'concrete-contact', name: 'concrete_page_52_contact.png' }
  ];

  for (const item of testIds) {
    const el = await page.$(`#${item.id}`);
    if (el) {
      await el.screenshot({ path: path.join(projectRoot, 'scripts', item.name) });
      console.log('Captured', item.name);
    } else {
      console.log('Element not found:', item.id);
    }
  }

  await browser.close();
  console.log('Finished capturing concrete screenshots');
}

verifyConcrete().catch(console.error);
