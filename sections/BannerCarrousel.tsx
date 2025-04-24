import type { ImageWidget } from "apps/admin/widgets.ts";
import BannerCarrouselIsland from "site/islands/BannerCarrouselIsland.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: {
    image: ImageWidget;
    width?: number;
    height?: number;
  };
  /** @description mobile otimized image */
  mobile: {
    image: ImageWidget;
    width?: number;
    height?: number;
  };
  /** @description Image's alt text */
  alt: string;
  link?: string;
  startDate?: string;
  expirationDate?: string;
}
export interface Props {
  titleInPortuguese: string;
  titleInEnglish: string;
  descriptionInPortuguese: string;
  descriptionInEnglish: string;
  CTAtextInPortuguese: string;
  CTAtextInEnglish: string;
  CTALink: string;
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

export default function BannerCarousel(props: Props) {
  return <BannerCarrouselIsland {...props} />;
}
