import React from 'react';

export const BarCounterCoverPage: React.FC = () => {
  return (
    <div
      id="bar-counter-cover"
      className="catalogue-page bar-counter-magazine-page relative bg-[#0E0E0E] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
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
          src="/assets/bar-counter-cover-reference.jpg"
          alt="Capsule Company Bar Counter Catalogue - More than Spaces Memorable Moments"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • YOUR SPACE MAKER</h1>
        <h2>BAR COUNTER CATALOGUE</h2>
        <p>39 CURATED BAR COUNTER DESIGNS</p>
        <p>WHERE GOOD CONVERSATIONS FIND A HOME • DESIGN • DRINK • ENTERTAIN • BELONG</p>
        <ul>
          <li>STYLISH DESIGNS</li>
          <li>PREMIUM MATERIALS</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>RESIDENTIAL & COMMERCIAL SPACES</li>
          <li>ELEVATE YOUR ENTERTAINING</li>
        </ul>
        <p>More than Spaces, Memorable Moments</p>
        <p>Good Drinks, Better Company</p>
        <p>RESIDENTIAL • BESPOKE BAR INTERIORS BANGALORE</p>
      </div>
    </div>
  );
};

export default BarCounterCoverPage;
