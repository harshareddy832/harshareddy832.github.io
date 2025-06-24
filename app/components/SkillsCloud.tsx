'use client';

import { motion } from 'framer-motion';
import { SiPytorch, SiTensorflow, SiScikitlearn, SiApachespark, SiKubernetes, SiGooglecloud } from 'react-icons/si';
import { FaPython, FaReact, FaDatabase, FaBrain, FaCode, FaServer, FaChartLine } from 'react-icons/fa';

const skills = [
  { name: 'PyTorch', icon: <SiPytorch />, category: 'ML/DL', description: 'Deep Learning Framework' },
  { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ML/DL', description: 'Neural Network Development' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, category: 'ML/DL', description: 'Machine Learning Algorithms' },
  { name: 'Python', icon: <FaPython />, category: 'Languages', description: 'Data Science & Automation' },
  { name: 'SQL', icon: <FaDatabase />, category: 'Languages', description: 'Database Management' },
  { name: 'TypeScript', icon: <FaCode />, category: 'Languages', description: 'Type-Safe Development' },
  { name: 'React', icon: <FaReact />, category: 'Languages', description: 'Frontend Development' },
  { name: 'Apache Spark', icon: <SiApachespark />, category: 'Big Data', description: 'Big Data Processing' },
  { name: 'GCP', icon: <SiGooglecloud />, category: 'Big Data', description: 'Cloud Infrastructure' },
  { name: 'AWS', icon: <FaServer />, category: 'Big Data', description: 'Cloud Services' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'Big Data', description: 'Container Orchestration' },
  { name: 'XGBoost', icon: <FaBrain />, category: 'ML/DL', description: 'Gradient Boosting' },
];

const SkillsCloud = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6">
                <div className="text-3xl text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                  <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">{skill.description}</p>
                </div>
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud; 