
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="font-bold text-2xl tracking-tight relative">
        <span className="bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent">Beterzo</span>
        <div className="absolute w-3 h-3 border-2 border-primary rounded-full top-0 right-[-12px] flex items-center justify-center">
          <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
