
import React, { useEffect } from 'react';
import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
    <section id="services" className="section bg-beterzo-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center slide-in">
          Onze <span className="title-gradient">diensten</span>
        </h2>
        
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            {/* Maatwerk automatiseringen */}
            <Link to="/maatwerk-automatiseringen" className="block transition-all transform hover:scale-105">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all slide-in h-full">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Maatwerk automatiseringen</h3>
                <p className="text-gray-700 mb-4">
                  Slimme, op jouw processen afgestemde workflows met Make.com en OpenAI die je bedrijf efficiënter maken.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>Automatisering van repetitieve taken</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>Integratie met je bestaande tools</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>AI-powered workflows</span>
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
