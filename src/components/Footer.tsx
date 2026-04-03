"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 px-6 md:px-10">
      {/* Social + copyright */}
      <div className="text-center text-[14px] mb-32 space-y-0" style={{ color: "var(--color-foreground)" }}>
        <p>Instagram, Pinterest, Houzz, Facebook</p>
        <p>22 West 27th Street, 4th Floor, New York, NY 10001</p>
        <p>&copy; Copyright 2026. Atelier Armbruster LLC.</p>
      </div>

      {/* Large footer name */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(2rem,17vw,14rem)] md:text-[clamp(2rem,12vw,14rem)] font-normal leading-[0.9] tracking-tighter text-center"
      >
        Atelier<br className="md:hidden" /> Armbruster
      </motion.p>
    </footer>
  );
}
