import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function extractPins(page, query, count = 25) {
  console.log(`Searching Pinterest for: "${query}"`);
  await page.goto(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });

  for (let i = 0; i < 5; i++) {
    await new Promise(r => setTimeout(r, 1800));
    await page.evaluate(() => window.scrollBy(0, 1000));
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
      if (src.includes('/60x60/') || src.includes('/75x75/')) continue;

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

  console.log(`Found ${pins.length} pins for "${query}"`);
  return pins;
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const parallelQueries = [
    'parallel modular kitchen design modern interior',
    'galley kitchen modular design corridor opposite counters',
    'parallel kitchen ideas india interior photography',
  ];

  let parallelPins = [];
  for (const q of parallelQueries) {
    const pins = await extractPins(page, q);
    parallelPins.push(...pins);
  }

  // Remove duplicates
  const uniqueParallel = [];
  const seen = new Set();
  for (const p of parallelPins) {
    if (!seen.has(p.image)) {
      seen.add(p.image);
      uniqueParallel.push(p);
    }
  }

  console.log(`Total unique parallel pins: ${uniqueParallel.length}`);
  fs.writeFileSync('scripts/parallel-pinterest-pins.json', JSON.stringify(uniqueParallel, null, 2));

  await browser.close();
}

main().catch(console.error);
