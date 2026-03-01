import React from 'react';
import { Smartphone, Shield, MapPin, HeartHandshake } from 'lucide-react';

const TrustSignals: React.FC = () => {
  const signals = [
    { icon: Smartphone, text: 'Mobil optimiert', subtitle: 'Perfekt auf jedem Gerät' },
    { icon: Shield, text: 'DSGVO-konform', subtitle: 'Datenschutz garantiert' },
    { icon: MapPin, text: 'Berlin-basiert', subtitle: 'Lokaler Ansprechpartner' },
    { icon: HeartHandshake, text: 'Kostenlose Beratung', subtitle: '30 Min. Erstgespräch' }
  ];

  return (
    <section className="py-20 px-4 border-t border-white/5">
      <div className="container mx-auto max-w-6xl text-center">
        <h3 className="text-xl text-gray-400 font-medium mb-12 uppercase tracking-widest">Warum mit uns arbeiten?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 text-gray-300">
              <s.icon className="w-8 h-8 text-cyan-400" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">{s.text}</div>
                <div className="text-sm text-gray-500">{s.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
