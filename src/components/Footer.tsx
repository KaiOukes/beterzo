
import React from 'react';
import Logo from './Logo';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white py-12 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 transform transition-all hover:-translate-y-1">
            <Logo className="mb-4" />
            <p className="text-gray-600 max-w-md">
              Samen is alles net een tikkie... Beterzo.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="mailto:kai@beterzo.tech" 
              className="flex items-center text-gray-700 hover:text-primary mb-3 transform transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 mr-2" />
              kai@beterzo.tech
            </a>
            
            <a 
              href="https://www.linkedin.com/in/kai-oukes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary transform transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Kai Oukes op LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Beterzo. Alle rechten voorbehouden.</p>
          <p className="mt-2">KvK nummer: 95477926</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
