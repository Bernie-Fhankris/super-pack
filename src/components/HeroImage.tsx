import type { ImgHTMLAttributes } from "react";

// Extend the default img attributes to include fetchPriority
interface ExtendedImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fetchPriority?: "high" | "low" | "auto";
}

interface HeroImageProps extends ExtendedImgProps {
  imageDesktop: string;
  imageMobile: string;
  imageTablet?: string;
  imageRetina?: string;
  imageAlt: string;
  className?: string;
  isPriority?: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageDesktop,
  imageMobile,
  imageTablet,
  imageRetina,
  imageAlt,
  className = "",
  isPriority = false,
  ...props
}) => {
  // Base (non-retina) desktop asset dimensions
  const desktopDimensions = { width: 960, height: 530 };
  // Tablet breakpoint dimensions (based on provided asset)
  const tabletDimensions = { width: 1024, height: 700 };
  // Mobile dimensions – kept for backward compatibility
  const mobileDimensions = { width: 768, height: 1024 };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <picture className="block w-full h-full">
        {/* Mobile */}
        {imageMobile && (
          <source
            media="(max-width: 767px)"
            srcSet={imageMobile}
            width={mobileDimensions.width}
            height={mobileDimensions.height}
          />
        )}

        {/* Tablet */}
        {imageTablet && (
          <source
            media="(max-width: 1279px)"
            srcSet={imageTablet}
            width={tabletDimensions.width}
            height={tabletDimensions.height}
          />
        )}

        {/* Desktop (non-retina) */}
        <source
          media="(max-width: 1919px)"
          srcSet={imageDesktop}
          width={desktopDimensions.width}
          height={desktopDimensions.height}
        />

        {/* Retina / 4K */}
        {imageRetina && (
          <source
            media="(min-width: 1920px)"
            srcSet={imageRetina}
            width={desktopDimensions.width * 2}
            height={desktopDimensions.height * 2}
          />
        )}

        {/* Fallback / Desktop */}
        <img
          src={imageDesktop}
          alt={imageAlt}
          className={`absolute inset-0 w-full h-full object-cover object-center ${className}`}
          width={desktopDimensions.width}
          height={desktopDimensions.height}
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          {...props}
        />
      </picture>
    </div>
  );
};

export default HeroImage; 