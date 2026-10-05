const puppeteer = require('puppeteer-core');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function snapPortal() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });
  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle0' });

  // Filter to UPVC to test the filter button and card
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('.filter-pill')).find(b => b.textContent.includes('UPVC'));
    if (btn) btn.click();
  });

  await new Promise(r => setTimeout(r, 600));

  const card = await page.$('.catalogue-item[data-cat="upvc"]');
  if (card) {
    await card.screenshot({ path: 'scratch/portal_upvc_card.jpg', type: 'jpeg', quality: 90 });
    console.log('Saved scratch/portal_upvc_card.jpg');
  }

  // Full filtered view
  await page.screenshot({ path: 'scratch/portal_upvc_filtered.jpg', type: 'jpeg', quality: 85 });
  console.log('Saved scratch/portal_upvc_filtered.jpg');

  await browser.close();
}

snapPortal().catch(console.error);
