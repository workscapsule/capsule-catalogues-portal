import React from 'react';
import { modularKitchenLuxuryData } from '../../data/modularKitchenLuxuryData';
import { Compass, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const KitchenDesignGuidePage: React.FC = () => {
  const { brand, tagline } = modularKitchenLuxuryData;
  const companyName = brand;

  const layoutTypes = [
    {
      name: 'L-Shaped Kitchen',
      count: '10 Designs (CK-LS-01 – 10)',
      desc: 'Versatile corner architecture maximizing countertop continuity, natural lighting, and prep triangle ergonomics.',
    },
    {
      name: 'Parallel (Galley)',
      count: '10 Designs (CK-PL-01 – 10)',
      desc: 'Opposing dual counters preferred by culinary purists for rapid transitions between wet, cooking, and prep stations.',
    },
    {
      name: 'Island Kitchen',
      count: '10 Designs (CK-IS-01 – 10)',
      desc: 'Grand sculptural workstations uniting food preparation, luxury barstool dining, and social entertaining.',
    },
    {
      name: 'Straight / Single-Wall',
      count: '10 Designs (CK-ST-01 – 10)',
      desc: 'Sleek linear configurations engineered for contemporary apartments, studios, and open-plan living areas.',
    },
  ];

  return (
    <div
      id="kitchen-guide"
      className="catalogue-page kitchen-magazine-page relative bg-[#FBF8F5] text-[#1A1A1A] flex flex-col justify-between p-8 sm:p-14 select-none border border-neutral-200/80 shadow-sm print:border-none print:shadow-none mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header */}
      <header className="flex items-center justify-between pb-4 border-b border-neutral-300/80">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 bg-white rounded p-1 flex items-center justify-center border border-neutral-200 shadow-xs">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.24em] font-bold text-neutral-900">
              {companyName}
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-[#C59A6F] uppercase font-medium">
              {tagline}
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
            DESIGN & PLANNING GUIDE
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="my-auto py-4 space-y-6">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#C59A6F] uppercase font-bold">
            ARCHITECTURAL STANDARDS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mt-1">
            HOW CAPSULE BUILDS YOUR KITCHEN
          </h2>
          <p className="mt-2 text-xs sm:text-[12.5px] leading-relaxed text-neutral-700 max-w-3xl">
            Every kitchen in this 40-design collection is custom-configured to fit the precise architectural dimensions of your home. We calibrate work triangle ergonomics, internal storage mechanisms, lighting warmth, and surface durability to deliver a kitchen that remains effortless for decades.
          </p>
        </div>

        {/* 4 Layout Guide Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {layoutTypes.map((layout, i) => (
            <div key={layout.name} className="p-4 bg-white rounded border border-neutral-300/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C59A6F]">LAYOUT 0{i + 1}</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mt-1">
                  {layout.name}
                </h3>
                <span className="inline-block text-[9.5px] font-mono text-[#A37446] font-semibold mt-0.5 mb-2">
                  {layout.count}
                </span>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  {layout.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Material & Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-neutral-300/80">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#C59A6F]/10 text-[#C59A6F] shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Substrates & Finishes
              </h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed">
                Boiling waterproof marine ply (BWP) and high-density moisture-resistant (HDMR) boards finished in anti-scratch acrylic, ultra-matte PU, or natural veneers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#C59A6F]/10 text-[#C59A6F] shrink-0 mt-0.5">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Hardware & Motion
              </h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed">
                German-engineered soft-close hinges, tandem drawer boxes rated for 50,000 cycles, and heavy-duty blind corner pull-outs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#C59A6F]/10 text-[#C59A6F] shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Countertops & Stone
              </h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed">
                High-performance engineered quartz, nano-crystal stone, and porcelain slabs that offer 100% stain resistance and food-grade safety.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-4 border-t border-neutral-300/80 text-xs">
        <div className="text-neutral-500 font-medium text-[11px] tracking-wider uppercase">
          CAPSULE INTERIORS • MODULAR KITCHEN CATALOGUE
        </div>
        <div className="font-bold font-mono tracking-widest text-neutral-900 text-xs">
          PAGE 03 / 44
        </div>
      </footer>
    </div>
  );
};

export default KitchenDesignGuidePage;
