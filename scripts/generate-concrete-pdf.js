import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUTPUT_FILE = path.join(projectRoot, 'Capsule_Interiors_Concrete_Unit_Catalogue.pdf');
const PUBLIC_FILE = path.join(projectRoot, 'public', 'Capsule_Interiors_Concrete_Unit_Catalogue.pdf');
const DOWNLOADS_FILE = 'C:\\Users\\Yashwanth Gowda\\Downloads\\Capsule_Interiors_Concrete_Unit_Catalogue.pdf';

async function generatePDF() {
  console.log('Starting Concrete Unit PDF Generation...');
  console.log('Using browser:', EDGE_PATH);

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--font-render-hinting=max',
      '--enable-font-antialiasing',
    ],
  });

  const page = await browser.newPage();
  
  // Set viewport to A4 ratio at high DPI (deviceScaleFactor 2)
  await page.setViewport({
    width: 1240,
    height: 1754,
    deviceScaleFactor: 2,
  });

  console.log('Navigating to http://localhost:5173/concrete-catalogue ...');
  await page.goto('http://localhost:5173/concrete-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 120000,
  });

  // Wait for fonts and all 50+ images to load fully
  console.log('Waiting for fonts and all 50 images to load...');
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

  // Give extra 3.5 seconds for complete layout render
  await new Promise((r) => setTimeout(r, 3500));

  // Take sample verification screenshots
  console.log('Capturing sample verification screenshots...');
  const coverEl = await page.$('#concrete-cover');
  if (coverEl) {
    await coverEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_concrete_cover.png') });
    console.log('Captured scratch/verify_concrete_cover.png');
  }

  const model1El = await page.$('#concrete-item-page-1');
  if (model1El) {
    await model1El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_concrete_model_01.png') });
    console.log('Captured scratch/verify_concrete_model_01.png');
  }

  const model2El = await page.$('#concrete-item-page-2');
  if (model2El) {
    await model2El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_concrete_model_02.png') });
    console.log('Captured scratch/verify_concrete_model_02.png');
  }

  const model25El = await page.$('#concrete-item-page-25');
  if (model25El) {
    await model25El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_concrete_model_25.png') });
    console.log('Captured scratch/verify_concrete_model_25.png');
  }

  const model50El = await page.$('#concrete-item-page-50');
  if (model50El) {
    await model50El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_concrete_model_50.png') });
    console.log('Captured scratch/verify_concrete_model_50.png');
  }

  console.log('Generating A4 print-quality PDF for all 52 pages (Cover + 50 Models + Contact)...');
  await page.pdf({
    path: OUTPUT_FILE,
    format: 'A4',
    landscape: false,
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  console.log(`Saved PDF to: ${OUTPUT_FILE}`);
  const stats = fs.statSync(OUTPUT_FILE);
  console.log(`Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

  // Copy to public directory for immediate browser download
  fs.copyFileSync(OUTPUT_FILE, PUBLIC_FILE);
  console.log(`Copied to public folder: ${PUBLIC_FILE}`);

  try {
    fs.copyFileSync(OUTPUT_FILE, DOWNLOADS_FILE);
    console.log(`Copied to Downloads folder: ${DOWNLOADS_FILE}`);
  } catch (e) {
    console.log('Could not copy to Downloads:', e.message);
  }

  await browser.close();
  console.log('Concrete Unit PDF generation complete!');
}

generatePDF().catch((err) => {
  console.error('Error generating Concrete Unit PDF:', err);
  process.exit(1);
});
