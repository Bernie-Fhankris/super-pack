'use client';

import Image from "next/image";
import Link from "next/link";
import { ABOUT_POINTS, ABOUT_IMAGES_HOME } from "@/constants/aboutPoints";
import { Award, Leaf, Settings, Truck } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={24} className="text-[#ed1c24]" aria-hidden="true" />,
  leaf: <Leaf size={24} className="text-[#ed1c24]" aria-hidden="true" />,
  settings: <Settings size={24} className="text-[#ed1c24]" aria-hidden="true" />,
  truck: <Truck size={24} className="text-[#ed1c24]" aria-hidden="true" />,
};

const AboutSection: React.FC = () => {
  return (
    <section className="mt-8 md:mt-10 py-16 md:py-24 bg-white">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image collage */}
          <div className="lg:w-5/12 relative">
            <div className="relative">
              <Image
                src={ABOUT_IMAGES_HOME.main}
                alt="Super Pack facility"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                priority={false}
              />

              <Image
                src={ABOUT_IMAGES_HOME.secondary1}
                alt="Packaging production"
                width={160}
                height={160}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-lg border-4 border-white"
              />

              <Image
                src={ABOUT_IMAGES_HOME.secondary2}
                alt="Eco-friendly materials"
                width={128}
                height={128}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ed1c24] mb-6">
              Tentang Super Pack
            </h2>
            <p className="text-[#212125] mb-8 leading-relaxed text-lg">
              Super Pack adalah produsen kemasan modern yang berfokus pada solusi bubble wrap berkualitas tinggi untuk berbagai kebutuhan industri dan UMKM di Indonesia. Kami menghadirkan produk yang fungsional, aman, dan ramah lingkungan — langsung dari fasilitas produksi milik kami sendiri.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {ABOUT_POINTS.map((point) => (
                <div key={point.id} className="flex">
                  <div className="mr-4 flex-shrink-0">{iconMap[point.icon]}</div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-1">{point.title}</h3>
                    <p className="text-[#212125] text-base">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/tentang"
              className="inline-block bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-3 px-6 rounded-md transition-colors shadow-md"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 