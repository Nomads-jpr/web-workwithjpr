import React from 'react';
import { AlertTriangle, Frown, Search, PhoneOff, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Frown,
      text: 'Deine Website sieht veraltet aus — und deine Kunden merken das.'
    },
    {
      icon: Search,
      text: 'Potenzielle Kunden suchen auf Google — aber finden deine Konkurrenz.'
    },
    {
      icon: PhoneOff,
      text: 'Du verlierst Anfragen, weil man bei dir nicht online buchen kann.'
    },
    {
      icon: TrendingDown,
      text: 'Dein Wettbewerb hat eine professionellere Online-Präsenz als du.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Kennst du das?</h2>
          <p className="text-gray-400 text-lg">Viele lokale Unternehmen verlieren Kunden — ohne es zu merken.</p>
        </div>

        <div className="space-y-4 mb-10">
          {problems.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-zinc-800/40 border border-white/5 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-amber-200 text-sm leading-relaxed">
            <span className="font-bold">Fakt:</span> 75% aller Kunden googeln, bevor sie zum Arzt, Friseur oder Restaurant gehen. Wer online nicht überzeugt, verliert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
