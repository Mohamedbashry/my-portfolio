import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGithubactions,
  SiPython,
  SiGnubash,
  SiAmazonaws,
  SiMicrosoftazure,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiGit,
} from 'react-icons/si';

const AboutSinglePage = () => {
  const skills = [
    { name: 'Docker', icon: SiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Terraform', icon: SiTerraform },
    { name: 'Ansible', icon: SiAnsible },
    { name: 'Jenkins', icon: SiJenkins },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Python', icon: SiPython },
    { name: 'Bash', icon: SiGnubash },
    { name: 'AWS', icon: SiAmazonaws },
    { name: 'Azure', icon: SiMicrosoftazure },
    { name: 'Prometheus', icon: SiPrometheus },
    { name: 'Grafana', icon: SiGrafana },
    { name: 'Linux', icon: SiLinux },
    { name: 'Git', icon: SiGit },
  ];

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
                className="w-full h-full object-cover"
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
              DevOps Engineer & Cloud Enthusiast
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                Iam passionate about bridging the gap between development and operations, 
                creating seamless workflows that empower teams to deliver software faster 
                and more reliably.
              </p>
              
              <p>
                With expertise in containerization, orchestration, and infrastructure automation, 
                I specialize in building and maintaining robust CI/CD pipelines that transform 
                how organizations deploy and scale their applications.
              </p>
              
              <p>
                My focus is on reliability, scalability, and developer productivity. I believe 
                in automating repetitive tasks, implementing infrastructure as code, and 
                creating monitoring solutions that provide actionable insights.
              </p>
              
              <p>
                When I'm not optimizing deployment pipelines or configuring Kubernetes clusters, 
                I enjoy exploring new cloud technologies and contributing to open-source DevOps tools.
              </p>
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSinglePage;
