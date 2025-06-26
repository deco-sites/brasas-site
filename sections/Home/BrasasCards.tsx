import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasCardIsland from "../../islands/Home/BrasasCardsIsland.tsx";

/**
 * @titleBy title
 */
interface Card {
  title: string;
  description: string;
  buttonText: string;
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
