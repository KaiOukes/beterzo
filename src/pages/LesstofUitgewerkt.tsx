
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LesstofUitgewerkt = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kai@beterzo.tech?subject=Offerte aanvraag Lesstof Uitgewerkt";
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
                Lesstof Uitgewerkt... een tikkie beterzo
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Upload je module en ontvang automatisch leerdoelen, samenvattingen en begrippenlijsten, 
                voor zowel studenten als docenten. Binnen een maand staat jouw systeem live – en daarna 
                werk je in 7 minuten uit wat anders 7 uur zou kosten.
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
                  Automatisch gegenereerde leerdoelen voor studenten en docenten
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Samenvattingen afgestemd op je doelgroep en wensen
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Begrippenlijsten overzichtelijk en foutloos opgesteld
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Uitvoer in Google Docs of Word, klaar voor gebruik
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Volledig gepersonaliseerd naar jouw formats: bullets, alinea's, tabellen of Excel
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-8">
                Waarom dit werkt
                <span className="block h-1 w-24 bg-primary mt-2"></span>
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je bespaart gemiddeld 7 uur per module
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Consistente, foutloze kwaliteit zonder menselijke vergissingen
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Volledige privacy en beveiliging:
                  <ul className="ml-6 mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Bestanden zijn beschermd en worden niet gebruikt voor AI-training
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Verwerking via beveiligde API's (OpenAI API Privacy Policy)
                    </li>
                  </ul>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Direct schaalbaar: werk zoveel modules uit als je wilt
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Eenvoudige integratie met Google Drive of Microsoft 365
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
              <p className="text-lg text-gray-700 mb-6">
                We starten met een intake:
              </p>
              <ul className="space-y-4 text-lg text-gray-700 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Welke modules wil je uitwerken?
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Hoe zien jouw ideale leerdoelen, samenvattingen en begrippenlijsten eruit?
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  In welk format wil je de output ontvangen?
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                Daarna bouwen wij binnen één maand een werkend systeem op basis van Make.com en OpenAI.
              </p>
              <p className="text-lg text-gray-700 mb-12">
                Na oplevering verwerk je zelfstandig modules – zo vaak als je wilt, zo snel als je wilt.
              </p>
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

export default LesstofUitgewerkt;
