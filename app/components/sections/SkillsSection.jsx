// components/SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  const skillGroups = [
    { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'Java', 'C#', 'SQL', 'Dart'], gradient: 'from-purple-500 to-sky-500' },
    { category: 'Frameworks', skills: ['Express.js', 'Spring MVC', 'Flutter', 'ASP.NET'], gradient: 'from-sky-500 to-blue-500' },
    { category: 'Libraries', skills: ['React', 'React Router', 'TanStack Query', 'MobX', 'Storybook'], gradient: 'from-blue-500 to-purple-500' },
    { category: 'Build Tools', skills: ['npm', 'webpack', 'Docker', 'Monorepos'], gradient: 'from-purple-500 to-sky-500' },
    { category: 'Databases', skills: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB'], gradient: 'from-sky-500 to-blue-500' },
    { category: 'Testing', skills: ['Jest', 'React Testing Library', 'ESLint', 'Git', 'GitHub Actions'], gradient: 'from-blue-500 to-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${group.gradient} text-white font-bold rounded-full mb-4`}>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-sky-100 dark:from-purple-900/30 dark:to-sky-900/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;