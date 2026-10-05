import React from 'react';
import { Phone, Mail, Globe, MapPin, Instagram, Wine } from 'lucide-react';

export const BarCounterContactPage: React.FC = () => {
  return (
    <div
      id="bar-counter-contact"
      className="catalogue-page bar-counter-magazine-page relative bg-[#121316] text-white flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden shadow-2xl mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Architectural Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#C5A059]/10 pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6">
        <div className="flex items-center gap-3.5">
          <div className="h-16 w-16 bg-[#FBF8F5] rounded p-1 flex items-center justify-center shadow-md">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="block text-sm uppercase tracking-[0.25em] font-extrabold text-white font-display">
              CAPSULE COMPANY
            </span>
            <span className="block text-xs tracking-[0.2em] text-[#C5A059] uppercase font-medium">
              YOUR SPACE MAKER
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block text-[11px] font-mono tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80 border border-white/10">
            CONNECT WITH US
          </span>
        </div>
      </header>

      {/* Center Hero Statement Block */}
      <main className="relative z-10 my-auto py-8 max-w-2xl">
        <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs tracking-widest uppercase mb-3">
          <Wine className="w-4 h-4" />
          <span>BESPOKE ENTERTAINING & BAR COUNTER ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
          WHERE GOOD CONVERSATIONS FIND A HOME
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
          From luminous backlit onyx islands and intimate fluted wood alcoves to grand commercial-grade wine conditioning walls, Capsule Interiors designs and crafts tailor-made bar counters that redefine home entertaining across Bengaluru.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h3 className="text-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold mb-1">
              CONNOISSEUR CRAFTSMANSHIP
            </h3>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Bookmatched natural stone, precision fluted tambour woodwork, integrated climate-controlled wine cellar refrigeration, and custom stemware storage.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h3 className="text-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold mb-1">
              ARCHITECTURAL LIGHTING
            </h3>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Concealed 2700K warm LED halos, backlit translucent marble matrices, and multi-scene dimmable illumination tailored for evening entertaining.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Contact Details Grid */}
      <footer className="relative z-10 border-t border-white/15 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT LINE</span>
            </div>
            <p className="text-white/90 font-mono text-[11px]">+91 91879 24723</p>
            <p className="text-white/50 text-[10px]">Mon – Sat • 9 AM – 7 PM</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>CORRESPONDENCE</span>
            </div>
            <p className="text-white/90 font-mono text-[11px]">hello@capsulecompany.in</p>
            <p className="text-white/50 text-[10px]">Projects & Inquiries</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>DIGITAL PORTAL</span>
            </div>
            <p className="text-white/90 font-mono text-[11px]">www.capsulecompany.in</p>
            <p className="text-white/50 text-[10px]">Explore Living Portfolios</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>EXPERIENCE STUDIO</span>
            </div>
            <p className="text-white/90 text-[11px] leading-snug">
              Indiranagar / HSR Layout, Bengaluru, Karnataka
            </p>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/40 gap-2">
          <span>© 2026 CAPSULE COMPANY • ALL RIGHTS RESERVED • BESPOKE RESIDENTIAL & COMMERCIAL BAR SPACES</span>
          <span className="font-mono text-[#C5A059]/80 tracking-wider">BANGALORE • KARNATAKA</span>
        </div>
      </footer>
    </div>
  );
};

export default BarCounterContactPage;
