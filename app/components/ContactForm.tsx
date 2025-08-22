'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="gradient-border p-8"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-light/80 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-light/80 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-dark border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-light/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-dark border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-dark rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Send Message
      </button>
    </motion.form>
  );
} 