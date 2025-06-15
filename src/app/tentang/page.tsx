import AboutClient from './AboutClient';
import { CONTACT_INFO } from '@/constants/contactInfo';
import Head from 'next/head';

export const metadata = {
  title: 'Tentang Kami | Super Pack',
  description: 'Profil perusahaan, visi, misi, dan nilai Super Pack sebagai penyedia solusi kemasan premium.',
  alternates: {
    canonical: 'https://superpack.id/tentang',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "Tentang Super Pack",
        "url": "https://superpack.id/tentang",
        "description": "Super Pack adalah produsen kemasan modern yang berfokus pada solusi bubble wrap berkualitas tinggi untuk berbagai kebutuhan industri dan UMKM di Indonesia. Kami menghadirkan produk yang fungsional, aman, dan ramah lingkungan — langsung dari fasilitas produksi milik kami sendiri."
      },
      {
        "@type": "Organization",
        "name": "Super Pack",
        "url": "https://superpack.id",
        "logo": "https://superpack.id/logo.png", // Pastikan path ini sesuai dengan lokasi logo Anda
        "foundingDate": "2023",
        "description": "Didirikan pada tahun 2023, Super Pack hadir sebagai bagian dari upaya menyediakan kemasan pelindung yang tidak hanya kuat dan praktis, tapi juga memperhatikan efisiensi logistik dan keberlanjutan lingkungan. Berbasis di kawasan industri Bekasi, kami melayani berbagai sektor mulai dari ekspor, logistik, makanan, hingga retail lokal.",
        "email": CONTACT_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONTACT_INFO.address.split(', ').slice(0, -2).join(', '), // Extract street address
          "addressLocality": CONTACT_INFO.address.split(', ')[CONTACT_INFO.address.split(', ').length - 2].trim(), // Extract city/locality (e.g., Jakarta Barat)
          "addressRegion": "DKI Jakarta", // General region for Jakarta Barat
          "postalCode": CONTACT_INFO.address.split(' ').pop(), // Extract postal code
          "addressCountry": "ID"
        },
        "sameAs": [
          "https://www.linkedin.com/", 
          "https://instagram.com/", 
          "https://www.facebook.com/"
        ]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position:1, name:"Beranda", item:"https://superpack.id/" },
      { "@type": "ListItem", position:2, name:"Tentang", item:"https://superpack.id/tentang" },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <AboutClient />
    </>
  );
} 