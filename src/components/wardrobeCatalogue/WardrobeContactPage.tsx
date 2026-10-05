import React from 'react';
import { Phone, Mail, Globe, MapPin, Compass } from 'lucide-react';

export const WardrobeContactPage: React.FC = () => {
  return (
    <div
      id="wardrobe-contact"
      className="catalogue-page wardrobe-magazine-page relative bg-[#121316] text-white flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden shadow-2xl mx-auto"
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
          <Compass className="w-4 h-4" />
          <span>BESPOKE WARDROBES & LUXURY DRESSING SUITES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
          CRAFTED FOR ELEGANT LIVING & ENDURING LUXURY
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
          From full-height walk-in dressing suites and smoked glass sliding vitrines to seamless built-in wardrobe systems with integrated vanity workstations, Capsule Interiors engineers customized bedroom storage solutions that harmoniously blend aesthetics, German precision hardware, and bespoke craftsmanship across Bengaluru.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h3 className="text-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold mb-1">
              PRECISION JOINERY
            </h3>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Factory-pressed HDHMR & marine plywood cores, Blum/Hettich soft-closing hinges, felt-lined jewelry organizers, and zero-rattle whisper-quiet sliding tracks.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h3 className="text-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold mb-1">
              INTEGRATED AMBIENCE
            </h3>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Warm 3000K recessed profile LED shelf channels, motion-activated wardrobe sensors, backlit vanity mirrors, and luxury glass vitrine accents.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Contact Details Grid */}
      <footer className="relative z-10 border-t border-white/15 pt-6 space-y-4">
        {/* Contact Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1 bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </div>
            <p className="text-white font-mono text-[13px] font-bold">+91 96321 24422</p>
          </div>

          <div className="space-y-1 bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </div>
            <p className="text-white font-mono text-[13px] font-bold">capsulecompany@gmail.com</p>
          </div>

          <div className="space-y-1 bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Website</span>
            </div>
            <p className="text-white font-mono text-[13px] font-bold">www.capsulecompany.in</p>
          </div>
        </div>

        {/* Exact Official Address Box */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
              Company Address
            </div>
            <p className="text-white text-[12px] leading-relaxed font-sans font-medium">
              N.173, 1st & 2nd Floor, SLV Complex, Hebbal Kempapura, Ammanikere, Outer Ring Road, Kariyamma Layout, Bengaluru (Urban), Karnataka – 560024
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
          <span>CAPSULE COMPANY • WARDROBE CATALOGUE</span>
          <span className="font-mono text-[#C5A059]">PAGE P / 32</span>
        </div>
      </footer>
    </div>
  );
};

export default WardrobeContactPage;
