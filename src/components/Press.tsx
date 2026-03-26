"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { pressEntries } from "@/data/press";

export default function Press() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-3 md:px-5">
      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[14px] mt-8"
        style={{ color: "#ACACAC" }}
      >
        Atelier Armbruster has been recognized in various online publications
      </motion.p>
      <p className="text-center text-[14px] mb-16 md:mb-24">
        Press
      </p>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_1fr_2fr] text-[14px] text-muted pb-3 border-b border-black">
        <span>Publication</span>
        <span>Date</span>
        <span>Headline</span>
      </div>

      {/* Entries */}
      <div className="relative">
        {pressEntries.map((entry, i) => (
          <a
            key={i}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[1fr_1fr_2fr] text-[14px] py-2 border-b border-black hover:text-muted transition-colors cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span>{entry.publication}</span>
            <span>{entry.date}</span>
            <span>&ldquo;{entry.headline}&rdquo;</span>
          </a>
        ))}

        {/* Hover image */}
        {hoveredIndex !== null && (
          <div
            className="fixed pointer-events-none z-[60] right-[5%] top-1/2 -translate-y-1/2"
          >
            <img
              src={pressEntries[hoveredIndex].image}
              alt={pressEntries[hoveredIndex].headline}
              className="w-[300px] h-auto block shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
