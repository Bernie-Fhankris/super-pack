import ContactClient from './ContactClient';
import Head from 'next/head';

export const metadata = {
  title: 'Kontak | Super Pack',
  description: 'Hubungi Super Pack untuk konsultasi solusi kemasan premium.',
  alternates: {
    canonical: 'https://superpack.id/kontak',
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <ContactClient />
    </>
  );
} 