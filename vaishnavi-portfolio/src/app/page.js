"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";

// GitHub calendar (client-side only)
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="bg-background relative overflow-hidden">
  {/* GLOBAL DARKNESS LAYER */}
  <div
    className="pointer-events-none fixed inset-0 z-0 transition-colors duration-700"
    style={{
      backgroundColor: isLightOn
        ? "rgba(0,0,0,0)"
        : "rgba(0,0,0,0.35)",
    }}
  />

      {/* GLOBAL LIGHT OVERLAY (lights the PAGE, not the image) */}
      {/* GLOBAL LIGHT / DARK OVERLAY */}
{/* LAMP LIGHT OVERLAY */}
<div
  className={`pointer-events-none fixed inset-0 z-10 transition-opacity duration-700 ${
    isLightOn ? "opacity-100" : "opacity-0"
  }`}
  style={{
    background: `
      radial-gradient(
        circle at 75% 45%,
        rgba(255, 210, 140, 0.85) 0%,
        rgba(255, 210, 140, 0.55) 18%,
        rgba(255, 210, 140, 0.30) 35%,
        rgba(255, 210, 140, 0.15) 50%,
        rgba(255, 210, 140, 0.05) 65%,
        rgba(255, 210, 140, 0) 80%
      )
    `,
  }}
/>



      {/* HERO SECTION */}
      <section className="relative z-10 flex items-center justify-center px-6 py-8">
        <div
          className={`relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center rounded-3xl border border-pink-200 bg-white/70 backdrop-blur-xl shadow-xl p-6 md:p-8 transition ${
            isLightOn ? "" : "brightness-95"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs uppercase tracking-wide font-medium">
              Graduating 2026 • Open to Full-Time SWE Roles
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Vaishnavi Lokhande
            </h1>

            <p className="text-base font-medium">
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

            <p className="text-slate-700 max-w-xl leading-relaxed">
              Welcome to my portfolio!
              <br />
              I am a Computer Science undergraduate at{" "}
              <span className="font-semibold">
                University at Buffalo, SUNY
              </span>
              , focused on building end-to-end software systems.
            </p>

            <div className="rounded-xl border bg-white/60 p-3 max-w-xl">
              <p className="text-sm text-slate-600">
                Alongside industry roles, I also pursue{" "}
                <span className="font-semibold">research</span>-driven work.
                Explore my research{" "}
                <a
                  href="https://iamvl.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 underline"
                >
                  here
                </a>
                .
              </p>
            </div>

            <div className="flex gap-4 pt-2 flex-wrap">
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-md cursor-pointer"
                >
                  View My Projects
                </motion.span>
              </Link>

              <a href="/assets/SWE_Vaishnavi_Lokhande_resume.pdf" download>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full bg-pink-100 text-pink-700 font-medium cursor-pointer"
                >
                  Download My Resume
                </motion.span>
              </a>
            </div>
          </div>

          {/* RIGHT – HERO IMAGE + LAMP TOGGLE */}
          <div className="relative flex justify-center items-center">
            {/* glow behind image */}
            <div
              className={`absolute -inset-6 rounded-3xl blur-2xl transition-opacity duration-700 ${
                isLightOn
                  ? "bg-pink-200/40 opacity-100"
                  : "bg-pink-200/20 opacity-60"
              }`}
            />

            {/* HERO IMAGE (ALWAYS ABOVE LIGHT) */}
            <div className="relative z-20">
              <Image
                src={
                  isLightOn
                    ? "/images/hero-lit.jpg"
                    : "/images/hero-dark.jpg"
                }
                alt="Hero portrait"
                width={340}
                height={420}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>

            {/* LAMP TOGGLE BUTTON */}
            <button
              onClick={() => setIsLightOn((prev) => !prev)}
              aria-label="Toggle lamp"
              className="absolute bottom-4 right-4 z-30 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow-md hover:scale-105 transition"
            >
              {isLightOn ? "💡" : "🔌"}
            </button>
          </div>
        </div>
      </section>

      {/* GITHUB CONTRIBUTIONS */}
      <section className="relative z-10 flex justify-center px-6 pb-8">
        <div className="w-full max-w-4xl bg-white/60 rounded-2xl border border-pink-200 shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">
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
