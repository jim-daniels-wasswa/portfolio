'use client';

import React, { useState } from 'react';

import AboutSection from './components/sections/AboutSection';
import AnimatedBackground from './components/sections/AnimatedBackground';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
        <AnimatedBackground />
        <Header isDark={isDark} setIsDark={setIsDark} />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;