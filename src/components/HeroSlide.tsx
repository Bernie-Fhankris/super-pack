import { Download } from "lucide-react";
import { HERO_FONT } from "@/constants/heroFontStyles";
import type { HeroSlideProps } from "@/types/hero";

const HeroSlide: React.FC<HeroSlideProps> = ({
  headline,
  description,
  ctaText,
  ctaLink,
  preventClick = false,
  isMobile = false,
}) => {
  const isDownloadLink = ctaLink?.includes("/download/");

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isMobile ? "justify-start items-start" : "md:justify-start md:items-start"
      }`}
    >
      <h2
        className={`${HERO_FONT.HEADLINE.BASE} ${HERO_FONT.HEADLINE.MOBILE} ${HERO_FONT.HEADLINE.DESKTOP} ${HERO_FONT.HEADLINE.MARGIN} text-[#ed1c24]`}
      >
        {headline}
      </h2>
      <p
        className={`${HERO_FONT.DESCRIPTION.BASE} ${
          isMobile ? HERO_FONT.DESCRIPTION.MOBILE_ADJUSTED : HERO_FONT.DESCRIPTION.MOBILE
        } md:${HERO_FONT.DESCRIPTION.DESKTOP} ${HERO_FONT.DESCRIPTION.STYLE} ${HERO_FONT.DESCRIPTION.MARGIN}`}
      >
        {description}
      </p>
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className={`${HERO_FONT.CTA.BASE} ${
            isMobile ? HERO_FONT.CTA.MOBILE : "w-fit " + HERO_FONT.CTA.DESKTOP
          } ${isDownloadLink ? "items-center gap-2 justify-center" : ""}`}
          aria-label={
            isDownloadLink ? "Download Profil Perusahaan PDF" : ctaText
          }
          onClick={(e) => {
            if (preventClick) e.preventDefault();
          }}
          rel={isDownloadLink ? "noopener" : undefined}
          download={isDownloadLink ? true : undefined}
        >
          {ctaText}
          {isDownloadLink && <Download className="w-5 h-5 text-white" />}
        </a>
      )}
    </div>
  );
};

export default HeroSlide; 