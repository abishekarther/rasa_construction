"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RasaLogo from "@/components/ui/Logo";

/**
 * PageLoader — premium logo reveal that fades out after assets load.
 * Shows for max 1.8s then disappears with a smooth opacity transition.
 * Does NOT block navigation or data fetching.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#062426",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
          aria-hidden="true"
        >
          {/* Logo reveal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <RasaLogo size="lg" variant="light" />
          </motion.div>

          {/* Thin progress bar */}
          <motion.div
            style={{
              width: "120px",
              height: "2px",
              background: "rgba(212,177,142,0.15)",
              borderRadius: "999px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #0a3a3d, #D4B18E)",
                borderRadius: "999px",
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Building Strength · Delivering Trust
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
