import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Phone, MapPin, Mail, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="GET IN TOUCH"
          title="CONNECT WITH"
          highlight="OUR TEAM."
          subtitle="Whether you are planning a new architectural build, turnkey modular interior, or property renovation in Bengaluru, our space makers are ready to assist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Contact Cards Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Card */}
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="block p-6 rounded-2xl bg-white border border-brand-border hover:border-brand-copper transition-all shadow-xs hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-border flex items-center justify-center shrink-0 group-hover:bg-brand-copper group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-brand-copper group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                    Direct Line
                  </span>
                  <h4 className="text-lg font-bold text-brand-black group-hover:text-brand-copper transition-colors">
                    {companyConfig.phone}
                  </h4>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Click to call our Bengaluru headquarters
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-brand-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white border border-brand-border hover:border-[#25D366] transition-all shadow-xs hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-widest text-[#128C7E] uppercase block">
                    WhatsApp Chat
                  </span>
                  <h4 className="text-lg font-bold text-brand-black group-hover:text-[#128C7E] transition-colors">
                    {companyConfig.phone}
                  </h4>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Fast response for plans & quick questions
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-[#128C7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Office Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-copper" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                    Bengaluru Office
                  </span>
                  <h4 className="text-sm font-bold text-brand-black mt-0.5 leading-snug">
                    {companyConfig.name}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    {companyConfig.addressFull}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock className="w-3.5 h-3.5 text-brand-copper" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Quick Trigger Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md active:scale-95 text-center"
              >
                SCHEDULE A FREE SITE VISIT
              </button>
            </div>

          </div>

          {/* Google Maps Location Preview (7 cols) */}
          <div className="lg:col-span-7 h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-brand-border shadow-lg relative bg-brand-cream">
            <iframe
              title="Capsule Company Hebbal Kempapura Bengaluru Location"
              src={companyConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
            />

            {/* Floating Location Overlay Chip */}
            <div className="absolute top-4 left-4 glass-panel rounded-xl p-3 shadow-md pointer-events-none max-w-xs">
              <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                Outer Ring Road
              </span>
              <p className="text-xs font-bold text-brand-black">
                Hebbal Kempapura, Bengaluru
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
