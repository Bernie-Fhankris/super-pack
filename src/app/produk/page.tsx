import ProductListClient from './ProductListClient';
import { ALL_PRODUCTS } from '@/constants/featuredProducts';
import Script from 'next/script';
import slugify from 'slugify';

export const metadata = {
  title: 'Bubble Wrap Roll & Varian – Super Pack',
  description: 'Jual Bubble Wrap Roll, lembaran, dan berbagai ukuran. Produk bubble wrap Super Pack tersedia untuk kebutuhan packing bisnis & pribadi. Harga grosir & eceran.',
  alternates: {
    canonical: 'https://superpack.id/produk',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://superpack.id/produk',
    title: 'Bubble Wrap Roll & Varian – Super Pack',
    description: 'Jual Bubble Wrap Roll, lembaran, dan berbagai ukuran. Produk bubble wrap Super Pack tersedia untuk kebutuhan packing bisnis & pribadi. Harga grosir & eceran.',
    siteName: 'Super Pack',
  },
  twitter: {
    card: 'summary',
    title: 'Bubble Wrap Roll & Varian – Super Pack',
    description: 'Jual Bubble Wrap Roll, lembaran, dan berbagai ukuran. Produk bubble wrap Super Pack tersedia untuk kebutuhan packing bisnis & pribadi. Harga grosir & eceran.',
  },
};

export default function ProdukPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@graph": ALL_PRODUCTS.map((product) => ({
      "@type": "Product",
      "name": product.name,
      "sku": `SP-${product.id.toUpperCase()}`,
      "image": product.imageUrl ? `https://superpack.id${product.imageUrl}` : undefined,
      "description": product.description || "Produk kemasan dari Super Pack.",
      "brand": {
        "@type": "Brand",
        "name": "Super Pack"
      },
      // Conditionally attach offers only when price available.
      ...((() => {
        const hasPrice =
          product.price !== undefined &&
          product.price > 0 &&
          product.category !== 'Coming Soon';

        return {
          "offers": {
            "@type": "Offer",
            price: (hasPrice ? product.price! : 0).toString(),
            priceCurrency: "IDR",
            availability: hasPrice
              ? "https://schema.org/InStock"
              : "https://schema.org/PreOrder",
            url: `https://superpack.id/produk/${slugify(product.name, { lower: true, strict: true })}`,
          }
        } as const;
      })())
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://superpack.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produk",
        item: "https://superpack.id/produk",
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-product-graph"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="ld-breadcrumb-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductListClient />
    </>
  );
} 