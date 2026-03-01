import React, { useState, useEffect } from 'react';

interface Props {
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
}

const CookieBanner: React.FC<Props> = ({ onAcceptAll, onAcceptNecessary }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const accept = (type: 'all' | 'necessary') => {
    localStorage.setItem('cookieConsent', type);
    setShow(false);
    if (type === 'all') onAcceptAll();
    else onAcceptNecessary();
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          Wir verwenden Cookies, um dir die bestmögliche Erfahrung zu bieten. Mit "Alle akzeptieren" stimmst du der Verwendung aller Cookies zu.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => accept('all')} className="px-5 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-colors">
            Alle akzeptieren
          </button>
          <button onClick={() => accept('necessary')} className="px-5 py-2 bg-zinc-800 text-gray-300 text-sm font-semibold rounded-lg hover:bg-zinc-700 border border-white/10 transition-colors">
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
