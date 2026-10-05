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

async function verifyPages12And13() {
  console.log('Capturing Pages 12 and 13...');
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });

  await page.goto('http://localhost:5173/kitchen-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 60000,
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

  // Page 12 (Model 11)
  const p12 = await page.$('#kitchen-item-page-11');
  if (p12) {
    const out12 = path.join(projectRoot, 'scratch', 'verify_modular_kitchen_page_12.png');
    await p12.screenshot({ path: out12 });
    console.log(`Saved screenshot to ${out12}`);
  }

  // Page 13 (Model 12)
  const p13 = await page.$('#kitchen-item-page-12');
  if (p13) {
    const out13 = path.join(projectRoot, 'scratch', 'verify_modular_kitchen_page_13.png');
    await p13.screenshot({ path: out13 });
    console.log(`Saved screenshot to ${out13}`);
  }

  await browser.close();
}

verifyPages12And13().catch(console.error);
