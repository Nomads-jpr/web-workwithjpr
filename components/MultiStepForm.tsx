import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const canSubmit = formData.name.trim() !== '' && formData.email.trim() !== '' && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSending(true);

    // Send via mailto as a fallback-safe approach
    const subject = encodeURIComponent(`Neue Anfrage von ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone || 'Nicht angegeben'}\n\nNachricht:\n${formData.message || 'Keine Nachricht angegeben.'}`
    );

    window.location.href = `mailto:info@workwithjpr.com?subject=${subject}&body=${body}`;

    // Show success after a brief delay
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-12 animate-slide-up">
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
        <h3 className="text-2xl font-bold mb-3">Danke für deine Nachricht!</h3>
        <p className="text-gray-400 leading-relaxed mb-8">
          Dein E-Mail-Programm sollte sich geöffnet haben. Falls nicht, schreib uns direkt an{' '}
          <a href="mailto:info@workwithjpr.com" className="text-cyan-400 hover:underline">info@workwithjpr.com</a>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
          className="text-gray-500 hover:text-white transition-colors text-sm"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-500 mb-1.5">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="Dein Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1.5">E-Mail *</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="deine@email.de"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-1.5">Telefon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors"
            placeholder="030 ..."
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-1.5">Nachricht</label>
          <textarea
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
            placeholder="Beschreib kurz dein Projekt — z.B. 'Brauche eine Website für meine Praxis'"
          />
        </div>

        {/* DSGVO Consent */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-zinc-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
            Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{' '}
            <a href="/privacy" className="text-cyan-400/60 hover:text-cyan-400">Datenschutzerklärung</a>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!canSubmit || sending}
        className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
          canSubmit && !sending
            ? 'bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-[1.02] shadow-[0_0_30px_rgba(6,182,212,0.4)]'
            : 'bg-zinc-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        {sending ? 'Wird gesendet...' : 'Kostenlos anfragen'} <Send className="w-5 h-5" />
      </button>

      <p className="text-center text-gray-600 text-xs mt-4">
        Oder direkt per E-Mail: <a href="mailto:info@workwithjpr.com" className="text-cyan-400/60 hover:text-cyan-400">info@workwithjpr.com</a>
      </p>
    </form>
  );
};

export default ContactForm;
