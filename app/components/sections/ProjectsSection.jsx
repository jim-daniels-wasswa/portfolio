const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="py-20 px-6 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 dark:from-gray-800/30 dark:via-purple-800/10 dark:to-blue-800/10"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">
                        Featured Projects
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Deriv Trading Platform",

                            company: "Deriv Sdn Bhd",

                            description:
                                "Enhanced custom Flutter chart library and led TypeScript migration for the main trading platform serving millions of users globally.",

                            image: "/assets/images/deriv-logo.png",

                            tags: ["React", "TypeScript", "Flutter", "MobX"],

                            link: "https://app.deriv.com",
                            linkLabel: "Live Trading Platform",

                            gradient: "from-purple-500 to-pink-500",
                        },
                        {
                            title: "Hospital Medication Tracking System",

                            company: "IICS",

                            description:
                                "Developed and deployed a secure, real-time medication tracking system across 20+ government hospitals, reducing medication errors by 50% and improving operational visibility for medical staff.",

                            image: "/assets/images/hospital-system.png",

                            tags: [
                                "Java",
                                "Spring",
                                "PostgreSQL",
                                "Real-time System",
                            ],

                            link: "https://iicstechnologies.com/website/projects/projectsingle/2",

                            linkLabel:
                                "Private Healthcare System (Internal Access via APNs)",

                            gradient: "from-blue-500 to-purple-500",
                        },

                        {
                            title: "Legacy System Migration",

                            company: "Crystal Clear Software",

                            description:
                                "Successfully migrated legacy FoxPro system to modern C# ASP.NET architecture, improving performance and user experience.",

                            image: "/assets/images/legacy-migration.png",

                            tags: ["C#", "ASP.NET", "MSSQL", "Migration"],

                            link: "https://loanperformer.com/webapp.php",

                            linkLabel:
                                "Product Page (WebApp under Development)",

                            gradient: "from-purple-500 to-pink-500",
                        },

                        {
                            title: "Legacy System Maintenance",
                            company: "Crystal Clear Software",
                            description:
                                "Maintained and enhanced a legacy FoxPro desktop application by fixing critical bugs, integrating new features, and optimizing database connections with MSSQL—improving reliability and extending the system’s lifespan.",
                            image: "/assets/images/legacy-migration.png",
                            tags: [
                                "FoxPro",
                                "SQL Server",
                                "Desktop Application",
                                "Legacy Maintenance",
                            ],
                            link: "https://loanperformer.com/clientportal.php",
                            linkLabel:
                                "Product Page (Client Portal for Downloads)",
                            gradient: "from-purple-500 to-pink-500",
                        },
                    ].map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all duration-300"
                        >
                            {/* Project Image */}

                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`text-6xl opacity-20`}>
                                        🚀
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-sm font-medium">
                                        {project.link
                                            ? "🔗 View Live Project"
                                            : "🔒 Private Project"}
                                    </div>
                                </div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-0"
                                    onError={(e) =>
                                        (e.target.style.display = "none")
                                    }
                                />
                            </div>

                            {/* Project Details */}

                            <div className="p-6">
                                <div
                                    className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full mb-3`}
                                >
                                    {project.company}
                                </div>

                                <h3 className="text-2xl font-black gradient-text mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:gap-3 transition-all"
                                    >
                                        {project.linkLabel}

                                        <span className="text-lg">→</span>
                                    </a>
                                ) : (
                                    <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 font-bold">
                                        {project.linkLabel}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
