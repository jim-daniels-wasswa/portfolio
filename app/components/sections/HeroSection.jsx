// components/HeroSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center" ref={heroRef}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-sky-500/20 backdrop-blur-sm border border-purple-300/50 dark:border-purple-500/50 rounded-full">
            <Sparkles size={20} className="text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium">Senior Front-End Developer</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <div className="gradient-text" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
              Jim Daniels
            </div>
            <div className="gradient-text" style={{ transform: `translateY(${scrollY * -0.15}px)` }}>
              Wasswa
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="font-bold text-purple-600 dark:text-purple-400">beautiful</span> and{' '}
            <span className="font-bold text-sky-600 dark:text-sky-400">scalable</span> web experiences
            with passion and precision
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Rocket size={20} className="group-hover:rotate-45 transition-transform" />
              Let's Connect
            </button>
            <a
              href="https://linkedin.com/in/jimdanielswasswa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-500 hover:border-purple-600 dark:hover:border-purple-400 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              View LinkedIn
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-400 via-sky-400 to-blue-400 p-1 shadow-2xl"
              style={{
                transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-6xl md:text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;