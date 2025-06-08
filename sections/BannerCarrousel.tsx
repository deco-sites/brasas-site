import type { ImageWidget } from "apps/admin/widgets.ts";
import BannerCarrouselIsland from "site/islands/BannerCarrouselIsland.tsx";

export interface BannerImage {
  image: ImageWidget;
  width?: number;
  height?: number;
}

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description Mobile-optimized image (e.g. < 768px) */
  mobile: BannerImage;

  /** @description Tablet-optimized image (e.g. 768px–1024px) */
  tablet: BannerImage;

  /** @description Laptop-optimized image (e.g. 1024px–1440px) */
  laptop: BannerImage;

  /** @description Desktop/desktop image (e.g. 1440px–1920px) */
  desktop: BannerImage;

  /** @description Large screens / ultrawide (e.g. >1920px) */
  ultrawide: BannerImage;

  /** @description Image's alt text */
  alt: string;

  link?: string;
  startDate?: string;
  expirationDate?: string;
}
export interface Props {
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
