import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Nüske',
      company: 'ropeFX — Industriekletterer Berlin',
      logo: '/logos/ropefx.png',
      quote: 'Die Website stand innerhalb weniger Tage. Seitdem bekommen wir regelmäßig Anfragen darüber — und sie sieht richtig professionell aus. Unkompliziert und auf den Punkt.',
    },
    {
      name: 'Sven Markulla',
      company: 'Muay Thai Subyen e.V.',
      logo: '/logos/muay-thai-subyen.png',
      quote: 'Innerhalb einer Woche hatten wir eine komplette Website mit Trainingsplan, Mitgliederverwaltung und Online-Vertragsabschluss. Das hätte ich so schnell nicht erwartet.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Das sagen unsere Kunden</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-cyan-500/20 absolute top-6 right-6" />
              <p className="text-gray-300 leading-relaxed text-lg italic pr-8 flex-1">
                &bdquo;{t.quote}&ldquo;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <img src={t.logo} alt={t.company} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
