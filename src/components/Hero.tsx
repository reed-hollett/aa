"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

// Skip diptychs/collages — only use single photos
function isDiptych(url: string): boolean {
  const lower = url.toLowerCase();
  return lower.includes("collage") || lower.includes("two-image") || lower.includes("two+image");
}

// Collect one single-photo image from each completed project
const heroImages = [
  "/images/hero-2.jpg",
  ...projects
    .filter((p) => !p.inProgress && p.images.length > 1)
    .map((p) => p.images.find((img) => !isDiptych(img)))
    .filter((img): img is string => !!img),
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-36 md:pt-40 px-6 md:px-0 flex justify-center">
      <div className="w-full md:w-[65vw] max-w-[935px] relative aspect-[3/2]">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Atelier Armbruster project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
