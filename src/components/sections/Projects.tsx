"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import { projects, projectCategories, projectCategoriesTa } from "@/data/projects";
import { scrollTo } from "@/lib/utils";
import { cardGridStagger, itemReveal, EASE_CINEMATIC } from "@/lib/animations";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

const getProjectBentoClass = (i: number) => {
  if (i === 0) return "col-span-12 md:col-span-6";
  if (i === 1) return "col-span-12 md:col-span-3";
  if (i === 2) return "col-span-12 md:col-span-3";
  return "col-span-12 md:col-span-4";
};

/* ── Lightbox state shape ── */
interface LightboxState {
  images: string[];
  title:  string;
}

export default function Projects() {
  const ref     = useRef(null);
  const { language } = useLanguage();
  const t = ui[language];
  const [active,    setActive]    = useState<string>("All");
  const [hovered,   setHovered]   = useState<string | null>(null);
  const [lightbox,  setLightbox]  = useState<LightboxState | null>(null);

  const displayed = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  const openLightbox = (images: string[], title: string) => {
    setLightbox({ images, title });
  };

  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <section id="projects" style={{ background: "#FFFFFF" }} className="projects-section section relative overflow-hidden">
        {/* Huge background watermark */}
        <SectionWatermark text="PROJECTS" align="left" variant="light" top="40%" opacity={0.02} />

        <div className="container relative z-10" ref={ref}>

          {/* ── Section Header ── */}
          <div className="section-header relative w-full">
            {/* Decorative vertical section name */}
            <div className="absolute right-0 top-0 hidden lg:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.25em", color: "rgba(10,58,61,0.14)", userSelect: "none", textTransform: "uppercase" }}>
              {t.projects.badge}
            </div>
            <Reveal>
              <p className="section-eyebrow">{t.projects.eyebrow}</p>
            </Reveal>
            <h2 className="section-title">{t.projects.title}</h2>
            <Reveal delay={0.1}>
              <p className="section-lead">{t.projects.lead}</p>
            </Reveal>
            {/* Filter pills */}
            <Reveal delay={0.15}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s1)", marginTop: "var(--s3)" }}>
                {projectCategories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="t-label font-p"
                    style={{
                      padding:      "7px 18px",
                      borderRadius: "100px",
                      fontWeight:   active === cat ? 600 : 400,
                      border:       "none",
                      cursor:       "pointer",
                    }}
                    animate={{
                      background: active === cat ? "#0a3a3d" : "rgba(10,58,61,0.06)",
                      color:      active === cat ? "#FFFFFF" : "#5a6460",
                    }}
                    transition={{ duration: 0.25, ease: EASE_CINEMATIC }}
                  >
                    {language === "ta" ? (projectCategoriesTa[cat] ?? cat) : cat}
                  </motion.button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Bento Grid ── */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="bento-grid"
              variants={cardGridStagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {displayed.map(({ id, image, title, category, location, duration, description, ta, externalUrl, gallery }, i) => {
                const bentoClass = getProjectBentoClass(i);
                const isFeatured = i === 0;
                const displayTitle       = language === "ta" && ta ? ta.title       : title;
                const displayCategory    = language === "ta" && ta ? ta.category    : category;
                const displayLocation    = language === "ta" && ta ? ta.location    : location;
                const displayDuration    = language === "ta" && ta ? ta.duration    : duration;
                const displayDescription = language === "ta" && ta ? ta.description : description;

                /* ── View image action ── */
                const hasExternal = Boolean(externalUrl);
                const hasGallery  = gallery && gallery.length > 0;
                const viewImageLabel = language === "ta" ? "படத்தைப் பார்க்க" : "View Image";
                const viewImageText  = language === "ta" ? "படத்தைப் பார்க்க" : "View Image";

                const handleViewImage = (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (hasExternal && externalUrl) {
                    window.open(externalUrl, "_blank", "noopener,noreferrer");
                  } else if (hasGallery) {
                    openLightbox(gallery!, displayTitle);
                  }
                };

                return (
                  <motion.div
                    key={id}
                    variants={itemReveal}
                    layout
                    className={`project-card bento-card group ${bentoClass}`}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Media wrapper */}
                    <div className="absolute inset-0 bento-media">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover project-bento-img"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Premium gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(5,22,24,0.97) 0%, rgba(5,22,24,0.48) 52%, transparent 100%)",
                          opacity: hovered === id ? 1 : 0.8,
                          transition: "opacity 420ms cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10 mt-auto flex flex-col gap-2">
                      {/* Category badge */}
                      <div style={{ alignSelf: "flex-start" }}>
                        <span className="project-category-badge">{displayCategory}</span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-m text-white"
                        style={{ fontSize: isFeatured ? "var(--t-h1)" : "var(--t-h2)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                      >
                        {displayTitle}
                      </h3>

                      {/* Description for featured */}
                      {isFeatured && displayDescription && (
                        <p className="t-sm" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "460px", lineHeight: 1.65 }}>
                          {displayDescription}
                        </p>
                      )}

                      {/* Meta row */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s2)", marginTop: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <MapPin size={11} color="rgba(255,255,255,0.55)" />
                          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", fontFamily: "var(--font-body)" }}>
                            {displayLocation}
                          </span>
                        </div>
                        {displayDuration && (
                          <span style={{ color: "rgba(212,177,142,0.85)", fontSize: "0.62rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                            {displayDuration}
                          </span>
                        )}
                      </div>

                      {/* View image action cue */}
                      {(hasExternal || hasGallery) && (
                        <button
                          className="project-learn-more-btn"
                          onClick={handleViewImage}
                          aria-label={viewImageLabel}
                          type="button"
                          style={{
                            opacity: hovered === id ? 1 : (isFeatured ? 0.72 : 0),
                            transform: hovered === id ? "translateY(0)" : "translateY(6px)",
                            transition: "opacity 300ms ease, transform 300ms ease",
                          }}
                        >
                          <span>{viewImageText}</span>
                          <svg
                            className="project-learn-more-arrow"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ── CTA — editorial, left-aligned ── */}
          <Reveal>
            <div style={{ marginTop: "var(--s12)", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "var(--s4)", flexWrap: "wrap", borderTop: "1px solid rgba(10, 58, 61, 0.1)", paddingTop: "var(--s6)" }} className="projects-footer-row">
              <div>
                <p className="font-m" style={{ fontSize: "var(--t-h2)", color: "#0a3a3d", lineHeight: 1.2 }}>
                  {t.projects.readyTitle}
                </p>
                <p className="t-sm" style={{ color: "var(--clr-text-md)", marginTop: "var(--s1)" }}>
                  {t.projects.readyLead}
                </p>
              </div>
              <Button href="#contact" variant="dark" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}>
                {t.projects.requestQuote}
              </Button>
            </div>
          </Reveal>

          {/* ── Narrative cue ── */}
          <Reveal delay={0.15}>
            <a href="#equipment" className="section-cue" onClick={(e) => { e.preventDefault(); document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" }); }}>
              {t.projects.cue}
              <span className="section-cue-arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox portal ── */}
      {lightbox && (
        <ProjectLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
