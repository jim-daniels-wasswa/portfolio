import { Briefcase, Zap } from 'lucide-react';

// components/ExperienceSection.jsx
import React from 'react';

const ExperienceSection = () => {
  const jobs = [
    {
      company: 'Deriv Sdn Bhd',
      period: 'Apr 2022 – Current',
      role: 'Senior Front-End Developer',
      color: 'from-purple-500 to-sky-500',
      achievements: [
        'Engineered core enhancements to a custom Flutter chart library, reducing feature testing time by 40%',
        'Automated theming and rebranding, cutting manual work from days to a single merge-ready PR',
        'Led migration to TypeScript and enforced linting for maintainability',
        'Spearheaded releases of Deriv\'s main system (app.deriv.com)'
      ]
    },
    {
      company: 'Integrated Intelligent Computer System Technologies',
      period: 'Jan 2019 – Jan 2020',
      role: 'Full-Stack Software Developer',
      color: 'from-blue-500 to-purple-500',
      achievements: [
        'Built real-time medication tracking systems, reducing errors by 50% in 20+ government hospitals',
        'Led a 9-member dev team and mentored 7 interns',
        'Eliminated race conditions in Java Spring with object-level locking'
      ]
    },
    {
      company: 'Crystal Clear Software Ltd',
      period: 'Jul 2017 – Dec 2018',
      role: 'Computer Programmer',
      color: 'from-sky-500 to-blue-500',
      achievements: [
        'Reduced login time by 83% by removing in-memory cursors',
        'Migrated legacy FoxPro system to C# ASP.NET Webforms',
        'Improved user experience through systematic bug fixing'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-r ${job.color} rounded-2xl`}>
                  <Briefcase className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black gradient-text">{job.company}</h3>
                  <div className="text-lg font-bold text-gray-700 dark:text-gray-300 mt-1">{job.role}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.period}</div>
                </div>
              </div>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Zap size={20} className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;