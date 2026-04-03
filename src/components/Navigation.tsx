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

function isNightInNYC(): boolean {
  const now = new Date();
  const hour = parseInt(
    now.toLocaleString("en-US", { hour: "numeric", hour12: false, timeZone: "America/New_York" })
  );
  return hour >= 19 || hour < 6;
}

export default function Navigation() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    setIsNight(isNightInNYC());
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && isNightInNYC())) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
      });
      setTime(formatted.replace(" ", ""));
      setIsNight(isNightInNYC());
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
        style={{ background: `linear-gradient(to bottom, var(--color-background) 0%, var(--color-background) 50%, transparent 100%)` }}
        className="fixed top-0 left-0 right-0 z-[101] grid grid-cols-3 items-center px-5 md:px-5 pt-5 md:pt-3 pb-14 text-[14px]"
      >
        {/* Time + dark mode toggle – hidden on mobile */}
        <span className="hidden md:inline-flex items-center gap-1.5">
          {time} <span className="text-muted">NYC</span>
          <button
            onClick={toggleDark}
            className="-ml-0.5 hover:opacity-60 transition-opacity"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.svg
                  key="moon"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="sun"
                  initial={{ scale: 0, rotate: 180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  width="11" height="11" viewBox="0 0 24 24" fill="currentColor"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </span>
        {/* Empty col-1 on mobile to keep title centered */}
        <span className="md:hidden" />

        <a
          href="/?skipSplash=1"
          className="text-center justify-self-center whitespace-nowrap"
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
          style={{ backgroundColor: menuOpen ? "var(--color-muted)" : "transparent" }}
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
            className="fixed inset-0 z-[100] bg-background flex flex-col"
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
