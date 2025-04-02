
import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const AITraining = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jouw AI gebruik
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-8">
              ...een tikkie beterzo
            </h2>
            <div className="max-w-3xl mb-12">
              <p className="text-lg mb-6">
                Met AI kun je je werk beter, leuker en sneller maken.
                Daarom bieden we op maat gemaakte AI-trainingen die
                perfect aansluiten bij de behoeften van jouw bedrijf.
              </p>
              <p className="text-lg mb-6">
                Onze programma's zijn specifiek afgestemd op jouw
                vakgebied en combineren de nieuwste AI-
                technologieën met praktische toepassingen. Of het nu
                gaat om begeleiding, advies of het automatiseren van
                processen, onze trainingen helpen jullie om efficiënter
                en slimmer te werken.
              </p>
              <p className="text-lg font-semibold mb-6">
                Bij Beterzo bieden we de volgende twee trainingen aan:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">🔹</span> 
                  <span><strong>Generatieve AI sprint traject</strong> – Leer hoe
                  taalmodellen zoals ChatGPT en Copilot jouw werk
                  een tikkie Beterzo maken! Ontdek hoe je AI slim
                  inzet voor analyses, plannen, schrijven en meer.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">🔹</span> 
                  <span><strong>Automatiseren 101</strong> – Elke baan bevat
                  repetitieve taken. In deze training leer je hoe je
                  met AI en automatisering processen versnelt en
                  efficiënter werkt.</span>
                </li>
              </ul>
              <p className="text-lg">
                Wil je weten welke training het beste bij jouw team
                past? Hieronder vind je informatie voor beide
                trajecten!
              </p>
            </div>
          </div>
        </section>

        {/* GenAI Section */}
        <section className="py-16 bg-white" id="genai">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              GenAI
            </h2>
            <h3 className="text-xl text-primary font-medium mb-8">
              ...een tikkie beterzo
            </h3>
            
            <Card className="mb-12 border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Generatieve AI sprint traject – Haal het maximale uit AI in je werk</h3>
                <p className="mb-6">
                  Generatieve AI helpt je om sneller, beter en slimmer te werken. Van analyseren en plannen tot brainstormen en het uitwerken of reviewen van je werk – de mogelijkheden zijn eindeloos.
                </p>
                <p className="mb-8">
                  In deze in-company training leer je hoe je AI optimaal inzet in je werk, zonder de valkuilen.
                </p>
                
                <h4 className="text-xl font-semibold mb-3">Wat levert het op?</h4>
                <p className="mb-4">Onderzoek van Harvard en BCG laat zien dat professionals met AI:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✅</span> 12% meer taken afronden.
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✅</span> 25% sneller werken.
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✅</span> 40% betere resultaten behalen.
                  </li>
                </ul>
                <p className="mb-6">Maar ook dat prestaties juist kunnen verslechteren zonder de juiste aanpak.</p>
                <p className="mb-8 font-medium">Daarom is goede training essentieel.</p>
                
                <h4 className="text-xl font-semibold mb-3">Wat gaan we doen?</h4>
                <p className="mb-8">
                  Vooraf ontvangt iedere deelnemer een intake formulier en een aantal voorbereidende opdrachten. Tijdens de 3 uur lange bootcamp gaan we aan de slag met gave demo's en hands-on oefeningen. Als laatst sluiten we af met een duidelijk actieplan voor verdere toepassing.
                </p>
                
                <a 
                  href="https://tally.so/r/w7agNZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto rounded-full">
                    Boek de training hier!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Automatiseren 101 Section */}
        <section className="py-16 bg-blue-50" id="automatiseren">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Automatiseren 101
            </h2>
            <h3 className="text-xl text-primary font-medium mb-8">
              ...een tikkie beterzo
            </h3>
            
            <Card className="mb-12 border-none shadow-lg">
              <CardContent className="p-8">
                <p className="mb-6">
                  Automatiseren 101- een compacte en praktische training waarin je leert hoe je AI en automatisering inzet om je werkprocessen te stroomlijnen. Geen technische voorkennis nodig – we beginnen bij de basis en laten je stap voor stap zien hoe je direct tijd kunt besparen.
                </p>
                
                <h4 className="text-xl font-semibold mb-3">Wat leer je?</h4>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Hoe je saaie, tijdrovende taken eenvoudig automatiseert.</li>
                  <li>Welke tools je kunt gebruiken, met de focus op Make.com.</li>
                  <li>Hoe je AI inzet om slimmer te werken.</li>
                  <li>Praktische toepassingen waarmee je direct aan de slag kunt.</li>
                </ul>
                
                <h4 className="text-xl font-semibold mb-3">Hoe ziet zo'n training er uit?</h4>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Een korte introductie over automatisering en de impact ervan.</li>
                  <li>Hands-on werken met Make.com, zodat je het direct toepast.</li>
                  <li>Voorbeelden uit de praktijk die je kunt vertalen naar je eigen werk.</li>
                  <li>Q&A en persoonlijke begeleiding om je vragen te beantwoorden.</li>
                </ul>
                
                <h4 className="text-xl font-semibold mb-3">Wat levert het je op?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✅</span> 
                    <span>Meer tijd – bespaar gemiddeld 6 uur per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✅</span> 
                    <span>Meer focus – minder afleiding door repetitief werk.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✅</span> 
                    <span>Meer efficiëntie – werk sneller en slimmer zonder extra moeite.</span>
                  </li>
                </ul>
                
                <a 
                  href="https://tally.so/r/w7agNZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto rounded-full">
                    Boek de training hier!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Klaar voor een tikkie
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              beterzo?
            </h3>
            
            <p className="text-2xl font-medium mb-6">Hi@beterzo.tech</p>
            
            <p className="max-w-2xl mx-auto mb-8">
              Heb je vragen naar de mogelijkheden van AI binnen jouw werk? Stuur ons dan zeker een mailtje!
            </p>
            
            <a 
              href="mailto:Hi@beterzo.tech" 
              className="inline-block"
            >
              <Button className="rounded-full">
                Stuur een e-mail
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AITraining;
