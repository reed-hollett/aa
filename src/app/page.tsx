"use client";

import { Suspense, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import About from "@/components/HomeAbout";
import Footer from "@/components/Footer";

function HomeContent() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skipSplash") === "1";
  const [showSplash, setShowSplash] = useState(!skip);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <Splash onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <Navigation />
      <main>
        <Hero />
        <About />
        {/* CTA buttons */}
        <div className="flex justify-center px-6 md:px-10 pb-16 md:pb-24">
          <a
            href="/projects"
            className="bg-[#d9d9d9] text-foreground px-5 py-3 text-[14px] font-normal hover:bg-[#c5c5c5] transition-colors"
          >
            View projects
          </a>
          <a
            href="/contact"
            className="bg-[#2a2a2a] text-white px-5 py-3 text-[14px] font-normal hover:bg-[#1a1a1a] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </main>
      <Footer />
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
