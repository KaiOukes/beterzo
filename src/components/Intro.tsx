
import React, { useEffect } from 'react';

const Intro = () => {
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
    <section id="intro" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Over <span className="title-gradient">Beterzo</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Beterzo geeft bedrijven vrijheid terug door vervelende, herhalende taken te automatiseren en teams op te leiden in AI-tools zoals ChatGPT, Copilot en Make.com.
          </p>
          
          <div className="bg-beterzo-light p-6 rounded-xl border border-beterzo-gray">
            <blockquote className="text-xl italic text-gray-700">
              "Met Beterzo geven we bedrijven de ruimte om te doen waar ze goed in zijn - om te doen wat ze leuk vinden!"
            </blockquote>
            <p className="mt-4 font-medium">- Kai Oukes, Oprichter Beterzo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
