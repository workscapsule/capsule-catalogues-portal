const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyPortal() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle0' });

  const el = await page.$('.catalogue-item[data-cat="flooring"]');
  if (el) {
    await page.evaluate(element => element.scrollIntoView({ behavior: 'instant', block: 'center' }), el);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'scratch/portal_with_wooden_flooring_card.jpg', type: 'jpeg', quality: 90 });
    console.log('Saved portal screenshot to scratch/portal_with_wooden_flooring_card.jpg');
  } else {
    console.error('Card not found!');
  }
  await browser.close();
}
verifyPortal();
