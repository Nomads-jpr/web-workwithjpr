import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import MultiStepForm from './components/MultiStepForm';
import ResultsOverlay from './components/ResultsOverlay';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicesSection from './components/ServicesSection';
import ProblemSection from './components/ProblemSection';
import IndustrySection from './components/IndustrySection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import FAQSection from './components/FAQSection';
import SocialProofStrip from './components/SocialProofStrip';
import TrustSignals from './components/TrustSignals';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import CookieBanner from './components/CookieBanner';
import { FormData, QualificationScore } from './types';

type ViewState = 'HOME' | 'IMPRINT' | 'PRIVACY';

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState<QualificationScore | null>(null);
  const [finalFormData, setFinalFormData] = useState<FormData | null>(null);
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

  const handleFormComplete = async (data: FormData, score: QualificationScore) => {
    setFinalScore(score);
    setFinalFormData(data);
    setShowResults(true);

    try {
      const payload = {
        formData: data,
        qualificationScore: score,
        timestamp: new Date().toISOString(),
        source: 'web-workwithjpr',
        metadata: {
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          language: navigator.language
        }
      };

      await fetch('https://n8n.workwithjpr.com/webhook/web-workwithjpr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Webhook submission error:', error);
    }
  };

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
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex justify-center mb-16 animate-fade-in">
              <img
                src="/JPR1.png"
                alt="JPR Consulting"
                className="w-40 h-40 md:w-56 md:h-56 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] animate-pulse"
                style={{ animationDuration: '3s' }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Dein Geschäft verdient einen<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Webauftritt, der Kunden bringt
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Moderne Websites, Online-Buchungen und digitale Tools — <span className="text-white font-semibold">damit dein Business online wächst</span>. Kein Tech-Jargon. Nur Ergebnisse.
            </p>

            <div className="mb-5">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 animate-slide-up hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                style={{ animationDelay: '0.3s' }}
              >
                Kostenloses Erstgespräch buchen
              </button>
            </div>

            <div className="px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm font-semibold animate-fade-in inline-block" style={{ animationDelay: '0.4s' }}>
              Nur 2–3 Projekte pro Monat
            </div>
          </div>
        </header>

        <SocialProofStrip />
        <ProblemSection />
        <ServicesSection scrollToForm={scrollToForm} />
        <PortfolioSection />
        <IndustrySection />
        <HowItWorksSection />
        <AboutSection scrollToForm={scrollToForm} />
        <PricingSection scrollToForm={scrollToForm} />

        {/* Form Section */}
        <section id="consultation-form" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Bereit für deinen neuen Webauftritt?</h2>
              <p className="text-xl text-gray-400">In 2 Minuten herausfinden, was dein Business braucht.</p>
            </div>
            <MultiStepForm onComplete={handleFormComplete} />
          </div>
        </section>

        <TrustSignals />
        <FAQSection />

        {/* Footer */}
        <footer className="py-20 px-4 bg-black border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center mb-12">
              <img src="/JPR1.png" alt="JPR Consulting" className="w-32 h-32 md:w-40 md:h-40 opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
              <button onClick={() => navigate('IMPRINT')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Impressum</button>
              <button onClick={() => navigate('PRIVACY')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Datenschutz</button>
              <a href="mailto:info@workwithjpr.com" className="text-gray-400 hover:text-white transition-colors">Kontakt</a>
              <a href="https://ai.workwithjpr.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">KI-Automatisierung</a>
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
              Jetzt Projekt besprechen →
            </button>
          </div>
        </div>
      )}

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white shadow-lg hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-110 animate-fade-in" aria-label="Nach oben">
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {showResults && finalScore && (
        <ResultsOverlay score={finalScore} formData={finalFormData || undefined} onClose={() => setShowResults(false)} />
      )}

      <CookieBanner onAcceptAll={() => {}} onAcceptNecessary={() => {}} />
    </div>
  );
};

export default App;
