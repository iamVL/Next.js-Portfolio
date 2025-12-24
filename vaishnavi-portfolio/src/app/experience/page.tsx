"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  image: string; // New property for image URL
}

const experiences: Experience[] = [
  {
    position: "Researcher",
    company: "The Luminosity Lab",
    duration: "September 2024 - Present",
    description: "Working on innovative projects in cutting-edge research areas (CubeSats, Robotics+LLMs etc..)",
    image: "/assets/luminosity-removebg-preview.png" // Add actual image path
  },
  {
    position: "Software Engineering Intern",
    company: "Axio AI",
    duration: "May 2024 - Present",
    description: "Full Stack Development Internship focused on building scalable and secure web applications.",
    image: "/assets/axio.jpg" // Add actual image path
  },
  
  {
    position: "Undergraduate Research Assistant",
    company: "Dr. Nakul Gopalan's Lab",
    duration: "Spring 2024 - Present",
    description: "Working under Dr. Nakul Gopalan for an NLP project.",
    image: "/assets/ASU.png" // Add actual image path
  },
  
  {
    position: "Undergraduate Teaching Assistant",
    company: "Arizona State University",
    duration: "2023",
    description: "UGTA for CSE 240 (Introduction to Programming Languages).",
    image: "/assets/ASU.png"// Add actual image path
  },
  {
    position: "Instructional Aide",
    company: "Arizona State University",
    duration: "2023",
    description: "Instructional Aide for MAT 117 (College Algebra).",
    image: "/assets/ASU.png"// Add actual image path
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">My Experience</h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700"
            >
              <div className="p-6 sm:p-8 flex h-full">
                <div className="flex items-center mr-6">
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} logo`} 
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-300 mb-1">{exp.position}</h2>
                    <span className="text-lg text-emerald-300">{exp.company}</span>
                  </div>
                  <p className="text-gray-300 my-4 flex-grow">{exp.description}</p>
                  <span className="text-sm text-gray-400 self-end">{exp.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
