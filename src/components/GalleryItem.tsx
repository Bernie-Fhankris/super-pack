'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize } from "lucide-react";
import type { GalleryItem as GalleryItemType } from "@/constants/galleryList";

interface GalleryItemProps {
  item: GalleryItemType;
}

const categoryDisplayNames: Record<string, string> = {
  "bubble-wrap-bening": "Bubble Wrap Bening",
  "bubble-wrap-hitam": "Bubble Wrap Hitam",
  "grade-bubble-wrap": "Grade Bubble Wrap",
  "coming-soon": "Coming Soon",
};

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayCategory = categoryDisplayNames[item.category] || item.category;

  return (
    <Link
      href="/galeri"
      className="relative overflow-hidden rounded-xl shadow-md group aspect-[4/3]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Buka galeri - ${item.title}`}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        priority={false}
      />

      <div
        className={`absolute inset-0 bg-black/25 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Maximize className="text-white mb-2 h-8 w-8" aria-hidden="true" />
        <h3 className="text-white text-center font-bold text-lg">{item.title}</h3>
        <span className="text-white text-sm bg-[#ed1c24] px-3 py-1 rounded-full mt-2">
          {displayCategory}
        </span>
      </div>
    </Link>
  );
};

export default GalleryItem; 