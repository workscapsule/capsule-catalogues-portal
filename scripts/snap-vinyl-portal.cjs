const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyPortal() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });
  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle0' });

  // 1. Snapshot filter bar
  const controls = await page.$('.controls-bar');
  if (controls) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'start' }), controls);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'scratch/portal_filter_bar_12.jpg', type: 'jpeg', quality: 90 });
  }

  // 2. Snapshot cards 10, 11, 12
  const el = await page.$('.catalogue-item[data-cat="vinyl"]');
  if (el) {
    await page.evaluate(element => element.scrollIntoView({ behavior: 'instant', block: 'center' }), el);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'scratch/portal_vinyl_flooring_card.jpg', type: 'jpeg', quality: 90 });
    console.log('SUCCESS: Captured portal with Vinyl Flooring card!');
  } else {
    console.error('ERROR: Vinyl Flooring Card not found!');
  }

  // 3. Test clicking Vinyl Flooring filter
  await page.click('button[onclick*="vinyl"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/portal_vinyl_flooring_filtered.jpg', type: 'jpeg', quality: 90 });
  console.log('SUCCESS: Captured filtered Vinyl Flooring view!');

  await browser.close();
}
verifyPortal();
