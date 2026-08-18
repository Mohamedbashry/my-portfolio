import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { contactLinks } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = { GitHub: FaGithub, LinkedIn: FaLinkedin, Email: FaEnvelope };
  const socialLinks = contactLinks.filter((link) => link.label !== 'Resume');

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Mohamed Bashry. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
              );
            })}
          </div>

          {/* Built With */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
