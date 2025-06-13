import { HeroSlideData, ValidationError } from '../types/hero';
import heroMobileImage from '../assets/mobile-herosection.webp'; // Mobile asset

// Slide 1 dedicated assets by breakpoint
import heroSlide1Desktop from '../assets/herosection-slide1desktop(960x530).webp';
import heroSlide1Tablet from '../assets/herosection-slide1tablet(1024x700).webp';
import heroSlide1Retina from '../assets/herosection-slide1retina4k(1920X1060).webp';

// Simplified validation function
const validateHeroSlide = (slide: HeroSlideData): void => {
  const requiredFields: (keyof HeroSlideData)[] = [
    'id',
    'headline',
    'description',
    'ctaText',
    'ctaLink',
    'imageDesktop',
    'imageMobile',
    'imageAlt'
  ];

  for (const field of requiredFields) {
    if (!slide[field] || typeof slide[field] !== 'string') {
      throw new ValidationError(`Invalid or missing ${field} in slide ${slide.id}`);
    }
  }
};

// Filter and validate slides
export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 'slide-1',
    headline: 'Solusi Kemasan Premium untuk Bisnis Anda',
    description: 'Kemasan premium dengan desain modern dan berkualitas tinggi untuk produk bisnis Anda. Tersedia dalam berbagai ukuran dan finishing premium.',
    ctaText: 'Profil Perusahaan',
    ctaLink: '/download/Portfolio - PT Sunjaya Makmur Sukses.pdf',
    imageDesktop: heroSlide1Desktop,
    imageTablet: heroSlide1Tablet,
    imageRetina: heroSlide1Retina,
    imageMobile: heroMobileImage,
    imageAlt: 'Kemasan premium dengan desain modern dan berkualitas tinggi untuk produk bisnis'
  },
  {
    id: 'slide-2',
    headline: 'Kemasan Ramah Lingkungan',
    description: 'Kemasan ramah lingkungan dengan material daur ulang dan biodegradable. Solusi kemasan yang sustainable untuk masa depan yang lebih baik.',
    ctaText: 'Lihat Produk',
    ctaLink: '/produk',
    imageDesktop: heroSlide1Desktop,
    imageMobile: heroMobileImage,
    imageAlt: 'Kemasan ramah lingkungan dengan material daur ulang dan biodegradable'
  },
  {
    id: 'slide-3',
    headline: 'Solusi Kemasan Kustom',
    description: 'Kemasan kustom dengan desain unik dan personalisasi. Sesuaikan kemasan Anda dengan identitas brand dan kebutuhan spesifik.',
    ctaText: 'Pelajari Lebih Lanjut',
    ctaLink: '/tentang',
    imageDesktop: heroSlide1Desktop,
    imageMobile: heroMobileImage,
    imageAlt: 'Kemasan kustom dengan desain unik dan personalisasi'
  }
].filter((slide) => {
  try {
    validateHeroSlide(slide);
    return true;
  } catch (error) {
    console.error(`Invalid slide data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return false;
  }
});