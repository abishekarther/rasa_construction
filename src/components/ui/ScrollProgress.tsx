"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollProgress — thin accent bar at very top of viewport showing read progress.
 * ScrollToTop — pill button that fades in after 400px scroll.
 * Both are pure client-side UI, no routing/logic changes.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
      setShowTop(el.scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #0a3a3d 0%, #D4B18E 100%)",
          zIndex: 10000,
          transition: "width 80ms linear",
          transformOrigin: "left",
          borderRadius: "0 2px 2px 0",
        }}
      />

      {/* ── Back-to-top button ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            style={{
              position: "fixed",
              bottom: "88px",
              right: "24px",
              zIndex: 9998,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#0a3a3d",
              border: "1.5px solid rgba(212,177,142,0.28)",
              color: "#D4B18E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(6,36,38,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ArrowUp size={18} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
