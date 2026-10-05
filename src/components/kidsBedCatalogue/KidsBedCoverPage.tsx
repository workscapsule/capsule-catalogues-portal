import React from 'react';

export const KidsBedCoverPage: React.FC = () => {
  return (
    <div
      id="kids-bed-cover"
      className="catalogue-page kids-bed-magazine-page relative bg-[#F8F5EE] text-[#1A1A1A] overflow-hidden select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none mx-auto"
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
          src="/assets/kids-bed-cover-reference.png"
          alt="Capsule Company Kids Bed Catalogue - Little Dreams Big Possibilities"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. ACCESSIBLE / PRINT-FRIENDLY SEMANTIC STRUCTURE */}
      <div className="sr-only">
        <h1>CAPSULE COMPANY • YOUR SPACE MAKER</h1>
        <h2>KIDS BED CATALOGUE</h2>
        <p>40 CURATED KIDS BED MODELS</p>
        <p>DREAM SPACES FOR LITTLE ONES • BEDROOMS THAT INSPIRE IMAGINATION</p>
        <ul>
          <li>STYLISH DESIGNS</li>
          <li>SAFE & DURABLE</li>
          <li>CUSTOM SOLUTIONS</li>
          <li>CHILD-FRIENDLY MATERIALS</li>
          <li>SPACES THAT GROW WITH THEM</li>
        </ul>
        <p>Little Dreams, Big Possibilities</p>
        <p>RESIDENTIAL • BESPOKE KIDS INTERIORS</p>
      </div>
    </div>
  );
};

export default KidsBedCoverPage;
