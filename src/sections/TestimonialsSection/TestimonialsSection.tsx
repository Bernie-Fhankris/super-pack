'use client';

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonialsList";

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
};

const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const updateVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width >= BREAKPOINTS.desktop) setVisibleCount(3);
    else if (width >= BREAKPOINTS.tablet) setVisibleCount(2);
    else setVisibleCount(1);
  }, []);

  useEffect(() => {
    updateVisibleCount();
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVisibleCount, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [updateVisibleCount]);

  const goPrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - visibleCount));
  };
  const goNext = () => {
    setStartIndex((prev) => (prev < TESTIMONIALS.length - visibleCount ? prev + 1 : 0));
  };

  const visible = TESTIMONIALS.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ed1c24] mb-2 md:mb-3">
              Testimoni Pelanggan
            </h2>
            <p className="text-base md:text-lg text-[#212125] max-w-2xl">
              Kami percaya bahwa kualitas kemasan terbaik dinilai langsung dari pengalaman penggunanya. Inilah sebagian tanggapan yang kami terima.
            </p>
          </div>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <button
              onClick={goPrev}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="h-6 w-6 text-[#ed1c24]" aria-hidden="true" />
            </button>
            <button
              onClick={goNext}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonials"
            >
              <ArrowRight className="h-6 w-6 text-[#ed1c24]" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {visible.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <Link
            href="/testimoni"
            className="inline-block bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-2.5 md:py-3 px-5 md:px-6 rounded-md transition-colors shadow-md text-sm md:text-base"
          >
            Lihat Semua Testimoni
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 