import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function checkPdf() {
  const buf = fs.readFileSync('Capsule_Interiors_Modular_Kitchen_Catalogue.pdf');
  const doc = await PDFDocument.load(buf);
  const count = doc.getPageCount();
  console.log('Total PDF Pages:', count);
  const pages = doc.getPages();
  pages.forEach((p, i) => {
    const size = p.getSize();
    console.log(`Page ${i + 1}: ${size.width.toFixed(2)}pt x ${size.height.toFixed(2)}pt`);
  });
}

checkPdf().catch(console.error);
