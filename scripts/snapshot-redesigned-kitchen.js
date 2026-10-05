import puppeteer from 'puppeteer-core';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testSnapshot() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  await page.goto('http://localhost:5173/kitchen-catalogue', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await new Promise(r => setTimeout(r, 3500));

  // Screenshot the first design page (kitchen-page-block-1)
  const designBlock = await page.$('#kitchen-page-block-1');
  if (designBlock) {
    const outPath = path.resolve('scripts/redesigned-kitchen-page-01.png');
    await designBlock.screenshot({ path: outPath });
    console.log(`Saved screenshot to ${outPath}`);
  } else {
    console.error('Could not find #kitchen-page-block-1');
  }

  await browser.close();
}

testSnapshot().catch(console.error);
