const fs = require('fs');
const path = require('path');

async function searchDDGImages(query, maxCount = 40) {
  try {
    const tokenRes = await fetch('https://duckduckgo.com/?q=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const text = await tokenRes.text();
    const vqdMatch = text.match(/vqd=([0-9-]+)/);
    if (!vqdMatch) {
      console.log('No vqd for:', query);
      return [];
    }
    const vqd = vqdMatch[1];
    const imgRes = await fetch('https://duckduckgo.com/i.js?l=us-en&o=json&q=' + encodeURIComponent(query) + '&vqd=' + vqd + '&f=,,,&p=1', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const data = await imgRes.json();
    return (data.results || []).map(r => r.image).filter(url => url && url.startsWith('http') && !url.includes('.svg'));
  } catch (err) {
    console.error('Error searching DDG:', err.message);
    return [];
  }
}

async function downloadImage(url, destPath) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('image')) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length < 15000) return false; // filter out tiny icons or broken thumbnails
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    return false;
  }
}

const categories = [
  {
    folder: 'beds',
    prefix: 'bed',
    queries: [
      'luxury upholstered bed bedroom design',
      'modern platform bed interior design',
      'contemporary master bedroom bed backdrop',
      'minimalist wooden bed frame bedroom'
    ]
  },
  {
    folder: 'tv-units',
    prefix: 'tv',
    queries: [
      'modern tv unit media wall living room',
      'fluted wooden panel tv wall console',
      'luxury floating tv unit marble backdrop',
      'contemporary entertainment unit interior design'
    ]
  },
  {
    folder: 'bar-counter',
    prefix: 'bar',
    queries: [
      'modern residential home bar counter interior',
      'luxury home mini bar cabinet dining area',
      'contemporary residential bar unit backlit glass',
      'home bar counter wooden residential interior'
    ]
  },
  {
    folder: 'temple-space',
    prefix: 'temple',
    queries: [
      'modern pooja room design interior home',
      'wooden home mandir design modern pooja unit',
      'pooja unit backlit jaali panel interior',
      'contemporary prayer room temple design residential'
    ]
  },
  {
    folder: 'crockery-unit',
    prefix: 'crockery',
    queries: [
      'modern crockery unit design dining room',
      'luxury glass crockery display cabinet dining',
      'contemporary dining room crockery showcase',
      'fluted glass crockery storage cabinet interior'
    ]
  }
];

async function run() {
  for (const cat of categories) {
    const outDir = path.join('public', 'assets', 'catalogues', cat.folder);
    fs.mkdirSync(outDir, { recursive: true });
    console.log(`\n=== Processing Category: ${cat.folder} ===`);
    
    let allUrls = [];
    for (const q of cat.queries) {
      console.log(`Searching query: "${q}"...`);
      const urls = await searchDDGImages(q, 35);
      allUrls.push(...urls);
      // Small pause to be polite
      await new Promise(r => setTimeout(r, 600));
    }

    // Unique URLs
    allUrls = [...new Set(allUrls)];
    console.log(`Total unique candidate URLs for ${cat.folder}: ${allUrls.length}`);

    let saved = 0;
    for (const url of allUrls) {
      if (saved >= 28) break; // target 28 distinct designs (25-30 requirement)
      const numStr = String(saved + 1).padStart(2, '0');
      const filename = `${cat.prefix}-${numStr}.jpg`;
      const filePath = path.join(outDir, filename);

      const ok = await downloadImage(url, filePath);
      if (ok) {
        saved++;
        const sizeKb = Math.round(fs.statSync(filePath).size / 1024);
        console.log(`[${saved}/28] Saved ${filename} (${sizeKb} KB)`);
      }
    }
    console.log(`Finished ${cat.folder}: ${saved} images ready.`);
  }
  console.log('\nAll categories images processed successfully!');
}

run();
