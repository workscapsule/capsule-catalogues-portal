import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { 
  Building2, 
  LayoutGrid, 
  Hammer, 
  Zap, 
  Wrench, 
  Maximize2, 
  Grid, 
  ArrowUpRight, 
  Check, 
  X,
  PhoneCall
} from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ServicesBentoProps {
  onOpenConsultation: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-copper" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'Grid': return <Grid {...props} />;
      default: return <LayoutGrid {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeader
            label="WHAT WE DO"
            title="ONE COMPANY."
            highlight="EVERY DETAIL."
            subtitle="We bring multiple aspects of your project together under one coordinated approach, eliminating the headaches of coordinating separate contractors."
            className="mb-0"
          />

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-6 py-3 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full transition-all active:scale-95 shrink-0"
          >
            DISCUSS YOUR PROJECT
          </button>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((srv, idx) => {
            // First card spans 2 columns on desktop for bento visual interest
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 bg-brand-ivory border border-brand-border hover:border-brand-copper transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between relative overflow-hidden ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Architectural numbering watermark */}
                <span className="absolute top-4 right-6 text-3xl sm:text-4xl font-display font-extrabold text-brand-copper/20 group-hover:text-brand-copper/35 transition-colors select-none">
                  {srv.number}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-cream transition-all shadow-xs">
                    {getServiceIcon(srv.iconName)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-brand-black group-hover:text-brand-copper transition-colors pr-10">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted mt-2.5 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Feature preview bullets */}
                  <div className="mt-4 pt-4 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.features.slice(0, isLarge ? 4 : 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-brand-black/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold tracking-widest text-brand-black group-hover:text-brand-copper uppercase">
                  <span>Explore Service</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-brand-border group-hover:border-brand-copper flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 text-brand-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-brand-black/75 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-brand-ivory rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border z-10 my-auto animate-reveal">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-black rounded-full hover:bg-brand-cream"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-copper uppercase">
                Service {selectedService.number}
              </span>
              <span className="w-8 h-[1px] bg-brand-copper" />
            </div>

            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-brand-black mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-copper mb-3">
              Detailed Scope & Deliverables
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-brand-black bg-white p-2.5 rounded-lg border border-brand-border">
                  <Check className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-brand-border">
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-copper">Direct Call Lines:</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {companyConfig.phones.map((p, idx) => (
                    <a
                      key={p.number}
                      href={`tel:${p.raw}`}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-brand-black hover:text-brand-copper px-2.5 py-1 rounded-full bg-brand-cream/60 border border-brand-border/60 hover:border-brand-copper transition-colors whitespace-nowrap"
                      title={`Call Line ${idx + 1}: ${p.display}`}
                    >
                      <PhoneCall className="w-3 h-3 text-brand-copper shrink-0" />
                      <span>{p.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-brand-copper hover:bg-brand-copperDark text-white text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-md"
              >
                REQUEST FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
