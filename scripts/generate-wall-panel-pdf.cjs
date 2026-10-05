const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const HTML_PATH = 'file:///' + path.resolve(__dirname, '..', 'public', 'wall-panel-catalogue.html').replace(/\\/g, '/');
const OUTPUT_PDF = path.resolve(__dirname, '..', 'Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf');
const PUBLIC_PDF = path.resolve(__dirname, '..', 'public', 'Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf');

async function generatePDF() {
  console.log('Launching browser to generate Wall Panel Design Catalogue PDF...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1920, deviceScaleFactor: 2 });
  await page.goto(HTML_PATH, { waitUntil: 'load', timeout: 60000 });

  // Scroll through to load all images
  await page.evaluate(async () => {
    const distance = 800;
    while (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      window.scrollBy(0, distance);
      await new Promise(r => setTimeout(r, 80));
    }
  });

  await new Promise(r => setTimeout(r, 3000));

  console.log('Generating A4 print-ready PDF...');
  await page.pdf({
    path: OUTPUT_PDF,
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: {
      top: '12mm',
      bottom: '12mm',
      left: '12mm',
      right: '12mm'
    }
  });

  console.log(`Saved PDF to ${OUTPUT_PDF}`);
  fs.copyFileSync(OUTPUT_PDF, PUBLIC_PDF);
  console.log(`Copied to public: ${PUBLIC_PDF}`);

  const stats = fs.statSync(OUTPUT_PDF);
  console.log(`PDF Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

  await browser.close();
}

generatePDF().catch(console.error);
