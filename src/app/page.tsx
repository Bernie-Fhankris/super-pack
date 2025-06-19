import HeroSection from "@/sections/HeroSection/HeroSection";
import FeaturedProductsSection from "@/sections/FeaturedProductsSection/FeaturedProductsSection";
import AboutSection from "@/sections/AboutSection/AboutSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import PartnersSection from "@/sections/PartnersSection/PartnersSection";
import TestimonialsSection from "@/sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import Script from "next/script";

// Metadata for SEO
export const metadata = {
  title: "Super Pack | Premium Packaging Solutions",
  description:
    "Super Pack menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.",
  alternates: {
    canonical: "https://superpack.id/",
  },
};

export default function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://superpack.id/#webpage",
    url: "https://superpack.id/",
    name: "Super Pack | Premium Packaging Solutions",
    description:
      "Super Pack menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.",
    inLanguage: "id-ID",
    isPartOf: { "@id": "https://superpack.id/#website" },
  };

  return (
    <>
      <Script
        id="ld-webpage-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />
        {/* Featured Products Section */}
        <FeaturedProductsSection />
        {/* About Section */}
        <AboutSection />
        {/* Gallery Section */}
        <GallerySection />
        {/* Partners Section */}
        <PartnersSection />
        {/* Testimonials Section */}
        <TestimonialsSection />
        {/* Contact Section */}
        <ContactSection />
        {/* TODO: Tambahkan section lain (FeaturedProducts, About, dll.) setelah diporting */}
      </main>
    </>
  );
}
