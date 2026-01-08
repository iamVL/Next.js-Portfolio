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
  const [lightMode, setLightMode] = useState(0); // 0=off, 1=lamp, 2=all

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="bg-background relative overflow-x-hidden">

  {/* GLOBAL DARKNESS LAYER */}
  <div
  className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
  style={{
    backgroundColor:
      lightMode === 0 || lightMode === 1
        ? "rgba(0,0,0,0.45)"
        : "rgba(0,0,0,0)",
  }}
/>

{/* LAMP LIGHT OVERLAY */}
<div
  className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-700"
  style={{
    opacity: lightMode === 2 ? 1 : 0,
    background: `
      radial-gradient(
        circle at 75% 45%,
        rgba(255, 210, 140, 0.9) 0%,
        rgba(255, 210, 140, 0.55) 22%,
        rgba(255, 210, 140, 0.30) 40%,
        rgba(255, 210, 140, 0.12) 58%,
        rgba(255, 210, 140, 0) 78%
      )
    `,
  }}
/>

{/* HERO SECTION */}
<section className="relative z-10 flex items-center justify-center px-6 py-8">
{/* MOBILE FRAME */}
<div className="md:hidden mx-auto max-w-[390px] px-3">

  {/* ======================= */}
  {/* MOBILE HERO (md:hidden) */}
  {/* ======================= */}
  <div className="w-full rounded-2xl border border-pink-200 bg-white/70 backdrop-blur-xl shadow-xl px-4 pt-6 pb-8 space-y-4 text-center">


    {/* 2. Pink graduating badge */}
    <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs uppercase tracking-wide font-medium">
      Graduating 2026 • Open to Full-Time SWE Roles
    </div>

    {/* 3. Name */}
    <h1 className="text-3xl font-bold">
      Vaishnavi Lokhande
    </h1>

    {/* 3.5 Tagline */}
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

    {/* 4. Toggle lights */}
    <div className="flex flex-col items-center pt-2">
      <div className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur shadow-md ring-1 ring-pink-200">
        <div className="relative w-36 flex justify-between items-center">
          <img src="/icons/moon.png" alt="Dark" className={`h-4 w-4 ${lightMode === 0 ? "opacity-100" : "opacity-40"}`} />
          <img src="/icons/lamp.png" alt="Lamp" className={`h-4 w-4 ${lightMode === 1 ? "opacity-100" : "opacity-40"}`} />
          <img src="/icons/sun.png" alt="Light" className={`h-5 w-5 ${lightMode === 2 ? "opacity-100" : "opacity-40"}`} />
        </div>

        <input
          type="range"
          min="0"
          max="2"
          step="1"
          value={lightMode}
          onChange={(e) => setLightMode(Number(e.target.value))}
          className="w-32 accent-pink-500 cursor-pointer"
        />
      </div>

      <span className="text-xs text-slate-500 mt-1">
        Toggle the lights
      </span>
    </div>

    {/* 5. Image */}
    <div className="flex justify-center pt-2">
      <Image
        src={lightMode === 0 ? "/images/hero-dark.jpg" : "/images/hero-lit.jpg"}
        alt="Hero portrait"
        width={260}
        height={340}
        className="rounded-2xl shadow-xl"
        priority
      />
    </div>

    {/* 6. Welcome */}
    <p className="text-slate-700 leading-relaxed pt-2">
      Welcome to my portfolio!
    </p>

    {/* 7. Main paragraph */}
    <p className="text-slate-700 leading-relaxed">
      I am a Computer Science undergraduate at{" "}
      <span className="font-semibold">University at Buffalo, SUNY</span>, focused on building end-to-end software systems.
    </p>

    {/* 8. Research-driven paragraph */}
    <div className="rounded-xl border bg-white/60 p-3 mb-10">

      <p className="text-sm text-slate-600">
        Alongside industry roles, I also pursue <span className="font-semibold">research</span>-driven work.
        Explore my research{" "}
        <a
          href="https://iamvl.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline"
        >
          here
        </a>.
      </p>
    </div>

    {/* 9. Buttons (same row) */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">

      <Link href="/projects">
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2.5 rounded-full bg-pink-100 text-pink-700 text-sm font-medium cursor-pointer w-full sm:w-auto text-center"



        >
          View My Projects
        </motion.span>
      </Link>

      <a href="/assets/SWE_Vaishnavi_Lokhande_resume.pdf" download>
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2.5 whitespace-nowrap rounded-full bg-pink-100 text-pink-700 text-sm font-medium cursor-pointer"

        >
          Download My Resume
        </motion.span>
      </a>
    </div>
  </div>
</div>
  {/* ========================= */}
  {/* DESKTOP HERO (UNCHANGED) */}
  {/* ========================= */}
  <div
    className={`hidden md:grid relative w-full max-w-6xl grid-cols-2 gap-14 items-center rounded-3xl border border-pink-200 bg-white/70 backdrop-blur-xl shadow-xl
      px-6 md:px-8 pt-14 pb-10 md:pt-16 md:pb-12 transition ${
        lightMode === 0 ? "brightness-95" : ""
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
        <span className="font-semibold">University at Buffalo, SUNY</span>, focused on building end-to-end software systems.
      </p>

      <div className="rounded-xl border bg-white/60 p-3 max-w-xl">
        <p className="text-sm text-slate-600">
          Alongside industry roles, I also pursue <span className="font-semibold">research</span>-driven work.
          Explore my research{" "}
          <a
            href="https://iamvl.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline"
          >
            here
          </a>.
        </p>
      </div>

      <div className="flex gap-4 pt-2 flex-wrap">
        <Link href="/projects">
          <motion.span className="px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-md cursor-pointer">
            View My Projects
          </motion.span>
        </Link>

        <a href="/assets/SWE_Vaishnavi_Lokhande_resume.pdf" download>
          <motion.span className="px-6 py-3 rounded-full bg-pink-100 text-pink-700 font-medium cursor-pointer">
            Download My Resume
          </motion.span>
        </a>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="relative flex justify-center items-center">
      <div className={`absolute -inset-6 rounded-3xl blur-2xl ${lightMode > 0 ? "bg-pink-200/40" : "bg-pink-200/20"}`} />

<div className="absolute -top-20 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1">

  <div className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur shadow-md ring-1 ring-pink-200">
    <div className="relative w-36 flex justify-between items-center">
      <img
        src="/icons/moon.png"
        alt="Dark"
        className={`h-4 w-4 transition-opacity ${
          lightMode === 0 ? "opacity-100" : "opacity-40"
        }`}
      />

      <img
        src="/icons/lamp.png"
        alt="Lamp"
        className={`h-4 w-4 transition-opacity ${
          lightMode === 1 ? "opacity-100" : "opacity-40"
        }`}
      />

      <img
        src="/icons/sun.png"
        alt="Light"
        className={`h-5 w-5 transition-opacity ${
          lightMode === 2 ? "opacity-100" : "opacity-40"
        }`}
      />
    </div>

    <input
      type="range"
      min="0"
      max="2"
      step="1"
      value={lightMode}
      onChange={(e) => setLightMode(Number(e.target.value))}
      className="w-32 accent-pink-500 cursor-pointer"
    />
  </div>

  <span className="text-xs text-slate-500 leading-none">
    Toggle the lights
  </span>

      </div>

      <Image
        src={lightMode === 0 ? "/images/hero-dark.jpg" : "/images/hero-lit.jpg"}
        alt="Hero portrait"
        width={280}
        height={380}
        className="rounded-2xl shadow-xl relative z-20"
        priority
      />
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
