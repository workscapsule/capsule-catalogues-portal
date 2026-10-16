import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Instagram, Facebook, Globe } from 'lucide-react';
import { companyConfig } from '../config/company';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { getGmailUrl } from '../utils/mail';

interface ContactPageProps {
  onOpenConsultation?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>CONTACT</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            CONNECT WITH <span className="text-brand-copper">CAPSULE COMPANY</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Ready to build, renovate, or design your space? Visit our Hebbal Kempapura office or book a free site consultation across Bengaluru.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Phone & WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-brand-border flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-copper/10 text-brand-copper flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block">
                CALL OR WHATSAPP
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mt-1">
                Direct Lines
              </h3>
              <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                Connect instantly with our project managers for estimates and queries.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-brand-border/60">
              <div className="space-y-2">
                {companyConfig.phones.map((p, idx) => (
                  <a
                    key={p.number}
                    href={`tel:${p.raw}`}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-brand-ivory/60 hover:bg-brand-cream border border-brand-border/70 hover:border-brand-copper text-xs sm:text-sm md:text-base font-bold text-brand-black hover:text-brand-copper transition-all group"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-copper shrink-0" />
                      <span className="truncate">{p.display}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-brand-muted group-hover:text-brand-copper shrink-0 ml-2 px-1.5 py-0.5 bg-white/80 rounded border border-brand-border/50">Line {idx + 1}</span>
                  </a>
                ))}
              </div>
              <a
                href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#128C7E] hover:underline pt-1"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Bengaluru Office Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-brand-border flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-copper/10 text-brand-copper flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block">
                VISIT OUR OFFICE
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mt-1">
                Hebbal Kempapura
              </h3>
              <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                {companyConfig.addressFull}
              </p>
            </div>

            <div className="pt-3 border-t border-brand-border/60">
              <a
                href="https://maps.google.com/?q=Hebbal+Kempapura+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-copper hover:underline"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Hours & Email Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-brand-border flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-copper/10 text-brand-copper flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block">
                WORKING HOURS & EMAIL
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mt-1">
                Mon - Sat: 9am - 7pm
              </h3>
              <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                Sunday site visits available by prior appointment.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-brand-border/60">
              <a
                href={getGmailUrl({ subject: 'General Project Inquiry - Capsule Company' })}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold text-brand-black hover:text-brand-copper transition-colors"
                title="Send email via Gmail"
              >
                {companyConfig.email}
              </a>
              <span className="text-xs text-brand-muted block">
                Official Space Maker of Bengaluru
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Google Maps Embed Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-brand-border shadow-md overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-copper uppercase">
                OFFICE LOCATION MAP
              </span>
              <h3 className="font-display text-lg font-bold uppercase text-brand-black">
                Outer Ring Road, Hebbal Kempapura, Bengaluru
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Hebbal+Kempapura+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-brand-border bg-brand-ivory text-xs font-bold uppercase tracking-wider text-brand-black hover:text-brand-copper transition-colors inline-flex items-center gap-1.5 self-start"
            >
              <span>Open in Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-brand-border">
            <iframe
              title="Capsule Company Office Map"
              src={companyConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Lead Generation Form */}
      <div className="mt-16">
        <ConsultationForm />
      </div>
    </div>
  );
};
