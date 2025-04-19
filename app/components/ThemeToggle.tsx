'use client';

import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 rounded-full bg-black dark:bg-white text-white dark:text-black"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
} 