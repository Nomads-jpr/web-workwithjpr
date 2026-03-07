import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import ContactForm from './components/MultiStepForm';
import ClientLogos from './components/ClientLogos';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicesSection from './components/ServicesSection';
import ProblemSection from './components/ProblemSection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import CookieBanner from './components/CookieBanner';

type ViewState = 'HOME' | 'IMPRINT' | 'PRIVACY';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setShowStickyCTA(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/imprint' || path === '/impressum') {
        setCurrentView('IMPRINT');
      } else if (path === '/privacy' || path === '/datenschutz') {
        setCurrentView('PRIVACY');
      } else {
        setCurrentView('HOME');
      }
    };
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const path = currentView === 'IMPRINT' ? '/imprint'
      : currentView === 'PRIVACY' ? '/privacy'
      : '/';
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentView]);

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'IMPRINT') return <Imprint onBack={() => navigate('HOME')} />;
  if (currentView === 'PRIVACY') return <Privacy onBack={() => navigate('HOME')} />;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-emerald-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <header className="min-h-screen flex items-center justify-center px-4 pt-10 pb-20">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="flex justify-center mb-14 animate-fade-in">
              <img
                src="/JPR1.png"
                alt="JPR Consulting"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full hover:scale-105 transition-all duration-500"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Websites, die Kunden bringen
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Moderne Webauftritte für lokale Unternehmen in Berlin.
              <br className="hidden md:block" />
              <span className="text-white font-semibold">Kein Tech-Jargon. Nur Ergebnisse.</span>
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 animate-slide-up hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              style={{ animationDelay: '0.3s' }}
            >
              Kostenloses Erstgespräch buchen
            </button>
          </div>
        </header>

        <ClientLogos />
        <ProblemSection />
        <ServicesSection scrollToForm={scrollToForm} />
        <HowItWorksSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutSection scrollToForm={scrollToForm} />
        <PricingSection scrollToForm={scrollToForm} />

        {/* Consultation Section */}
        <section id="consultation-form" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Bereit loszulegen?</h2>
              <p className="text-xl text-gray-400">Buch direkt einen Termin oder schreib uns deine Projektidee.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Calendly */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center">Direkt einen Termin buchen</h3>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://calendly.com/workwithjpr/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=06b6d4"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Termin buchen"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center">Oder schreib uns deine Projektidee</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* Footer */}
        <footer className="py-20 px-4 bg-black border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center mb-10">
              <img src="/JPR1.png" alt="JPR Consulting" className="w-28 h-28 md:w-36 md:h-36 opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]" />
            </div>

            {/* Site Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">Web Services</span>
              <a href="https://ai.workwithjpr.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold hover:text-white hover:border-white/20 transition-colors">KI-Automatisierung</a>
              <a href="https://game.workwithjpr.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold hover:text-white hover:border-white/20 transition-colors">Gaming UA</a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
              <button onClick={() => navigate('IMPRINT')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Impressum</button>
              <button onClick={() => navigate('PRIVACY')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Datenschutz</button>
              <a href="mailto:info@workwithjpr.com" className="text-gray-400 hover:text-white transition-colors">Kontakt</a>
              <a href="https://www.linkedin.com/in/jan-rojek-b31474a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="border-t border-white/5 mb-8" />
            <div className="text-center space-y-2">
              <p className="text-white font-semibold text-sm">JPR Consulting GmbH</p>
              <p className="text-gray-500 text-xs">Letteallee 91 · 13409 Berlin · Deutschland</p>
              <p className="text-gray-600 text-xs pt-4">© 2026 JPR Consulting GmbH. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl animate-slide-up">
          <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-5">
              <img src="/JPR1.png" alt="JPR" className="w-14 h-14 opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">JPR Consulting</span>
                <span className="text-gray-400 text-xs">Web & Digitale Lösungen</span>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-3">
              <img src="/JPR1.png" alt="JPR" className="w-12 h-12 opacity-90" />
            </div>
            <button onClick={scrollToForm} className="px-5 py-2.5 text-white font-semibold bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.6)] text-sm md:text-base">
              Kostenlos anfragen
            </button>
          </div>
        </div>
      )}

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white shadow-lg hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-110 animate-fade-in" aria-label="Nach oben">
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <CookieBanner onAcceptAll={() => {}} onAcceptNecessary={() => {}} />
    </div>
  );
};

export default App;
