
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Book, CheckCircle } from 'lucide-react';

const BeterzoOplossingen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 relative">
                Beterzo oplossingen
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium mb-8">
                ...een tikkie beterzo
              </h2>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-700 mb-6">
                  Bedrijven verliezen kostbare tijd aan repetitieve taken die echte groei in de weg staan. 
                  Beterzo zet slimme AI en automatisering in die perfect aansluit bij jouw "why".
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Door processen te automatiseren krijg jij de vrijheid om te focussen op wat écht belangrijk is: 
                  jouw expertise. Als onderdeel van Bureau Reuring werkt beterzo elke dag om jouw bedrijf te 
                  transformeren naar een efficiëntere versie van zichzelf!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Werkwijze Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
              Hoe wij <span className="text-primary">werken</span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  title: "beterzo begin",
                  description: "Het startpunt! Een intake waarin we samen ontdekken wat jouw business écht beter kan maken."
                },
                {
                  title: "beterzo bod",
                  description: "Een maatwerkofferte die jou laat zien hoe wij het nét een stukje beter aanpakken."
                },
                {
                  title: "beterzo bouw",
                  description: "Hier bouwen we jouw slimme automatisering die alles soepeler en slimmer laat lopen."
                },
                {
                  title: "beterzo bezorgen",
                  description: "De grote dag! We leveren jouw oplossing netjes en perfect werkend op."
                },
                {
                  title: "beterzo boost",
                  description: "Een flitsende training en onboarding, zodat jij en je team direct beter van start kunnen."
                }
              ].map((step, index) => (
                <Card key={index} className="border-none shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r from-blue-600 to-primary-400 h-3`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Toetsvragen System Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Jouw toetsvragen
              <span className="block text-primary">...een tikkie beterzo</span>
            </h2>

            <div className="max-w-3xl mb-12">
              <p className="text-lg text-gray-700 mb-6">
                We bouwen een flexibele AI-oplossing die automatisch leerdoelen en toetsvragen genereert 
                op basis van aangeleverde lesstof. Je kiest eenvoudig of je compacte e-learningvragen of 
                uitgebreidere examenvragen wilt – zodat je altijd het juiste niveau en de juiste lengte 
                hebt voor jouw doelgroep.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Slimme verwerking",
                  description: "Je geeft eenvoudig aan of het om een e-learning of examen gaat, kiest de bron & het hoofdstuk."
                },
                {
                  title: "Automatische leerdoel generatie",
                  description: "Leerdoelen worden automatisch gegenereerd op basis van aangeleverde bronnen"
                },
                {
                  title: "Automatische vraag generatie",
                  description: "De lesdoelen worden direct omgezet in toetsvragen, inclusief mogelijke antwoorden."
                },
                {
                  title: "Gespecialiseerde bronkoppeling",
                  description: "Elke vraag wordt gegenereerd door een specifieke assistent die getraind is op het juiste lesmateriaal."
                },
                {
                  title: "Overzichtelijke output",
                  description: "Alle vragen worden automatisch geformatteerd en verzameld in een Google Docs-document."
                },
                {
                  title: "Veilige gegevensverwerking",
                  description: "Onderweg worden geen gegevens opgeslagen, alles blijft privé en beschermd."
                }
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                      <Book className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-4xl mx-auto text-center px-4 animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Klaar voor een tikkie
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                beterzo?
              </h3>
              
              <p className="max-w-2xl mx-auto mb-8">
                We kijken er naar uit om te starten met jouw toetsvragen.
                Laat het me weten via telefoon of mail!
              </p>
              
              <a 
                href="mailto:Hi@beterzo.tech" 
                className="inline-block transform transition-all hover:scale-105"
              >
                <Button className="rounded-full px-6 py-3 text-lg">
                  Stuur een e-mail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BeterzoOplossingen;
