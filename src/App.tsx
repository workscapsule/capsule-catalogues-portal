import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Preloader } from './components/common/Preloader';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/interactive/WhatsAppButton';
import { Chatbot } from './components/interactive/Chatbot';
import { ProjectModal } from './components/interactive/ProjectModal';
import { EnquiryModal } from './components/interactive/EnquiryModal';
import { ProjectItem, EnquirySource } from './types';

// Dedicated Pages
import { CataloguePortalPage } from './pages/CataloguePortalPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyCapsulePage } from './pages/WhyCapsulePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { WallPanelsCataloguePage } from './pages/WallPanelsCataloguePage';

const AppContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState<EnquirySource>('Free Consultation');
  const location = useLocation();

  const isCataloguePortal =
    location.pathname === '/' ||
    location.pathname === '/catalogues' ||
    location.pathname === '/portal';

  const handleOpenConsultation = (arg?: unknown) => {
    let source: EnquirySource = 'Free Consultation';
    if (typeof arg === 'string') {
      if (arg === 'Book Free Consultation' || arg === 'Free Consultation' || arg === 'Get Free Estimate') {
        source = arg;
      } else if (arg.toLowerCase().includes('estimate')) {
        source = 'Get Free Estimate';
      } else if (arg.toLowerCase().includes('book')) {
        source = 'Book Free Consultation';
      }
    } else if (arg && typeof arg === 'object') {
      const obj = arg as Record<string, any>;
      const text = `${obj.subject || ''} ${obj.source || ''}`.toLowerCase();
      if (text.includes('estimate')) {
        source = 'Get Free Estimate';
      } else if (text.includes('book')) {
        source = 'Book Free Consultation';
      }
    }
    setEnquirySource(source);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-brand-ivory text-brand-black relative selection:bg-brand-copper selection:text-white overflow-x-clip">
      {/* Scroll To Top on Route Changes */}
      <ScrollToTop />

      {/* 1. Architectural Preloader Reveal (only on corporate pages) */}
      {!isCataloguePortal && <Preloader />}

      {/* 2. Tactile Film Grain Texture Overlay */}
      <NoiseOverlay />

      {/* 3. Sticky Glassmorphism Header (only on corporate pages) */}
      {!isCataloguePortal && (
        <Header onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />
      )}

      {/* Main Content Area Routing */}
      <main className="flex-1 w-full">
        <Routes>
          {/* ROOT / displays the 17-catalogue portal */}
          <Route path="/" element={<CataloguePortalPage />} />
          <Route path="/catalogues" element={<CataloguePortalPage />} />
          <Route path="/portal" element={<CataloguePortalPage />} />

          {/* Corporate / Main Website available under /corporate, /website, /company */}
          <Route
            path="/corporate"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onSelectProject={(p) => setSelectedProject(p)}
              />
            }
          />
          <Route
            path="/website"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onSelectProject={(p) => setSelectedProject(p)}
              />
            }
          />
          <Route
            path="/company"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onSelectProject={(p) => setSelectedProject(p)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route
            path="/process"
            element={<ProcessPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onSelectProject={(p) => setSelectedProject(p)}
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          <Route
            path="/gallery"
            element={<GalleryPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route
            path="/why-capsule"
            element={<WhyCapsulePage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/contact"
            element={<ContactPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route path="/wall-panels-catalogue" element={<WallPanelsCataloguePage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer with Routing Links (only on corporate pages) */}
      {!isCataloguePortal && (
        <Footer onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />
      )}

      {/* Floating Interactive Utilities (only on corporate pages) */}
      {!isCataloguePortal && <WhatsAppButton />}
      {!isCataloguePortal && (
        <Chatbot onOpenConsultationModal={() => handleOpenConsultation('Book Free Consultation')} />
      )}

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultation={() => {
          setSelectedProject(null);
          handleOpenConsultation('Book Free Consultation');
        }}
      />

      {/* Unified 6-Field Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialSource={enquirySource}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
