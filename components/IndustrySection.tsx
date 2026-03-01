import React from 'react';
import { UtensilsCrossed, Stethoscope, Scissors, Wrench, ShoppingBag, Users } from 'lucide-react';

const IndustrySection: React.FC = () => {
  const industries = [
    { icon: UtensilsCrossed, name: 'Gastronomie', example: 'Speisekarte online, Tischreservierung, Google Maps' },
    { icon: Stethoscope, name: 'Ärzte & Praxen', example: 'Terminbuchung, Behandlungsübersicht, Team-Seite' },
    { icon: Scissors, name: 'Beauty & Friseur', example: 'Online-Buchung, Preisliste, Galerie' },
    { icon: Wrench, name: 'Handwerker', example: 'Leistungsübersicht, Kontaktformular, Referenzen' },
    { icon: ShoppingBag, name: 'Einzelhandel', example: 'Online-Shop, Produktkatalog, Filialfinder' },
    { icon: Users, name: 'Coaches & Berater', example: 'Buchungs-System, Blog, Kundenstimmen' }
  ];

  return (
    <section className="py-20 px-4 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Branchen</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen ist das?</h2>
          <p className="text-gray-400 text-lg">Egal welche Branche — wir kennen die Anforderungen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <ind.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
