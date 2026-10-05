import React from 'react';
import { Phone, Mail, Globe, MapPin, Instagram, Sparkles } from 'lucide-react';

export const KidsBedContactPage: React.FC = () => {
  return (
    <div
      id="kids-bed-contact"
      className="catalogue-page kids-bed-magazine-page relative bg-[#16171A] text-white flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden shadow-2xl mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Architectural Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#A3704C]/10 pointer-events-none" />

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
            <span className="block text-xs tracking-[0.2em] text-[#C59A6F] uppercase font-medium">
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
        <div className="flex items-center gap-2 text-[#C59A6F] font-mono text-xs tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          <span>BESPOKE CHILDREN'S BEDROOM INTERIORS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
          CREATING SPACES THAT GROW WITH THEIR DREAMS
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
          From imaginative loft beds and cozy bunk systems to ergonomic study stations, Capsule Interiors designs and crafts tailor-made children's sanctuaries built for safety, wonder, and everyday adventures across Bengaluru.
        </p>

        {/* Contact Information Grid */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
            <Phone className="w-4 h-4 text-[#C59A6F] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-mono uppercase text-white/50 tracking-wider">Direct Consultation</span>
              <a href="tel:+919606203333" className="text-xs font-semibold text-white hover:text-[#C59A6F] transition-colors">
                +91 96062 03333
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
            <Mail className="w-4 h-4 text-[#C59A6F] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-mono uppercase text-white/50 tracking-wider">Design Inquiries</span>
              <a href="mailto:contact@capsulecompany.in" className="text-xs font-semibold text-white hover:text-[#C59A6F] transition-colors">
                contact@capsulecompany.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
            <Globe className="w-4 h-4 text-[#C59A6F] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-mono uppercase text-white/50 tracking-wider">Official Website</span>
              <span className="text-xs font-semibold text-white">
                www.capsulecompany.in
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
            <Instagram className="w-4 h-4 text-[#C59A6F] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-mono uppercase text-white/50 tracking-wider">Instagram Portfolio</span>
              <span className="text-xs font-semibold text-white">
                @capsule_interiors
              </span>
            </div>
          </div>

          <div className="sm:col-span-2 flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-[#C59A6F] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-mono uppercase text-white/50 tracking-wider">Design Studio & Experience Centre</span>
              <span className="text-xs font-semibold text-white">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="relative z-10 border-t border-white/15 pt-6 flex items-center justify-between text-xs text-white/60">
        <div>
          <span>© 2026 CAPSULE COMPANY. All Rights Reserved.</span>
        </div>
        <div className="font-mono text-[11px] tracking-wider text-[#C59A6F]">
          CAPSULE • KIDS BED • CATALOGUE 2026
        </div>
      </footer>
    </div>
  );
};

export default KidsBedContactPage;
