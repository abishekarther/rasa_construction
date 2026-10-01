"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RasaLogo from "@/components/ui/Logo";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { scrollTo } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/i18n/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const { language } = useLanguage();
  const t = ui[language];
  const primaryPhone   = company.contact?.primary ?? "";
  const secondaryPhone = company.contact?.secondary ?? "";
  const cleanPhone = (p: string) => p.replace(/\s/g, "");

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="footer relative overflow-hidden"
      style={{ backgroundColor: "#051E20" }}
      aria-label="Site footer"
    >
      {/* Subtle grid texture */}
      <div className="footer-grid-bg" aria-hidden="true" />

      {/* Radial glow top-right */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="container relative z-10">

        {/* ── Top row: logo + tagline + back-to-top ── */}
        <div className="footer-top-row">
          <div>
            <RasaLogo size="md" variant="light" />
            <p className="footer-tagline">
              {language === "ta"
                ? "2000ஆம் ஆண்டு தொடங்கப்பட்டது · 25+ ஆண்டுகள் சேவை"
                : "Founded 2000 · 25+ Years of Site Excellence"}
            </p>
          </div>
          <motion.button
            onClick={scrollTop}
            aria-label="Back to top"
            className="footer-back-top"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ ease: EASE, duration: 0.22 }}
          >
            <span className="footer-back-top-label">
              {language === "ta" ? "மேலே செல்" : "Back to top"}
            </span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </motion.button>
        </div>

        {/* ── Divider ── */}
        <div className="footer-rule" />

        {/* ── Main grid ── */}
        <div className="footer-main-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <p className="footer-brand-desc">
              {language === "ta"
                ? "தமிழ்நாடு முழுவதும் நம்பகமான ஸ்காஃபோல்டிங், சென்டரிங் பொருட்கள், நிலைக்குத்து ஹாய்ஸ்ட் வாடகை மற்றும் கான்கிரீட் வேலைகளை வழங்கி வருகிறது."
                : "Reliable scaffolding, centring materials, vertical hoist rental, and concrete works for builders and contractors across South Tamil Nadu."}
            </p>

            {/* Social icons */}
            <div className="footer-social-row" aria-label="Social media links">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${cleanPhone(company.contact.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="footer-col-heading">{t.footer.navigation}</h4>
            <ul className="footer-link-list">
              {company.navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="footer-link"
                    aria-label={`Go to ${l.label} section`}
                  >
                    {language === "ta" ? l.labelTa : l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="footer-col-heading">{t.footer.services}</h4>
            <ul className="footer-link-list">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <span className="footer-link-muted">
                    {language === "ta" && s.ta ? s.ta.title : s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-heading">{t.footer.contact}</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={14} className="footer-contact-icon" aria-hidden="true" />
                <div>
                  <a href={`tel:${cleanPhone(primaryPhone)}`} className="footer-contact-link">
                    {primaryPhone}
                  </a>
                  {secondaryPhone && (
                    <a href={`tel:${cleanPhone(secondaryPhone)}`} className="footer-contact-link">
                      {secondaryPhone}
                    </a>
                  )}
                </div>
              </li>
              <li>
                <Mail size={14} className="footer-contact-icon" aria-hidden="true" />
                <a href={`mailto:${company.contact.email}`} className="footer-contact-link footer-email">
                  {company.contact.email}
                </a>
              </li>
              <li>
                <MapPin size={14} className="footer-contact-icon" style={{ marginTop: "2px" }} aria-hidden="true" />
                <a
                  href={company.contact.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  {language === "ta" ? company.contact.addressTa : company.contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom rule ── */}
        <div className="footer-rule" />

        {/* ── Copyright row ── */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {company.name}. {t.footer.rights}
          </p>
          <p className="footer-copy">
            {t.footer.designedBy}{" "}
            <a
              href="https://www.priscilla.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-designer-link"
            >
              Priscilla J
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
