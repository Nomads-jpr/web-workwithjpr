import React from 'react';
import { X, CheckCircle, Phone, Mail } from 'lucide-react';
import { FormData, QualificationScore } from '../types';

interface Props {
  score: QualificationScore;
  formData?: FormData;
  onClose: () => void;
}

const ResultsOverlay: React.FC<Props> = ({ score, onClose }) => {
  const getMessage = () => {
    if (score.total >= 70) return {
      title: 'Perfekt! Dein Projekt hat großes Potenzial.',
      desc: 'Wir melden uns innerhalb von 24 Stunden bei dir, um ein kostenloses Erstgespräch zu vereinbaren.',
      color: 'text-emerald-400'
    };
    if (score.total >= 40) return {
      title: 'Super! Lass uns über dein Projekt sprechen.',
      desc: 'Wir haben deine Anfrage erhalten und melden uns in den nächsten 1–2 Tagen bei dir.',
      color: 'text-cyan-400'
    };
    return {
      title: 'Danke für dein Interesse!',
      desc: 'Wir schauen uns deine Anfrage an und melden uns mit Ideen bei dir.',
      color: 'text-gray-400'
    };
  };

  const msg = getMessage();

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-white/10 rounded-2xl max-w-md w-full p-10 text-center relative animate-slide-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <CheckCircle className={`w-16 h-16 mx-auto mb-6 ${msg.color}`} />
        <h2 className="text-2xl font-bold mb-4">{msg.title}</h2>
        <p className="text-gray-400 leading-relaxed mb-8">{msg.desc}</p>

        <div className="space-y-4">
          <a href="tel:+4930" className="flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition-all">
            <Phone className="w-4 h-4" /> Direkt anrufen
          </a>
          <a href="mailto:info@workwithjpr.com" className="flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-zinc-800 border border-white/10 text-white font-semibold hover:bg-zinc-700 transition-all">
            <Mail className="w-4 h-4" /> E-Mail schreiben
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverlay;
