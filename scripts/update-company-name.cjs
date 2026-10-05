const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'build-standard-catalogue-pdf.cjs');
let text = fs.readFileSync(file, 'utf8');

// Replace header and footer brand names
text = text.replace(/<div class="header-brand-title">CAPSULE INTERIORS<\/div>/g, '<div class="header-brand-title">CAPSULE COMPANY</div>');
text = text.replace(/<div class="header-brand-title" style="color: #FFFFFF;">CAPSULE INTERIORS<\/div>/g, '<div class="header-brand-title" style="color: #FFFFFF;">CAPSULE COMPANY</div>');
text = text.replace(/<strong>CAPSULE INTERIORS<\/strong>/g, '<strong>CAPSULE COMPANY</strong>');
text = text.replace(/alt="Capsule Interiors"/g, 'alt="Capsule Company"');

// Replace in taglines
text = text.replace(/• Capsule Interiors/g, '• Capsule Company');

fs.writeFileSync(file, text, 'utf8');
console.log('Successfully updated CAPSULE INTERIORS to CAPSULE COMPANY in build-standard-catalogue-pdf.cjs');
