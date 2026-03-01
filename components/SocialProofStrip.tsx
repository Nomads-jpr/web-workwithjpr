import React from 'react';
import { Globe, Users, Clock, MapPin } from 'lucide-react';

const SocialProofStrip: React.FC = () => {
  const stats = [
    { icon: Globe, value: '5+', label: 'Projekte live' },
    { icon: Users, value: '100%', label: 'Zufriedene Kunden' },
    { icon: Clock, value: '7+', label: 'Jahre Erfahrung' },
    { icon: MapPin, value: 'Berlin', label: 'Lokal & persönlich' },
  ];

  return (
    <section className="py-16 px-4 border-y border-white/5 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 text-center group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
