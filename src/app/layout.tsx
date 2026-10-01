import type { Metadata } from "next";
import { Space_Grotesk, Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import "./phase2.css";
import "./phase3.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/ui/PageWrapper";
import { company } from "@/data/company";
import { LanguageProvider } from "@/context/LanguageContext";

// Space Grotesk — premium geometric sans for headings
const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Inter — benchmark legibility font for body text
const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const tamilFont = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tamil",
  display: "swap",
});
const siteUrl = "https://rasa-construction-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rasa Construction | Scaffolding, Centring & Concrete Works – Tamil Nadu",
    template: "%s | Rasa Construction",
  },
  description:
    "Rasa Construction provides scaffolding rental, centring materials, vertical hoist rental, concrete work support, and site material movement across South Tamil Nadu since 2000. Led by Gurusamy A. Call +91 98427 66379.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Rasa Construction | Scaffolding & Site Support – Tamil Nadu",
    description:
      "25+ years of reliable scaffolding, centring materials, vertical hoist rental and concrete works across Tirunelveli, Kanyakumari, Tenkasi & Nagercoil.",
    url: siteUrl,
    siteName: "Rasa Construction",
    images: [
      {
        url: "/og-rasa-construction.png",
        width: 1200,
        height: 630,
        alt: "Rasa Construction – Scaffolding and Site Support across South Tamil Nadu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasa Construction | Scaffolding & Site Support – Tamil Nadu",
    description:
      "25+ years of reliable scaffolding, centring materials, vertical hoist rental and concrete works across South Tamil Nadu.",
    images: ["/og-rasa-construction.png"],
  },
  keywords:
    "Rasa Construction, scaffolding rental Tamil Nadu, centring materials Tirunelveli, concrete works, vertical hoist rental, construction support Kanyakumari, Tenkasi scaffolding, Nagercoil construction, Gurusamy A, site support South Tamil Nadu",
  authors: [{ name: company.name, url: siteUrl }],
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased ${headingFont.variable} ${bodyFont.variable} ${tamilFont.variable}`}>
        <LanguageProvider>
          <PageWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

