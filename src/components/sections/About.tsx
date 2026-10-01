"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import { Layers, Columns, ArrowUpCircle, Truck } from "lucide-react";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

/* ── Component ───────────────────────────────────────────── */

export default function About() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section
      id="about"
      className="about-section bg-[#FBF7F1] relative overflow-hidden"
    >
      <SectionWatermark text="ABOUT" align="center" variant="light" top="35%" opacity={0.012} />

      <div className="container about-container relative z-10">

        {/* ── 1. Rasa Today + Founder Image ─────────────────── */}
        <div className="about-layout grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start mb-20">
          <div className="flex flex-col justify-start">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#083335] mt-0 mb-4 leading-tight">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="heritage-rule">
                <span className="heritage-rule-text">{t.about.est}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#162625] text-base md:text-lg leading-relaxed font-medium">
                {language === "ta"
                  ? "ராசா கன்ஸ்ட்ரக்‌ஷன் இப்போது தென் தமிழ்நாடு முழுவதும் உள்ள பில்டர்கள் மற்றும் கான்ட்ராக்டர்களுக்கு ஸ்காஃபோல்டிங் வாடகை, சென்டரிங் பொருட்கள், கான்கிரீட் வேலை ஆதரவு, நிலைக்குத்து ஹாய்ஸ்ட் வாடகை, ஜாக்கி ஸ்பான் ஷீட்கள் மற்றும் தள பொருள் நகர்வுடன் ஆதரவளிக்கிறது."
                  : "Rasa Construction now supports builders and contractors across South Tamil Nadu with scaffolding rental, centring materials, concrete work support, vertical hoist rental, jockey span sheets, and site material movement."}
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center w-full lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <div className="about-image-card bg-white border border-[rgba(8,51,53,0.12)] rounded-2xl shadow-[0_10px_28px_rgba(8,51,53,0.07)] overflow-hidden w-full max-w-[440px]">
                <div className="relative w-full aspect-[4/3] bg-[#F6F1EA] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-[#F6F1EA]">
                    <span className="text-sm text-[#083335] font-bold">
                      Founder / crew image can be added here
                    </span>
                  </div>
                  <div className="absolute inset-0 z-10">
                    <Image
                      src="/images/support-team-site.jpg"
                      alt="Rasa Construction Crew"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 440px"
                    />
                  </div>
                </div>
                <div className="p-5 text-center border-t border-[rgba(8,51,53,0.08)] bg-white">
                  <p className="text-xs text-[#66706B] font-semibold uppercase tracking-wider">
                    Rasa Construction Support Team
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── 2. What We Support Today ─────────────────────────────── */}
        <div className="mb-8">
          <Reveal>
            <h3 className="about-support-heading">
              {t.about.todaySupport}
            </h3>
          </Reveal>
          <div className="about-support-grid">
            {(language === "ta" ? [
              { icon: Layers, title: "ஸ்காஃபோல்டிங் & பைப்கள்", body: "கப் லாக் பைப்கள், ஸ்காஃபோல்டிங் பைப்கள், 1மீ, 2மீ, 1அடி மற்றும் 2அடி பைப்கள்.", delay: 0.05 },
              { icon: Columns, title: "சென்டரிங் & ஜாக்கி ஷீட்கள்", body: "சென்டரிங் பொருட்கள் மற்றும் இரண்டு அளவுகளில் ஜாக்கி ஸ்பான் ஷீட்கள்.", delay: 0.1 },
              { icon: ArrowUpCircle, title: "நிலைக்குத்து ஹாய்ஸ்ட் வாடகை", body: "எச்-ஃபிரேம் ஆதரவுடன் நிலைக்குத்து ஹாய்ஸ்ட் வாடகை.", delay: 0.15 },
              { icon: Truck, title: "வாகன பட்டாளம் & தள நகர்வு", body: "407, டாடா ஏஸ், டாடா இன்ட்ரா, அசோக் லேலண்ட் HB1215 மற்றும் பொருள் டெலிவரி ஆதரவு.", delay: 0.2 },
            ] : [
              { icon: Layers, title: "Scaffolding & Pipes", body: "Cup lock pipes, scaffolding pipes, 1m, 2m, 1ft, and 2ft pipes.", delay: 0.05 },
              { icon: Columns, title: "Centring & Jockey Sheets", body: "Centring materials and jockey span sheets in two sizes.", delay: 0.1 },
              { icon: ArrowUpCircle, title: "Vertical Hoist Rental", body: "Vertical hoist rental with H-frame support.", delay: 0.15 },
              { icon: Truck, title: "Fleet & Site Movement", body: "407, Tata Ace, Tata Intra, Ashok Leyland HB1215 and material delivery support.", delay: 0.2 },
            ]).map(({ icon: Icon, title, body, delay }) => (
              <Reveal key={title} delay={delay}>
                <div className="about-support-card">
                  <div className="about-support-icon-wrap" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h4 className="about-support-title">{title}</h4>
                  <p className="about-support-body">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Narrative cue ── */}
        <Reveal delay={0.15}>
          <a
            href="#contact"
            className="section-cue"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.about.needSupport}
            <span className="section-cue-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}
