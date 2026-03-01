import React from 'react';
import { Globe, CalendarCheck, Database, ShoppingCart } from 'lucide-react';

interface Props {
  scrollToForm: () => void;
}

const ServicesSection: React.FC<Props> = ({ scrollToForm }) => {
  const services = [
    {
      icon: Globe,
      title: 'Moderne Website',
      subtitle: 'Dein digitales Schaufenster',
      desc: 'Ein professioneller Online-Auftritt, der Vertrauen schafft und Besucher zu Kunden macht. Mobil optimiert, schnell und modern.',
      features: ['Responsive Design für alle Geräte', 'Suchmaschinenoptimiert (SEO)', 'Du kannst Inhalte selbst ändern']
    },
    {
      icon: CalendarCheck,
      title: 'Online-Terminbuchung',
      subtitle: '24/7 Buchungen ohne Telefonieren',
      desc: 'Deine Kunden buchen direkt online — Tag und Nacht. Keine verpassten Anrufe mehr, keine verlorenen Anfragen.',
      features: ['Automatische Bestätigungen', 'Kalender-Synchronisation', 'Erinnerungen per E-Mail/SMS']
    },
    {
      icon: Database,
      title: 'Digitale Geschäftstools',
      subtitle: 'Kundenverwaltung, die für dich arbeitet',
      desc: 'Von der Kundendatenbank bis zur Rechnungserstellung — alles in einem System, das dir den Alltag erleichtert.',
      features: ['Alle Kundendaten an einem Ort', 'Automatisierte Abläufe', 'Übersichtliche Auswertungen']
    },
    {
      icon: ShoppingCart,
      title: 'Online-Shop',
      subtitle: 'Verkaufe deine Produkte online',
      desc: 'Ein eigener Online-Shop, der einfach zu bedienen ist. Sichere Bezahlung, Versandanbindung, mobil optimiert.',
      features: ['Sichere Zahlungsabwicklung', 'Bestandsverwaltung', 'Mobil optimiertes Einkaufserlebnis']
    }
  ];

  return (
    <section className="py-20 px-4 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Unsere Leistungen</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Was wir für dich bauen</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Kein Tech-Jargon — nur Lösungen, die dein Geschäft weiterbringen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-zinc-800/40 backdrop-blur-sm border border-white/5 hover:border-cyan-500/50 hover:bg-zinc-800/60 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <s.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">{s.subtitle}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={scrollToForm} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            Welche Lösung passt zu dir? Finde es heraus →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
