"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import dynamic from 'next/dynamic';

// Dynamically import GitHubCalendar with ssr option set to false
const GitHubCalendar = dynamic(
  () => import('react-github-calendar'),
  { ssr: false }
);

export default function Home() {
  const [totalContributions, setTotalContributions] = useState('Loading...');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetch('/api/github-contributions')
      .then(response => response.json())
      .then(data => {
        if (data.totalContributions) {
          setTotalContributions(data.totalContributions);
        } else {
          console.error('Unexpected API response:', data);
          setTotalContributions('Error fetching data');
        }
      })
      .catch(error => {
        console.error('Error fetching GitHub contributions:', error);
        setTotalContributions('Error fetching data');
      });
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black relative">
        
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-black/20 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] // Apple-like spring animation
            }}
            className="text-center md:text-left md:w-1/2 p-4"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vaishnavi Lokhande
            </h1>
            <p className="text-xl text-white/90 mt-4 font-light">
              I&apos;m a  
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                <Typewriter
                  words={[' Computer Science Student @ ASU', ' React Developer', ' Full Stack Developer', ' Software Engineer Intern @ Axio AI']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="text-lg text-white/80 mt-4 font-light leading-relaxed">
              Welcome to my portfolio! I am Vaishnavi Lokhande, a Computer Science student at University at Buffalo SUNY with a passion for developing innovative software solutions.
            </p>
            <div className="mt-8 space-y-4">
              <Link href="/projects" passHref>
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  View My Projects
                </motion.span>
              </Link>
              <div className="mt-4">
                <Link href="/assets/Mallajosyula_Satwik_Resume.pdf" passHref>
                  <motion.span 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block px-6 py-3 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download My Resume
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="md:w-1/2 p-4 flex justify-center"
          >
            <Image 
              src="/images/photo.png" 
              alt="Vaishnavi Lokhande" 
              width={300} 
              height={300} 
              className="rounded-full ring-4 ring-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
        
        {/* GitHub Contribution Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 bg-black/20 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">My GitHub Contributions</h2>
         
          {isClient && (
            <GitHubCalendar 
              username="iamVL" 
              colorScheme='dark'
              fontSize={16}
              showWeekdayLabels
              
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          )}
        </motion.div>
      </div>
    </>
  );
}
