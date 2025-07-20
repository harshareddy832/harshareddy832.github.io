'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPython, FaReact, FaDatabase, FaGraduationCap, FaBriefcase, FaCertificate, FaBrain, FaCode, FaServer, FaChartLine, FaMoon, FaSun } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiApachespark, SiKubernetes, SiGooglecloud } from 'react-icons/si';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import SkillsCloud from './components/SkillsCloud';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';

const projects = [
  {
    title: 'Scalable Movie Recommendation System',
    description: 'Designed and built a scalable recommendation system using ALS on MovieLens 25M, deployed locally and to multi-node GCP Dataproc clusters. Incorporated Clustering and relevance scoring and diversity optimisation. Tuned ALS hyperparameters and Spark executor configs to process full dataset with RMSE under 0.8. Developed fallback strategies for cold-start handling and a built-in diversity scoring using cosine metrics.',
    technologies: ['Apache Spark', 'GCP', 'PySpark', 'MLlib', 'Dataproc', 'ALS'],
    githubUrl: '#',
  },
  {
    title: 'Fraud Detection System',
    description: 'Built a hybrid fraud detection model with GNNs for transaction graphs and XGBoost for tabular classification. Boosted fraud precision to 93%, cutting false positives by 25% through ensemble fusion.',
    technologies: ['Python', 'PyTorch', 'XGBoost', 'GNN', 'PyTorch Geometric'],
    githubUrl: '#',
  },
  {
    title: 'JobMate - Resume Tailoring & Cover Letter Generator',
    description: 'Developed an interactive resume and cover letter generator using NLP techniques and GPT for semantic matching and keyword fit. Used Streamlit to deploy a sleek, user-friendly app that reduces job application overhead.',
    technologies: ['Python', 'Streamlit', 'OpenAI API', 'NLP'],
    githubUrl: '#',
  },
  {
    title: 'Real Estate Investment Optimiser',
    description: 'Identified 12-18% undervalued NYC properties (p<0.001) through analysis of 4,801 listings and 17-variable modelling. Engineered a spatial binning approach over latitude and longitude features to aggregate property-level data into geographic grids, producing interpretable bin maps that visually resembled NYC\'s structure and enabled trend analysis.',
    technologies: ['Python', 'Statistical Analysis', 'Data Visualization', 'Spatial Analysis'],
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Built a fully responsive portfolio to showcase projects, resume, and contact info using React TypeScript. Deployed on Github Pages with custom component library and mobile-first design.',
    technologies: ['TypeScript', 'React', 'Vite', 'CSS', 'Github Pages'],
    githubUrl: '#',
  },
];

const skills = [
  { name: 'PyTorch', level: 95, icon: <SiPytorch /> },
  { name: 'TensorFlow', level: 90, icon: <SiTensorflow /> },
  { name: 'Scikit-learn', level: 95, icon: <SiScikitlearn /> },
  { name: 'Python', level: 95, icon: <FaPython /> },
  { name: 'SQL', level: 90, icon: <FaDatabase /> },
  { name: 'React', level: 85, icon: <FaReact /> },
  { name: 'Apache Spark', level: 90, icon: <SiApachespark /> },
  { name: 'GCP', level: 85, icon: <SiGooglecloud /> },
  { name: 'Kubernetes', level: 80, icon: <SiKubernetes /> },
  { name: 'AWS', level: 85, icon: <FaServer /> },
  { name: 'TypeScript', level: 80, icon: <FaCode /> },
  { name: 'XGBoost', level: 90, icon: <FaBrain /> },
];

const certifications = [
  {
    title: 'Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2024',
    skills: ['AWS Cloud Infrastructure', 'Cloud Computing Fundamentals', 'AWS Services']
  },
  {
    title: 'Data Engineering',
    issuer: 'AWS Academy',
    year: '2024',
    skills: ['Data Pipeline Design', 'AWS Data Services', 'ETL Processes']
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford Online',
    year: '2021',
    skills: ['Advanced Regression Analysis', 'Decision Tree Optimization', 'Bias/Variance Control']
  },
  {
    title: 'Neural Networks & Deep Learning',
    issuer: 'Deeplearning.ai',
    year: '2021',
    skills: ['Neural Networks Architecture', 'Hyperparameter Tuning', 'Vectorization Techniques']
  },
  {
    title: 'TensorFlow for AI/ML/DL',
    issuer: 'Deeplearning.ai',
    year: '2021',
    skills: ['Production ML Systems', 'Custom Model Architectures', 'TF Lite Deployment']
  }
];

