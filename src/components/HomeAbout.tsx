"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";

const AboutLogo3D = dynamic(() => import("@/components/AboutLogo3D"), {
  ssr: false,
  loading: () => <div className="w-full h-[30vh] md:h-[35vh]" />,
});

function ParallaxImage({ src, alt, innerRef }: { src: string; alt: string; innerRef?: React.Ref<HTMLDivElement> }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.04]);

  return (
    <div
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof innerRef === "function") innerRef(node);
        else if (innerRef && typeof innerRef === "object") (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className="mt-16 md:mt-24 w-full md:w-[65vw] max-w-[935px] mx-auto overflow-hidden aspect-[3/2] relative"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function HomeAbout({ onDarkChange }: { onDarkChange?: (dark: boolean) => void }) {
  const bioRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  const updateDark = (v: boolean) => {
    setIsDark(v);
    onDarkChange?.(v);
  };

  // Track bio section entering viewport — triggers dark
  const { scrollYProgress: bioProgress } = useScroll({
    target: bioRef,
    offset: ["start 95%", "start 70%"],
  });

  // Track end section — triggers light again
  const { scrollYProgress: endProgress } = useScroll({
    target: endRef,
    offset: ["start 80%", "start 50%"],
  });

  useMotionValueEvent(bioProgress, "change", (v) => {
    if (v >= 1) updateDark(true);
    if (v <= 0) updateDark(false);
  });

  useMotionValueEvent(endProgress, "change", (v) => {
    if (v >= 1) updateDark(false);
    if (v <= 0 && bioProgress.get() >= 1) updateDark(true);
  });

  return (
    <section
      className="pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-10 transition-colors duration-700"
      style={{
        backgroundColor: isDark ? "#0a0a0a" : "var(--color-background)",
        color: isDark ? "#f0f0f0" : "var(--color-foreground)",
      }}
    >
      {/* Intro sentence */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] max-w-4xl mx-auto text-center"
      >
        Atelier Armbruster is a New York-based architecture and interior design
        firm founded by Yaiza Armbruster.
      </motion.p>

      {/* 3D wireframe AA */}
      <div className="my-8 md:my-12">
        <AboutLogo3D />
      </div>

      {/* Continued statement */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] max-w-4xl mx-auto text-center"
      >
        We create exquisite spaces, including
        private residences, retail environments, offices, and new developments.
        Both the residential and commercial sides of our practice combine
        practicality with aesthetics to create places that make
        you feel at home.
      </motion.p>

      {/* Featured image 1 — parallax */}
      <ParallaxImage
        src={projects.find(p => p.title === "East 51st Street Penthouse")?.images[0] ?? ""}
        alt="East 51st Street Penthouse"
      />

      {/* Bio + portrait */}
      <motion.div
        ref={bioRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24 grid grid-cols-2 gap-0 max-w-2xl mx-auto"
      >
        <div
          className="p-4 flex items-start transition-colors duration-700"
          style={{ backgroundColor: isDark ? "#1a1a1a" : "var(--color-border)" }}
        >
          <p className="text-[14px] leading-snug">
            Born and raised in Germany, Yaiza Armbruster began her career
            studying architecture and engineering at the Technical University of
            Munich. She moved to New York in 2004 and founded her own firm in
            2010. Our team hails from around the world, giving Atelier
            Armbruster a uniquely global viewpoint and a European-influenced
            approach to design. Committed to conservation&mdash;both ecological
            and historical&mdash;sustainability informs all of our work.
          </p>
        </div>
        <div>
          <img
            src="/images/about.jpg"
            alt="Yaiza Armbruster"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24 text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] max-w-3xl mx-auto text-center"
      >
        We take a collaborative approach to all of our projects whether it is
        a full-scale remodel or a bespoke piece of furniture.
      </motion.p>

      {/* Featured image 2 — parallax */}
      <ParallaxImage
        src={projects.find(p => p.title === "Hudson Street Apartment")?.images[0] ?? ""}
        alt="Hudson Street Apartment"
      />

      {/* Philosophy */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24 text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] max-w-3xl mx-auto text-center"
      >
        We are deeply inspired by the worlds of art and design, and strive to
        marry old world craftsmanship with a modern sensibility and the latest
        technologies.
      </motion.p>

      {/* Featured image 3 — parallax, end of dark zone */}
      <ParallaxImage
        innerRef={endRef}
        src={projects.find(p => p.title === "The Standish Townhouse")?.images[0] ?? ""}
        alt="The Standish Townhouse"
      />
    </section>
  );
}
