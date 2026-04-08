import React from 'react';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'Muay Thai Subyen e.V.', url: 'https://www.muaythai-subyen.de' },
    { name: 'ropeFX Berlin', url: 'https://ropefx.com' },
  ];

  return (
    <section className="py-10 px-4 border-y border-white/5">
      <div className="container mx-auto max-w-4xl">
        <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-6">Projekte für</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-sm md:text-base font-semibold tracking-wide transition-colors duration-300"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
