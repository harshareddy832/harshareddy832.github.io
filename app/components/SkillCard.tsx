'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="gradient-border p-6 text-center"
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 gradient-text">{name}</h3>
      <div className="w-full bg-light/10 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </motion.div>
  );
} 