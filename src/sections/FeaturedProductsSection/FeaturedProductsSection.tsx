import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import { FEATURED_PRODUCTS } from "@/constants/featuredProducts";

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ed1c24] mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-[#212125] max-w-2xl text-lg">
              Temukan berbagai solusi kemasan berkualitas tinggi untuk kebutuhan bisnis Anda. Setiap produk
              dirancang dengan memperhatikan detail, kualitas, dan keberlanjutan.
            </p>
          </div>
          <Link
            href="/produk"
            className="inline-flex items-center text-[#ed1c24] font-bold uppercase hover:text-[#c9151b] mt-4 md:mt-0 group"
          >
            Lihat Semua Produk
            <ArrowRight className="ml-2 h-5 w-5 text-[#ed1c24] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {FEATURED_PRODUCTS.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection; 