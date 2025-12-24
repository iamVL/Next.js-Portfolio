'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MotionNav = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="container mx-auto bg-gradient-to-b from-gray-900 to-black backdrop-filter backdrop-blur-lg rounded-full shadow-lg border border-white/20"
    >
      <div className="flex justify-between items-center px-6 py-3">
        <Link href="/" className="text-white font-semibold text-lg hover:text-gray-200 transition-colors duration-200">
          Vaishnavi Lokhande
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-white">
            {['Home', 'Resume', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-gray-200 transition-colors duration-200">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/iamVL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vaishnavi-lokhande000/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default MotionNav;
