const https = require('https');

https.get('https://www.pinterest.com/search/pins/?q=l%20shape%20modular%20kitchen%20design', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const matches = data.match(/https:\/\/i\.pinimg\.com\/[a-zA-Z0-9_\-\/]+\.(?:jpg|png|webp)/g);
    console.log('Found pinimg matches:', matches ? matches.length : 0);
    if (matches) {
      // filter unique
      const unique = [...new Set(matches)];
      console.log('Unique matches:', unique.length);
      console.log('Sample:', unique.slice(0, 10));
    }
  });
}).on('error', (e) => {
  console.error(e);
});
