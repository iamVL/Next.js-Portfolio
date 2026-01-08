'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const MotionNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* Debug: force menu toggle SVG visible when overridden by global CSS */
        button[aria-label="Toggle menu"] svg {
          width: 22px !important;
          height: 22px !important;
          display: block !important;
          overflow: visible !important;
        }
      `}</style>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="sticky top-0 z-50 bg-pink-50 border-b border-pink-200"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-semibold text-slate-900"
            >
              Vaishnavi Lokhande
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6 text-slate-700">
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
                      className="hover:text-pink-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                <a href="https://github.com/iamVL" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
                </a>
                <a href="https://www.linkedin.com/in/vaishnavi-lokhande000/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </div>

            {/* ===== MOBILE TOGGLE (ONE BUTTON, SAME SPOT) ===== */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="
                md:hidden
                fixed
                top-4
                right-4
                w-10 h-10
                flex items-center justify-center
                rounded-xl
                bg-pink-100
                text-pink-700
                z-[60]
              "
            >
              {menuOpen ? (
                <FaTimes size={22} className="w-5 h-5 text-pink-700" style={{ width: '22px', height: '22px' }} />
              ) : (
                <FaBars size={22} className="w-5 h-5 text-pink-700" style={{ width: '22px', height: '22px' }} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[45] bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`
          fixed top-16 left-0 z-[50]
          h-[calc(100vh-4rem)]
          w-72
          bg-white
          shadow-xl
          transform transition-transform duration-300 ease-out
          md:hidden
          flex flex-col
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center border-b">
          <span className="font-semibold text-slate-900">Menu</span>
        </div>

        {/* Links */}
        <ul className="flex flex-col flex-1 justify-center gap-6 px-6 text-center">
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
                className="text-lg text-slate-700 hover:text-pink-600 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex justify-center gap-5 p-4 border-t">
          <a href="https://github.com/iamVL" target="_blank">
            <FaGithub size={20} className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-lokhande000/" target="_blank">
            <FaLinkedin size={20} className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default MotionNav;
