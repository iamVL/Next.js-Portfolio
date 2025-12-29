"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string | null;
  credentialUrl?: string | null;
  skills: string[];
  image: string;
  note?: string;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    issued: "Issued Jul 2025",
    credentialId: "C6486D80845BBE4",
    credentialUrl:"https://learn.microsoft.com/en-us/users/vaishnavilokhande-0847/credentials/c6486d80845bbe4",
    skills: ["Azure AI Services", "Microsoft Azure Machine Learning", "Natural Language Processing (NLP)", "Cloud Computing"],
    image: "/assets/microsoft.png",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "Issued Jul 2025",
    credentialId: "C0D2D838B6EF8B81",
    credentialUrl: "https://learn.microsoft.com/en-us/users/vaishnavilokhande-0847/credentials/c0d2d838b6ef8b81",
    skills: ["Azure AI Services", "Microsoft Azure", "Generative AI", "Microsoft Azure Machine Learning", "Azure Functions"],
    image: "/assets/microsoft.png",
  },
  {
    title: "Algorithmic Toolbox (UC San Diego)",
    issuer: "Coursera",
    issued: "Issued Jun 2020",
    credentialId: null,
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8T35HKGLL8LD",
    skills: ["Debugging", "Computer Programming", "Algorithms", "Dynamic Programming", "Software Testing"],
    image: "/assets/coursera.png",
  },
  {
    title: "Learn to Program: The Fundamentals (University of Toronto)",
    issuer: "Coursera",
    issued: "Issued Apr 2020",
    credentialId: null,
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LV43QRM5UC5D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    skills: ["Computer Programming", "IDLE", "Python (Programming Language)"],
    image: "/assets/coursera.png",
  },

];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-black mb-6 text-center">Certifications</h1>

        <div className="space-y-8">
          {certifications.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-[#F4D2E7] shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-6 sm:p-8 flex gap-6">
                {/* Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                  <Image
                    src={c.image}
                    alt={`${c.issuer} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-black">{c.title}</h2>
                      <p className="text-[#DA5B97] font-medium">{c.issuer}</p>
                    </div>

                    <p className="text-sm text-gray-400 sm:text-right">{c.issued}</p>
                  </div>

                  {c.credentialId && (
                    <p className="mt-3 text-sm text-gray-600">
                      <span className="font-semibold">Credential ID:</span> {c.credentialId}
                    </p>
                  )}

                  {c.note && (
                    <p className="mt-3 text-gray-600">{c.note}</p>
                  )}

                  {c.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {c.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-[#F8E4F1] text-[#DA5B97] font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {c.credentialUrl && (
                    <div className="mt-5">
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#DA5B97] text-white font-semibold hover:opacity-90 transition"
                      >
                        <FaExternalLinkAlt />
                        Show credential
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
