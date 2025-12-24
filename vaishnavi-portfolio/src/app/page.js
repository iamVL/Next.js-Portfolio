"use client";

import React, { useState, useEffect } from 'react';
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

        <div className="min-h-screen flex flex-col items-center justify-center bg-background relative">
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] // Apple-like spring animation
            }}
            className="text-center md:text-left md:w-1/2 p-4"
          >
            <h1 className="text-5xl font-bold text-foreground mb-2">
              Vaishnavi Lokhande
            </h1>
            <p className="text-xl mt-1 font-light text-muted-foreground">
              I&apos;m a&nbsp; 
              <span className="text-pink-500 font-medium">
                <Typewriter
                  words={[' Computer Science Student @ UB', ' React Developer', ' Full Stack Developer', ' Software Engineer Intern @ Axio AI']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="text-lg mt-4 font-light leading-relaxed text-muted-foreground">
              Welcome to my portfolio! I am Vaishnavi Lokhande, a Computer Science student at University at Buffalo SUNY with a passion for developing innovative software solutions.
            </p>
            {/* BUTTONS */}

            <div className="mt-8 space-y-4">
              <Link href="/projects" passHref>
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all cursor-pointer shadow-sm"
                >
                  View My Projects
                </motion.span>
              </Link>

              <div className="mt-4">
                <Link href="/assets/Mallajosyula_Satwik_Resume.pdf" passHref>
                  <motion.span 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block px-6 py-3 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-all cursor-pointer"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download My Resume
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
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
              className="rounded-full ring-4 ring-pink-200 shadow-xl shadow-pink-200/30"
            />
          </motion.div>
        </div>
        
        {/* GitHub Contribution Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-200"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6"> My GitHub Contributions </h2>
         
          {isClient && (
      <GitHubCalendar
        username="iamVL"
        colorScheme="light"
        fontSize={14}
      />
    )}
  </motion.div>
      </div>
    </>
  );
}
