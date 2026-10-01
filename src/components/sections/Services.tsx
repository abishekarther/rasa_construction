"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { company } from "@/data/company";
import SectionWatermark from "@/components/ui/SectionWatermark";
import BlueprintBg from "@/components/ui/BlueprintBg";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="services" className="services-section section relative overflow-hidden" style={{ backgroundColor: "#F6F2EC" }} ref={ref}>
      {/* Blueprint grid background */}
      <BlueprintBg variant="light" opacity={0.03} />
      {/* Large watermark text */}
      <SectionWatermark text="SERVICES" align="right" variant="light" top="40%" opacity={0.02} />

      <div className="container services-container relative z-10">

        {/* ── Section Header ── */}
        <div className="section-header">
          <Reveal>
            <p className="section-eyebrow">{t.services.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title" aria-label="Services We Offer">
              {t.services.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">{t.services.lead}</p>
          </Reveal>
        </div>

        {/* ── Services Grid ── */}
        <motion.div
          className="services-showcase-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map(({ id, title, description, tag, image, alt, ta }, i) => {
            const displayTitle = language === "ta" && ta ? ta.title : title;
            const displayDesc  = language === "ta" && ta ? ta.description : description;
            const displayTag   = language === "ta" && ta ? ta.tag : tag;
            return (
              <motion.div
                key={id}
                variants={cardVariants}
                className="service-showcase-card group"
              >
                {/* ── Image ── */}
                <div className="service-showcase-image-wrapper">
                  {image && (
                    <Image
                      src={image}
                      alt={alt || title}
                      fill
                      className="object-cover service-showcase-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="service-showcase-image-overlay" />
                  {/* Category pill on image */}
                  <div className="service-showcase-badge">
                    <span>{displayTag}</span>
                  </div>
                </div>

                {/* ── Card Content ── */}
                <div className="service-showcase-content">
                  {/* Index number */}
                  <span className="service-showcase-index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3 className="service-showcase-title">{displayTitle}</h3>
                  <p className="service-showcase-description">{displayDesc}</p>

                  {/* Learn more cue */}
                  <div className="service-showcase-footer">
                    <span className="service-showcase-cue">
                      {language === "ta" ? "மேலும் அறிக" : "Learn more"}
                    </span>
                    <span className="service-showcase-arrow" aria-hidden="true">
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Editorial footer row ── */}
        <Reveal delay={0.1}>
          <div className="services-footer-row">
            <div>
              <p className="font-p" style={{ fontWeight: 600, fontSize: "var(--t-body)", color: "var(--clr-primary)" }}>
                {t.services.notSure}
              </p>
              <p className="t-sm" style={{ color: "var(--clr-text-lt)", marginTop: "var(--s1)", fontStyle: "italic" }}>
                <em>{t.services.callOwner(company.owner)}</em>
              </p>
            </div>
            <Button href={`tel:${company.contact.primary.replace(/\s/g, "")}`} variant="dark">
              {t.services.callForAdvice}
            </Button>
          </div>
        </Reveal>

        {/* ── Narrative cue ── */}
        <Reveal delay={0.2}>
          <a
            href="#projects"
            className="section-cue"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.services.cue}
            <span className="section-cue-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
