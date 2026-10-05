import React from 'react';

export const TVUnitCoverPage: React.FC = () => {
  return (
    <div
      id="tv-unit-cover"
      className="catalogue-page tv-unit-magazine-page relative bg-[#F8F5EE] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
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
          src="/assets/tv-unit-cover-reference.jpg"
          alt="Capsule Company TV Unit & Media Walls Design Catalogue - Spaces That Nurture Living"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • YOUR SPACE MAKER</h1>
        <p>RESIDENTIAL • COMMERCIAL • BESPOKE INTERIORS</p>
        <p>SPACES THAT NURTURE LIVING</p>
        <h2>TV UNIT & MEDIA WALLS DESIGN CATALOGUE</h2>
        <p>CURATED TV UNIT DESIGNS</p>
        <ul>
          <li>MODERN DESIGNS</li>
          <li>SMART STORAGE</li>
          <li>PREMIUM FINISHES</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>CONTEMPORARY AESTHETICS</li>
        </ul>
        <p>More than Spaces, A Place for Peace</p>
        <p>CAPSULE COMPANY • YOUR SPACE MAKER</p>
      </div>
    </div>
  );
};

export default TVUnitCoverPage;
