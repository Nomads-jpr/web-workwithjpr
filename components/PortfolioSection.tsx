import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Muay Thai Subyen e.V.',
      type: 'Sport & Verein',
      desc: 'Berlins einziges durch die Thailand Sports Authority zertifiziertes Muay Thai Gym. Dark-Theme mit Neon-Akzenten, Trainingsplan und Mitgliederverwaltung.',
      tags: ['Website', 'Backend-System', 'Mitgliederverwaltung'],
      url: 'https://muay-thai-subyen.vercel.app',
      image: '/portfolio/muay-thai-subyen.png',
      result: 'Komplette Online-Präsenz mit Trainingszeiten, Mitglieder-Backend und Kontaktformular',
    },
    {
      title: 'ropeFX — Industriekletterer Berlin',
      type: 'Handwerk & Dienstleistung',
      desc: 'FISAT-zertifiziertes Höhenarbeitsunternehmen. Klare Darstellung aller Services, von Fassadenreinigung bis Drohneninspektion.',
      tags: ['Website', 'SEO', 'Google-Optimierung', 'Lead Generation'],
      url: 'https://ropefx.vercel.app',
      image: '/portfolio/ropefx.png',
      result: 'Professionelle Positionierung mit klaren Services und direkter Kontaktaufnahme',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Echte Projekte, echte Ergebnisse</h2>
          <p className="text-gray-400 text-lg">Websites, die wir für Unternehmen in Berlin gebaut haben.</p>
        </div>

        <div className="space-y-12">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Screenshot */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block overflow-hidden bg-zinc-800 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                      Live ansehen <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-semibold mb-4">
                    {p.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-5">
                    <p className="text-emerald-400 text-sm">&#10003; {p.result}</p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors self-start"
                  >
                    Live ansehen <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
