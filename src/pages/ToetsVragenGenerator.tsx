
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ToetsVragenGenerator = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kai@beterzo.tech?subject=Offerte aanvraag Toetsvragen";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Toetsvragen... een tikkie beterzo
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Automatisch leerdoelen en toetsvragen genereren op basis van jouw lesstof? 
                Met deze slimme AI-oplossing doe je dat in een paar klikken. Snel, veilig en 
                altijd passend bij jouw niveau en doelgroep.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">
                Wat je krijgt
                <span className="block h-1 w-24 bg-primary mt-2"></span>
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je kiest eenvoudig of het gaat om een e-learning of examen
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Op basis van jouw content worden automatisch leerdoelen én toetsvragen gegenereerd
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Vragen worden direct geformatteerd in een overzichtelijk Google Docs-bestand
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Elke vraag komt uit een AI-assistent die getraind is op jouw bronmateriaal
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Alles draait veilig en automatisch via Make.com – jij hoeft niks in te stellen
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-8">
                Waarom dit werkt
                <span className="block h-1 w-24 bg-primary mt-2"></span>
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Geen eindeloze redactierondes meer
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je bespaart kostbare tijd op handmatig vragen maken
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Consistente kwaliteit door AI-training
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Perfect afgestemd op jouw onderwijs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Direct inzetbaar in jouw leeromgeving
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">
                Zo pakken we het aan
                <span className="block h-1 w-24 bg-primary mt-2"></span>
              </h2>
              <ol className="space-y-4 text-lg text-gray-700 mb-12 list-decimal pl-5">
                <li>We starten met een intake: wat is je doelgroep en wat voor soort vragen heb je nodig?</li>
                <li>We trainen de AI op jouw bronmateriaal voor optimale resultaten</li>
                <li>Je krijgt toegang tot een eenvoudig formulier waar je nieuwe vragen kunt aanvragen</li>
                <li>Wij verwerken je aanvragen en leveren binnen 24 uur je vragen op</li>
                <li>Je ontvangt de vragen in een overzichtelijk Google Docs-bestand</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Klaar om te starten?</h2>
              <Button 
                onClick={handleEmailClick}
                className="rounded-lg px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Vraag een offerte aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToetsVragenGenerator;
