import MethodCardsIsland from "site/islands/Method/MethodCardsIsland.tsx";

/** @titleBy title */
interface MethodCard {
  title: string;
  /**
   * @format rich-text
   */
  description: string;
}
interface MethodCardsProps {
  title: string;
  methodCards: MethodCard[];
}

export default function MethodCards(props: MethodCardsProps) {
  return <MethodCardsIsland {...props} />;
}
