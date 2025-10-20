import { Moon, Sun } from 'lucide-react';

// components/Header.jsx
import React from 'react';

const Header = ({ isDark, setIsDark }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-200/50 dark:border-purple-500/20 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">JDW</div>
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all transform hover:scale-110"
            >
              {section}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-sky-400 hover:from-purple-500 hover:to-sky-500 text-white transition-all transform hover:scale-110 hover:rotate-12"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;