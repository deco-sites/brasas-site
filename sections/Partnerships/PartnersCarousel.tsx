import { ImageWidget } from "apps/admin/widgets.ts";
import PartnersCarouselIsland from "site/islands/Partnerships/PartnersCarouselIsland.tsx";

/**
 * @titleBy alt
 */
interface Logo {
  image: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

interface PartnersCarouselProps {
  title: string;
  partnersLogos: Logo[];
}

export default function PartnersCarousel(props: PartnersCarouselProps) {
  return <PartnersCarouselIsland {...props} />;
}
