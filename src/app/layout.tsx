import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Pack | Premium Packaging Solutions",
  description:
    "Super Pack menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.",
  alternates: {
    canonical: "https://superpack.id/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://superpack.id/",
    title: "Super Pack | Premium Packaging Solutions",
    description:
      "Super Pack menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.",
    siteName: "Super Pack",
    images: [
      {
        url: "/superpack-logo.png",
        width: 512,
        height: 512,
        alt: "Super Pack Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Pack | Premium Packaging Solutions",
    description:
      "Super Pack menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.",
    images: ["/superpack-logo.png"],
  },
};

export const themeColor = "#ffffff";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${lato.className} antialiased pt-14 md:pt-16 bg-gray-50`}>
        {/* Skip Link for keyboard users */}
        <a
          href="#main-content"
          className="skip-link absolute left-4 top-0 -translate-y-full focus:translate-y-0 focus:outline-none bg-white text-[#ed1c24] font-bold px-4 py-2 rounded-b-md transition-transform z-[10000]"
        >
          Lewati ke konten utama
        </a>
        <Header />
        {/* Anchor target for skip-link */}
        <div id="main-content" tabIndex={-1} />
        {children}
        <Footer />
        {/* Schema.org JSON-LD */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://superpack.id/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://superpack.id/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Organization schema */}
        <Script
          id="ld-organization-home"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://superpack.id/#organization",
              name: "Super Pack",
              url: "https://superpack.id/",
              logo: "https://superpack.id/superpack-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-821-8888-7061",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["id", "en"],
              },
              sameAs: [
                "https://instagram.com/",
                "https://facebook.com/",
                "https://linkedin.com/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
