import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function verifyMultiplePages() {
  console.log('Launching browser to check multiple kitchen pages...');
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });

  await page.goto('http://localhost:5173/kitchen-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 90000,
  });

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

  await new Promise((r) => setTimeout(r, 2000));

  const sampleIds = [1, 10, 15, 25, 40];
  for (const id of sampleIds) {
    const el = await page.$(`#kitchen-item-page-${id}`);
    if (el) {
      const outPath = path.join(projectRoot, 'scratch', `verify_modular_kitchen_model_${String(id).padStart(2, '0')}.png`);
      await el.screenshot({ path: outPath });
      console.log(`Saved screenshot to ${outPath}`);
    } else {
      console.error(`Could not find #kitchen-item-page-${id}`);
    }
  }

  await browser.close();
  console.log('Finished verifying sample pages!');
}

verifyMultiplePages().catch(console.error);
