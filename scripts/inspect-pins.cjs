const puppeteer = require('puppeteer-core');

async function inspectPins() {
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

  await new Promise(r => setTimeout(r, 4000));
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 2000));

  const info = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img')).filter(img => 
      img.src.includes('pinimg.com') && !img.src.includes('/60x60/') && !img.src.includes('/75x75/')
    );
    return images.slice(0, 5).map(img => {
      let a = img.closest('a');
      let pinLink = '';
      if (a) pinLink = a.href;
      else {
        // search ancestor container for any anchor tag
        let container = img.closest('div[data-test-id="pin"]') || img.parentElement?.parentElement?.parentElement?.parentElement;
        if (container) {
          const anchor = container.querySelector('a');
          if (anchor) pinLink = anchor.href;
        }
      }
      return {
        src: img.src,
        alt: img.alt,
        pinLink
      };
    });
  });

  console.log('Pin images:', JSON.stringify(info, null, 2));
  await browser.close();
}

inspectPins().catch(console.error);
