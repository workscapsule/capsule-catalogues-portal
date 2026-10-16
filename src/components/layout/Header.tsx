import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callMenuOpen, setCallMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setCallMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT US', to: '/about' },
    { label: 'SERVICES', to: '/services' },
    { label: 'PROCESS', to: '/process' },
    { label: 'GALLERY', to: '/gallery' },
    { label: 'WHY CAPSULE', to: '/why-capsule' },
    { label: 'FAQ', to: '/faq' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? 'glass-panel shadow-sm py-1.5 sm:py-2'
            : 'bg-brand-ivory/95 backdrop-blur-md py-2 sm:py-3 border-b border-brand-border/60'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">

          {/* Brand Logo - Noticeably bigger & responsive while maintaining aspect ratio and balanced header */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper rounded-lg"
            aria-label="Capsule Company Home"
          >
            <div className="h-11 sm:h-13 md:h-16 lg:h-18 xl:h-20 w-auto overflow-hidden rounded-lg bg-white flex items-center justify-center p-1 sm:p-1.5 border border-brand-border/60 hover:border-brand-copper transition-all shadow-xs">
              <img
                src="/assets/logo.jpeg"
                alt="Capsule Company - Your Space Maker Official Logo"
                className="h-full w-auto object-contain max-h-11 sm:max-h-13 md:max-h-16 lg:max-h-18 xl:max-h-20"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[11px] 2xl:text-xs font-bold tracking-widest uppercase transition-all py-1 relative whitespace-nowrap cursor-pointer ${isActive
                    ? 'text-brand-copper font-extrabold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-copper'
                    : 'text-brand-black/85 hover:text-brand-copper after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-copper hover:after:w-full after:transition-all after:duration-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs Desktop (xl and 2xl screens) */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3 text-xs font-semibold text-brand-black border border-brand-border hover:border-brand-copper/50 rounded-full bg-white/80 shadow-2xs">
              <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
              <div className="flex items-center divide-x divide-brand-border text-[10px] xl:text-[11px] 2xl:text-xs font-bold">
                {companyConfig.phones.map((p, idx) => (
                  <a
                    key={p.number}
                    href={`tel:${p.raw}`}
                    className="px-1.5 2xl:px-2 first:pl-0.5 last:pr-0.5 hover:text-brand-copper transition-colors whitespace-nowrap"
                    title={`Call Line ${idx + 1}: ${p.display}`}
                  >
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-3.5 2xl:px-4 py-2 bg-brand-black text-white hover:bg-brand-copper text-[11px] 2xl:text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer whitespace-nowrap inline-flex items-center justify-center"
            >
              FREE CONSULTATION
            </button>
          </div>

          {/* Mobile / Tablet Right Controls */}
          <div className="flex xl:hidden items-center gap-2 relative">
            {/* Quick Call Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCallMenuOpen(!callMenuOpen)}
                className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white border border-brand-border text-brand-black hover:text-brand-copper active:scale-95 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 text-[11px] sm:text-xs font-semibold shadow-2xs"
                aria-label="Call contact numbers"
                title="Call contact numbers"
              >
                <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                <span className="whitespace-nowrap hidden sm:inline">Call Lines</span>
                <span className="whitespace-nowrap sm:hidden">Call</span>
              </button>

              {/* Call Menu Popover */}
              {callMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setCallMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-60 sm:w-64 max-w-[calc(100vw-1.5rem)] bg-white rounded-2xl shadow-xl border border-brand-border p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-copper border-b border-brand-border/60 flex items-center justify-between">
                      <span>Direct Call Lines</span>
                      <span className="text-[9px] font-mono text-brand-muted">3 Lines Available</span>
                    </div>
                    <div className="py-1 space-y-1">
                      {companyConfig.phones.map((p, idx) => (
                        <a
                          key={p.number}
                          href={`tel:${p.raw}`}
                          onClick={() => setCallMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-bold text-brand-black hover:bg-brand-cream/80 hover:text-brand-copper rounded-xl transition-colors whitespace-nowrap"
                        >
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                            <span>{p.display}</span>
                          </div>
                          <span className="text-[10px] font-mono text-brand-copper uppercase px-1.5 py-0.5 bg-brand-copper/10 rounded">L{idx + 1}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-brand-black hover:text-brand-copper hover:bg-brand-cream/60 focus:outline-none focus:ring-2 focus:ring-brand-copper cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-black/65 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-ivory shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div>
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-5">
              <div className="h-10">
                <img
                  src="/assets/logo.jpeg"
                  alt="Capsule Company Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-brand-cream text-brand-black cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links in Drawer */}
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-xl transition-all flex items-center justify-between ${isActive
                      ? 'bg-brand-black text-brand-copper shadow-sm pl-4'
                      : 'text-brand-black hover:text-brand-copper hover:bg-brand-cream/80'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-xs opacity-50">→</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-brand-border space-y-3 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center cursor-pointer inline-flex items-center justify-center"
            >
              GET FREE CONSULTATION
            </button>

            {/* Direct Call Numbers 1, 2, 3 in exact order */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block text-center">
                Direct Call Lines
              </span>
              <div className="flex flex-col gap-1.5">
                {companyConfig.phones.map((p, idx) => (
                  <a
                    key={p.number}
                    href={`tel:${p.raw}`}
                    className="flex items-center justify-between py-2.5 px-3 bg-white border border-brand-border text-xs sm:text-sm font-bold text-brand-black rounded-xl active:scale-95 hover:border-brand-copper hover:text-brand-copper transition-all"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                      <span className="truncate">{p.display}</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-copper uppercase px-1.5 py-0.5 bg-brand-copper/10 rounded shrink-0 ml-2">Line {idx + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#128C7E] rounded-xl active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <p className="text-[11px] text-brand-muted text-center pt-2">
              {companyConfig.addressShort}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
