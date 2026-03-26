"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AboutLogo3D = dynamic(() => import("@/components/AboutLogo3D"), {
  ssr: false,
  loading: () => <div className="w-full h-[50vh] md:h-[60vh]" />,
});

export default function HomeAbout() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      {/* 3D wireframe AA */}
      <AboutLogo3D />

      {/* Main statement */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] max-w-4xl mx-auto text-center"
      >
        Atelier Armbruster is a New York-based architecture and interior design
        firm founded by Yaiza Armbruster. We create exquisite spaces, including
        private residences, retail environments, offices, and new developments.
        Both the residential and commercial sides of our practice combine
        practicality with aesthetics to create places that make
        you feel at home.
      </motion.p>

      {/* Bio + portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24 grid grid-cols-2 gap-0 max-w-2xl mx-auto"
      >
        <div className="bg-[#d9d9d9] p-4 flex items-start">
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

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24 max-w-3xl mx-auto text-center"
      >
        <p className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15]">
          We take a collaborative approach to all of our projects whether it is
          a full-scale remodel or a bespoke piece of furniture.
        </p>
        <p className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15] mt-6">
          We are deeply inspired by the worlds of art and design, and strive to
          marry old world craftsmanship with a modern sensibility and the latest
          technologies.
        </p>
      </motion.div>
    </section>
  );
}
