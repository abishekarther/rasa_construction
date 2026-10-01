// ─────────────────────────────────────────────────────────
// app/page.tsx — Main page assembly
// All sections imported from their canonical locations.
// No logic lives here — purely compositional.
// SEO metadata is managed in layout.tsx.
// ─────────────────────────────────────────────────────────
import Hero          from "@/components/sections/Hero";
import Services      from "@/components/sections/Services";
import StatsStrip    from "@/components/sections/StatsStrip";
import Projects      from "@/components/sections/Projects";
import Equipment     from "@/components/sections/Equipment";
import About         from "@/components/sections/About";
import Testimonials  from "@/components/sections/Testimonials";
import Contact       from "@/components/sections/Contact";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — cinematic opening, identity + CTA */}
      <Hero />

      {/* 2. Services — 5-card layout under services we offer */}
      <Services />

      {/* 3. Stats Strip — horizontal editorial statistics strip */}
      <StatsStrip />

      {/* 4. Projects — masonry gallery with filter */}
      <Projects />

      {/* 5. Equipment — rental inventory grid */}
      <Equipment />

      {/* 6. About — company story, founder, differentiators */}
      <About />

      {/* 7. Testimonials — 3-tier client reviews */}
      <Testimonials />

      {/* 8. Contact — form + contact list + map */}
      <Contact />

      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </main>
  );
}
