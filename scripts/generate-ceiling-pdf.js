import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { PDFDocument } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

const POP_OUTPUT_FILE = path.join(projectRoot, 'Capsule_Interiors_POP_Design_Catalogue.pdf');
const POP_PUBLIC_FILE = path.join(projectRoot, 'public', 'Capsule_Interiors_POP_Design_Catalogue.pdf');
const POP_DOWNLOADS_FILE = 'C:\\Users\\Yashwanth Gowda\\Downloads\\Capsule_Interiors_POP_Design_Catalogue.pdf';

const CEILING_OUTPUT_FILE = path.join(projectRoot, 'Capsule_Interiors_Ceiling_Design_Catalogue.pdf');
const CEILING_PUBLIC_FILE = path.join(projectRoot, 'public', 'Capsule_Interiors_Ceiling_Design_Catalogue.pdf');
const CEILING_DOWNLOADS_FILE = 'C:\\Users\\Yashwanth Gowda\\Downloads\\Capsule_Interiors_Ceiling_Design_Catalogue.pdf';

async function generatePDF() {
  console.log('Starting POP Design Catalogue PDF Generation...');
  console.log('Using browser:', BROWSER_PATH);

  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
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

  console.log('Navigating to http://localhost:5173/pop-catalogue ...');
  await page.goto('http://localhost:5173/pop-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 120000,
  });

  // Wait for fonts and all 30 ceiling images to load fully
  console.log('Waiting for fonts and all 30 images to load...');
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

  // Extra delay for layout stabilization
  await new Promise((r) => setTimeout(r, 3000));

  console.log('Generating A4 print-quality PDF for all 32 pages (Cover + 30 Models + Contact)...');
  await page.pdf({
    path: POP_OUTPUT_FILE,
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

  console.log(`Saved PDF to: ${POP_OUTPUT_FILE}`);
  const stats = fs.statSync(POP_OUTPUT_FILE);
  console.log(`Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

  // Copy to public directory
  fs.copyFileSync(POP_OUTPUT_FILE, POP_PUBLIC_FILE);
  console.log(`Copied to public folder: ${POP_PUBLIC_FILE}`);

  // Also duplicate to CEILING filenames for backward compatibility
  fs.copyFileSync(POP_OUTPUT_FILE, CEILING_OUTPUT_FILE);
  fs.copyFileSync(POP_OUTPUT_FILE, CEILING_PUBLIC_FILE);
  console.log(`Updated legacy ceiling files: ${CEILING_OUTPUT_FILE}, ${CEILING_PUBLIC_FILE}`);

  try {
    fs.copyFileSync(POP_OUTPUT_FILE, POP_DOWNLOADS_FILE);
    fs.copyFileSync(POP_OUTPUT_FILE, CEILING_DOWNLOADS_FILE);
    console.log(`Copied to Downloads folder: ${POP_DOWNLOADS_FILE} and ${CEILING_DOWNLOADS_FILE}`);
  } catch (e) {
    console.log('Could not copy to Downloads:', e.message);
  }

  await browser.close();

  // Verify page count using pdf-lib
  console.log('Verifying generated PDF page count with pdf-lib...');
  const pdfBytes = fs.readFileSync(POP_OUTPUT_FILE);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pageCount = pdfDoc.getPageCount();
  console.log(`Total Pages in PDF: ${pageCount}`);
  if (pageCount === 32) {
    console.log('SUCCESS: Exactly 32 pages confirmed (1 Cover + 30 POP Design Models + 1 Contact page)!');
  } else {
    console.warn(`WARNING: Page count is ${pageCount}, expected 32.`);
  }

  console.log('POP Design PDF generation complete!');
}

generatePDF().catch((err) => {
  console.error('Error generating POP PDF:', err);
  process.exit(1);
});
