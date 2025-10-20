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

// import { Briefcase, Github, Linkedin, Mail, MapPin, Moon, Phone, Rocket, Sparkles, Sun, Zap } from 'lucide-react';
// import React, { useEffect, useRef, useState } from 'react';

// const Portfolio = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className={isDark ? 'dark' : ''}>
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
//         {/* Animated Background */}
//         <div className="fixed inset-0 pointer-events-none">
//           <div
//             className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-sky-400/20 rounded-full blur-3xl"
//             style={{
//               left: `${mousePosition.x - 192}px`,
//               top: `${mousePosition.y - 192}px`,
//               transition: 'all 0.3s ease'
//             }}
//           />
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-sky-400 rounded-full opacity-30"
//               style={{
//                 left: `${(i * 5 + scrollY / 10) % 100}%`,
//                 top: `${(i * 7 + scrollY / 15) % 100}%`,
//                 animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
//                 animationDelay: `${i * 0.2}s`
//               }}
//             />
//           ))}
//         </div>

//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-20px); }
//           }
//           @keyframes gradient {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//           .gradient-text {
//             background: linear-gradient(90deg, #a855f7, #0ea5e9, #3b82f6, #a855f7);
//             background-size: 200% auto;
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             animation: gradient 3s linear infinite;
//           }
//         `}</style>

//         {/* Header */}
//         <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-200/50 dark:border-purple-500/20 z-50">
//           <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//             <div className="text-2xl font-bold gradient-text">JDW</div>
//             <div className="hidden md:flex space-x-8">
//               {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollTo(section)}
//                   className="capitalize text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all transform hover:scale-110"
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsDark(!isDark)}
//               className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-sky-400 hover:from-purple-500 hover:to-sky-500 text-white transition-all transform hover:scale-110 hover:rotate-12"
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </nav>
//         </header>

//         {/* Hero Section */}
//         <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center" ref={heroRef}>
//           <div className="container mx-auto max-w-6xl relative z-10">
//             <div className="text-center space-y-8">
//               <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-sky-500/20 backdrop-blur-sm border border-purple-300/50 dark:border-purple-500/50 rounded-full">
//                 <Sparkles size={20} className="text-purple-600 dark:text-purple-400" />
//                 <span className="text-purple-600 dark:text-purple-400 font-medium">Senior Front-End Developer</span>
//               </div>
              
//               <h1 className="text-6xl md:text-8xl font-black leading-tight">
//                 <div className="gradient-text" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
//                   Jim Daniels
//                 </div>
//                 <div className="gradient-text" style={{ transform: `translateY(${scrollY * -0.15}px)` }}>
//                   Wasswa
//                 </div>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Crafting <span className="font-bold text-purple-600 dark:text-purple-400">beautiful</span> and{' '}
//                 <span className="font-bold text-sky-600 dark:text-sky-400">scalable</span> web experiences
//                 with passion and precision
//               </p>

//               <div className="flex flex-wrap justify-center gap-4 mt-8">
//                 <button
//                   onClick={() => scrollTo('contact')}
//                   className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
//                 >
//                   <Rocket size={20} className="group-hover:rotate-45 transition-transform" />
//                   Let's Connect
//                 </button>
//                 <a
//                   href="https://linkedin.com/in/jimdanielswasswa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-500 hover:border-purple-600 dark:hover:border-purple-400 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   View LinkedIn
//                 </a>
//               </div>

//               {/* Floating Avatar */}
//               <div className="mt-16 flex justify-center">
//                 <div
//                   className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-400 via-sky-400 to-blue-400 p-1 shadow-2xl"
//                   style={{
//                     transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`,
//                     transition: 'transform 0.3s ease'
//                   }}
//                 >
//                   <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
//                     <div className="text-6xl md:text-8xl">👨‍💻</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="relative py-20 px-6">
//           <div className="container mx-auto max-w-6xl">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">About Me</h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
//             </div>
            
//             <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200/50 dark:border-purple-500/20">
//               <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//                 I'm a <span className="font-bold text-purple-600 dark:text-purple-400">full-stack developer</span> with 
//                 <span className="font-bold text-sky-600 dark:text-sky-400"> 6+ years</span> of experience, specializing in 
//                 creating scalable, user-focused applications across fintech and healthcare industries.
//               </p>
//               <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Passionate about <span className="font-bold text-blue-600 dark:text-blue-400">React, TypeScript</span>, and 
//                 modern web technologies. I love mentoring developers and driving initiatives that improve performance, 
//                 code quality, and developer productivity.
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//                 {[
//                   { value: '6+', label: 'Years', icon: '⚡' },
//                   { value: '20+', label: 'Projects', icon: '🚀' },
//                   { value: '3', label: 'Companies', icon: '🏢' },
//                   { value: '7', label: 'Mentored', icon: '🎓' }
//                 ].map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className="text-center p-6 bg-gradient-to-br from-purple-100 to-sky-100 dark:from-purple-900/30 dark:to-sky-900/30 rounded-2xl transform hover:scale-110 transition-transform"
//                   >
//                     <div className="text-4xl mb-2">{stat.icon}</div>
//                     <div className="text-3xl font-black gradient-text">{stat.value}</div>
//                     <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-20 px-6">
//           <div className="container mx-auto max-w-6xl">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Experience</h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
//             </div>

