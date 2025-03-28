import TextCarouselIsland from "site/islands/TextCarouselIsland.tsx";

/**
 * @titleBy titleInPortuguese
 */
interface Card {
  titleInEnglish: string;
  titleInPortuguese: string;
  /**
   * @format rich-text
   */
  descriptionInEnglish: string;
  /**
   * @format rich-text
   */
  descriptionInPortuguese: string;
}

interface TextCarouselProps {
  cards: Card[];
  color: string;
}

export default function TextCarousel(props: TextCarouselProps) {
  return <TextCarouselIsland {...props} />;
}
