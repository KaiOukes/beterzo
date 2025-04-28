import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';
const Privacy = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
                Privacy & Veiligheid bij Beterzo
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Bij Beterzo staat jouw privacy altijd op één
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl space-y-16">
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-lg">
                  Slimme automatisering is geweldig – maar alleen als je zeker weet dat je data veilig blijft.
                  Daarom behandelen wij al jouw informatie met maximale zorg en werken wij uitsluitend met veilige, betrouwbare systemen.
                  Jouw documenten, gegevens en input zijn en blijven van jou. Altijd.
                </p>
                <p className="text-lg mt-6">
                  Wij begrijpen hoe belangrijk het is dat vertrouwelijke informatie, zoals lesstof en bedrijfsgegevens, 
                  nooit wordt gebruikt om AI-modellen te trainen of openbaar te maken. Daarom werken wij uitsluitend via 
                  beveiligde API's en met platforms die 100% voldoen aan de AVG/GDPR-standaarden.
                </p>
              </div>

              {/* Data Processing */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Hoe wij jouw gegevens verwerken</h2>
                <p className="text-lg mb-6">
                  Wanneer je via Beterzo een proces automatiseert – bijvoorbeeld lesstof uploadt om automatisch 
                  leerdoelen en samenvattingen te genereren – gebeurt dit via een taalmodel zoals ChatGPT (OpenAI), 
                  Claude (Anthropic) of Gemini (Google).
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Onze rol is puur faciliterend:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Jij levert input aan (bijvoorbeeld een document).</li>
                    <li>Wij sturen deze input via een beveiligde API naar een taalmodel, met een duidelijke opdracht.</li>
                    <li>Het taalmodel genereert het resultaat (bijvoorbeeld een samenvatting).</li>
                    <li>Wij zorgen dat het resultaat automatisch terugkomt in jouw eigen omgeving.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Wat we dus niet doen:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We slaan jouw data niet langer op dan nodig.</li>
                    <li>We gebruiken jouw data nooit om zelf AI-modellen te trainen.</li>
                    <li>We delen jouw data niet met derden.</li>
                  </ul>
                </div>
              </div>

              {/* Safe Approach */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Waarom onze aanpak veilig is</h2>
                <p className="text-lg mb-6">
                  Wij werken uitsluitend via de API's van grote taalmodellen. Dit betekent:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    OpenAI (ChatGPT via API): Data die via de API wordt verzonden, wordt niet gebruikt om modellen te trainen.{' '}
                    <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                      Bekijk OpenAI's API Data Policy
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    Claude (Anthropic): Input die via de API wordt gestuurd, wordt niet opgeslagen of gebruikt voor modeltraining.{' '}
                    <a href="https://www.anthropic.com/legal/data-usage" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                      Bekijk Anthropic's Data Usage Policy
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    Gemini (Google): Ingevoerde data via de Gemini API wordt niet gebruikt om AI-systemen te trainen.{' '}
                    <a href="https://cloud.google.com/vertex-ai/docs/generative-ai/data-governance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                      Bekijk Google Gemini's API Data Policy
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                </ul>
                <p className="text-lg mt-6">
                  Alle communicatie tussen systemen is versleuteld en voldoet aan de hoogste standaarden voor databeveiliging.
                </p>
              </div>

              {/* GDPR Compliance */}
              <div>
                <h2 className="text-2xl font-bold mb-6">We voldoen aan de AVG/GDPR</h2>
                <p className="text-lg mb-6">
                  Alle oplossingen die wij bouwen voldoen aan de Europese Algemene Verordening Gegevensbescherming (AVG/GDPR).
                  Dit betekent onder andere:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Jouw data wordt uitsluitend gebruikt voor het doel waarvoor je het hebt aangeleverd.</li>
                  <li>Je behoudt altijd de controle over jouw gegevens.</li>
                  <li>Wij werken alleen met platforms en infrastructuren die voldoen aan strikte privacy- en beveiligingsregels.</li>
                </ul>
                <p className="text-lg">
                  Wil je meer weten over de AVG/GDPR?{' '}
                  <a href="https://autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/algemene-verordening-gegevensbescherming-avg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                    Lees hier alles over de AVG op de website van de Autoriteit Persoonsgegevens
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>
              </div>

              {/* Partner Privacy Policies */}
              <div>
                
                <ul className="space-y-4">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Privacy;