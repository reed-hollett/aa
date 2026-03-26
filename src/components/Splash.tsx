"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const splashImages = [
  "/images/hero.jpg",
  "/images/hero-2.jpg",
  "/images/project-1.jpg",
  "/images/project-2.jpg",
];

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (currentImage < splashImages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImage((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentImage, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <h1 className="relative z-10 text-[clamp(3.5rem,10vw,8.5rem)] font-normal leading-[0.9] tracking-tight text-center md:text-center text-left w-full px-4 md:px-0 md:w-auto mb-[-1.5rem] md:mb-[-2.5rem]">
        Atelier
      </h1>

      <div className="relative w-[90vw] md:w-[65vw] max-w-[935px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={splashImages[currentImage]}
            alt="Atelier Armbruster"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto block"
          />
        </AnimatePresence>
      </div>

      <h1 className="relative z-10 text-[clamp(3.5rem,10vw,8.5rem)] font-normal leading-[0.9] tracking-tight text-center md:text-center text-right w-full px-4 md:px-0 md:w-auto mt-[-1.5rem] md:mt-[-2.5rem]">
        Armbruster
      </h1>
    </motion.div>
  );
}
