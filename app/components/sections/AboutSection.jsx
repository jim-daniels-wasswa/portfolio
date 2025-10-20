// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  const stats = [
    { value: '6+', label: 'Years', icon: '⚡' },
    { value: '20+', label: 'Projects', icon: '🚀' },
    { value: '3', label: 'Companies', icon: '🏢' },
    { value: '7', label: 'Mentored', icon: '🎓' }
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200/50 dark:border-purple-500/20">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a <span className="font-bold text-purple-600 dark:text-purple-400">full-stack developer</span> with 
            <span className="font-bold text-sky-600 dark:text-sky-400"> 6+ years</span> of experience, specializing in 
            creating scalable, user-focused applications across fintech and healthcare industries.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about <span className="font-bold text-blue-600 dark:text-blue-400">React, TypeScript</span>, and 
            modern web technologies. I love mentoring developers and driving initiatives that improve performance, 
            code quality, and developer productivity.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gradient-to-br from-purple-100 to-sky-100 dark:from-purple-900/30 dark:to-sky-900/30 rounded-2xl transform hover:scale-110 transition-transform"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;