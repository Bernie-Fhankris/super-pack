// Base slide data interface
export interface HeroSlideData {
  id: string;
  imageDesktop: string;
  imageMobile: string;
  imageTablet?: string;
  imageRetina?: string;
  imageAlt: string;
  headline: string;
  subheadline?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

// Slide state interface
export interface SlideState {
  currentIndex: number;
  isDragging: boolean;
  startX: number;
  currentX: number;
  isHorizontalDrag: boolean | null;
  isAnimating: boolean;
  slideWidth: number;
  transform: number;
}

// Validation error class
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Unified HeroSlideProps interface
export interface HeroSlideProps {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  index: number;
  isActive: boolean;
  totalSlides: number;
  preventClick?: boolean;
  isMobile?: boolean;
} 