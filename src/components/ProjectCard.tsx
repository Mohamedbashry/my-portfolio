import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card group"
    >
      {/* Project Image/Placeholder */}
      <div
        className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-4 overflow-hidden bg-cover bg-center"
        style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
          {project.title.slice(0, 1)}
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
        {project.role}
      </p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              {link.type === 'repo' ? <FaGithub className="w-5 h-5" /> : <FaExternalLinkAlt className="w-4 h-4" />}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
