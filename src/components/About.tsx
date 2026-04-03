"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";

export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      {/* Hero portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto mb-16 md:mb-24"
      >
        <img
          src="/images/yaiza.jpg"
          alt="Yaiza Armbruster"
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.15]">
          Atelier Armbruster is a New York City based design office focusing on
          minimal and modern designs for residential and commercial renovations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-12 md:mt-16 max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-[14px] leading-snug">
          The firm was founded in 2010 by Yaiza A. Armbruster who previously
          worked at Selldorf Architects for six years. Originally from Germany,
          she holds a German architectural and engineering degree (Dipl. Ing.)
          from Munich.
        </p>
        <p className="text-[14px] leading-snug">
          Our projects range from apartments and townhouses in New York City to
          houses in the Hamptons, the Hudson River Valley, Germany, and Mexico.
          We believe that functional spaces are just as important as aesthetic
          modernism and strive to create environments that feel both refined and
          livable.
        </p>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-24 md:mt-32 max-w-4xl mx-auto"
      >
        <p className="text-[14px] leading-snug text-center text-[#acacac] mb-1">
          At Atelier Armbruster our core team is made up of architects and designers from a wide range of backgrounds and educations. We also regularly work with a trusted group of independent contractors to perfectly meet each project&apos;s particular needs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-12">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-border mb-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-[14px]">{member.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
