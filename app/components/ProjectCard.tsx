'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="gradient-border p-6"
    >
      <div className="h-full flex flex-col">
        {imageUrl && (
          <div className="mb-4 aspect-video overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-light/80 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-light/60 hover:text-primary transition-colors"
          >
            <FaGithub />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </motion.div>
  );
} 