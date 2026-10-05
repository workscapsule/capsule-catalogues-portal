import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function extractPinsForCategory(page, searchQuery, count = 15) {
  console.log(`\n--- Searching: "${searchQuery}" ---`);
  await page.goto(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(searchQuery)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });

  // Scroll down a couple of times to load more pins
  for (let i = 0; i < 4; i++) {
    await new Promise(r => setTimeout(r, 2000));
    await page.evaluate(() => window.scrollBy(0, 1200));
  }
  await new Promise(r => setTimeout(r, 2000));

  const pins = await page.evaluate(() => {
    const results = [];
    const seen = new Set();
    const pinContainers = document.querySelectorAll('div[data-test-id="pin"], div[role="listitem"]');

    for (const container of pinContainers) {
      const img = container.querySelector('img');
      const link = container.querySelector('a[href*="/pin/"]');
      if (!img || !img.src) continue;
      
      const src = img.src;
      if (!src.includes('pinimg.com')) continue;
      // Skip tiny avatars or icons
      if (src.includes('/60x60/') || src.includes('/75x75/')) continue;

      // Convert to 736x
      const highRes = src.replace(/\/\d+x\//, '/736x/');
      if (seen.has(highRes)) continue;
      seen.add(highRes);

      const alt = img.alt || '';
      const pinHref = link ? link.href : '';

      results.push({
        image: highRes,
        alt: alt,
        pinUrl: pinHref,
      });
    }
    return results;
  });

  console.log(`Found ${pins.length} pins for "${searchQuery}"`);
  return pins;
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const categories = {
    'l-shape': 'modern l shape modular kitchen interior design photography',
    'parallel': 'modern parallel modular kitchen interior design photography',
    'island': 'modern luxury island modular kitchen interior design photography',
    'straight': 'modern straight single wall modular kitchen interior design photography',
  };

  const allResults = {};

  for (const [key, query] of Object.entries(categories)) {
    allResults[key] = await extractPinsForCategory(page, query, 15);
  }

  await browser.close();

  fs.writeFileSync('scripts/pinterest-results.json', JSON.stringify(allResults, null, 2));
  console.log('\nSaved results to scripts/pinterest-results.json');
}

main().catch(console.error);