//             <div className="space-y-8">
//               {[
//                 {
//                   company: 'Deriv Sdn Bhd',
//                   period: 'Apr 2022 – Current',
//                   role: 'Senior Front-End Developer',
//                   color: 'from-purple-500 to-sky-500',
//                   achievements: [
//                     'Engineered core enhancements to a custom Flutter chart library, reducing feature testing time by 40%',
//                     'Automated theming and rebranding, cutting manual work from days to a single merge-ready PR',
//                     'Led migration to TypeScript and enforced linting for maintainability',
//                     'Spearheaded releases of Deriv\'s main system (app.deriv.com)'
//                   ]
//                 },
//                 {
//                   company: 'Integrated Intelligent Computer System Technologies',
//                   period: 'Jan 2019 – Jan 2020',
//                   role: 'Full-Stack Software Developer',
//                   color: 'from-blue-500 to-purple-500',
//                   achievements: [
//                     'Built real-time medication tracking systems, reducing errors by 50% in 20+ government hospitals',
//                     'Led a 9-member dev team and mentored 7 interns',
//                     'Eliminated race conditions in Java Spring with object-level locking'
//                   ]
//                 },
//                 {
//                   company: 'Crystal Clear Software Ltd',
//                   period: 'Jul 2017 – Dec 2018',
//                   role: 'Computer Programmer',
//                   color: 'from-sky-500 to-blue-500',
//                   achievements: [
//                     'Reduced login time by 83% by removing in-memory cursors',
//                     'Migrated legacy FoxPro system to C# ASP.NET Webforms',
//                     'Improved user experience through systematic bug fixing'
//                   ]
//                 }
//               ].map((job, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
//                 >
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className={`p-4 bg-gradient-to-r ${job.color} rounded-2xl`}>
//                       <Briefcase className="text-white" size={32} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl md:text-3xl font-black gradient-text">{job.company}</h3>
//                       <div className="text-lg font-bold text-gray-700 dark:text-gray-300 mt-1">{job.role}</div>
//                       <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.period}</div>
//                     </div>
//                   </div>
//                   <ul className="space-y-3">
//                     {job.achievements.map((achievement, i) => (
//                       <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
//                         <Zap size={20} className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-20 px-6">
//           <div className="container mx-auto max-w-6xl">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Skills</h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'Java', 'C#', 'SQL', 'Dart'], gradient: 'from-purple-500 to-sky-500' },
//                 { category: 'Frameworks', skills: ['Express.js', 'Spring MVC', 'Flutter', 'ASP.NET'], gradient: 'from-sky-500 to-blue-500' },
//                 { category: 'Libraries', skills: ['React', 'React Router', 'TanStack Query', 'MobX', 'Storybook'], gradient: 'from-blue-500 to-purple-500' },
//                 { category: 'Build Tools', skills: ['npm', 'webpack', 'Docker', 'Monorepos'], gradient: 'from-purple-500 to-sky-500' },
//                 { category: 'Databases', skills: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB'], gradient: 'from-sky-500 to-blue-500' },
//                 { category: 'Testing', skills: ['Jest', 'React Testing Library', 'ESLint', 'Git', 'GitHub Actions'], gradient: 'from-blue-500 to-purple-500' }
//               ].map((group, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
//                 >
//                   <div className={`inline-block px-4 py-2 bg-gradient-to-r ${group.gradient} text-white font-bold rounded-full mb-4`}>
//                     {group.category}
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {group.skills.map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-gradient-to-r from-purple-100 to-sky-100 dark:from-purple-900/30 dark:to-sky-900/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 px-6">
//           <div className="container mx-auto max-w-6xl">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Get In Touch</h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   { icon: Mail, label: 'Email', value: 'jimdanielswasswa@yahoo.com', href: 'mailto:jimdanielswasswa@yahoo.com', gradient: 'from-purple-500 to-sky-500' },
//                   { icon: Phone, label: 'Phone', value: '+60 14-519 7207', href: 'tel:+60145197207', gradient: 'from-sky-500 to-blue-500' },
//                   { icon: Linkedin, label: 'LinkedIn', value: 'jimdanielswasswa', href: 'https://linkedin.com/in/jimdanielswasswa', gradient: 'from-blue-500 to-purple-500' },
//                   { icon: github, label: 'GitHub', value: 'jimdanielswasswa', href: 'https://github.com/jimdanielswasswa', gradient: 'from-purple-500 to-sky-500' }
//                 ].map((contact, idx) => (
//                   <a
//                     key={idx}
//                     href={contact.href}
//                     target={contact.href.startsWith('http') ? '_blank' : undefined}
//                     rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                     className="flex items-center gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
//                   >
//                     <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl`}>
//                       <contact.icon className="text-white" size={24} />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</div>
//                       <div className="font-bold text-gray-900 dark:text-gray-100">{contact.value}</div>
//                     </div>
//                   </a>
//                 ))}
//               </div>

//               <div className="mt-8 p-8 bg-gradient-to-r from-purple-500/20 to-sky-500/20 backdrop-blur-lg rounded-3xl text-center border border-purple-300/50 dark:border-purple-500/50">
//                 <MapPin className="inline-block text-purple-600 dark:text-purple-400 mb-3" size={32} />
//                 <div className="text-xl font-bold gradient-text">Cyberjaya, Selangor, Malaysia</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-8 px-6 border-t border-purple-200/50 dark:border-purple-500/20">
//           <div className="container mx-auto max-w-6xl text-center">
//             <p className="gradient-text font-bold">&copy; 2025 Jim Daniels Wasswa. Crafted with passion.</p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;