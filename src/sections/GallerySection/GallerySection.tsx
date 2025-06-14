'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryItem from "@/components/GalleryItem";
import { FEATURED_GALLERY_ITEMS } from "@/constants/galleryList";

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ed1c24] mb-4">
              Galeri Produk Kami
            </h2>
            <p className="text-[#212125] max-w-2xl text-lg">
              Jelajahi berbagai produk kemasan berkualitas tinggi yang telah kami buat untuk pelanggan kami
              dari berbagai industri.
            </p>
          </div>
          <Link
            href="/galeri"
            className="inline-flex items-center text-[#ed1c24] font-bold uppercase hover:text-[#c9151b] mt-4 md:mt-0 group"
          >
            Lihat Semua Galeri
            <ArrowRight className="ml-2 h-5 w-5 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_GALLERY_ITEMS.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/galeri"
            className="inline-block bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-3 px-6 rounded-md transition-colors shadow-md"
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 