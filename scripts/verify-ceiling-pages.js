import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyPages() {
  console.log('Starting Ceiling Catalogue Page Verification...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1240,
    height: 1754,
    deviceScaleFactor: 1.5,
  });

  console.log('Navigating to http://localhost:5173/ceiling-catalogue ...');
  await page.goto('http://localhost:5173/ceiling-catalogue', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  });

  // 1. Cover
  const coverEl = await page.$('#ceiling-cover');
  if (coverEl) {
    await coverEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_cover.png') });
    console.log('Captured verify_ceiling_cover.png');
  }

  // 2. Model 01
  const model01El = await page.$('#ceiling-item-page-1');
  if (model01El) {
    await model01El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_model_01.png') });
    console.log('Captured verify_ceiling_model_01.png');
  }

  // 3. Model 13
  const model13El = await page.$('#ceiling-item-page-13');
  if (model13El) {
    await model13El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_model_13.png') });
    console.log('Captured verify_ceiling_model_13.png');
  }

  // 4. Model 21
  const model21El = await page.$('#ceiling-item-page-21');
  if (model21El) {
    await model21El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_model_21.png') });
    console.log('Captured verify_ceiling_model_21.png');
  }

  // 5. Model 30
  const model30El = await page.$('#ceiling-item-page-30');
  if (model30El) {
    await model30El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_model_30.png') });
    console.log('Captured verify_ceiling_model_30.png');
  }

  // 6. Contact
  const contactEl = await page.$('#ceiling-contact');
  if (contactEl) {
    await contactEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_ceiling_contact.png') });
    console.log('Captured verify_ceiling_contact.png');
  }

  await browser.close();
  console.log('Finished capturing verification screenshots.');
}

verifyPages().catch(console.error);
