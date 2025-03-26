import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasCardIsland from "../../islands/Home/BrasasCardsIsland.tsx";

/**
 * @titleBy titleInEnglish
 */
interface Card {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
  buttonTextInEnglish: string;
  buttonTextInPortuguese: string;
  cardImage: ImageWidget;
  cardBgColor: string;
  buttonBgColor: string;
  bgPosition: "left" | "right" | "center";
  link: string;
}

interface BrasasCardsProps {
  cards: Card[];
}

export default function BrasasCards(props: BrasasCardsProps) {
  return <BrasasCardIsland {...props} />;
}
