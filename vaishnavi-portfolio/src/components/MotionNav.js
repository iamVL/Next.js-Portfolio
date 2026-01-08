'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const MotionNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-foreground font-semibold text-lg hover:text-pink-500 transition-colors"
          >
            Vaishnavi Lokhande
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-foreground">
              {['Home', 'Resume', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
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
              <a href="https://github.com/iamVL" target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/vaishnavi-lokhande000/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <FaBars size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
  className="fixed inset-0 z-40 bg-black/40 md:hidden"
  style={{ zIndex: 45 }}
  onClick={() => setMenuOpen(false)}
/>

      )}

      {/* Mobile Drawer */}
<aside
  className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl transform transition-transform duration-400 ease-out md:hidden
  flex flex-col
  ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
>


        <div className="flex items-center justify-between h-16 px-4 border-b">

          <span className="font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="flex flex-col flex-1 justify-center px-6 space-y-6 text-center">


          {['Home', 'Resume', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
            <li key={item}>
              <Link
                href={
                  item === 'Home'
                    ? '/'
                    : item === 'Certifications'
                    ? '/certifications'
                    : `/${item.toLowerCase()}`
                }
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

       <div className="flex gap-4 p-4 border-t justify-center">

          <a href="https://github.com/iamVL" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-lokhande000/" target="_blank">
            <FaLinkedin size={20} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default MotionNav;
