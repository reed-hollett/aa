"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";

const splashImages = projects
  .filter((p) => !p.inProgress && p.images.length > 1)
  .flatMap((p) =>
    p.images.filter(
      (img) =>
        !img.toLowerCase().includes("collage") &&
        !img.toLowerCase().includes("two-image") &&
        !img.toLowerCase().includes("two+image")
    )
  )
  .slice(0, 12);

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [split, setSplit] = useState(false);
  const atelierRef = useRef<HTMLSpanElement>(null);
  const armbrusterRef = useRef<HTMLSpanElement>(null);
  const [atelierX, setAtelierX] = useState(0);
  const [armbrusterX, setArmbrusterX] = useState(0);

  useEffect(() => {
    // Calculate how far each word needs to move
    if (atelierRef.current && armbrusterRef.current) {
      const atelierRect = atelierRef.current.getBoundingClientRect();
      const armbrusterRect = armbrusterRef.current.getBoundingClientRect();
      const vw = window.innerWidth;

      // Move "Atelier" so its left edge is at 20px
      setAtelierX(20 - atelierRect.left);
      // Move "Armbruster" so its right edge is at vw - 20px
      setArmbrusterX(vw - 20 - armbrusterRect.right);
    }
  }, []);

  useEffect(() => {
    const splitTimer = setTimeout(() => setSplit(true), 1200);

    // Start flipping after the split animation finishes
    let interval: ReturnType<typeof setInterval>;
    const flipStart = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentImg((prev) => {
          if (prev >= splashImages.length - 1) return prev;
          return prev + 1;
        });
      }, 250);
    }, 2000);

    const done = setTimeout(onComplete, 2000 + splashImages.length * 250 + 600);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(flipStart);
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-foreground flex items-center justify-center"
    >
      {/* Atelier */}
      <motion.span
        ref={atelierRef}
        initial={{ opacity: 0, y: 8 }}
        animate={
          split
            ? { opacity: 1, y: 0, x: atelierX }
            : { opacity: 1, y: 0, x: 0 }
        }
        transition={
          split
            ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            : { duration: 0.8, delay: 0.3, ease: "easeOut" }
        }
        className="text-background text-[clamp(1.5rem,4vw,2.5rem)] tracking-wide font-sans z-10"
      >
        Atelier
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-background text-[clamp(1.5rem,4vw,2.5rem)] font-sans"
      >
        &nbsp;
      </motion.span>

      {/* Center image */}
      {split && (
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={splashImages[currentImg]}
          alt=""
          className="absolute w-[70vw] md:w-[45vw] max-w-[600px] aspect-[3/2] object-cover"
        />
      )}

      {/* Armbruster */}
      <motion.span
        ref={armbrusterRef}
        initial={{ opacity: 0, y: 8 }}
        animate={
          split
            ? { opacity: 1, y: 0, x: armbrusterX }
            : { opacity: 1, y: 0, x: 0 }
        }
        transition={
          split
            ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            : { duration: 0.8, delay: 0.3, ease: "easeOut" }
        }
        className="text-background text-[clamp(1.5rem,4vw,2.5rem)] tracking-wide font-sans z-10"
      >
        Armbruster
      </motion.span>
    </motion.div>
  );
}
