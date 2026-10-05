const puppeteer = require('puppeteer-core');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  console.log('Navigating...');
  await page.goto('https://www.pinterest.com/search/pins/?q=' + encodeURIComponent('fluted wall panels modern interior living room'), {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  for (let i = 0; i < 3; i++) {
    await new Promise(r => setTimeout(r, 2000));
    await page.evaluate(() => window.scrollBy(0, 1000));
  }
  await new Promise(r => setTimeout(r, 2000));

  const items = await page.evaluate(() => {
    const list = [];
    const pins = document.querySelectorAll('div[data-test-id="pin"], div[role="listitem"]');
    for (const p of pins) {
      const img = p.querySelector('img');
      const a = p.querySelector('a[href*="/pin/"]');
      if (img && img.src && img.src.includes('pinimg.com')) {
        list.push({
          src: img.src,
          alt: img.alt || '',
          href: a ? a.href : ''
        });
      }
    }
    return list;
  });

  console.log('Found total items:', items.length);
  console.log('Sample:', items.slice(0, 5));

  await browser.close();
}

test().catch(console.error);
