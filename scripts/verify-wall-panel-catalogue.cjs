const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const HTML_PATH = 'file:///' + path.resolve(__dirname, '..', 'public', 'wall-panel-catalogue.html').replace(/\\/g, '/');

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1600,1200']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'load', timeout: 30000 });

  await new Promise(r => setTimeout(r, 2000));

  // Take screenshot of top / cover
  await page.screenshot({ path: path.join(__dirname, 'wall-panel-catalogue-cover.png') });
  console.log('Saved wall-panel-catalogue-cover.png');

  // Scroll to section 1
  await page.evaluate(() => {
    document.getElementById('01-fluted-wall-panels').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'wall-panel-section-01.png') });
  console.log('Saved wall-panel-section-01.png');

  // Check how many cards are rendered and check for any broken images
  const stats = await page.evaluate(() => {
    const cards = document.querySelectorAll('.design-card');
    const images = Array.from(document.querySelectorAll('.card-image-wrap img'));
    const broken = images.filter(img => !img.complete || img.naturalWidth === 0).length;
    const pinterestLinks = Array.from(document.querySelectorAll('.pinterest-source-btn')).map(a => a.href);
    return {
      totalCards: cards.length,
      totalImages: images.length,
      brokenImages: broken,
      samplePinterestLink: pinterestLinks[0],
      totalPinterestLinks: pinterestLinks.length
    };
  });

  console.log('Catalogue verification stats:', stats);

  await browser.close();
}

verify().catch(console.error);
