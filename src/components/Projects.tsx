"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { projects, filters, type Category } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const project = selectedProject !== null ? filtered[selectedProject] : null;
  const totalSlides = project?.images.length ?? 0;

  const close = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlide(0);
  }, []);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (selectedProject === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, close, next, prev]);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="py-16 md:py-24 px-3 md:px-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-muted text-[14px] mb-0">
          We create exquisite residences tailored to how you want to live today
        </p>
        <div className="flex justify-center text-[14px]">
          {filters.map((filter, i) => (
            <span key={filter.value}>
              <button
                onClick={() => setActiveFilter(filter.value)}
                className={`transition-colors ${
                  activeFilter === filter.value
                    ? "text-foreground italic"
                    : "text-foreground hover:text-muted"
                }`}
              >
                {filter.label}
              </button>
              {i < filters.length - 1 && <span>,&nbsp; </span>}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Project grid — 4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        {filtered.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            className={proj.inProgress ? "" : "group cursor-pointer"}
            onClick={proj.inProgress ? undefined : () => {
              setSelectedProject(i);
              setCurrentSlide(0);
            }}
          >
            <div className="relative overflow-hidden mb-2">
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-auto block"
              />
              {!proj.inProgress && (
                <>
                  <div className="absolute inset-0 bg-[#f4b4b0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute top-3 left-3 w-[7px] h-[7px] bg-[#2a2a2a]" />
                    <span className="absolute top-3 right-3 w-[7px] h-[7px] bg-[#2a2a2a]" />
                    <span className="absolute bottom-3 left-3 w-[7px] h-[7px] bg-[#2a2a2a]" />
                    <span className="absolute bottom-3 right-3 w-[7px] h-[7px] bg-[#2a2a2a]" />
                  </div>
                </>
              )}
            </div>
            <p className="text-[14px]">
              {proj.title}
              {proj.inProgress && <span className="text-muted italic"> — In Progress</span>}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Slideshow Lightbox */}
      <AnimatePresence>
        {selectedProject !== null && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[102] flex flex-col"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

            <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5 text-[14px]">
              <span>
                {currentSlide + 1}/{totalSlides}
              </span>
              <span>{project.title}</span>
              <button
                onClick={close}
                className="hover:text-muted transition-colors"
              >
                Close
              </button>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16 min-h-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={project.images[currentSlide]}
                  alt={`${project.title} — ${currentSlide + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="max-h-[calc(100vh-180px)] max-w-full object-contain mx-auto pointer-events-none"
                />
              </AnimatePresence>
              <div
                className="absolute inset-y-0 left-0 w-1/2 z-10 cursor-[w-resize]"
                onClick={prev}
              />
              <div
                className="absolute inset-y-0 right-0 w-1/2 z-10 cursor-[e-resize]"
                onClick={next}
              />
            </div>

            <div className="relative z-10 text-center py-5 text-[14px]">
              {project.photographer
                ? `Photographed by ${project.photographer}`
                : "\u00A0"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
