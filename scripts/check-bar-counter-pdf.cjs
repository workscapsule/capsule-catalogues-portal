const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function check() {
  const bytes = fs.readFileSync('Capsule_Interiors_Bar_Counter_Catalogue.pdf');
  const doc = await PDFDocument.load(bytes);
  console.log('PDF Page count:', doc.getPageCount());
  const page1 = doc.getPage(0);
  console.log('Page 1 dimensions (pt):', page1.getWidth(), 'x', page1.getHeight());
  const stats = fs.statSync('Capsule_Interiors_Bar_Counter_Catalogue.pdf');
  console.log('File size:', (stats.size / (1024 * 1024)).toFixed(2), 'MB');
}

check().catch(console.error);
