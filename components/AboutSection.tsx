import React from 'react';
import { Linkedin } from 'lucide-react';

interface Props {
  openCalendly: () => void;
}

const AboutSection: React.FC<Props> = ({ openCalendly }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                <img src="/jan-rojek.jpg" alt="Jan Rojek" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-bold shadow-lg">
                Berlin 📍
              </div>
            </div>
          </div>

          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Über mich</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, ich bin Jan.</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Seit über 7 Jahren baue ich digitale Produkte — von Websites für lokale Unternehmen bis zu Automatisierungssystemen für internationale Firmen.
              </p>
              <p>
                Was mich antreibt: Wenn ein Handwerker plötzlich über seine Website Anfragen bekommt. Oder eine Praxis ihre Terminbuchung online hat und das Telefon nicht mehr ständig klingelt.
              </p>
              <p className="text-white font-medium">
                Ich spreche deine Sprache — nicht die von Entwicklern. Du sagst mir, was dein Business braucht, und ich baue es.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <button
                onClick={openCalendly}
                className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.5)] animate-gradient-shift bg-[length:200%_200%]"
                style={{ backgroundImage: 'linear-gradient(135deg, #06b6d4, #10b981, #06b6d4)' }}
              >
                Lass uns reden
              </button>
              <a href="https://www.linkedin.com/in/jan-rojek-b31474a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
