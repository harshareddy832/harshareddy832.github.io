'use client';

import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        className="relative flex items-center justify-between w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
          animate={{
            x: theme === 'dark' ? 28 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-500 text-xs" />
          ) : (
            <FaMoon className="text-gray-600 text-xs" />
          )}
        </motion.div>
        <div className="flex items-center justify-center w-6 h-6">
          <FaSun className="text-yellow-500 text-xs" />
        </div>
        <div className="flex items-center justify-center w-6 h-6">
          <FaMoon className="text-gray-400 dark:text-gray-300 text-xs" />
        </div>
      </motion.button>
    </motion.div>
  );
} 