
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
    <section id="cta" className="section bg-gradient-to-b from-primary-900 to-primary-700 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om jouw werk een tikkie Beterzo te maken?
          </h2>
          
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek met Kai om te ontdekken hoe AI en automatisering jouw bedrijf kunnen helpen.
          </p>
          
          <a 
            href="https://tally.so/r/w7agNZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary-700 rounded-full px-8 py-4 font-medium text-lg shadow-lg hover:bg-opacity-90 transition-all"
          >
            Boek gratis intakegesprek
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
