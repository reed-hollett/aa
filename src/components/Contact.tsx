"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto mb-16"
      >
        <img
          src="/images/office.png"
          alt="Atelier Armbruster office"
          className="w-full h-auto block"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="space-y-6 text-[14px]">
          {/* Address */}
          <div>
            <p className="text-muted mb-1">Address</p>
            <p>22 West 27th Street, 4th Floor, New York, NY 10001</p>
          </div>

          {/* Phone */}
          <div>
            <p className="text-muted mb-1">Phone</p>
            <a
              href="tel:+12126529991"
              className="hover:text-muted transition-colors"
            >
              (212) 652 9991 x 700
            </a>
          </div>

          {/* Email */}
          <div>
            <p className="text-muted mb-1">Email</p>
            <a
              href="mailto:hello@atelierarmbruster.com"
              className="hover:text-muted transition-colors"
            >
              hello@atelierarmbruster.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
