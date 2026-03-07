import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Nüske',
      company: 'ropeFX — Industriekletterer Berlin',
      logo: '/logos/ropefx.png',
      quote: 'Jan hat genau verstanden, was wir brauchen. Unsere neue Website bringt uns jetzt regelmäßig Anfragen — und sieht dabei professionell aus. Die Zusammenarbeit war unkompliziert und schnell.',
    },
    {
      name: 'Sven Markulla',
      company: 'Muay Thai Subyen e.V.',
      logo: '/logos/muay-thai-subyen.png',
      quote: 'Vorher hatten wir keine richtige Online-Präsenz. Jetzt haben wir eine Website mit Trainingsplan und Mitgliederverwaltung — alles aus einer Hand. Unsere Mitglieder sind begeistert.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-cyan-500/20 absolute top-6 right-6" />
              <p className="text-gray-300 leading-relaxed text-lg mb-6 italic pr-8">
                &bdquo;{t.quote}&ldquo;
              </p>
              <div className="flex items-center gap-4">
                <img src={t.logo} alt={t.company} className="w-14 h-14 object-contain rounded-xl flex-shrink-0" />
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
