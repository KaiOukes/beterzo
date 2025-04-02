
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { ArrowRight, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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

  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`font-medium transition-all relative ${
        isActive(to) 
        ? 'text-primary' 
        : 'text-gray-700 hover:text-primary'
      }`}
    >
      {children}
      {isActive(to) && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
    </Link>
  );

  const MobileNavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`block py-3 px-4 w-full text-lg ${
        isActive(to) 
        ? 'text-primary font-medium' 
        : 'text-gray-700 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );

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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ai-training">AI Training</NavLink>
            <NavLink to="/maatwerk-automatiseringen">Maatwerk Automatiseringen</NavLink>
            <NavLink to="/team">Ons Team</NavLink>
          </nav>
        </div>
        
        {isMobile ? (
          <div className="flex items-center space-x-2">
            <a 
              href="https://tally.so/r/w7agNZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition hover:scale-105"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                Intake
              </Button>
            </a>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] py-12">
                <nav className="flex flex-col space-y-1 mt-4">
                  <MobileNavLink to="/">Home</MobileNavLink>
                  <MobileNavLink to="/ai-training">AI Training</MobileNavLink>
                  <MobileNavLink to="/maatwerk-automatiseringen">Maatwerk Automatiseringen</MobileNavLink>
                  <MobileNavLink to="/team">Ons Team</MobileNavLink>
                </nav>
                <div className="mt-8 px-4">
                  <a 
                    href="https://tally.so/r/w7agNZ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      Boek gratis intake
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default Header;
