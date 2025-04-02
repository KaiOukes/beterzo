
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          <nav className="ml-8 hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-primary font-medium">
              Ons Team
            </Link>
          </nav>
        </div>
        
        <a 
          href="https://tally.so/r/w7agNZ" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            variant="outline" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
          >
            Boek gratis intake
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
