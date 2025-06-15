import Image from "next/image";
import { PARTNERS } from "@/constants/partnersList";

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-[#ed1c24] text-center mb-12">
          Dipercaya Oleh
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Kami bangga telah dipercaya oleh berbagai perusahaan terkemuka. Komitmen kami adalah menyediakan
          solusi kemasan berkualitas tinggi untuk mendukung keberhasilan bisnis Anda.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <Image
                src={partner.logoUrl}
                alt={`Logo ${partner.name}`}
                height={80}
                width={140}
                className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 