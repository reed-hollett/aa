"use client";

import { Suspense, useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import About from "@/components/HomeAbout";
import Footer from "@/components/Footer";

function HomeContent() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skipSplash") === "1";
  const [showSplash, setShowSplash] = useState(!skip);
  const [sectionDark, setSectionDark] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <Splash onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <motion.div
        initial={skip ? false : { opacity: 0 }}
        animate={showSplash ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Navigation sectionDark={sectionDark} />
        <main>
          <Hero />
          <About onDarkChange={setSectionDark} />
          {/* CTA buttons */}
          <div className="flex justify-center px-6 md:px-10 pb-16 md:pb-24">
            <a
              href="/projects"
              className="border border-foreground text-foreground px-5 py-3 text-[14px] font-normal hover:opacity-80 transition-colors"
            >
              View projects
            </a>
            <a
              href="/contact"
              className="bg-foreground text-background px-5 py-3 text-[14px] font-normal hover:opacity-80 transition-colors ml-3"
            >
              Get in touch
            </a>
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
