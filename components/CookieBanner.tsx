import React, { useState, useEffect } from 'react';

const GA_ID = 'G-0EETZ8V1K4';
const FB_PIXEL_ID = '842051572153086';

function loadGoogleAnalytics() {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

function loadFacebookPixel() {
  if (window.fbq) return;
  const f = window;
  const n = (f.fbq = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod.apply(n, args);
    } else {
      n.queue.push(args);
    }
  }) as FbqFunction;
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [] as unknown[][];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', FB_PIXEL_ID);
  window.fbq('track', 'PageView');
}

interface FbqFunction {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq: FbqFunction;
    _fbq: FbqFunction;
  }
}

function loadTrackingScripts() {
  loadGoogleAnalytics();
  loadFacebookPixel();
}

const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'all') {
      loadTrackingScripts();
    } else if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = (type: 'all' | 'necessary') => {
    localStorage.setItem('cookieConsent', type);
    setShow(false);
    if (type === 'all') {
      loadTrackingScripts();
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          Wir verwenden Cookies und Tracking-Technologien (Google Analytics, Facebook Pixel), um unsere Website zu verbessern und Werbeanzeigen zu optimieren.
          Mehr dazu in unserer{' '}
          <button
            onClick={() => {
              window.history.pushState({}, '', '/privacy');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
          >
            Datenschutzerklärung
          </button>.
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
