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
    await page.screenshot({ path: 'scratch/portal_filter_bar.jpg', type: 'jpeg', quality: 90 });
  }

  // 2. Snapshot cards 09, 10, 11
  const el = await page.$('.catalogue-item[data-cat="fabric"]');
  if (el) {
    await page.evaluate(element => element.scrollIntoView({ behavior: 'instant', block: 'center' }), el);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'scratch/portal_wall_fabric_card.jpg', type: 'jpeg', quality: 90 });
    console.log('SUCCESS: Captured portal with Wall Fabric card!');
  } else {
    console.error('ERROR: Wall Fabric Card not found!');
  }

  // 3. Test clicking Wall Fabric filter
  await page.click('button[onclick*="fabric"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/portal_wall_fabric_filtered.jpg', type: 'jpeg', quality: 90 });
  console.log('SUCCESS: Captured filtered Wall Fabric view!');

  await browser.close();
}
verifyPortal();
