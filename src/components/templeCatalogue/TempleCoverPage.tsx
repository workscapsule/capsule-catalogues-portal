import React from 'react';

export const TempleCoverPage: React.FC = () => {
  return (
    <div
      id="temple-cover"
      className="catalogue-page temple-magazine-page relative bg-[#F8F5EE] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. MASTER HIGH-RESOLUTION VISUAL COVER (Exact Attached Luxury Reference Design) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/temple-homepage-reference.jpg"
          alt="Capsule Company Temple Design Catalogue - Spaces That Nurture Faith"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 3. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE (Hidden from sight but preserved for screen-readers, SEO & metadata) */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • YOUR SPACE MAKER</h1>
        <h2>TEMPLE DESIGN CATALOGUE</h2>
        <p>42 CURATED TEMPLE DESIGN MODELS</p>
        <p>SPACES THAT NURTURE FAITH</p>
        <ul>
          <li>TIMELESS AESTHETICS</li>
          <li>PREMIUM CRAFTSMANSHIP</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>SPIRITUAL HARMONY</li>
        </ul>
        <p>More than Spaces, A Place for Peace</p>
        <p>RESIDENTIAL • COMMERCIAL • BESPOKE INTERIORS</p>
      </div>
    </div>
  );
};

export default TempleCoverPage;
