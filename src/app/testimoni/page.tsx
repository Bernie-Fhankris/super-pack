import TestimonialsClient from './TestimonialsClient';
import Head from 'next/head';

export const metadata = {
  title: 'Testimoni Pelanggan | Super Pack',
  description: 'Pendapat jujur dari para pelanggan yang telah menggunakan produk dan layanan kami.',
  alternates: {
    canonical: 'https://superpack.id/testimoni',
  },
};

export default function TestimonialsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position:1, name:"Beranda", item:"https://superpack.id/" },
      { "@type": "ListItem", position:2, name:"Testimoni", item:"https://superpack.id/testimoni" },
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
      <TestimonialsClient />
    </>
  );
} 