const fs = require('fs');
const path = require('path');

const srcEdge = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Microsoft\\Edge\\User Data';
const srcChrome = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\User Data';
const tempDir = path.join(__dirname, '..', 'scratch', 'temp_profile');

fs.mkdirSync(path.join(tempDir, 'Default', 'Network'), { recursive: true });

function copyProfile(src) {
  try {
    fs.copyFileSync(path.join(src, 'Local State'), path.join(tempDir, 'Local State'));
    fs.copyFileSync(path.join(src, 'Default', 'Network', 'Cookies'), path.join(tempDir, 'Default', 'Network', 'Cookies'));
    console.log('Successfully copied from', src);
    return true;
  } catch (e) {
    console.warn('Failed copying from', src, e.message);
    return false;
  }
}

// Try Chrome first, then Edge
if (!copyProfile(srcChrome)) {
  copyProfile(srcEdge);
}
