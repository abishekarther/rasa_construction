"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectLightboxProps {
  /** Array of image paths to display */
  images: string[];
  /** Starting index when opened */
  initialIndex?: number;
  /** Project title — used for alt text and aria-label */
  title: string;
  /** Called when the lightbox should close */
  onClose: () => void;
}

export default function ProjectLightbox({
  images,
  initialIndex = 0,
  title,
  onClose,
}: ProjectLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowLeft") goPrev();
      if (hasMultiple && e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext, hasMultiple]);

  /* ── Prevent body scroll while open ── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ── Slide animation variants ── */
  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? "60%" : "-60%",
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (d: number) => ({
      x: d > 0 ? "-60%" : "60%",
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <AnimatePresence>
      {/* ── Backdrop ── */}
      <motion.div
        key="lightbox-backdrop"
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Dialog ── */}
      <motion.div
        key="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`Project images — ${title}`}
        className="lightbox-dialog"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close button ── */}
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image viewer"
          type="button"
        >
          <X size={20} strokeWidth={2} />
        </button>

        {/* ── Image area ── */}
        <div className="lightbox-img-area">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="lightbox-img-wrapper"
            >
              <Image
                src={images[index]}
                alt={`${title} — image ${index + 1} of ${total}`}
                fill
                className="lightbox-img"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer: counter + prev/next ── */}
        <div className="lightbox-footer">
          {hasMultiple && (
            <button
              className="lightbox-nav-btn"
              onClick={goPrev}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
          )}

          <span className="lightbox-counter" aria-live="polite">
            {index + 1} / {total}
          </span>

          {hasMultiple && (
            <button
              className="lightbox-nav-btn"
              onClick={goNext}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          )}
        </div>

        {/* ── Caption ── */}
        <p className="lightbox-caption">{title}</p>
      </motion.div>
    </AnimatePresence>
  );
}
