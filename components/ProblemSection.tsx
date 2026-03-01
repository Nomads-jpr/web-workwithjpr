import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      emoji: '😬',
      text: 'Deine Website sieht aus wie 2015 — und deine Kunden merken das.'
    },
    {
      emoji: '🔍',
      text: 'Potenzielle Kunden suchen auf Google — aber finden deine Konkurrenz.'
    },
    {
      emoji: '📞',
      text: 'Du verlierst Anfragen, weil man bei dir nicht online buchen kann.'
    },
    {
      emoji: '💸',
      text: 'Dein Wettbewerb hat eine professionellere Online-Präsenz als du.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kennst du das?</h2>
          <p className="text-gray-400 text-lg">Die meisten lokalen Unternehmen verlieren täglich Kunden — ohne es zu merken.</p>
        </div>

        <div className="space-y-4 mb-10">
          {problems.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-zinc-800/40 border border-white/5 hover:border-red-500/30 transition-colors">
              <span className="text-2xl flex-shrink-0">{p.emoji}</span>
              <p className="text-gray-300 text-lg leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm leading-relaxed">
            <span className="font-bold">Die Realität:</span> 75% aller Kunden googeln erst, bevor sie zum Arzt, Friseur oder Restaurant gehen. Wer online nicht überzeugt, verliert — jeden Tag.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
