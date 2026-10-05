import puppeteer from 'puppeteer-core';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function captureReview() {
  console.log('Launching Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });

  console.log('Navigating to review page...');
  await page.goto('http://localhost:5173/review-kitchens.html', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  console.log('Waiting 4s for images to render...');
  await new Promise(r => setTimeout(r, 4000));

  const sections = await page.$$('section');
  const catNames = ['l-shape', 'parallel', 'island', 'straight'];
  for (let i = 0; i < sections.length; i++) {
    const cat = catNames[i];
    const outPath = path.resolve(`scripts/review-${cat}.png`);
    await sections[i].screenshot({ path: outPath });
    console.log(`Saved screenshot: ${outPath}`);
  }

  await browser.close();
  console.log('Done!');
}

captureReview().catch(console.error);
