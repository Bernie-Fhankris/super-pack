import ContactClient from './ContactClient';
import Script from 'next/script';

export const metadata = {
  title: 'Kontak | Super Pack',
  description: 'Hubungi Super Pack untuk konsultasi solusi kemasan premium.',
  alternates: {
    canonical: 'https://superpack.id/kontak',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://superpack.id/kontak',
    title: 'Kontak | Super Pack',
    description: 'Hubungi Super Pack untuk konsultasi solusi kemasan premium.',
    siteName: 'Super Pack',
  },
  twitter: {
    card: 'summary',
    title: 'Kontak | Super Pack',
    description: 'Hubungi Super Pack untuk konsultasi solusi kemasan premium.',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position:1, name:"Beranda", item:"https://superpack.id/" },
      { "@type": "ListItem", position:2, name:"Kontak", item:"https://superpack.id/kontak" },
    ],
  };

  return (
    <>
      <Script
        id="ld-contactpoint"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://superpack.id/#organization",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+62-821-8888-7061",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["id", "en"],
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
} 