'use client';

import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/constants/testimonialsList";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-shadow transition-transform duration-300 flex flex-col">
      {/* Rating */}
      <div className="flex items-center mb-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 md:h-5 md:w-5 ${
              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[#212125] mb-3.5 line-clamp-4 text-sm md:text-base">
        {testimonial.quote}
      </blockquote>

      {/* Profile */}
      <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          width={44}
          height={44}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className="font-bold text-gray-700 text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-sm md:text-base text-[#212125] leading-tight">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 