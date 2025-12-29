"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  category: "industry" | "teaching" | "leadership";
}


const experiences: Experience[] = [
  {
  position: "Teaching Assistant – CSE 115",
  company: "University at Buffalo",
  duration: "August 2025 – Present",
  description: "Teaching Assistant for CSE 115, supporting students with foundational programming concepts, debugging assignments, and lab activities under the guidance of Prof. Eric Mikidia and Prof. Paul Dickson.",
  image: "/assets/UB.png",
  category: "teaching",
},

  {
    position: "Sponsorship Lead",
    company: "UB Hacking",
    duration: "June 2025 - Present",
    description: "Leading sponsorship outreach and coordination for UB Hacking events, working with external partners and internal teams to support hackathon operations.",
    image: "/assets/ubhacking.png",
    category: "leadership",
  },
  {
    position: "Public Relations Chair",
    company: "UB ACM",
    duration: "February 2025 - Present",
    description: "Managing public relations initiatives, communications, and outreach efforts for the UB chapter of ACM to promote events and increase student engagement.",
    image: "/assets/ubacm.png",
    category: "leadership",
  },
  {
    position: "Undergraduate Teaching Assistant",
    company: "Arizona State University",
    duration: "May 2024 - July 2024",
    description: "Guided students in FSE 100 by providing technical support for Raspberry Pi projects, assisting with lab sessions, clarifying engineering concepts, and fostering problem-solving skills under the mentorship of Prof. Michael Machas.",
    image: "/assets/ASU.png",
    category: "teaching",
  },
  {
    position: "Internship - AI Labs",
    company: "Brane Enterprises Pvt Ltd",
    duration: "June 2023 - August 2023",
    description: "Collaborated in a team of five to automate Nepal and Indian currency classification using machine learning. Fine-tuned MobileNetV3 on GPUs, improving classification accuracy from 60% to 89% across seven currency classes, contributing over 300 lines of optimized training and data-processing code.",
    image: "/assets/brane.png",
    category: "industry",
  },
  {
    position: "Salesforce Developer Intern",
    company: "SmartInternz",
    duration: "May 2023 - July 2023",
    description: "Completed over 70 Salesforce training modules covering fundamentals, organizational setup, data modeling, and process automation. Developed Apex code with testing and debugging practices using Salesforce CLI and Visual Studio Code.",
    image: "/assets/salesforce.png",
    category: "industry",
  }
];
const renderSection = (
  title: string,
  category: Experience["category"]
) => (
  <>
    <h2 className="text-2xl font-semibold mt-8 mb-4">

      {title}
    </h2>

    <div className="space-y-8">
      {experiences
        .filter(exp => exp.category === category)
        .map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-pink-200"
          >
            <div className="p-6 sm:p-8 flex h-full">
              <div className="flex items-center mr-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-1">
                    {exp.position}
                  </h3>
                  <span className="text-lg text-pink-600">
                    {exp.company}
                  </span>
                </div>

                <p className="text-gray-600 my-4 flex-grow">
                  {exp.description}
                </p>

                <span className="text-sm text-gray-400 self-end">
                  {exp.duration}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  </>
);

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-6">

          Experience
        </h1>
{renderSection("Industry Experience", "industry")}
<hr className="my-8 border-slate-200" />

{renderSection("Teaching Experience", "teaching")}
<hr className="my-8 border-slate-200" />


{renderSection("Leadership Experience", "leadership")}

        
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
