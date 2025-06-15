'use client';

import { ALL_PRODUCTS } from '@/constants/featuredProducts';
import { PRODUCT_CATEGORIES } from '@/constants/categories';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface Grouped {
  [category: string]: typeof ALL_PRODUCTS;
}

export default function ProductListClient() {
  const grouped = useMemo(() => {
    const base: Grouped = {};
    ALL_PRODUCTS.forEach((p) => {
      if (!base[p.category]) base[p.category] = [];
      base[p.category].push(p);
    });
    return base;
  }, []);

  const categoryToAnchor: Record<string, string> = PRODUCT_CATEGORIES.reduce((acc, c) => {
    acc[c.label] = c.anchor;
    return acc;
  }, {} as Record<string, string>);

  return (
    <main className="pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <header id="produk-top" className="pt-8 md:pt-10 mb-8 md:mb-12 scroll-mt-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ed1c24] mb-3">Produk Bubble Wrap Super Pack</h1>
          <p className="text-[#212125] max-w-3xl text-base md:text-lg">
            Super Pack menyediakan bubble wrap <strong>roll</strong> dan lembaran dalam berbagai ukuran. Bubble wrap roll adalah solusi kemasan plastik bergelembung yang ideal untuk perlindungan barang saat pengiriman, tersedia dalam pilihan lebar dan panjang sesuai kebutuhan.
            <br />
            Temukan berbagai jenis bubble wrap berkualitas tinggi langsung dari produsen. Tersedia varian bening, hitam, anti-statis, dan food grade — cocok untuk kebutuhan logistik, UMKM, dan industri.
          </p>
        </header>

        {Object.entries(grouped).map(([cat, products]) => (
          <section key={cat} id={categoryToAnchor[cat] ?? cat.replace(/\s+/g, '-').toLowerCase()} className="mb-12 md:mb-16 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ed1c24] mb-4 pb-2 border-b border-gray-200">
              {cat}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((p) => (
                <article 
                  key={p.id} 
                  className={`bg-white rounded-xl overflow-hidden shadow-md flex flex-col ${p.category === 'Coming Soon' ? 'opacity-50 cursor-default coming-soon' : ''}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.imageAlt ?? p.name}
                      fill
                      sizes="(max-width:768px)100vw, (max-width:1280px)50vw,33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">{p.name}</h3>
                    <p className="text-[#212125] mb-4 text-base md:text-lg line-clamp-3 flex-1">{p.description}</p>
                    <div className="mt-auto">
                      <Link href="/kontak" className="inline-flex items-center text-[#ed1c24] font-bold uppercase hover:text-[#c9151b] text-sm md:text-base">
                        Hubungi Kami
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-[#ed1c24] mb-3">Belum Menemukan Produk yang Anda Butuhkan?</h2>
          <p className="text-[#212125] mb-6 text-base md:text-lg">
            Kami terus menambah varian produk bubble wrap dan kemasan pelindung lainnya sesuai permintaan pasar. Silakan hubungi tim kami untuk informasi stok terbaru atau rekomendasi produk yang sesuai kebutuhan bisnis Anda.
          </p>
          <Link href="/kontak" className="inline-block bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-3 px-6 rounded-md shadow-md">
            Hubungi Kami
          </Link>
        </section>
      </div>
    </main>
  );
} 