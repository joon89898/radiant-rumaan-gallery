
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-bold text-2xl text-black">
            Rumaan<span className="text-yellow-400">.</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
