"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent mb-8"
      >
        Resume
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mt-10 p-1 bg-gradient-to-r from-emerald-300 to-blue-400 rounded-lg shadow-lg"
      >
        <div className="bg-gray-900 rounded-lg p-1">
          <iframe
            src="/assets/Mallajosyula_Satwik_Resume.pdf"
            className="w-full h-[90vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[95vh] rounded-lg"
            title="Satwik Mallajosyula's Resume"
            width="100%"
            height="800px"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <a 
          href="/assets/Mallajosyula_Satwik_Resume.pdf" 
          download
          className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold rounded-full hover:from-emerald-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FiDownload className="mr-2" /> Download Resume
        </a>
      </motion.div>
    </div>
  );
}

export default Resume;