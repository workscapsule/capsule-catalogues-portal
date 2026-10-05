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
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
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
    if (buffer.length < 15000) return false;
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    return false;
  }
}

const targets = [
  {
    folder: 'bar-counter',
    prefix: 'bar',
    queries: [
      'modern home mini bar counter residential interior',
      'contemporary home bar cabinet dining area design',
      'luxury residential bar counter stone top backlit',
      'compact wooden home bar residential interior'
    ]
  },
  {
    folder: 'temple-space',
    prefix: 'temple',
    queries: [
      'modern pooja unit design interior residential',
      'wooden mandir home temple design contemporary',
      'pooja room interior design backlit panel',
      'compact home temple mandir unit wooden'
    ]
  }
];

async function run() {
  for (const cat of targets) {
    const outDir = path.join('public', 'assets', 'catalogues', cat.folder);
    fs.mkdirSync(outDir, { recursive: true });
    console.log(`\n=== Processing ${cat.folder} ===`);
    let existing = fs.readdirSync(outDir).filter(f => f.endsWith('.jpg')).length;
    console.log(`Already have ${existing} images`);

    let allUrls = [];
    for (const q of cat.queries) {
      console.log(`Searching: "${q}"...`);
      const urls = await searchDDGImages(q, 40);
      allUrls.push(...urls);
      await new Promise(r => setTimeout(r, 700));
    }
    allUrls = [...new Set(allUrls)];
    console.log(`Unique URLs found: ${allUrls.length}`);

    let saved = existing;
    for (const url of allUrls) {
      if (saved >= 28) break;
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
    console.log(`Finished ${cat.folder}: total ${saved} images.`);
  }
  console.log('\nAll done!');
}

run();
