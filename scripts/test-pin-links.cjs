const puppeteer = require('puppeteer-core');
const https = require('https');

async function testPinDetails() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  await page.goto('https://www.pinterest.com/search/pins/?q=' + encodeURIComponent('fluted wall panels modern interior living room'), {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  await new Promise(r => setTimeout(r, 3000));
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 2000));

  const pins = await page.evaluate(() => {
    const list = [];
    const elements = document.querySelectorAll('a[href*="/pin/"]');
    for (const a of elements) {
      const img = a.querySelector('img') || a.parentElement.querySelector('img');
      const href = a.href;
      if (img && img.src && img.src.includes('pinimg.com')) {
        list.push({
          href,
          imgSrc: img.src,
          alt: img.alt || ''
        });
      }
    }
    return list;
  });

  console.log('Found pins via a[href*="/pin/"]:', pins.length);
  if (pins.length > 0) {
    console.log('Sample pin 0:', pins[0]);
    // test 736x vs originals url
    const highRes = pins[0].imgSrc.replace(/\/\d+x\//, '/736x/');
    console.log('High res url:', highRes);
  }

  await browser.close();
}

testPinDetails().catch(console.error);
