import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactSinglePage = () => {
  const contactLinks = [
    { 
      icon: FaGithub, 
      label: 'GitHub', 
      url: 'https://github.com/bashry',
      username: '@bashry'
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/bashry',
      username: 'in/bashry'
    },
    { 
      icon: FaEnvelope, 
      label: 'Email', 
      url: 'mailto:bashry.dev@gmail.com',
      username: 'bashry.dev@gmail.com'
    },
    { 
      icon: FaFilePdf, 
      label: 'Resume', 
      url: '/resume.pdf',
      username: 'Download PDF'
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12"
        >
          I'm always open to discussing new projects, opportunities, or just having a chat about DevOps.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Send me a message
            </motion.h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Connect with me
            </motion.h2>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <link.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {link.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {link.username}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Let's build something together!
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Whether you need help with CI/CD pipelines, cloud infrastructure, 
                or containerization, I'm here to help bring your DevOps vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSinglePage;
