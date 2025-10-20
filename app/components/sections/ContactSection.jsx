import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import React from 'react';
import { SiGithub } from 'react-icons/si';

const ContactSection = () => {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'jimdanielswasswa@yahoo.com', href: 'mailto:jimdanielswasswa@yahoo.com', gradient: 'from-purple-500 to-sky-500' },
    { icon: Phone, label: 'Phone', value: '+60 14-519 7207', href: 'tel:+60145197207', gradient: 'from-sky-500 to-blue-500' },
    { icon: Linkedin, label: 'LinkedIn', value: 'jimdanielswasswa', href: 'https://linkedin.com/in/jimdanielswasswa', gradient: 'from-blue-500 to-purple-500' },
    { icon: SiGithub, label: 'GitHub', value: 'jimdanielswasswa', href: 'https://github.com/jim-daniels-wasswa', gradient: 'from-purple-500 to-sky-500' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-sky-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-200/50 dark:border-purple-500/20 transform hover:scale-105 transition-all"
              >
                <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl`}>
                  <contact.icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</div>
                  <div className="font-bold text-gray-900 dark:text-gray-100">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-8 bg-gradient-to-r from-purple-500/20 to-sky-500/20 backdrop-blur-lg rounded-3xl text-center border border-purple-300/50 dark:border-purple-500/50">
            <MapPin className="inline-block text-purple-600 dark:text-purple-400 mb-3" size={32} />
            <div className="text-xl font-bold gradient-text">Cyberjaya, Selangor, Malaysia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;