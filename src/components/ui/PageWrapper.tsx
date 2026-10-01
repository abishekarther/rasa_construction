"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RasaLogo from "@/components/ui/Logo";
import ScrollProgress from "@/components/ui/ScrollProgress";

const EASE = [0.22, 1, 0.36, 1] as const;
const LOADER_DURATION = 1600; // ms

interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Page loader — fades out after mount ── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#051E20",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              pointerEvents: "none",
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            >
              <RasaLogo size="lg" variant="light" />
            </motion.div>

            {/* Progress bar */}
            <div
              style={{
                width: "100px",
                height: "2px",
                background: "rgba(212,177,142,0.15)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, delay: 0.15, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #0a3a3d, #D4B18E)",
                  borderRadius: "999px",
                }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.38 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Building Strength · Delivering Trust
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scroll progress bar + back-to-top button ── */}
      <ScrollProgress />

      {/* ── Page content ── */}
      {children}
    </>
  );
}
