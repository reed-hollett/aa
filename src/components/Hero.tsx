"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[90vw] md:w-[65vw] max-w-[935px]"
      >
        <img
          src="/images/hero-2.jpg"
          alt="Atelier Armbruster project"
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  );
}
