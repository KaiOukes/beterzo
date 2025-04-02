
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
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
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="title-gradient">Ons Team</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Kai Section */}
              <div className="slide-in">
                <div className="flex flex-col space-y-6">
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/0c74f1e9-800d-4908-9df8-8f236d3d2631.png" 
                      alt="Kai Oukes - Oprichter Beterzo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Hi, ik ben Kai!</h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Met Beterzo wil ik laten zien dat technologie niet alleen ondersteunend is, maar dé sleutel kan zijn om bedrijven weer vrijheid te geven. Alles kan nét een tikkie Beterzo – en dat is precies wat wij doen.
                      </p>
                      
                      <p>
                        Als onderdeel en met ondersteuning van Bureau Reuring werken we inmiddels voor mooie klanten. Ik maak daar processen slimmer, sneller en efficiënter.
                      </p>
                      
                      <p>
                        Alles een stukje beterzo, want waarom genoegen nemen met goed als het Beterzo kan?
                      </p>
                      
                      <p className="font-medium">Tot snel!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colleagues Section */}
              <div className="slide-in" style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] w-full rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="/lovable-uploads/13bb68ce-d9bf-41a9-a018-ddd063578839.png" 
                        alt="Jean-Luc - Bureau Reuring" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[3/4] w-full rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="/lovable-uploads/f3415e50-8c9c-4809-a349-aa5cabbe7dbc.png" 
                        alt="Ilona - Bureau Reuring" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Hi, wij zijn Jean-Luc & Ilona!</h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Met Bureau Reuring timmeren wij sinds 2023 aan de weg om zoveel mogelijk mensen te leren werken met generatieve AI.
                      </p>
                      
                      <p>
                        Automatiseringen is een logisch volgend hoofdstuk voor ons bedrijf. Vandaar dat we samen met Kai nu Beterzo opgezet hebben.
                      </p>
                      
                      <p>
                        Wij ondersteunen waar we kunnen en bouwen zo samen aan een slimmere, snellere en efficientere wereld..want samen is net een tikkie Beterzo!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
