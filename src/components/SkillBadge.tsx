import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  index: number;
}

const SkillBadge = ({ name, icon: Icon, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400"
    >
      <Icon className="w-12 h-12 mb-3 text-primary-600 dark:text-primary-400" />
      <span className="text-gray-900 dark:text-white font-medium text-center">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillBadge;
