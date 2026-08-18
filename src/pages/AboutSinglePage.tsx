import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { FiCode } from 'react-icons/fi';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAmazonaws,
  SiBootstrap,
  SiCplusplus,
  SiCanva,
  SiCsharp,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJenkins,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiTerraform,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { certifications, profile, skillGroups } from '../data/portfolio';

const skillIcons: Record<string, IconType> = {
  'C#': SiCsharp, 'PHP': SiPhp, 'Python': SiPython, 'C++': SiCplusplus,
  'JavaScript': SiJavascript, 'React.js': SiReact, 'HTML5': SiHtml5, 'Bootstrap': SiBootstrap,
  'MySQL': SiMysql, 'AWS': SiAmazonaws, 'Docker': SiDocker, 'Kubernetes': SiKubernetes,
  'Jenkins': SiJenkins, 'Terraform': SiTerraform, 'Git': SiGit, 'GitHub': SiGithub,
  'Linux (Ubuntu)': SiLinux, 'Figma': SiFigma, 'Adobe Illustrator': SiAdobeillustrator,
  'Adobe Photoshop': SiAdobephotoshop, 'Canva': SiCanva,
};

const AboutSinglePage = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h1>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/Bashryimg.jpg" 
                alt="Mohamed Bashry" 
                className="w-full h-full object-cover object-[100%_70%]"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {profile.aboutTitle}
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Core Skills & Technologies
          </h2>
          <div className="space-y-12">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5">{group.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {group.skills.map((skill, index) => (
                    <SkillBadge key={skill} name={skill} icon={skillIcons[skill] ?? FiCode} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((certification) => (
              <div key={certification} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-300">
                {certification}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSinglePage;
