import ProductGalleryClient from './ProductGalleryClient';
import { GALLERY_ITEMS } from '@/constants/galleryList';
import Head from 'next/head';

export const metadata = {
  title: 'Galeri Produk | Super Pack',
  description: 'Jelajahi galeri solusi kemasan berkualitas tinggi Super Pack untuk berbagai industri.',
  alternates: {
    canonical: 'https://superpack.id/galeri',
  },
};

export default function GalleryPage() {
  const imageSchema = {
    "@context": "https://schema.org",
    "@graph": GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      "contentUrl": item.imageUrl ? `https://superpack.id${item.imageUrl}` : undefined,
      "name": item.title || "Gambar Galeri Super Pack",
      "caption": item.title || "Gambar Galeri Super Pack",
      "description": item.title || "Gambar produk dan hasil pengemasan dari Super Pack.",
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position:1, name:"Beranda", item:"https://superpack.id/" },
      { "@type": "ListItem", position:2, name:"Galeri", item:"https://superpack.id/galeri" },
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <ProductGalleryClient />
    </>
  );
} 