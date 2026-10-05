import React from 'react';

export const ConcreteCoverPage: React.FC = () => {
  return (
    <div
      id="concrete-cover"
      className="catalogue-page concrete-magazine-page relative bg-[#F8F5EE] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
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
          src="/assets/concrete-cover-reference.jpg"
          alt="Capsule Company Concrete Unit Catalogue - Curated Designs for Modern Homes"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • YOUR SPACE MAKER</h1>
        <h2>CONCRETE UNIT CATALOGUE</h2>
        <p>50 CURATED CONCRETE UNIT MODELS</p>
        <p>BEAUTIFUL SPACES FOR EVERYDAY LIVING</p>
        <ul>
          <li>PREMIUM DESIGNS</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>FUNCTIONAL STORAGE</li>
          <li>STYLISH AESTHETICS</li>
        </ul>
        <p>Display Your Lifestyle</p>
        <p>RESIDENTIAL • COMMERCIAL • BESPOKE INTERIORS</p>
      </div>
    </div>
  );
};

export default ConcreteCoverPage;
