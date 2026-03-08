import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Kostenloses Erstgespräch',
      desc: 'Wir besprechen dein Geschäft, deine Ziele und was du brauchst. 30 Minuten, unverbindlich.'
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Kostenloser Entwurf',
      desc: "Du bekommst einen ersten Entwurf deiner Website — komplett kostenlos und unverbindlich. Erst wenn du zufrieden bist, geht's weiter."
    },
    {
      icon: Rocket,
      step: '03',
      title: 'Umsetzung & Launch',
      desc: 'Wir bauen, du gibst Feedback, wir gehen live. Du bekommst eine Einführung und laufenden Support.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Ablauf</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">So funktioniert's</h2>
          <p className="text-gray-400 text-lg">Drei einfache Schritte zum professionellen Webauftritt.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-cyan-500/50 via-cyan-500/20 to-cyan-500/50" />

          {steps.map((s, idx) => (
            <div key={idx} className="relative text-center group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/20 transition-colors relative z-10">
                <s.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-cyan-400/40 text-xs font-mono font-bold mb-2">{s.step}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
