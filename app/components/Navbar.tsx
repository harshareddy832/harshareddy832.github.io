'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold font-mono text-amber-900 dark:text-amber-100">
            Harsha Pasham
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono">
              About
            </Link>
            <Link href="#skills" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono">
              Skills
            </Link>
            <Link href="#projects" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-mono">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 