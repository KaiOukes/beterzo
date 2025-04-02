
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Jaarlijks 180 uur bespaard",
    description: "Dankzij de automatiseringen die Beterzo heeft opgezet, besparen we nu 15 uur per maand aan administratief werk.",
    company: "MKB Dienstverlener"
  },
  {
    quote: "Roosters en contracten volledig geautomatiseerd",
    description: "Wat voorheen een week handmatig werk kostte, gebeurt nu volledig automatisch. Onze planners zijn enorm blij.",
    company: "HR Manager"
  },
  {
    quote: "Salesfunnel automatisch en persoonlijk",
    description: "Onze leads worden nu automatisch opgevolgd, maar wel met een persoonlijk tintje. Onze conversie is 23% gestegen.",
    company: "Marketing Director"
  }
];

const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section id="results" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center slide-in">
          Resultaten voor <span className="title-gradient">onze klanten</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto slide-in" style={{ transitionDelay: '100ms' }}>
          <div className="bg-beterzo-light border border-beterzo-gray rounded-xl p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 title-gradient">
                  "{testimonial.quote}"
                </h3>
                <p className="text-gray-700 mb-4">{testimonial.description}</p>
                <p className="font-medium text-gray-900">— {testimonial.company}</p>
              </div>
            ))}
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
