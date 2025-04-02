
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="transform transition hover:scale-105">
            <Logo />
          </Link>
          
          <nav className="ml-8 hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-all relative ${
                isActive('/') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
              {isActive('/') && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
            <Link 
              to="/ai-training" 
              className={`font-medium transition-all relative ${
                isActive('/ai-training') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'
              }`}
            >
              AI Training
              {isActive('/ai-training') && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
            <Link 
              to="/maatwerk-automatiseringen" 
              className={`font-medium transition-all relative ${
                isActive('/maatwerk-automatiseringen') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'
              }`}
            >
              Maatwerk Automatiseringen
              {isActive('/maatwerk-automatiseringen') && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all relative ${
                isActive('/team') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'
              }`}
            >
              Ons Team
              {isActive('/team') && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
          </nav>
        </div>
        
        <a 
          href="https://tally.so/r/w7agNZ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition hover:scale-105"
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
