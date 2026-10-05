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

async function snapReview() {
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1800 });

  await page.goto('http://localhost:5173/review-wardrobes.html', {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Capture rows 1 to 15
  await page.screenshot({
    path: path.join(projectRoot, 'scratch', 'wardrobes_grid_1_15.png'),
    clip: { x: 0, y: 0, width: 1400, height: 1200 },
  });

  // Capture rows 16 to 30
  await page.screenshot({
    path: path.join(projectRoot, 'scratch', 'wardrobes_grid_16_30.png'),
    clip: { x: 0, y: 1200, width: 1400, height: 1200 },
  });

  await browser.close();
  console.log('Saved wardrobe review snapshots');
}

snapReview().catch(console.error);
