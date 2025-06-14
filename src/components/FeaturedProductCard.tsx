import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/constants/featuredProducts";
import { PRODUCT_CATEGORIES } from "@/constants/categories";

interface FeaturedProductCardProps {
  product: Product;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-shadow transition-transform duration-300 group">
      <div className="relative w-full h-60 md:h-64 overflow-hidden rounded-t-xl">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-700 mb-2">{product.name}</h3>
        <p className="text-[#212125] mb-4 text-lg">{product.description}</p>
        <div className="flex justify-end items-center">
          {(() => {
            const anchor = PRODUCT_CATEGORIES.find(c => c.label === product.category)?.anchor || product.category.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                href={`/produk#${anchor}`}
                className="flex items-center text-[#ed1c24] font-bold uppercase hover:text-[#c9151b] transition-colors"
              >
                Lihat Detail
                <ArrowRight className="ml-1 h-4 w-4 text-[#ed1c24]" aria-hidden="true" />
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard; 