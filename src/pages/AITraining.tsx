
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, CheckCircle2, Coffee, Sparkles, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AITraining = () => {
  // Animation ref for intersection observer
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with gradient background */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="animate-on-scroll">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 relative">
                Jouw AI gebruik
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium mb-8">
                ...een tikkie beterzo
              </h2>
            </div>
            
            <div className="max-w-3xl mb-12 animate-on-scroll">
              <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-primary transform transition-all hover:-translate-y-1 hover:shadow-2xl">
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
              </div>
              
              <div className="bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg p-6 mt-8 animate-on-scroll">
                <p className="text-lg font-semibold mb-6 flex items-center">
                  <Sparkles className="text-primary mr-2 h-6 w-6" />
                  Bij Beterzo bieden we de volgende twee trainingen aan:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start transform transition hover:translate-x-2">
                    <span className="text-primary text-xl mr-2 mt-1">🔹</span> 
                    <div>
                      <span className="font-bold text-primary">Generatieve AI sprint traject</span>
                      <span> – Leer hoe taalmodellen zoals ChatGPT en Copilot jouw werk
                      een tikkie Beterzo maken! Ontdek hoe je AI slim
                      inzet voor analyses, plannen, schrijven en meer.</span>
                    </div>
                  </li>
                  <li className="flex items-start transform transition hover:translate-x-2">
                    <span className="text-primary text-xl mr-2 mt-1">🔹</span> 
                    <div>
                      <span className="font-bold text-primary">Automatiseren 101</span>
                      <span> – Elke baan bevat
                      repetitieve taken. In deze training leer je hoe je
                      met AI en automatisering processen versnelt en
                      efficiënter werkt.</span>
                    </div>
                  </li>
                </ul>
                <p className="text-lg italic">
                  Wil je weten welke training het beste bij jouw team
                  past? Hieronder vind je informatie voor beide
                  trajecten!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs for choosing between trainings */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <Tabs defaultValue="genai" className="w-full animate-on-scroll">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Onze trainingen
                  </h2>
                  <h3 className="text-xl text-primary font-medium">
                    ...een tikkie beterzo
                  </h3>
                </div>
                
                <TabsList className="mt-4 md:mt-0 bg-blue-50 p-1">
                  <TabsTrigger 
                    value="genai" 
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    GenAI
                  </TabsTrigger>
                  <TabsTrigger 
                    value="automatiseren" 
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Automatiseren 101
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="genai" className="animate-on-scroll">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-primary-400 h-3"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <BookOpen className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-2xl font-semibold">Generatieve AI sprint traject – Haal het maximale uit AI in je werk</h3>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <p className="mb-6">
                        Generatieve AI helpt je om sneller, beter en slimmer te werken. Van analyseren en plannen tot brainstormen en het uitwerken of reviewen van je werk – de mogelijkheden zijn eindeloos.
                      </p>
                      <p className="font-medium">
                        In deze in-company training leer je hoe je AI optimaal inzet in je werk, zonder de valkuilen.
                      </p>
                    </div>
                    
                    <Collapsible className="mb-8">
                      <CollapsibleTrigger className="flex items-center w-full justify-between bg-primary-50 p-4 rounded-lg text-xl font-semibold">
                        <div className="flex items-center">
                          <Target className="h-6 w-6 text-primary mr-2" />
                          Wat levert het op?
                        </div>
                        <div className="text-primary">+</div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white p-4 rounded-lg mt-2 border border-gray-200 shadow-inner">
                        <p className="mb-4">Onderzoek van Harvard en BCG laat zien dat professionals met AI:</p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center bg-green-50 p-3 rounded-lg">
                            <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" /> 
                            <span>12% meer taken afronden.</span>
                          </li>
                          <li className="flex items-center bg-green-50 p-3 rounded-lg">
                            <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" /> 
                            <span>25% sneller werken.</span>
                          </li>
                          <li className="flex items-center bg-green-50 p-3 rounded-lg">
                            <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" /> 
                            <span>40% betere resultaten behalen.</span>
                          </li>
                        </ul>
                        <p className="mb-6">Maar ook dat prestaties juist kunnen verslechteren zonder de juiste aanpak.</p>
                        <p className="mb-6 font-medium">Daarom is goede training essentieel.</p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible className="mb-8">
                      <CollapsibleTrigger className="flex items-center w-full justify-between bg-primary-50 p-4 rounded-lg text-xl font-semibold">
                        <div className="flex items-center">
                          <Coffee className="h-6 w-6 text-primary mr-2" />
                          Wat gaan we doen?
                        </div>
                        <div className="text-primary">+</div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white p-4 rounded-lg mt-2 border border-gray-200 shadow-inner">
                        <p className="mb-8">
                          Vooraf ontvangt iedere deelnemer een intake formulier en een aantal voorbereidende opdrachten. Tijdens de 3 uur lange bootcamp gaan we aan de slag met gave demo's en hands-on oefeningen. Als laatst sluiten we af met een duidelijk actieplan voor verdere toepassing.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <div className="text-center">
                      <a 
                        href="https://tally.so/r/w7agNZ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary-600 transition-all transform hover:scale-105">
                          Boek de training hier!
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="automatiseren" className="animate-on-scroll">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-400 to-blue-600 h-3"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Sparkles className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-2xl font-semibold">Automatiseren 101 - Maak repetitief werk verleden tijd</h3>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <p className="mb-6">
                        Automatiseren 101- een compacte en praktische training waarin je leert hoe je AI en automatisering inzet om je werkprocessen te stroomlijnen. Geen technische voorkennis nodig – we beginnen bij de basis en laten je stap voor stap zien hoe je direct tijd kunt besparen.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <Collapsible className="mb-4">
                        <CollapsibleTrigger className="flex items-center w-full justify-between bg-primary-50 p-4 rounded-lg text-xl font-semibold">
                          <div className="flex items-center">
                            <Target className="h-6 w-6 text-primary mr-2" />
                            Wat leer je?
                          </div>
                          <div className="text-primary">+</div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-white p-4 rounded-lg mt-2 border border-gray-200 shadow-inner">
                          <ul className="list-disc pl-5 mb-6 space-y-3">
                            <li>Hoe je saaie, tijdrovende taken eenvoudig automatiseert.</li>
                            <li>Welke tools je kunt gebruiken voor jouw specifieke situatie.</li>
                            <li>Hoe je AI inzet om slimmer te werken.</li>
                            <li>Praktische toepassingen waarmee je direct aan de slag kunt.</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <Collapsible className="mb-4">
                        <CollapsibleTrigger className="flex items-center w-full justify-between bg-primary-50 p-4 rounded-lg text-xl font-semibold">
                          <div className="flex items-center">
                            <Coffee className="h-6 w-6 text-primary mr-2" />
                            Hoe ziet de training eruit?
                          </div>
                          <div className="text-primary">+</div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-white p-4 rounded-lg mt-2 border border-gray-200 shadow-inner">
                          <ul className="list-disc pl-5 mb-6 space-y-3">
                            <li>Een korte introductie over automatisering en de impact ervan.</li>
                            <li>Hands-on werken met praktische tools die bij jouw werk passen.</li>
                            <li>Voorbeelden uit de praktijk die je kunt vertalen naar je eigen werk.</li>
                            <li>Q&A en persoonlijke begeleiding om je vragen te beantwoorden.</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3">Wat levert het je op?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-primary-50 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg">
                        <CheckCircle2 className="text-primary h-8 w-8 mb-3" />
                        <p className="font-semibold">Meer tijd</p>
                        <p>Bespaar gemiddeld 6 uur per week</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-primary-50 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg">
                        <CheckCircle2 className="text-primary h-8 w-8 mb-3" />
                        <p className="font-semibold">Meer focus</p>
                        <p>Minder afleiding door repetitief werk</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-primary-50 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg">
                        <CheckCircle2 className="text-primary h-8 w-8 mb-3" />
                        <p className="font-semibold">Meer efficiëntie</p>
                        <p>Werk sneller en slimmer zonder extra moeite</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="https://tally.so/r/w7agNZ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary-600 transition-all transform hover:scale-105">
                          Boek de training hier!
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
              
              <p className="text-2xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Hi@beterzo.tech</p>
              
              <p className="max-w-2xl mx-auto mb-8">
                Heb je vragen naar de mogelijkheden van AI binnen jouw werk? Stuur ons dan zeker een mailtje!
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

export default AITraining;
