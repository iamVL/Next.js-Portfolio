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
      className="container mx-auto bg-white backdrop-filter backdrop-blur-lg rounded-full shadow-sm border border-pink-200/60"

    >
      <div className="flex justify-between items-center px-6 py-3">
        <Link
          href="/"
          className="text-foreground font-semibold text-lg hover:text-pink-500 transition-colors"
        >
          Vaishnavi Lokhande
        </Link>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-foreground">
  {['Home', 'Resume', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
    <li key={item}>
      <Link
        href={
          item === 'Home'
            ? '/'
            : item === 'Certifications'
            ? '/certifications'
            : `/${item.toLowerCase()}`
        }
        className="hover:text-pink-500 transition-colors"
      >
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
              className="text-foreground hover:text-pink-500 transition-colors"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-lokhande000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-pink-500 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default MotionNav;
