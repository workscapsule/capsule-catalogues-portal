import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight, ShieldCheck, Sun, Umbrella, Layers, Sparkles, Phone } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ExteriorFeatureProps {
  onOpenConsultation: () => void;
}

export const ExteriorFeature: React.FC<ExteriorFeatureProps> = ({ onOpenConsultation }) => {
  const exteriorServices = [
    { title: 'EXTERIOR DESIGN & ELEVATIONS', desc: 'Contemporary 3D facade planning and structural balance tailored to Bengaluru climate.' },
    { title: 'FACADE WORK & CLADDING', desc: 'High-pressure laminates, stone veneer, aluminium composite, and exposed concrete panels.' },
    { title: 'WEATHER-RESISTANT PAINTING', desc: 'Multi-coat anti-fungal elastomeric exterior wall coatings with high UV reflectance.' },
    { title: 'OUTDOOR SPACES & TERRACES', desc: 'Pergolas, deck flooring, landscaped planter troughs, and sit-out architectural pavilions.' },
    { title: 'GLASS & FABRICATION', desc: 'Acoustic double-glazed sliding frames, frameless balcony glass railings, and MS gates.' },
  ];

  return (
    <section id="exteriors" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Services */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              label="ARCHITECTURAL PRESENCE"
              title="EXTERIOR &"
              highlight="FACADE WORKS"
              subtitle="From bold residential elevations to weather-proof commercial facades, we engineer exterior surfaces that command attention and resist Bengaluru's monsoon and tropical sun."
            />

            <div className="space-y-3 pt-2">
              {exteriorServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-brand-border hover:border-brand-copper/40 transition-all shadow-2xs"
                >
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-black">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>REQUEST EXTERIOR CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                {companyConfig.phones.map((p, idx) => (
                  <a
                    key={p.number}
                    href={`tel:${p.raw}`}
                    className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-brand-cream hover:bg-white text-brand-black border border-brand-border hover:border-brand-copper text-[11px] sm:text-xs font-bold tracking-wider uppercase rounded-full transition-all text-center whitespace-nowrap flex items-center justify-center gap-1.5 active:scale-95"
                    title={`Call Line ${idx + 1}: ${p.display}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                    <span>{p.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border group bg-brand-black flex items-center justify-center p-2 sm:p-4">
              <div 
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-125 pointer-events-none"
                style={{ backgroundImage: `url(/assets/creatives/img8.jpeg)` }}
              />
              <div className="absolute inset-0 bg-brand-black/30 backdrop-blur-xs pointer-events-none" />
              <img
                src="/assets/creatives/img8.jpeg"
                alt="Contemporary Indian Style Villa Exterior and Facade"
                className="relative z-10 w-full h-auto aspect-[16/9] object-cover object-center rounded-xl shadow-lg border border-white/10 group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
