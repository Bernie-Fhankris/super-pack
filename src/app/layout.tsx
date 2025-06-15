import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Head from "next/head";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
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
      </Head>
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
      </body>
    </html>
  );
}
