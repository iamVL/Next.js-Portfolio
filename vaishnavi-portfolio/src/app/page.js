"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";

// GitHub calendar (client-side only)
const GitHubCalendar = dynamic(
  () => import("react-github-calendar"),
  { ssr: false }
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="bg-background">
      {/* HERO SECTION */}
      <section className="flex items-center justify-center px-6 py-5">


        <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center bg-white/70 backdrop-blur-xl rounded-3xl border border-pink-200 shadow-xl p-6 md:p-8">

          {/* LEFT CONTENT */}
          <div className="space-y-4">

            {/* STATUS BADGE */}
            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs uppercase tracking-wide font-medium">
              Graduating 2026 • Open to Full-Time SWE Roles
            </div>

            {/* NAME */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Vaishnavi Lokhande
            </h1>

            {/* TYPEWRITER ROLE */}
            <p className="text-base text-foreground font-medium -mt-1">
  I am a{" "}
  <span className="text-pink-500">
    <Typewriter
      words={[
        "Software Engineer",
        "Full-Stack Developer",
        "Developer interested in Machine Learning & AI",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={45}
      delaySpeed={900}
    />
  </span>
</p>


            {/* MAIN PARAGRAPH */}
<p className="text-base text-slate-700 leading-relaxed max-w-xl">
  Welcome to my portfolio!
  <br />
  I am a Computer Science undergraduate at the <span className="font-semibold">University at Buffalo, SUNY</span>,
  focused on building end-to-end software systems. My work spans frontend
  interfaces, backend APIs, and applied machine learning to deliver real-world,
  user-facing products.
</p>



            {/* RESEARCH CALLOUT */}
            <div className="rounded-xl border border-slate-200 bg-white/60 p-3 max-w-xl">
              <p className="text-sm text-slate-600 leading-relaxed">
                Alongside industry roles, I also pursue <span className="font-semibold">research</span>-driven work. If
                you are here to evaluate my academic background or research
                interests, you can explore my research profile and ongoing work{" "}
                <a
                  href="https://iamvl.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 underline underline-offset-2"
                >
                  here
                </a>.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-md hover:bg-pink-600 cursor-pointer"
                >
                  View My Projects
                </motion.span>
              </Link>

              <a
                href="/assets/SWE_Vaishnavi_Lokhande_resume.pdf"
                download
              >
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-pink-100 text-pink-700 font-medium hover:bg-pink-200 cursor-pointer"
                >
                  Download My Resume
                </motion.span>
              </a>
            </div>
          </div>

          {/* RIGHT – PORTRAIT */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-pink-200/30 blur-xl"></div>

            <Image
              src="/images/photo.png"
              alt="Vaishnavi Lokhande"
              width={300}
              height={300}
              className="relative rounded-full ring-4 ring-pink-200 shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* GITHUB CONTRIBUTIONS */}
      <section className="flex justify-center px-6 pb-6">
  <div className="w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-2xl border border-pink-200 shadow-lg p-4">
    <h2 className="text-xl font-semibold text-foreground mb-2">
      GitHub Contributions
    </h2>

    {isClient && (
      <GitHubCalendar
        username="iamVL"
        colorScheme="light"
        fontSize={12}
      />
    )}
  </div>
</section>


    </main>
  );
}
