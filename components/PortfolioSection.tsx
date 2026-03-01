import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: 'Physiotherapie Praxis Stefan Datt',
      type: 'Gesundheitswesen',
      desc: 'Kompletter Webauftritt für eine Physiotherapie-Praxis in Berlin-Charlottenburg. Modernes Design, Behandlungsübersicht, Team-Vorstellung, Galerie und Online-Terminanfrage.',
      tags: ['Website', 'Terminanfrage', 'Responsive Design', 'SEO'],
      url: 'https://praxis-stefan-datt.vercel.app',
      color: 'from-teal-500/20 to-emerald-500/20',
      result: 'Professioneller Auftritt mit echten Praxis-Fotos und allen Behandlungen auf einen Blick'
    },
    {
      title: 'ropeFX — Industriekletterer Berlin',
      type: 'Handwerk & Dienstleistung',
      desc: 'Website für ein FISAT-zertifiziertes Höhenarbeitsunternehmen. Klare Darstellung aller Services, von Fassadenreinigung bis Drohneninspektion.',
      tags: ['Website', 'SEO', 'Schema.org', 'Lead Generation'],
      url: 'https://ropefx.vercel.app',
      color: 'from-orange-500/20 to-yellow-500/20',
      result: 'Professionelle Positionierung mit klaren Services und Kontaktmöglichkeiten'
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  const p = projects[current];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsere Arbeit spricht für sich</h2>
          <p className="text-gray-400 text-lg">Echte Projekte für echte Unternehmen in Berlin.</p>
        </div>

        <div className="relative">
          <div className={`p-8 md:p-12 rounded-2xl bg-gradient-to-br ${p.color} border border-white/10 backdrop-blur-sm`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">{p.type}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <p className="text-emerald-400 text-sm font-medium">✓ {p.result}</p>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Live ansehen <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
                <iframe
                  src={p.url}
                  title={p.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-zinc-800/60 border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-zinc-800">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${idx === current ? 'bg-cyan-400 w-8' : 'bg-zinc-600 hover:bg-zinc-500'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-zinc-800/60 border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-zinc-800">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
