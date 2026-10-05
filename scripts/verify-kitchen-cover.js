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

async function verifyCoverPage() {
  console.log('Capturing new Modular Kitchen Cover Page...');
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

  const cover = await page.$('#kitchen-cover');
  if (cover) {
    const outPath = path.join(projectRoot, 'scratch', 'verify_modular_kitchen_cover.png');
    await cover.screenshot({ path: outPath });
    console.log(`Saved screenshot to ${outPath}`);
  } else {
    console.error('Could not find #kitchen-cover');
  }

  await browser.close();
}

verifyCoverPage().catch(console.error);
