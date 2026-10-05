const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyScreenshots() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });

  // 1. Check portal index
  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'portal_index_verified.jpg'), type: 'jpeg', quality: 85 });

  // 2. Click Lighting & Fixtures filter
  const filterBtn = await page.$('button[onclick*="lighting"]');
  if (filterBtn) {
    await filterBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'portal_lighting_filter_active.jpg'), type: 'jpeg', quality: 85 });
  }

  // 3. Check review-lighting.html
  await page.goto('http://localhost:5173/review-lighting.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'review_lighting_verified.jpg'), type: 'jpeg', quality: 85 });

  console.log('Verification screenshots captured!');
  await browser.close();
}

verifyScreenshots().catch(console.error);
