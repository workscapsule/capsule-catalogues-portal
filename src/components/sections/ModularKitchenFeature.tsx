import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Maximize, 
  ShieldCheck, 
  Palette,
  Phone
} from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ModularKitchenFeatureProps {
  onOpenConsultation: () => void;
}

export const ModularKitchenFeature: React.FC<ModularKitchenFeatureProps> = ({ onOpenConsultation }) => {
  const highlights = [
    {
      title: 'SMART LAYOUT',
      desc: 'Ergonomic golden-triangle workflow engineered for seamless prep, cook, and wash zones.',
      icon: <Maximize className="w-5 h-5 text-brand-copper" />
    },
    {
      title: 'PREMIUM MATERIALS',
      desc: 'BWP Grade Marine Plywood, quartz composite counters, and scratch-resistant acrylic shutters.',
      icon: <Layers className="w-5 h-5 text-brand-copper" />
    },
    {
      title: 'AMPLE STORAGE',
      desc: 'Deep pull-out pantries, blind-corner carousels, and concealed cutlery organizers.',
      icon: <Sparkles className="w-5 h-5 text-brand-copper" />
    },
    {
      title: 'MODERN DESIGNS',
      desc: 'Sleek handleless profiles, fluted wood accents, and warm ambient LED under-cabinet illumination.',
      icon: <Palette className="w-5 h-5 text-brand-copper" />
    },
    {
      title: 'DURABLE & LONG LASTING',
      desc: 'German soft-close hinges, moisture-sealed edges, and heavy-duty drawer runners.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-copper" />
    }
  ];

  return (
    <section id="kitchen" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition matching img7 */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border group bg-brand-black flex items-center justify-center p-2 sm:p-4">
              <div 
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-125 pointer-events-none"
                style={{ backgroundImage: `url(/assets/creatives/img7.jpeg)` }}
              />
              <div className="absolute inset-0 bg-brand-black/30 backdrop-blur-xs pointer-events-none" />
              <img
                src="/assets/creatives/img7.jpeg"
                alt="Customized Modular Kitchen by Capsule Company"
                className="relative z-10 w-full h-auto aspect-[3/2] object-cover object-center rounded-xl shadow-lg border border-white/10 group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Copper Line Anchor */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-brand-copper/50 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Copy & Feature Points */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <SectionHeader
              label="BETTER SPACES. BRIGHTER LIVING."
              title="CUSTOMIZED"
              highlight="MODULAR KITCHENS"
              subtitle="Designed for your lifestyle. Built for everyday comfort. We engineer kitchens that balance culinary precision, durable engineering, and modern elegance."
            />

            {/* Feature Cards */}
            <div className="space-y-3.5 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border hover:border-brand-copper/40 transition-all flex items-start gap-4 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-black">
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation Trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-copper hover:bg-brand-copperDark text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>GET FREE KITCHEN CONSULTATION</span>
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

        </div>
      </div>
    </section>
  );
};
