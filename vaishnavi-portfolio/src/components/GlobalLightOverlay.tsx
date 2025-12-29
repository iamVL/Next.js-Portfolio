"use client";

import { motion } from "framer-motion";
import { useLight } from "@/context/LightContext";

export default function GlobalLightOverlay() {
  const { isLightOn } = useLight();

  return (
    <motion.div
      className="fixed inset-0 z-30 pointer-events-none"
      animate={{
        opacity: isLightOn ? 0 : 0.35,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        background:
          "radial-gradient(circle at 72% 42%, transparent 35%, rgba(0,0,0,0.65) 75%)",
      }}
    />
  );
}
