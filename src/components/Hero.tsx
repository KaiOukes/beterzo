
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const scrollToNext = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-beterzo-light">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 slide-in">
            Met AI wordt jouw werk...
            <span className="title-gradient block"> een tikkie Beterzo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 slide-in" style={{ transitionDelay: '200ms' }}>
            Wij helpen jou en je team slimmer werken met AI en automatisering. Praktisch, leuk en direct toepasbaar.
          </p>
          
          <div className="slide-in" style={{ transitionDelay: '400ms' }}>
            <a 
              href="https://tally.so/r/w7agNZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="beterzo-btn"
            >
              Plan een gratis gesprek
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl slide-in" style={{ transitionDelay: '300ms' }}>
            <img 
              src="/PROFIELFOTO.jpeg" 
              alt="Kai Oukes van Beterzo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button onClick={scrollToNext} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary">
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
