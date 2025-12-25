"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
      >
        <h1 className="text-4xl font-bold text-foreground">
          Resume
        </h1>
<a
  href="/assets/SWE_Vaishnavi_Lokhande_resume.pdf"
  download="Vaishnavi_Lokhande_Resume.pdf"
  className="ml-4 inline-flex items-center rounded-full bg-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-pink-600"
>
  Download
</a>


      </motion.div>

      {/* RESUME VIEWER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="
          rounded-2xl border border-pink-200/60 
          shadow-lg bg-white overflow-hidden
        "
        style={{ height: "85vh" }}
      >
        <iframe
          src="/assets/SWE_Vaishnavi_Lokhande_resume.pdf"
          title="Vaishnavi Lokhande Resume"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Resume;
