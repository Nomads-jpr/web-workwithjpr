import React, { useState } from 'react';
import { UtensilsCrossed, Stethoscope, Scissors, Wrench, ShoppingBag, Users, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { FormData, QualificationScore, Step } from '../types';

interface Props {
  onComplete: (data: FormData, score: QualificationScore) => void;
}

const MultiStepForm: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    needs: [],
    budget: '',
    timeline: '',
    name: '',
    businessName: '',
    email: '',
    phone: '',
    bookingPreference: 'callback'
  });

  const businessTypes = [
    { id: 'gastro', label: 'Gastronomie', icon: UtensilsCrossed },
    { id: 'health', label: 'Gesundheit', icon: Stethoscope },
    { id: 'beauty', label: 'Beauty & Friseur', icon: Scissors },
    { id: 'craft', label: 'Handwerk', icon: Wrench },
    { id: 'retail', label: 'Einzelhandel', icon: ShoppingBag },
    { id: 'consulting', label: 'Beratung & Coaching', icon: Users },
  ];

  const needs = [
    { id: 'website', label: 'Neue Website / Redesign' },
    { id: 'booking', label: 'Online-Terminbuchung' },
    { id: 'shop', label: 'Online-Shop' },
    { id: 'crm', label: 'Kundenverwaltung / CRM' },
    { id: 'seo', label: 'Besser auf Google gefunden werden' },
    { id: 'other', label: 'Sonstiges' },
  ];

  const budgets = [
    { id: '1500-3000', label: '1.500 – 3.000 €' },
    { id: '3000-5000', label: '3.000 – 5.000 €' },
    { id: '5000+', label: '5.000 € +' },
    { id: 'unsure', label: 'Weiß noch nicht' },
  ];

  const timelines = [
    { id: 'asap', label: 'So schnell wie möglich' },
    { id: '1-3months', label: 'In 1–3 Monaten' },
    { id: '3-6months', label: 'In 3–6 Monaten' },
    { id: 'info', label: 'Erstmal nur informieren' },
  ];

  const toggleNeed = (id: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(id)
        ? prev.needs.filter(n => n !== id)
        : [...prev.needs, id]
    }));
  };

  const calculateScore = (): QualificationScore => {
    let budgetScore = 0;
    if (formData.budget === '5000+') budgetScore = 40;
    else if (formData.budget === '3000-5000') budgetScore = 30;
    else if (formData.budget === '1500-3000') budgetScore = 20;
    else budgetScore = 10;

    let needsScore = Math.min(formData.needs.length * 10, 30);

    let timelineScore = 0;
    if (formData.timeline === 'asap') timelineScore = 30;
    else if (formData.timeline === '1-3months') timelineScore = 20;
    else if (formData.timeline === '3-6months') timelineScore = 10;
    else timelineScore = 5;

    return {
      total: budgetScore + needsScore + timelineScore,
      breakdown: { budgetScore, needsScore, timelineScore }
    };
  };

  const handleSubmit = () => {
    const score = calculateScore();
    onComplete(formData, score);
  };

  const canProceed = () => {
    if (step === 1) return formData.businessType !== '';
    if (step === 2) return formData.needs.length > 0 && formData.budget !== '' && formData.timeline !== '';
    if (step === 3) return formData.name !== '' && formData.email !== '';
    return false;
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex-1 h-1.5 rounded-full overflow-hidden bg-zinc-800">
            <div className={`h-full rounded-full transition-all duration-500 ${s <= step ? 'bg-cyan-500 w-full' : 'w-0'}`} />
          </div>
        ))}
      </div>

      {/* Step 1: Business Type */}
      {step === 1 && (
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold mb-2">In welcher Branche bist du?</h3>
          <p className="text-gray-500 mb-8">Damit wir dir die beste Lösung empfehlen können.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {businessTypes.map(bt => (
              <button
                key={bt.id}
                onClick={() => setFormData(prev => ({ ...prev, businessType: bt.id }))}
                className={`p-5 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                  formData.businessType === bt.id
                    ? 'border-cyan-500 bg-cyan-500/10 text-white'
                    : 'border-white/10 bg-zinc-800/40 text-gray-400 hover:border-white/20'
                }`}
              >
                <bt.icon className={`w-8 h-8 mx-auto mb-3 ${formData.businessType === bt.id ? 'text-cyan-400' : 'text-gray-600'}`} />
                <span className="text-sm font-medium">{bt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Needs + Budget + Timeline */}
      {step === 2 && (
        <div className="animate-slide-up space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Was brauchst du?</h3>
            <p className="text-gray-500 mb-6">Mehrfachauswahl möglich.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needs.map(n => (
                <button
                  key={n.id}
                  onClick={() => toggleNeed(n.id)}
                  className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                    formData.needs.includes(n.id)
                      ? 'border-cyan-500 bg-cyan-500/10 text-white'
                      : 'border-white/10 bg-zinc-800/40 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {formData.needs.includes(n.id) ? '✓ ' : ''}{n.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Budget (ungefähr)</h4>
            <div className="grid grid-cols-2 gap-3">
              {budgets.map(b => (
                <button
                  key={b.id}
                  onClick={() => setFormData(prev => ({ ...prev, budget: b.id }))}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    formData.budget === b.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-white'
                      : 'border-white/10 bg-zinc-800/40 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Wann soll es losgehen?</h4>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map(t => (
                <button
                  key={t.id}
                  onClick={() => setFormData(prev => ({ ...prev, timeline: t.id }))}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    formData.timeline === t.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-white'
                      : 'border-white/10 bg-zinc-800/40 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold mb-2">Fast geschafft!</h3>
          <p className="text-gray-500 mb-8">Wie können wir dich erreichen?</p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Firmenname</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Dein Unternehmen"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">E-Mail *</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="deine@email.de"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Telefon</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="030 ..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-10">
        {step > 1 ? (
          <button onClick={() => setStep((step - 1) as Step)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Zurück
          </button>
        ) : <div />}

        {step < 3 ? (
          <button
            onClick={() => setStep((step + 1) as Step)}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              canProceed()
                ? 'bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Weiter <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              canProceed()
                ? 'bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Absenden <Send className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
