const puppeteer = require('puppeteer-core');

async function inspectDom() {
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

  const info = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img[src*="pinimg.com"]'));
    return images.slice(0, 5).map(img => {
      let curr = img;
      const parents = [];
      for (let i = 0; i < 6; i++) {
        if (!curr.parentElement) break;
        curr = curr.parentElement;
        parents.push({
          tag: curr.tagName,
          id: curr.id,
          className: curr.className,
          href: curr.getAttribute('href'),
          role: curr.getAttribute('role'),
          dataTestId: curr.getAttribute('data-test-id')
        });
      }
      return {
        src: img.src,
        alt: img.alt,
        parents
      };
    });
  });

  console.log('Images and parents:', JSON.stringify(info, null, 2));
  await browser.close();
}

inspectDom().catch(console.error);
