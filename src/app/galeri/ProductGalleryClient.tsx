'use client';

import { useState } from 'react';
import { GALLERY_ITEMS } from '@/constants/galleryList';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['all', 'bubble-wrap-bening', 'bubble-wrap-hitam', 'coming-soon'] as const;

const categoryNames: Record<string, string> = {
  all: 'Semua',
  'bubble-wrap-bening': 'Bubble Wrap Bening',
  'bubble-wrap-hitam': 'Bubble Wrap Hitam',
  'coming-soon': 'Coming Soon',
};

export default function ProductGalleryClient() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>('all');

  const filtered = activeFilter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  return (
    <main className="pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <header className="pt-8 md:pt-10 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ed1c24] mb-4">Galeri Produk</h1>
          <p className="text-[#212125] max-w-2xl text-lg">
            Jelajahi dokumentasi visual dari produk bubble wrap Super Pack — mulai dari roll bening dan hitam hingga varian premium. Lihat langsung kualitas bahan dan hasil pengemasan dari pelanggan kami di berbagai sektor industri.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition-colors ${
                activeFilter === cat ? 'bg-[#ed1c24] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categoryNames[cat]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href="/galeri"
              className="relative overflow-hidden rounded-xl shadow-md group aspect-[4/3]"
              aria-label={`Buka galeri - ${item.title}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <h3 className="text-white font-bold text-lg text-center mb-2">{item.title}</h3>
                <span className="text-white text-sm bg-[#ed1c24] px-3 py-1 rounded-full">
                  {categoryNames[item.category] ?? item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">Tidak ada item yang ditemukan.</div>
        )}
      </div>
    </main>
  );
} 