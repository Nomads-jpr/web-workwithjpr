import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const Privacy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="container mx-auto max-w-3xl">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </button>

        <h1 className="text-4xl font-bold mb-10">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. Verantwortliche Stelle</h2>
            <p>JPR Consulting GmbH<br />Letteallee 91<br />13409 Berlin<br />E-Mail: info@workwithjpr.com</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Hosting</h2>
            <p>Diese Website wird bei Vercel Inc. gehostet. Details zum Datenschutz von Vercel finden Sie unter: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">vercel.com/legal/privacy-policy</a></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns hierzu unter info@workwithjpr.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">6. Google Fonts</h2>
            <p>Diese Seite nutzt Google Fonts. Die Google Fonts werden lokal eingebunden, es findet keine Verbindung zu Google-Servern statt.</p>
          </div>

          <p className="text-sm text-gray-600 pt-8">Stand: März 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
