import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Was kostet eine Website?',
      a: 'Das hängt vom Umfang ab. Eine einfache One-Page Website beginnt ab 1.500€, eine mehrseitige Website mit Buchungssystem ab 3.000€. Im kostenlosen Erstgespräch erstellen wir dir ein individuelles Angebot — transparent, ohne versteckte Kosten.'
    },
    {
      q: 'Wie lange dauert es, bis meine Website fertig ist?',
      a: 'Eine einfache Website ist in wenigen Tagen fertig. Komplexere Projekte mit Shop oder individuellen Funktionen dauern 1–2 Wochen. Kein monatelanges Warten — wir setzen schnell um.'
    },
    {
      q: 'Brauche ich technisches Wissen?',
      a: 'Nein, überhaupt nicht. Wir kümmern uns um alles Technische. Nach dem Launch zeigen wir dir in einer Einführung, wie du einfache Änderungen selbst vornehmen kannst — falls gewünscht.'
    },
    {
      q: 'Was passiert nach dem Launch?',
      a: 'Wir lassen dich nicht im Stich. Je nach Paket bekommst du laufenden Support, Hosting und regelmäßige Updates. Wenn du etwas ändern oder erweitern möchtest, sind wir für dich da.'
    },
    {
      q: 'Könnt ihr auch bestehende Websites überarbeiten?',
      a: 'Ja, definitiv. Ob Redesign, Performance-Optimierung oder neue Funktionen — wir schauen uns an, was du hast, und machen daraus etwas Modernes.'
    },
    {
      q: 'Nutzt ihr WordPress?',
      a: 'Nein. Wir nutzen modernere Technik — das bedeutet: schnellere Ladezeiten, bessere Platzierung bei Google und keine Probleme durch veraltete Plugins.'
    },
    {
      q: 'Arbeitet ihr nur mit Unternehmen in Berlin?',
      a: 'Wir sind in Berlin ansässig und spezialisiert auf lokale Unternehmen. Aber wir arbeiten auch remote — der Standort spielt für digitale Projekte keine Rolle.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-zinc-800/40 border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
