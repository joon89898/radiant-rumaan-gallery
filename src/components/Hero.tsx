
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-yellow-500 rounded-full opacity-25 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-black mb-6 leading-tight">
                Designs That{' '}
                <span className="gradient-text">Speak Loud</span>
                <br />
                In Colors That{' '}
                <span className="gradient-text">Shine</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hi, I'm <strong>Rumaan Meeran</strong>, a creative graphic designer at INO Creators, 
                crafting extraordinary visual experiences through colorful and elegant designs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative animate-slide-in-left">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c96c3e8b?auto=format&fit=crop&w=500&q=80"
                  alt="Rumaan Meeran - Graphic Designer"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
