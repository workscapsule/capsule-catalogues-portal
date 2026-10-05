import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyPages() {
  console.log('Starting Wardrobe Catalogue Page Verification...');
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

  console.log('Navigating to http://localhost:5173/wardrobe-catalogue ...');
  await page.goto('http://localhost:5173/wardrobe-catalogue', {
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
  const coverEl = await page.$('#wardrobe-cover');
  if (coverEl) {
    await coverEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_cover.png') });
    console.log('Captured verify_wardrobe_cover.png');
  }

  // 2. Model 01
  const model01El = await page.$('#wardrobe-item-page-1');
  if (model01El) {
    await model01El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_model_01.png') });
    console.log('Captured verify_wardrobe_model_01.png');
  }

  // 3. Model 10 (Replacement candidate 02)
  const model10El = await page.$('#wardrobe-item-page-10');
  if (model10El) {
    await model10El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_model_10.png') });
    console.log('Captured verify_wardrobe_model_10.png');
  }

  // 4. Model 12 (Replacement candidate 04)
  const model12El = await page.$('#wardrobe-item-page-12');
  if (model12El) {
    await model12El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_model_12.png') });
    console.log('Captured verify_wardrobe_model_12.png');
  }

  // 5. Model 22 (Replacement candidate 05)
  const model22El = await page.$('#wardrobe-item-page-22');
  if (model22El) {
    await model22El.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_model_22.png') });
    console.log('Captured verify_wardrobe_model_22.png');
  }

  // 6. Contact
  const contactEl = await page.$('#wardrobe-contact');
  if (contactEl) {
    await contactEl.screenshot({ path: path.join(projectRoot, 'scratch', 'verify_wardrobe_contact.png') });
    console.log('Captured verify_wardrobe_contact.png');
  }

  await browser.close();
  console.log('Finished capturing verification screenshots.');
}

verifyPages().catch(console.error);
