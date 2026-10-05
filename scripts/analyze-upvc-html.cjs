const fs = require('fs');
const html = fs.readFileSync('scratch/upvc_gdrive.html', 'utf8');
console.log('HTML length:', html.length);

// Check if page redirected to sign in or access denied
if (html.includes('accounts.google.com/signin')) {
  console.log('Redirected to sign-in!');
}
if (html.includes('You need access') || html.includes('Request access')) {
  console.log('Access denied / Request access page!');
}

const unescaped = html.replace(/\\x22/g, '"').replace(/\\x5b/g, '[').replace(/\\x5d/g, ']').replace(/\\\//g, '/');

// Search for any filenames
const imgRegex = /([a-zA-Z0-9_\-\s%()]+\.(?:jpg|jpeg|png|webp|avif))/gi;
let m;
const foundNames = new Set();
while ((m = imgRegex.exec(unescaped)) !== null) {
  foundNames.add(m[1]);
}
console.log('Found filenames count:', foundNames.size);
console.log('Sample filenames:', Array.from(foundNames).slice(0, 30));

// Check drive IDs
const idMatches = unescaped.match(/"([a-zA-Z0-9_-]{28,40})"/g);
console.log('Candidate IDs found:', idMatches ? idMatches.length : 0);
