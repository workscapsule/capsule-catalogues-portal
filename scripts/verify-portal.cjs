const puppeteer = require('puppeteer-core');
const path = require('path');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1100 });
  const htmlUrl = 'file:///' + path.resolve(__dirname, '..', 'capsule-catalogue-index.html').replace(/\\/g, '/');
  await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
  
  // Click theater pill
  const theaterBtn = await page.$('button[onclick*="theater"]');
  if (theaterBtn) {
    await theaterBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'portal_home_theater_filtered.png'), fullPage: false });
    console.log('Saved portal_home_theater_filtered.png');
  }

  // Click all pill
  const allBtn = await page.$('button[onclick*="all"]');
  if (allBtn) {
    await allBtn.click();
    await new Promise(r => setTimeout(r, 600));
    // Scroll down to cards 15 and 16
    await page.evaluate(() => {
      const items = document.querySelectorAll('.catalogue-item');
      if (items.length >= 16) {
        items[15].scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'portal_home_theater_card.png'), fullPage: false });
    console.log('Saved portal_home_theater_card.png');
  }

  await browser.close();
})();
