
import React from 'react';
import { Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-4">
              Rumaan<span className="text-yellow-400">.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creative graphic designer crafting extraordinary visual experiences 
              with colorful and elegant designs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.behance.net/meeranrumaan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <span className="font-bold text-sm">Be</span>
              </a>
              <a
                href="https://www.linkedin.com/in/meeran-rumaan-49b8b7337"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-yellow-400">Phone:</span>{' '}
                <a href="tel:+94789663595" className="hover:text-yellow-400 transition-colors">
                  +94 78 966 3595
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400">Company:</span> INO Creators
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400">Specialties:</span> Posters, Logos, Branding
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Rumaan Meeran. All rights reserved. | Designed with ❤️ and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
