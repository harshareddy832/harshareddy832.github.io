'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Navbar from './components/Navbar';
import SkillsCloud from './components/SkillsCloud';
import ThemeToggle from './components/ThemeToggle';

interface Project {
  title: string;
  description: string;
  github: string;
  tech: string[];
  extra?: string;
  demo?: string;
  vimeoId?: string;
}

export default function Home() {
  const { theme } = useTheme();
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
                title: "Codebase Intelligence Agent",
                description: "Built AI system that reads entire codebase like a senior developer for IBM TechXchange hackathon. Multi-agent architecture using IBM Granite 3.3 processes complete repository context, not just metadata. Saving 60% time developers spend on understanding unfamiliar code.",
                github: "https://github.com/harshareddy832/codewhisperer",
                tech: ["IBM watsonx.ai", "Node.js", "Tree-sitter", "Multi-Agent Architecture"],
                demo: "https://vimeo.com/1110690654",
                vimeoId: "1110690654"
              },
              {
                title: "Fraud Detection Engine",
                description: "Hybrid model combining GNNs + XGBoost for transaction analysis. 93% precision, 25% fewer false positives than baseline. Graph-based learning on transaction networks. Fraud is about relationships, not just features.",
                github: "https://github.com/harshareddy832/fraudetec",
                tech: ["PyTorch", "XGBoost", "Graph Neural Networks"]
              },
              {
                title: "Movie Recommender at Scale",
                description: "Production ALS system handling MovieLens 25M dataset. Multi-node GCP deployment with cold-start optimization. RMSE < 0.8, sub-second latency. Scale changes everything about how you architect.",
                github: "https://github.com/harshareddy832/movie_recommender",
                tech: ["Apache Spark", "GCP", "PySpark"]
              },
              {
                title: "iOS/macOS Trackpad App",
                description: "Wireless trackpad with 120fps multi-touch gesture recognition. System-level Mac integration via CGEvent APIs. 11 development phases and ongoing. Learned the difference between 'works' and 'ships'.",
                github: "https://github.com/harshareddy832/TrackPadApp/tree/main",
                tech: ["Swift", "JavaScript", "WebSockets"]
              },
              {
                title: "AI Resume Platform",
                description: "ML-powered candidate matching using semantic similarity instead of keyword matching. Integrated 5 AI providers (OpenAI, Anthropic, Google, Groq, Ollama) with rate limiting and fallback logic. Sub-second processing with 84% similarity accuracy.",
                github: "https://github.com/harshareddy832/SproutsAI-TakeHome",
                tech: ["LangChain", "FastAPI", "Sentence-Transformers", "Multi-Provider AI"]
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
                
                {/* Video embed for Codebase Intelligence Agent */}
                {project.vimeoId && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-amber-200/20 dark:border-amber-800/20 bg-amber-50/10 dark:bg-amber-900/10 backdrop-blur-sm">
                    <div style={{ padding: '58.8% 0 0 0', position: 'relative' }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                        title="Video Demonstration - Code Whisperer"
                      />
                    </div>
                  </div>
                )}
                
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono text-sm"
                    >
                      🎬 Watch Demo
                    </a>
                  )}
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
      
      {/* Vimeo Player Script */}
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </main>
  );
}