'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SkillsCloud from './components/SkillsCloud';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-transparent font-mono text-amber-900 dark:text-amber-100 relative transition-colors duration-300">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 glass-section" />
        
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
              Builder who Ships
            </motion.p>
            <motion.p 
              className="text-lg mb-8 font-mono tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Jersey City | pashamsaisriharshareddy@gmail.com | +1 (201) 241-9415
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-amber-900 dark:bg-amber-100 text-amber-50 dark:text-amber-900 rounded-lg font-mono hover:bg-amber-800 dark:hover:bg-amber-200 transition-all duration-300"
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
            <FaGithub className="text-2xl text-amber-900 dark:text-amber-100 hover:text-amber-800 dark:hover:text-amber-200 transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/harshareddy018/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-amber-900 dark:text-amber-100 hover:text-amber-800 dark:hover:text-amber-200 transition-colors" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 glass-section" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 font-mono tracking-tight">About Me</h2>
            <p className="text-lg leading-relaxed font-mono mb-8">
              Builder who Ships. Published Chrome extension, built iOS/Mac integration app, optimized fraud detection with Graph
              Neural Networks, scaled ML systems to 25M+ records. Data scientist with product instincts. Strong in NLP, graph
              learning, production ML. The kind of person who builds things people actually use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 glass-section" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono tracking-tight">Skills</h2>
          <SkillsCloud />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 glass-section" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Context Transfer Extension",
                description: "Built Chrome extension that actually solves AI rate limiting problems. Transfers context between different AI tools seamlessly. Published to Chrome Web Store. People use it daily.",
                github: "https://github.com/harshareddy832/ai-context-transfer",
                tech: ["JavaScript", "Node.js", "Chrome APIs"],
                extra: "https://chromewebstore.google.com/detail/ai-context-transfer/liochjpjaidlamfcijjifgdjmocemfep?authuser=0&hl=en"
              },
              {
                title: "Fraud Detection Engine",
                description: "Hybrid model combining GNNs + XGBoost for transaction analysis. 93% precision, 25% fewer false positives than baseline. Graph-based learning on transaction networks.",
                github: "https://github.com/harshareddy832/fraudetec",
                tech: ["PyTorch", "XGBoost", "Graph Neural Networks"]
              },
              {
                title: "Movie Recommender at Scale",
                description: "Production ALS system handling MovieLens 25M dataset. Multi-node GCP deployment with cold-start optimization. RMSE < 0.8, sub-second latency.",
                github: "https://github.com/harshareddy832/movie_recommender",
                tech: ["Apache Spark", "GCP", "PySpark"]
              },
              {
                title: "iOS/macOS Trackpad App",
                description: "Wireless trackpad with 120fps multi-touch gesture recognition. System-level Mac integration via CGEvent APIs. 11 development phases and ongoing.",
                github: "https://github.com/harshareddy832/TrackPadApp/tree/main",
                tech: ["Swift", "JavaScript", "WebSockets"]
              },
              {
                title: "AI Resume Platform",
                description: "Semantic resume-job matching with automated optimization. Combined with separate resume parsing system for complete hiring pipeline. 40% faster job applications.",
                github: "https://github.com/harshareddy832/JobMate",
                tech: ["LangChain", "OpenAI API", "NLP"]
              },
              {
                title: "Bitcoin Trading System",
                description: "Real-time crypto analytics with multi-exchange data integration. Automated backtesting + risk management framework. Full trading pipeline from data collection to execution.",
                github: "https://github.com/harshareddy832/btc-trading-bot",
                tech: ["Python", "Financial APIs", "Selenium"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-amber-800/30 dark:hover:border-amber-200/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-3 font-mono tracking-tight">{project.title}</h3>
                <p className="text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono text-sm"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                  {project.extra && (
                    <a
                      href={project.extra}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono text-sm"
                    >
                      🏪 Chrome Store
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 glass-section" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono tracking-tight">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Project Coordinator",
                company: "Stevens Institute of Technology",
                period: "Sept 2024 – May 2025",
                description: "Ran operations for 12+ high-profile events. Built tools that cut issue resolution time by 60%. Data analysis → leadership insights. Small team, real impact."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold font-mono tracking-tight">{exp.title}</h3>
                <p className="text-amber-700 dark:text-amber-300 font-mono mb-2">{exp.company} | {exp.period}</p>
                <p className="leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section id="looking-for" className="py-20 relative">
        <div className="absolute inset-0 glass-section" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 font-mono tracking-tight">What I'm Looking For</h2>
            <p className="text-lg leading-relaxed font-mono">
              Places that build things people want. ML/NLP/backend roles where I can own meaningful pieces of hard problems.
              Teams that move fast and measure what matters. Products with real users, real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Theme Toggle */}
      <ThemeToggle />
    </main>
  );
}