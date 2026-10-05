import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUTPUT_FILE = path.join(projectRoot, 'Capsule_Interiors_Kids_Bed_Catalogue.pdf');
const PUBLIC_FILE = path.join(projectRoot, 'public', 'Capsule_Interiors_Kids_Bed_Catalogue.pdf');
const DOWNLOADS_FILE = 'C:\\Users\\Yashwanth Gowda\\Downloads\\Capsule_Interiors_Kids_Bed_Catalogue.pdf';

async function generatePDF() {
  console.log('Starting Kids Bed PDF Generation...');
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

  console.log('Navigating to http://localhost:5173/kids-bed-catalogue ...');
  await page.goto('http://localhost:5173/kids-bed-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 120000,
  });

  // Wait for fonts and all 40 images to load fully
  console.log('Waiting for fonts and all 40 images to load...');
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

  // Give extra 3 seconds for complete layout render
  await new Promise((r) => setTimeout(r, 3000));

  // Take sample verification screenshots
  console.log('Capturing sample verification screenshots...');
  const coverEl = await page.$('#kids-bed-cover');
  if (coverEl) {
    await coverEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_kids_bed_cover.png') });
    console.log('Captured scratch/verify_kids_bed_cover.png');
  }

  const model1El = await page.$('#kids-bed-item-page-1');
  if (model1El) {
    await model1El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_kids_bed_model_01.png') });
    console.log('Captured scratch/verify_kids_bed_model_01.png');
  }

  const model20El = await page.$('#kids-bed-item-page-20');
  if (model20El) {
    await model20El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_kids_bed_model_20.png') });
    console.log('Captured scratch/verify_kids_bed_model_20.png');
  }

  const model40El = await page.$('#kids-bed-item-page-40');
  if (model40El) {
    await model40El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_kids_bed_model_40.png') });
    console.log('Captured scratch/verify_kids_bed_model_40.png');
  }

  console.log('Generating A4 print-quality PDF for all 42 pages (Cover + 40 Models + Contact)...');
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
  console.log('Kids Bed PDF generation complete!');
}

generatePDF().catch((err) => {
  console.error('Error generating Kids Bed PDF:', err);
  process.exit(1);
});
