import TextCarouselIsland from "site/islands/TextCarouselIsland.tsx";

/**
 * @titleBy title
 */
interface Card {
  title: string;
  /**
   * @format rich-text
   */
  description: string;
}

interface TextCarouselProps {
  cards: Card[];
  color: string;
}

export default function TextCarousel(props: TextCarouselProps) {
  return <TextCarouselIsland {...props} />;
}
