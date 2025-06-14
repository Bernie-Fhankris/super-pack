'use client';

import { TESTIMONIALS } from '@/constants/testimonialsList';
import TestimonialCard from '@/components/TestimonialCard';

export default function TestimonialsClient() {
  return (
    <main className="pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <header className="pt-8 md:pt-10 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ed1c24] mb-4">Testimoni Pelanggan</h1>
          <p className="text-[#212125] max-w-3xl text-lg">
            Pendapat jujur dari para pelanggan yang telah menggunakan produk dan layanan kami. Kepuasan pelanggan
            adalah prioritas utama kami.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </main>
  );
} 