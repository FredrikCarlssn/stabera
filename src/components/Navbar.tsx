import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../img/stabera-coin.png';
import textLogo from '../img/stabera-text-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a2236]/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-20 border-b border-cyan-900">
      <div className="container-custom py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Stabera Logo"
            className="h-8 w-8 mr-2 transition-all duration-300 hover:drop-shadow-glow"
            style={{ filter: 'drop-shadow(0 0 8px #00e0ff66)' }}
          />
          <img
            src={textLogo}
            alt="Stabera Text Logo"
            className="h-6 md:h-7 w-auto object-contain select-none"
            style={{ marginTop: 2 }}
          />
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/90 font-medium px-2 py-1 transition-colors duration-200 hover:text-cyan-300 focus:text-cyan-300"
            >
              <span className="z-10 relative">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-green-400 text-[#0a2236] shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none"
          >
            Contact Us
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-cyan-300 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a2236]/95 backdrop-blur-md border-t border-cyan-900 pb-4 px-4 space-y-4">
          {['Features', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/90 font-medium py-2 border-b border-cyan-800 hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center mt-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-green-400 text-[#0a2236] shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 