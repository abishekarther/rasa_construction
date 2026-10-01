"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, FolderCheck, Wrench, Users } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

/* ── Parse numeric value from strings like "25+", "500+" ── */
const parseNum = (val: string) => parseInt(val.replace(/\D/g, ""), 10) || 0;
const getSuffix = (val: string) => val.replace(/[0-9]/g, "");

/* ── Icons mapped by stat index ── */
const ICONS = [Award, FolderCheck, Wrench, Users];

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({
  value,
  label,
  icon: Icon,
  index,
  active,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  index: number;
  active: boolean;
}) {
  const num = parseNum(value);
  const suffix = getSuffix(value);
  const count = useCountUp(num, 1600, active);

  return (
    <motion.div
      className="stats-item-card"
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon badge */}
      <div className="stats-icon-wrap" aria-hidden="true">
        <Icon size={18} strokeWidth={1.75} />
      </div>

      {/* Number */}
      <div className="stats-value" aria-live="polite">
        {count}
        <span className="stats-suffix">{suffix}</span>
      </div>

      {/* Label */}
      <div className="stats-label">{label}</div>

      {/* Divider (except last) */}
      {index < company.stats.length - 1 && (
        <div className="stats-divider" aria-hidden="true" />
      )}
    </motion.div>
  );
}

export default function StatsStrip() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="stats-strip"
    >
      {/* Subtle grid texture */}
      <div className="stats-strip-grid" aria-hidden="true" />

      <div className="container stats-strip-inner">
        {company.stats.map(({ value, label, labelTa }, i) => {
          const Icon = ICONS[i] ?? Award;
          return (
            <StatItem
              key={label}
              value={value}
              label={language === "ta" ? labelTa : label}
              icon={Icon}
              index={i}
              active={inView}
            />
          );
        })}
      </div>

      {/* Bottom accent rule */}
      <div className="stats-accent-rule" aria-hidden="true">
        <svg width="100%" height="8" viewBox="0 0 1440 8" preserveAspectRatio="none" fill="none">
          <line x1="0" y1="4" x2="1440" y2="4" stroke="rgba(212,177,142,0.18)" strokeWidth="0.5" />
          <line x1="0" y1="2" x2="360" y2="2" stroke="rgba(212,177,142,0.35)" strokeWidth="1" />
          <circle cx="360" cy="2" r="2.5" fill="rgba(212,177,142,0.55)" />
          <line x1="360" y1="2" x2="720" y2="2" stroke="rgba(212,177,142,0.18)" strokeWidth="0.5" />
          <circle cx="720" cy="4" r="2" fill="rgba(212,177,142,0.35)" />
          <line x1="720" y1="6" x2="1080" y2="6" stroke="rgba(212,177,142,0.22)" strokeWidth="0.5" />
          <circle cx="1080" cy="6" r="2.5" fill="rgba(212,177,142,0.45)" />
          <line x1="1080" y1="4" x2="1440" y2="4" stroke="rgba(212,177,142,0.28)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