const experience = [
  {
    role: 'Machine Learning Engineer',
    company: 'Stevens Institute of Technology (Projects)',
    period: 'Sep 2023 - May 2025',
    achievements: [
      'Engineered and deployed ML pipelines for recommender systems and predictive analytics using Spark and GCP.',
      'Achieved 97.6% forecasting accuracy in a SARIMA-based time-series model applied to institutional datasets.',
      'Built GPT-powered tooling that dynamically aligns resumes to job descriptions, improving targeting efficiency.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: 'Feb 2022 - May 2022',
    achievements: [
      'Developed 3+ portfolio websites for photographers, increasing client visibility significantly.',
      'Improved user engagement and traffic by 20% through responsive design and SEO optimisation.'
    ]
  },
  {
    role: 'Event Operations',
    company: 'Debaun Student Staff, Stevens Institute of Technology',
    period: 'Sep 2024 - May 2025',
    achievements: [
      'Directed high-impact event setups (12+) under time-critical conditions with zero execution failures.',
      'Developed real-time response play-books, reducing issue resolution time by over 60%.'
    ]
  }
];

const education = [
  {
    degree: 'MS in Data Science',
    institution: 'Stevens Institute of Technology',
    period: '2023-2025',
    gpa: '3.6/4'
  },
  {
    degree: 'B.Tech in Electrical & Computer Engineering',
    institution: 'Amrita Vishwa Vidyapeetham',
    period: '2019-2023'
  }
];

const skillCategories = [
  {
    title: 'Languages & Tools',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 95, icon: <FaPython /> },
      { name: 'SQL', level: 90, icon: <FaDatabase /> },
      { name: 'TypeScript', level: 80, icon: <FaCode /> },
      { name: 'React', level: 85, icon: <FaReact /> },
    ]
  },
  {
    title: 'ML/DL Frameworks',
    icon: <FaBrain />,
    skills: [
      { name: 'PyTorch', level: 95, icon: <SiPytorch /> },
      { name: 'TensorFlow', level: 90, icon: <SiTensorflow /> },
      { name: 'Scikit-learn', level: 95, icon: <SiScikitlearn /> },
      { name: 'XGBoost', level: 90, icon: <FaBrain /> },
    ]
  },
  {
    title: 'Big Data & Cloud',
    icon: <FaServer />,
    skills: [
      { name: 'Apache Spark', level: 90, icon: <SiApachespark /> },
      { name: 'GCP', level: 85, icon: <SiGooglecloud /> },
      { name: 'AWS', level: 85, icon: <FaServer /> },
      { name: 'Kubernetes', level: 80, icon: <SiKubernetes /> },
    ]
  },
  {
    title: 'Modeling & Evaluation',
    icon: <FaChartLine />,
    skills: [
      { name: 'ALS', level: 90 },
      { name: 'GNNs', level: 85 },
      { name: 'SARIMA', level: 90 },
      { name: 'A/B Testing', level: 85 },
    ]
  }
];

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-dark ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </motion.button>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-black font-mono text-gray-800 dark:text-gray-200 relative overflow-hidden transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-[2px]" />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-7xl font-bold mb-4 font-mono tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harsha Pasham
            </motion.h1>
            <motion.p 
              className="text-2xl mb-4 font-mono tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Machine Learning Engineer / AI Systems Developer
            </motion.p>
            <motion.p 
              className="text-lg mb-8 font-mono tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Jersey City | pashamsaisriharshareddy@gmail.com | +1 (201) 241-9415 | Linkedin | Github | Portfolio
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-mono hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/harshareddy832"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/harshareddy018/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-white/15 dark:bg-black/15 backdrop-blur-[3px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 font-mono tracking-tight">About Me</h2>
            <p className="text-lg mb-6 font-mono tracking-wide leading-relaxed">
              Machine Learning Engineer with proven experience building and scaling AI and NLP systems across GCP, AWS, and on-prem environments. Specialised in designing robust, modular pipelines for recommendation, fraud detection, and search personalisation. Adept at turning research concepts into production-ready solutions using PySpark, TensorFlow, and cloud orchestration.
            </p>
            <p className="text-lg mb-8 font-mono tracking-wide leading-relaxed">
              Highly collaborative, deadline-driven, and focused on building ML systems that deliver measurable business value. Experienced in end-to-end ML pipelines with strong proficiency in PyTorch, TensorFlow, and advanced data processing techniques.
            </p>

            {/* Experience Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2 tracking-tight">
                <FaBriefcase className="text-black dark:text-white" /> Experience
              </h3>
              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-6 p-6 rounded-lg border border-black/15 dark:border-white/15 hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer bg-white/30 dark:bg-gray-900/30 backdrop-blur-[4px] shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <h4 className="text-xl font-semibold font-mono tracking-wide">{exp.role}</h4>
                  <p className="text-black/60 dark:text-white/60 font-mono tracking-wide">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside mt-2 text-black/80 dark:text-white/80 font-mono tracking-wide">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2 tracking-tight">
                <FaGraduationCap className="text-black dark:text-white" /> Education
              </h3>
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="mb-4 p-6 rounded-lg border border-black/15 dark:border-white/15 hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer bg-white/30 dark:bg-gray-900/30 backdrop-blur-[4px] shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <h4 className="text-xl font-semibold font-mono tracking-wide">{edu.degree}</h4>
                  <p className="text-black/60 dark:text-white/60 font-mono tracking-wide">{edu.institution} | {edu.period}</p>
                  {edu.gpa && <p className="text-black/80 dark:text-white/80 font-mono tracking-wide">GPA: {edu.gpa}</p>}
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2 tracking-tight">
                <FaCertificate className="text-black dark:text-white" /> Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-lg border border-black/15 dark:border-white/15 hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer bg-white/30 dark:bg-gray-900/30 backdrop-blur-[4px] shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaBrain className="text-black dark:text-white text-xl" />
                      <h4 className="text-xl font-semibold font-mono tracking-wide">{cert.title}</h4>
                    </div>
                    <p className="text-black/60 dark:text-white/60 mb-2 font-mono tracking-wide">{cert.issuer} | {cert.year}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full text-sm font-mono tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-white/15 dark:bg-black/15 backdrop-blur-[3px]" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono tracking-tight">Skills</h2>
          <SkillsCloud />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-white/15 dark:bg-black/15 backdrop-blur-[3px]" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-black/15 dark:border-white/15 hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer bg-white/30 dark:bg-gray-900/30 backdrop-blur-[4px] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaCode className="text-black dark:text-white text-xl" />
                  <h4 className="text-xl font-semibold font-mono tracking-wide">{project.title}</h4>
                </div>
                <div className="space-y-2">
                  {project.description.split('.').filter(Boolean).map((point, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2 text-black/80 dark:text-white/80 font-mono tracking-wide"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-black dark:text-white text-lg">•</span>
                      <span>{point.trim()}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full text-sm font-mono tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Toggle */}
      <ThemeToggle />
    </main>
  );
} 
