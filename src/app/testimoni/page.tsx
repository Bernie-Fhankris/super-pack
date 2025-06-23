import TestimonialsClient from './TestimonialsClient';
import Script from 'next/script';

export const metadata = {
  title: 'Testimoni Pelanggan | Super Pack',
  description: 'Pendapat jujur dari para pelanggan yang telah menggunakan produk dan layanan kami.',
  alternates: {
    canonical: 'https://www.superpack.id/testimoni',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://www.superpack.id/testimoni',
    title: 'Testimoni Pelanggan | Super Pack',
    description: 'Pendapat jujur dari para pelanggan yang telah menggunakan produk dan layanan kami.',
    siteName: 'Super Pack',
  },
  twitter: {
    card: 'summary',
    title: 'Testimoni Pelanggan | Super Pack',
    description: 'Pendapat jujur dari para pelanggan yang telah menggunakan produk dan layanan kami.',
  },
};

export default function TestimonialsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position:1, name:"Beranda", item:"https://www.superpack.id/" },
      { "@type": "ListItem", position:2, name:"Testimoni", item:"https://www.superpack.id/testimoni" },
    ],
  };

  return (
    <>
      <Script
        id="ld-breadcrumb-testimoni"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TestimonialsClient />
    </>
  );
} 