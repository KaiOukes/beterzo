
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TelefoonService = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kai@beterzo.tech?subject=Offerte aanvraag Telefonische Klantenservice";
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
                Telefonische Klantenservice... een tikkie beterzo
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Dit is een slimme, geautomatiseerde telefonie-oplossing die inkomend klantcontact razendsnel en professioneel afhandelt – automatisch waar het kan, persoonlijk waar het moet. Ideaal voor bedrijven die veel gebeld worden, maar hun tijd liever besteden aan belangrijkere dingen.
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
                  Klanten bellen naar jouw zakelijke nummer en kiezen een onderwerp via een keuzemenu
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Sollicitaties en offerteaanvragen worden automatisch doorgeschakeld naar het juiste telefoonnummer
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Administratieve vragen worden automatisch verwerkt en doorgestuurd
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Overige vragen worden opgenomen, samengevat door AI, en doorgestuurd
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Alles wordt slim gerouteerd via Make.com en automatisch opgevolgd
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-8">
                Waarom dit werkt
                <span className="block h-1 w-24 bg-primary mt-2"></span>
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Geen gemiste oproepen meer
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Elke beller komt direct op de juiste plek
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je team houdt tijd over voor belangrijkere dingen
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Klanten krijgen snel en professioneel antwoord
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je maakt een sterke eerste indruk, elke keer weer
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Je klantcontact blijft persoonlijk én efficiënt
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
                <li>We starten met een intake: welke mailboxen en telefoonnummers moeten we gebruiken?</li>
                <li>Wij bouwen de volledige flow op ons Twilio-account, met een zakelijk nummer speciaal voor jouw bedrijf</li>
                <li>We testen alles grondig, van AI-output tot gesprekskwaliteit</li>
                <li>We leveren het live op, compleet werkend</li>
                <li>Jij hoeft nergens meer naar om te kijken – wij houden alles up-to-date en in de lucht</li>
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

export default TelefoonService;
