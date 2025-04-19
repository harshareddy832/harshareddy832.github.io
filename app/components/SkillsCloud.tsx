'use client';

import { motion } from 'framer-motion';
import { SiPytorch, SiTensorflow, SiScikitlearn, SiApachespark, SiKubernetes, SiGooglecloud } from 'react-icons/si';
import { FaPython, FaReact, FaDatabase, FaBrain, FaCode, FaServer, FaChartLine } from 'react-icons/fa';

const skills = [
  { name: 'PyTorch', icon: <SiPytorch />, category: 'ML', description: 'Deep Learning Framework' },
  { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ML', description: 'Neural Network Development' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, category: 'ML', description: 'Machine Learning Algorithms' },
  { name: 'Python', icon: <FaPython />, category: 'Dev', description: 'Data Science & Automation' },
  { name: 'SQL', icon: <FaDatabase />, category: 'Dev', description: 'Database Management' },
  { name: 'React', icon: <FaReact />, category: 'Dev', description: 'Frontend Development' },
  { name: 'Apache Spark', icon: <SiApachespark />, category: 'Infra', description: 'Big Data Processing' },
  { name: 'GCP', icon: <SiGooglecloud />, category: 'Infra', description: 'Cloud Infrastructure' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'Infra', description: 'Container Orchestration' },
  { name: 'Data Analysis', icon: <FaChartLine />, category: 'Analytics', description: 'Statistical Insights' },
  { name: 'Statistical Modeling', icon: <FaBrain />, category: 'Analytics', description: 'Predictive Analytics' },
  { name: 'Time Series', icon: <FaCode />, category: 'Analytics', description: 'Temporal Data Analysis' },
];

const SkillsCloud = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6">
                <div className="text-3xl text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">{skill.name}</h3>
                  <p className="text-sm tracking-wide text-gray-500">{skill.description}</p>
                </div>
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gray-50 text-xs font-medium tracking-wide text-gray-600">
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