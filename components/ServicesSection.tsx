import React from 'react';
import { Globe, CalendarCheck, Database, ShoppingCart } from 'lucide-react';

interface Props {
  openCalendly: () => void;
}

const ServicesSection: React.FC<Props> = ({ openCalendly }) => {
  const services = [
    {
      icon: Globe,
      title: 'Moderne Website',
      subtitle: 'Dein digitales Schaufenster',
      desc: 'Ein professioneller Online-Auftritt, der Vertrauen schafft und Besucher zu Kunden macht. Mobil optimiert, schnell und modern.',
      features: ['Perfekt auf Handy, Tablet und Desktop', 'Wird bei Google gefunden', 'Du kannst Inhalte selbst ändern']
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
      features: ['Sichere Zahlungsabwicklung', 'Bestandsverwaltung', 'Einfacher Bestellprozess']
    }
  ];

  return (
    <section className="py-20 px-4 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Unsere Leistungen</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Was wir für dich bauen</h2>
          <p className="text-gray-400 text-lg max-w-[50ch]">Lösungen, die dein Geschäft weiterbringen.</p>
        </div>

        <div className="space-y-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-8 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group ${
                idx % 2 === 1 ? 'md:grid-cols-[2fr_1fr]' : ''
              }`}
            >
              {/* Icon + Title block */}
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <s.icon className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight mb-1">{s.title}</h3>
                <p className="text-cyan-400 text-sm font-medium">{s.subtitle}</p>
              </div>

              {/* Description + Features block */}
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-[55ch]">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button onClick={openCalendly} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            Lass uns herausfinden, was du brauchst →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
