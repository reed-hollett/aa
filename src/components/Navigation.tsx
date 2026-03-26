"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.3 }}
      style={{ background: "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)" }}
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-3 md:px-5 py-5 pb-14 text-[14px]"
    >
      <span>
        {time} <span className="text-muted">NYC</span>
      </span>
      <a
        href={pathname === "/" ? "/" : "/?skipSplash=1"}
        className="text-center justify-self-center"
      >
        Atelier Armbruster
      </a>
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
    </motion.nav>
  );
}
