"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
      });
      setTime(formatted.replace(" ", ""));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        style={{ background: "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)" }}
        className="fixed top-0 left-0 right-0 z-[101] grid grid-cols-3 items-center px-3 md:px-5 pt-3 pb-14 text-[14px]"
      >
        {/* Time – hidden on mobile */}
        <span className="hidden md:inline">
          {time} <span className="text-muted">NYC</span>
        </span>
        {/* Empty col-1 on mobile to keep title centered */}
        <span className="md:hidden" />

        <a
          href="/?skipSplash=1"
          className="text-center justify-self-center"
        >
          Atelier Armbruster
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex justify-end">
          {navLinks.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                className={`hover:text-muted transition-colors ${pathname === link.href ? "italic" : ""}`}
              >
                {link.label}
              </a>
              {i < navLinks.length - 1 && <span>,&nbsp; </span>}
            </span>
          ))}
        </div>

        {/* Hamburger / Close – mobile only, animates between states */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden justify-self-end w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: menuOpen ? "#e0e0e0" : "transparent" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <motion.line
              animate={menuOpen ? { x1: 3, y1: 3, x2: 15, y2: 15 } : { x1: 2, y1: 7, x2: 16, y2: 7 }}
              transition={{ duration: 0.3 }}
            />
            <motion.line
              animate={menuOpen ? { x1: 15, y1: 3, x2: 3, y2: 15 } : { x1: 2, y1: 11, x2: 16, y2: 11 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Spacer for nav height */}
            <div className="h-20" />

            {/* Menu links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="text-[clamp(3rem,12vw,5rem)] leading-[1.15] font-normal"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
