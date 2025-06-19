import ProductGalleryClient from './ProductGalleryClient';
import { GALLERY_ITEMS } from '@/constants/galleryList';
import Script from 'next/script';

export const metadata = {
  title: 'Galeri Produk | Super Pack',
  description: 'Jelajahi galeri solusi kemasan berkualitas tinggi Super Pack untuk berbagai industri.',
  alternates: {
    canonical: 'https://superpack.id/galeri',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://superpack.id/galeri',
    title: 'Galeri Produk | Super Pack',
    description: 'Jelajahi galeri solusi kemasan berkualitas tinggi Super Pack untuk berbagai industri.',
    siteName: 'Super Pack',
  },
  twitter: {
    card: 'summary',
    title: 'Galeri Produk | Super Pack',
    description: 'Jelajahi galeri solusi kemasan berkualitas tinggi Super Pack untuk berbagai industri.',
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
      <Script
        id="ld-gallery-images"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <Script
        id="ld-breadcrumb-gallery"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductGalleryClient />
    </>
  );
} 