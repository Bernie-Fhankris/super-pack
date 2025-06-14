'use client';

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { HERO_SLIDES } from "@/constants/heroData";
import HeroSlide from "@/components/HeroSlide";
import HeroImage from "@/components/HeroImage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SlideState } from "@/types/hero";
import { HERO_LAYOUT } from "@/constants/heroStyles";

// Constants
const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds (desktop/mobile default)
const DRAG_THRESHOLD = 50; // Minimum drag distance to trigger slide change
const TOUCH_THRESHOLD = 30; // Minimum touch distance to trigger slide change
const DIRECTION_LOCK_THRESHOLD = 5; // Minimum pixels to determine direction
const TRANSITION_DURATION = 500; // ms
const TRANSITION_TIMING = "cubic-bezier(0.4, 0, 0.2, 1)";

const HeroSection: React.FC = () => {
  const [slideState, setSlideState] = useState<SlideState>({
    currentIndex: 0,
    isDragging: false,
    startX: 0,
    currentX: 0,
    isHorizontalDrag: null,
    isAnimating: false,
    slideWidth: 0,
    transform: 0,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<number | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  // determine current breakpoint
  const { isTablet } = useResponsive();

  const calculateSlideWidth = useCallback(() => {
    if (slidesContainerRef.current) {
      const width = slidesContainerRef.current.offsetWidth;
      setSlideState((prev) => ({
        ...prev,
        slideWidth: width,
      }));
    }
  }, []);

  useEffect(() => {
    calculateSlideWidth();
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => calculateSlideWidth(), 200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateSlideWidth]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === slideState.currentIndex || slideState.isAnimating) return;

      setSlideState((prev) => ({
        ...prev,
        isAnimating: true,
        currentIndex: index,
        transform: -index * prev.slideWidth,
      }));
    },
    [slideState.currentIndex, slideState.isAnimating]
  );

  const nextSlide = useCallback(() => {
    const next = (slideState.currentIndex + 1) % HERO_SLIDES.length;
    goToSlide(next);
  }, [slideState.currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev =
      (slideState.currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prev);
  }, [slideState.currentIndex, goToSlide]);

  const startAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current !== null) {
      clearInterval(autoSlideTimerRef.current);
    }
    autoSlideTimerRef.current = window.setInterval(
      nextSlide,
      isTablet ? 5000 : AUTO_SLIDE_INTERVAL
    );
  }, [nextSlide, isTablet]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current !== null) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  }, []);

  const handleDragStart = useCallback(
    (clientX: number) => {
      setSlideState((prev) => ({
        ...prev,
        isDragging: true,
        startX: clientX,
        currentX: clientX,
        isHorizontalDrag: null,
      }));
      stopAutoSlide();
    },
    [stopAutoSlide]
  );

  const handleDragMove = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement> | TouchEvent,
      clientX: number
    ) => {
      if (!slideState.isDragging) return;

      const deltaX = clientX - slideState.startX;

      if (
        slideState.isHorizontalDrag === null &&
        Math.abs(deltaX) > DIRECTION_LOCK_THRESHOLD
      ) {
        setSlideState((prev) => ({ ...prev, isHorizontalDrag: true }));
        event.preventDefault();
      }

      if (slideState.isHorizontalDrag) {
        event.preventDefault();
        const newTransform = -slideState.currentIndex * slideState.slideWidth + deltaX;
        setSlideState((prev) => ({
          ...prev,
          currentX: clientX,
          transform: newTransform,
        }));
      }
    },
    [
      slideState.isDragging,
      slideState.startX,
      slideState.isHorizontalDrag,
      slideState.currentIndex,
      slideState.slideWidth,
    ]
  );

  const handleDragEnd = useCallback(() => {
    if (!slideState.isDragging) return;

    const diff = slideState.currentX - slideState.startX;
    const threshold = isTablet ? 40 : window.innerWidth >= 768 ? DRAG_THRESHOLD : TOUCH_THRESHOLD;
    const wasHorizontal = slideState.isHorizontalDrag === true;

    setSlideState((prev) => ({
      ...prev,
      isDragging: false,
      isHorizontalDrag: null,
      isAnimating: true,
    }));

    if (wasHorizontal) {
      const shouldChange = Math.abs(diff) > threshold;
      if (shouldChange) {
        const direction = diff > 0 ? "prev" : "next";
        if (direction === "prev") prevSlide();
        else nextSlide();
      } else {
        setSlideState((prev) => ({
          ...prev,
          transform: -prev.currentIndex * prev.slideWidth,
        }));
      }
    }

    startAutoSlide();
  }, [
    slideState.isDragging,
    slideState.currentX,
    slideState.startX,
    slideState.isHorizontalDrag,
    prevSlide,
    nextSlide,
    startAutoSlide,
    isTablet,
  ]);

  const handleTransitionEnd = useCallback(() => {
    setSlideState((prev) => ({ ...prev, isAnimating: false }));
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handleDragMove(e, e.clientX);
    },
    [handleDragMove]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 1) handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 1) handleDragMove(e, e.touches[0].clientX);
    },
    [handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const cleanup = useCallback(() => {
    stopAutoSlide();
    setSlideState((prev) => ({
      ...prev,
      isDragging: false,
      isHorizontalDrag: null,
      isAnimating: false,
    }));
  }, [stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return cleanup;
  }, [startAutoSlide, cleanup]);

  useEffect(() => {
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);
    return () => {
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDragEnd]);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      sliderElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      sliderElement.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
      return () => {
        sliderElement.removeEventListener("touchstart", handleTouchStart);
        sliderElement.removeEventListener("touchmove", handleTouchMove);
        sliderElement.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <section className={`${HERO_LAYOUT.SECTION} pb-0 bg-white`} aria-label="Hero Section" role="region">
      {/* Main Container */}
      <div
        ref={sliderRef}
        className={`relative w-full h-[70vh] md:min-h-[55vh] md:h-auto lg:h-[45.5vh] xl:h-[49vh] overflow-hidden cursor-grab active:cursor-grabbing ${
          slideState.isDragging ? "select-none" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        role="presentation"
      >
        {/* Slides Container */}
        <div
          ref={slidesContainerRef}
          className={HERO_LAYOUT.SLIDES_CONTAINER}
          role="region"
          aria-label="Carousel slides"
          aria-live="polite"
        >
          <div
            className={HERO_LAYOUT.SLIDES_WRAPPER}
            style={{
              transform: `translateX(${slideState.transform}px)`,
              transition: slideState.isDragging
                ? "none"
                : `transform ${TRANSITION_DURATION}ms ${TRANSITION_TIMING}`,
              width: `${HERO_SLIDES.length * 100}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={HERO_LAYOUT.SLIDE}
                style={{ width: `${100 / HERO_SLIDES.length}%` }}
              >
                {/* Mobile Layout */}
                <div className="relative w-full h-full flex flex-col md:hidden">
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-grow items-start h-[calc(100%-25vh)] order-1 overflow-y-auto">
                    <div className="w-full h-full flex flex-col justify-start px-[20px] pt-[40px] pb-[20px]">
                      <div className="w-full max-w-[390px] flex flex-col">
                        <HeroSlide
                          id={slide.id}
                          headline={slide.headline}
                          description={slide.description}
                          ctaText={slide.ctaText}
                          ctaLink={slide.ctaLink}
                          index={index}
                          isActive={index === slideState.currentIndex}
                          totalSlides={HERO_SLIDES.length}
                          isMobile={true}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Image for Mobile */}
                  <div className="absolute bottom-0 left-0 w-full h-[25vh] overflow-hidden order-2">
                    <HeroImage
                      imageDesktop={slide.imageDesktop}
                      imageMobile={slide.imageMobile}
                      imageTablet={slide.imageTablet}
                      imageRetina={slide.imageRetina}
                      imageAlt={slide.imageAlt}
                      isPriority={index === 0}
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:relative md:w-full md:h-full md:grid md:grid-cols-2 lg:relative lg:w-full lg:h-full lg:grid lg:grid-cols-2">
                  {/* Content Desktop */}
                  <div className="relative z-10 flex items-center h-[60%] md:h-full lg:h-full order-1 lg:order-1">
                    <div className="w-full h-full flex flex-col justify-center px-[20px] pt-[20px] pb-[20px] md:pl-8 md:pr-4 lg:pl-72 lg:pr-6 xl:pl-[22rem] xl:pr-8">
                      <div className="w-full max-w-[390px] md:max-w-[460px] lg:max-w-[486px] xl:max-w-[520px] flex flex-col lg:min-h-[300px]">
                        <HeroSlide
                          id={slide.id}
                          headline={slide.headline}
                          description={slide.description}
                          ctaText={slide.ctaText}
                          ctaLink={slide.ctaLink}
                          index={index}
                          isActive={index === slideState.currentIndex}
                          totalSlides={HERO_SLIDES.length}
                          isMobile={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Image Desktop */}
                  <div className="relative w-full h-[40%] md:h-full lg:h-full overflow-hidden order-2 lg:order-2">
                    <HeroImage
                      imageDesktop={slide.imageDesktop}
                      imageMobile={slide.imageMobile}
                      imageTablet={slide.imageTablet}
                      imageRetina={slide.imageRetina}
                      imageAlt={slide.imageAlt}
                      isPriority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-0 pointer-events-none lg:inset-y-0 lg:px-0">
        <button
          onClick={prevSlide}
          className="pointer-events-auto absolute left-0 md:left-4 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-[72px] h-[72px] md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#ed1c24]" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto absolute right-0 md:right-4 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-[72px] h-[72px] md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#ed1c24]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 