const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ status: res.statusCode, headers: res.headers });
    }).on('error', (err) => {
      resolve({ status: 500, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing local server URLs...');
  const indexCheck = await checkUrl('http://localhost:5173/capsule-catalogue-index.html');
  console.log('Index URL check:', indexCheck.status);

  const pdfCheck = await checkUrl('http://localhost:5173/Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf');
  console.log('PDF URL check:', pdfCheck.status, 'Content-Length:', pdfCheck.headers['content-length']);

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });

  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle2' });

  // Scroll to grid
  await page.evaluate(() => {
    const el = document.getElementById('lookbookGrid');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1200));

  // Focus specifically on the wall panel card
  const wallCard = await page.$('a[href="Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf"]');
  if (wallCard) {
    await wallCard.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    const cardClip = await wallCard.boundingBox();
    if (cardClip) {
      const snapCardPath = path.join(__dirname, '..', 'scratch', 'verified-wall-panel-card.png');
      await page.screenshot({
        path: snapCardPath,
        clip: {
          x: Math.max(0, cardClip.x - 20),
          y: Math.max(0, cardClip.y - 20),
          width: Math.min(1440, cardClip.width + 40),
          height: cardClip.height + 40
        }
      });
      console.log('Saved card screenshot to:', snapCardPath);
    }
  }

  // Also take grid screenshot
  const gridPath = path.join(__dirname, '..', 'scratch', 'verified-catalogue-grid.png');
  await page.screenshot({ path: gridPath });
  console.log('Saved grid screenshot to:', gridPath);

  // Extract card details for confirmation
  const cardData = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.catalogue-item'));
    return cards.map(c => ({
      badge: c.querySelector('.item-number-badge')?.innerText?.trim(),
      pageBadge: c.querySelector('.item-page-badge')?.innerText?.trim(),
      title: c.querySelector('.item-title')?.innerText?.trim(),
      specs: c.querySelector('.item-specs')?.innerText?.replace(/\s+/g, ' ')?.trim(),
      btn: c.querySelector('.item-btn')?.innerText?.trim(),
      href: c.getAttribute('href')
    }));
  });

  console.log('\nAll Cards in Catalogue Index:');
  console.table(cardData);

  await browser.close();
})();
