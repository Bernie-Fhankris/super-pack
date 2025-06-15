import { HeroSlideData, ValidationError } from "@/types/hero";

// Image paths located in /public
const heroMobileImage = "/mobile-herosection.webp";

// Simple validation helper
const validateHeroSlide = (slide: HeroSlideData): void => {
  const requiredFields: (keyof HeroSlideData)[] = [
    "id",
    "headline",
    "description",
    "ctaText",
    "ctaLink",
    "imageDesktop",
    "imageMobile",
    "imageAlt",
  ];

  for (const field of requiredFields) {
    if (!slide[field] || typeof slide[field] !== "string") {
      throw new ValidationError(
        `Invalid or missing ${field} in slide ${slide.id}`
      );
    }
  }
};

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: "slide-1",
    headline: "Produsen Bubble Wrap Premium Sejak 2024",
    description:
      "Kemasan premium dengan desain modern dan berkualitas tinggi untuk produk bisnis Anda. Tersedia dalam berbagai ukuran dan finishing premium.",
    ctaText: "Profil Perusahaan ⬇︎",
    ctaLink: "/download/Portfolio - PT Sunjaya Makmur Sukses.pdf",
    imageDesktop: "/SLIDER(1)desktop(960X530).webp",
    imageTablet: "/SLIDER(1)tablet(1024X700).webp",
    imageRetina: "/SLIDER(1)retina4k(1920X1060).webp",
    imageMobile: heroMobileImage,
    imageAlt: "Proses produksi bubble wrap Super Pack di pabrik Bekasi.",
  },
  {
    id: "slide-2",
    headline: "Produk Bubble Wrap Lengkap & Harga Grosir",
    description:
      "Economy · Standard · Premium — pilih varian sesuai kebutuhan bisnis Anda.",
    ctaText: "Lihat Produk",
    ctaLink: "/produk",
    imageDesktop: "/SLIDER(2)desktop(960X530).webp",
    imageTablet: "/SLIDER(2)tablet(1024X700).webp",
    imageRetina: "/SLIDER(2)retina4k(1920X1060).webp",
    imageMobile: "/SLIDER(2)mobile(768X1024).webp",
    imageAlt: "Varian economy, standard, dan premium bubble wrap Super Pack.",
  },
  {
    id: "slide-3",
    headline: "Distributor Bubble Wrap Terpercaya di Jakarta",
    description:
      "Dapatkan pasokan bubble wrap terbaik langsung dari distributor resmi kami. Jaringan distribusi luas, pengiriman cepat, dan stok selalu tersedia.",
    ctaText: "Hubungi Distributor Kami",
    ctaLink: "/kontak",
    imageDesktop: "/SLIDER(3)desktop(960X530).webp",
    imageTablet: "/SLIDER(3)tablet(1024X700).webp",
    imageRetina: "/SLIDER(3)retina4k(1920X1060).webp",
    imageMobile: "/SLIDER(3)mobile(768X1024).webp",
    imageAlt: "Gudang dan distribusi bubble wrap Super Pack di Jakarta – stok lengkap, pengiriman cepat.",
  },
].filter((slide) => {
  try {
    validateHeroSlide(slide);
    return true;
  } catch (error) {
    console.error(
      `Invalid slide data: ${error instanceof Error ? error.message : "Unknown error"}`
    );
    return false;
  }
});