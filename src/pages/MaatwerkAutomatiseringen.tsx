import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Settings, Clock, LockKeyhole, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MaatwerkAutomatiseringen = () => {
  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Jouw processen... <span className="title-gradient">een tikkie beterzo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We ontwikkelen op maat gemaakte automatiseringsoplossingen die
              perfect aansluiten bij jouw bedrijfsprocessen en behoeften.
            </p>
            <a 
              href="https://tally.so/r/w7agNZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="beterzo-btn"
            >
              Vraag nu je offerte aan
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-16 bg-beterzo-light">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 slide-in">
                Deze workflows helpen bij het automatiseren van diverse taken, zoals het stroomlijnen van
                communicatie, het beheren van gegevens, en het integreren van verschillende systemen. Met
                onze tools kunnen we alles verbinden en zorgen dat je processen naadloos verlopen, zonder
                handmatige tussenkomst.
              </p>
              
              <p className="text-lg text-gray-700 slide-in" style={{ transitionDelay: '100ms' }}>
                Door taken te automatiseren met een op maat gemaakte workflow, bespaar je niet alleen tijd,
                maar verbeter je ook de efficiëntie en nauwkeurigheid binnen je bedrijf. We zorgen
                ervoor dat de oplossing precies past bij de manier waarop jij werkt, zodat je processen niet alleen
                sneller, maar ook slimmer worden uitgevoerd.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center slide-in">
              Hoe wij <span className="title-gradient">werken</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 slide-in">
                Het proces begint met een intakegesprek waarin we jouw specifieke behoeften en workflows in
                kaart brengen. Vervolgens ontwikkelen we een maatwerkoplossing die volledig geïntegreerd
                wordt met je bestaande systemen en tools.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 slide-in" style={{ transitionDelay: '100ms' }}>
                Belangrijk is dat alle data veilig blijft; onze platformen zijn ontworpen met privacy als prioriteit, 
                zodat je altijd zeker kunt zijn van de veiligheid van jouw gegevens.
              </p>
              
              <p className="text-lg text-gray-700 slide-in" style={{ transitionDelay: '200ms' }}>
                Met onze op maat gemaakte automatiseringen verbeter je de efficiëntie, verminder je menselijke
                fouten en zorg je voor consistente en betrouwbare resultaten. Dit stelt je team in staat om zich te
                richten op strategische en creatieve taken die echte waarde toevoegen aan je bedrijf.
              </p>
            </div>
          </div>
        </section>

        {/* Platforms & Tools */}
        <section className="py-16 bg-beterzo-light">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center slide-in">
              Onze <span className="title-gradient">Tools & Platformen</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 slide-in">
                Voor het ontwikkelen van op maat gemaakte automatiseringsoplossingen maken we gebruik
                van verschillende krachtige platformen en tools. We selecteren altijd de juiste combinatie die het beste
                past bij jouw specifieke werkprocessen en behoeften.
              </p>

              <p className="text-lg text-gray-700 mb-8 slide-in" style={{ transitionDelay: '100ms' }}>
                Of het nu gaat om workflow automatisering, AI-integratie, data-analyse of procesoptimalisatie - 
                we hebben toegang tot een breed scala aan tools die we flexibel kunnen inzetten. 
                We kijken altijd naar wat het beste past bij jouw werkwijze, branche en specifieke uitdagingen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="slide-in" style={{ transitionDelay: '200ms' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Make.com</h3>
                    <p className="text-gray-700 mb-4">
                      Make.com is een veelzijdig platform dat een gebruiksvriendelijke interface biedt en vrijwel
                      onbeperkte mogelijkheden voor personalisatie. Het stelt ons in staat om jouw processen efficiënt te
                      automatiseren zonder grenzen tegen te komen.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Kosten:</span> Vanaf €9 per maand
                    </p>
                    <p className="text-gray-700">
                      Via ons krijg je een maand gratis Make PRO om het platform uitgebreid te testen.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="slide-in" style={{ transitionDelay: '300ms' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">OpenAI</h3>
                    <p className="text-gray-700 mb-4">
                      Wanneer nodig maken we gebruik van OpenAI om geavanceerde AI-modellen te integreren en jouw
                      processen nog slimmer te maken.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Kosten:</span> Variabel op basis van verwerkte tokens:
                    </p>
                    <ul className="text-gray-700 list-disc pl-5 mb-2">
                      <li>Geavanceerd model: $0,03 per 1.000 tokens</li>
                      <li>Eenvoudig model: $0,002 per 1.000 tokens</li>
                      <li>1.000 tokens ≈ 750 woorden</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-lg text-gray-700 mb-4 slide-in" style={{ transitionDelay: '400ms' }}>
                We trainen de AI volledig volgens jouw wensen, schrijfstijl en expertise.
              </p>
              
              <p className="text-lg text-gray-700 slide-in" style={{ transitionDelay: '500ms' }}>
                Dit doen we eerst in ons eigen systeem, waarna we de final versie naar jouw account overzetten, 
                zodat je altijd over een gepersonaliseerde oplossing beschikt.
              </p>
            </div>
          </div>
        </section>

        {/* Example Cases */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center slide-in">
              Proces <span className="title-gradient">voorbeelden</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="slide-in" style={{ transitionDelay: '100ms' }}>
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
              
              <Card className="slide-in" style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Lesrooster automatisering</h3>
                  <p className="text-gray-700">
                    Lesroosters worden automatisch aangemaakt, waarbij rekening wordt gehouden met feestdagen,
                    vakanties, agenda's van docenten en diverse andere criteria. Vervolgens worden klassen en
                    docenten agenda's automatisch ingepland.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="slide-in" style={{ transitionDelay: '300ms' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Persoonlijke documenten</h3>
                  <p className="text-gray-700">
                    Elke student ontvangt een gepersonaliseerd document om te ondertekenen, waarbij
                    automatisch hun naam en andere relevante gegevens, zoals adres en docent, worden
                    ingevuld.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="slide-in" style={{ transitionDelay: '400ms' }}>
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
        <section className="py-16 bg-beterzo-light">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center slide-in">
              Jouw <span className="title-gradient">investering</span>
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 slide-in" style={{ transitionDelay: '100ms' }}>
              <div className="flex flex-col md:flex-row gap-6 mb-8">
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
              
              <Separator className="my-6" />
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Platform kosten</h3>
                  <p className="text-gray-700">
                    De kosten voor de verschillende platformen betaal je direct via de betreffende websites. Deze abonnementen hoef je pas aan te schaffen nadat wij klaar zijn met ontwikkelen.
                  </p>
                </div>
                
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center">
                    <LockKeyhole className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 slide-in">
              Klaar voor een tikkie <span className="title-gradient">beterzo?</span>
            </h2>
            
            <div className="max-w-xl mx-auto mb-8 slide-in" style={{ transitionDelay: '100ms' }}>
              <p className="text-lg text-gray-700 mb-6">
                Heb je vragen over de mogelijkheden van jouw processen? Stuur nu een mailtje naar Kai of plan een gesprek in!
              </p>
              
              <a 
                href="mailto:kai@beterzo.tech" 
                className="text-primary hover:text-primary-600 font-medium text-lg flex items-center justify-center"
              >
                kai@beterzo.tech
              </a>
            </div>
            
            <div className="slide-in" style={{ transitionDelay: '200ms' }}>
              <a 
                href="https://tally.so/r/w7agNZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="beterzo-btn"
              >
                Vraag hier jouw offerte aan!
                <ArrowRight className="ml-2 h-5 w-5" />
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
