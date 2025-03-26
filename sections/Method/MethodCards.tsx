import MethodCardsIsland from "site/islands/Method/MethodCardsIsland.tsx";

/** @titleBy titleInEnglish */
interface MethodCard {
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
interface MethodCardsProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  methodCards: MethodCard[];
}

export default function MethodCards(props: MethodCardsProps) {
  return <MethodCardsIsland {...props} />;
}
