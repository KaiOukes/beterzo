
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Settings, Clock, LockKeyhole, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MaatwerkAutomatiseringen = () => {
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
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 relative">
                Jouw processen...
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium mb-8">
                ...een tikkie beterzo
              </h2>
            </div>
            
            <div className="animate-on-scroll max-w-3xl">
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                We ontwikkelen op maat gemaakte automatiseringsoplossingen die
                perfect aansluiten bij jouw bedrijfsprocessen en behoeften.
              </p>
              
              <a 
                href="https://tally.so/r/w7agNZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary-600 transition-all transform hover:scale-105">
                  Vraag nu je offerte aan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <div className="animate-on-scroll bg-white rounded-lg shadow-xl p-6 border-l-4 border-primary transform transition-all hover:-translate-y-1 hover:shadow-2xl mb-6">
                <p className="text-lg text-gray-700">
                  Deze workflows helpen bij het automatiseren van diverse taken, zoals het stroomlijnen van
                  communicatie, het beheren van gegevens, en het integreren van verschillende systemen. Met
                  onze tools kunnen we alles verbinden en zorgen dat je processen naadloos verlopen, zonder
                  handmatige tussenkomst.
                </p>
              </div>
              
              <div className="animate-on-scroll bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg p-6">
                <p className="text-lg text-gray-700">
                  Door taken te automatiseren met een op maat gemaakte workflow, bespaar je niet alleen tijd,
                  maar verbeter je ook de efficiëntie en nauwkeurigheid binnen je bedrijf. We zorgen
                  ervoor dat de oplossing precies past bij de manier waarop jij werkt, zodat je processen niet alleen
                  sneller, maar ook slimmer worden uitgevoerd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
                Hoe wij <span className="text-primary">werken</span>
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h2>
            </div>
            
            <div className="max-w-4xl">
              <div className="animate-on-scroll bg-white rounded-lg shadow-xl p-6 border-l-4 border-primary transform transition-all hover:-translate-y-1 hover:shadow-2xl mb-6">
                <p className="text-lg text-gray-700">
                  Het proces begint met een intakegesprek waarin we jouw specifieke behoeften en workflows in
                  kaart brengen. Vervolgens ontwikkelen we een maatwerkoplossing die volledig geïntegreerd
                  wordt met je bestaande systemen en tools.
                </p>
              </div>
              
              <div className="animate-on-scroll bg-white rounded-lg shadow-xl p-6 border-l-4 border-primary transform transition-all hover:-translate-y-1 hover:shadow-2xl mb-6">              
                <p className="text-lg text-gray-700">
                  Belangrijk is dat alle data veilig blijft; onze platformen zijn ontworpen met privacy als prioriteit, 
                  zodat je altijd zeker kunt zijn van de veiligheid van jouw gegevens.
                </p>
              </div>
              
              <div className="animate-on-scroll bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg p-6">
                <p className="text-lg text-gray-700">
                  Met onze op maat gemaakte automatiseringen verbeter je de efficiëntie, verminder je menselijke
                  fouten en zorg je voor consistente en betrouwbare resultaten. Dit stelt je team in staat om zich te
                  richten op strategische en creatieve taken die echte waarde toevoegen aan je bedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Cases */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
                Proces <span className="text-primary">voorbeelden</span>
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              <Card className="animate-on-scroll border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-primary-400 h-3"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Intakeproces automatisering</h3>
                  <p className="text-gray-700">
                    Wanneer een contactformulier op de website wordt ingevult, krijgt de persoon automatisch een
                    persoonlijke welkomst e-mail met relevante informatie over hun bedrijf en hoe de oplossing
                    hen kan helpen. Ook wordt hier direct een link toegestuurd om een afspraak in te plannen en
                    wordt deze afspraak toegevoegd aan het CRM & agenda.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary-400 to-blue-600 h-3"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Lesrooster automatisering</h3>
                  <p className="text-gray-700">
                    Lesroosters worden automatisch aangemaakt, waarbij rekening wordt gehouden met feestdagen,
                    vakanties, agenda's van docenten en diverse andere criteria. Vervolgens worden klassen en
                    docenten agenda's automatisch ingepland.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-primary-400 h-3"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Persoonlijke documenten</h3>
                  <p className="text-gray-700">
                    Elke student ontvangt een gepersonaliseerd document om te ondertekenen, waarbij
                    automatisch hun naam en andere relevante gegevens, zoals adres en docent, worden
                    ingevuld.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary-400 to-blue-600 h-3"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Automatische document verwerking</h3>
                  <p className="text-gray-700">
                    Documenten worden automatisch verstuurd naar de juiste persoon voor ondertekening. Na
                    ondertekening wordt het document automatisch opgeslagen in de juiste map, en een melding wordt
                    gestuurd naar de project manager.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 relative">
                Jouw <span className="text-primary">investering</span>
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h2>
            </div>
            
            <div className="max-w-3xl animate-on-scroll">
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-primary-400 h-3"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-4">Flexibele prijsmodellen</h3>
                      <p className="text-gray-700 mb-4">
                        We werken met verschillende prijsmodellen die aansluiten bij jouw specifieke situatie.
                      </p>
                      <p className="text-gray-700">
                        Voor sommige projecten hanteren we vaste projectprijzen, waarbij je na afronding direct eigenaar bent van het ontwikkelde product. In andere gevallen werken we met een abonnementstructuur voor langdurige ondersteuning en doorontwikkeling.
                      </p>
                    </div>
                    
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center">
                        <Settings className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Klaar voor een tikkie
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                beterzo?
              </h3>
            </div>
            
            <div className="max-w-xl mb-8 animate-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <p className="text-lg text-gray-700 mb-6">
                  Heb je vragen over de mogelijkheden van jouw processen? Stuur nu een mailtje naar Kai of plan een gesprek in!
                </p>
                
                <a 
                  href="mailto:kai@beterzo.tech" 
                  className="text-primary hover:text-primary-600 font-medium text-lg flex items-center"
                >
                  kai@beterzo.tech
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <a 
                href="https://tally.so/r/w7agNZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary-600 transition-all transform hover:scale-105">
                  Vraag hier jouw offerte aan!
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default MaatwerkAutomatiseringen;
