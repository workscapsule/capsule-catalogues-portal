import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Globe, Youtube, ArrowUp } from 'lucide-react';
import { companyConfig } from '../../config/company';
import { getGmailUrl } from '../../utils/mail';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Process', to: '/process' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Why Capsule', to: '/why-capsule' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Design Catalogues', to: 'https://capsule-catalogues-portal-ni9l.vercel.app', isExternal: true },
  ];

  const serviceLinks = [
    { label: 'Construction & Civil Works', to: '/services' },
    { label: 'Turnkey Interior Design', to: '/services' },
    { label: 'Modular Kitchens & Closets', to: '/services' },
    { label: 'Expert Carpentry & Millwork', to: '/services' },
    { label: 'Exterior & Facade Works', to: '/services' },
    { label: 'Renovation & Upgradation', to: '/services' },
    { label: 'Electrical & Smart Automation', to: '/services' },
    { label: 'Flooring, Tiles & Finishes', to: '/services' },
  ];

  return (
    <footer className="bg-brand-black text-white pt-16 pb-12 border-t border-brand-borderDark relative overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-copper/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <Link to="/" className="inline-block bg-brand-ivory p-2.5 rounded-lg border border-brand-copper/30 shadow-md">
              <img
                src="/assets/logo.jpeg"
                alt="Capsule Company - Your Space Maker Official Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Bengaluru-based construction, turnkey interiors, and exterior engineering company creating spaces that are thoughtfully designed, professionally executed, and built to endure.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-bold tracking-widest text-brand-copper uppercase mb-1.5">
                Direct Line & WhatsApp
              </span>
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="block text-xl font-bold tracking-tight text-white hover:text-brand-copper transition-colors"
              >
                {companyConfig.phone}
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-400 block mb-3 uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Google Business"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all text-xs font-bold"
                  aria-label="Threads"
                >
                  @
                </a>
                <a
                  href={companyConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Dedicated Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {(item as any).isExternal ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-copper transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-brand-copper font-bold px-1.5 py-0.2 rounded bg-brand-copper/10 border border-brand-copper/30">16 PDFs</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="hover:text-brand-copper transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 8 Services Column */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Our 8 Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <Link to={srv.to} className="hover:text-brand-copper transition-colors">
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bengaluru Office & Quick Action */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Bengaluru Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyConfig.addressFull}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-copper shrink-0" />
                <a href={`tel:${companyConfig.phoneRaw}`} className="hover:text-brand-copper transition-colors">
                  {companyConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-copper shrink-0" />
                <a
                  href={getGmailUrl({ subject: 'Inquiry - Capsule Company' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-copper transition-colors"
                  title="Send email via Gmail"
                >
                  {companyConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-all text-center cursor-pointer shadow-sm"
              >
                REQUEST FREE VISIT
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} CAPSULE COMPANY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-brand-copper font-medium">YOUR SPACE MAKER</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
