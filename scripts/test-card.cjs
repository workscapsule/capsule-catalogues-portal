const puppeteer = require('puppeteer-core');

async function check() {
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

  const pinInfo = await page.evaluate(() => {
    // Check all script tags with application/json or window.__initialData__
    const scripts = Array.from(document.querySelectorAll('script')).map(s => s.innerText);
    // Find pin items
    const gated = Array.from(document.querySelectorAll('[data-test-id="gated-pin-image"]'));
    const results = [];
    for (const g of gated.slice(0, 5)) {
      const img = g.querySelector('img');
      let p = g;
      let link = '';
      while (p && p.tagName !== 'BODY') {
        const a = p.querySelector('a');
        if (a && a.href) {
          link = a.href;
          break;
        }
        if (p.getAttribute('data-test-pin-id')) {
          link = 'https://www.pinterest.com/pin/' + p.getAttribute('data-test-pin-id') + '/';
          break;
        }
        p = p.parentElement;
      }
      results.push({
        srcset: img ? img.srcset : '',
        src: img ? img.src : '',
        link
      });
    }
    return {
      results,
      hasScriptData: scripts.some(s => s.includes('resourceResponses') || s.includes('BaseSearchQuery'))
    };
  });

  console.log('Results:', JSON.stringify(pinInfo, null, 2));
  await browser.close();
}

check().catch(console.error);
