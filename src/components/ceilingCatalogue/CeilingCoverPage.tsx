import React from 'react';

export const CeilingCoverPage: React.FC = () => {
  return (
    <div
      id="ceiling-cover"
      className="catalogue-page ceiling-magazine-page relative bg-[#F8F5EE] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. MASTER HIGH-RESOLUTION VISUAL COVER (Exact Uploaded Luxury Reference Design) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/pop-cover-reference.jpg"
          alt="Capsule Company POP Designs Design Catalogue - Spaces That Nurture Living"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • IDEAS INTO SPACE</h1>
        <p>RESIDENTIAL • COMMERCIAL • BESPOKE INTERIORS</p>
        <p>SPACES THAT NURTURE LIVING</p>
        <h2>POP DESIGNS DESIGN CATALOGUE</h2>
        <p>30 CURATED POP DESIGNS</p>
        <ul>
          <li>MODERN DESIGNS</li>
          <li>LED LIGHTING</li>
          <li>PREMIUM FINISHES</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>RESIDENTIAL & COMMERCIAL</li>
          <li>FUNCTIONAL PLANNING</li>
        </ul>
        <p>More than Spaces, A Place for Peace</p>
        <p>CAPSULE COMPANY • IDEAS INTO SPACE</p>
      </div>
    </div>
  );
};

export default CeilingCoverPage;
