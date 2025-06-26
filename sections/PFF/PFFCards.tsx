import { ImageWidget } from "apps/admin/widgets.ts";
import PFFCardsIsland from "site/islands/PFF/PFFCardsIsland.tsx";

/* @titleBy text */
interface Item {
  text: string;
}

interface PFFCardsProps {
  /**
   * @format rich-text
   */
  text: string;
  items: Item[];
  image: ImageWidget;
  /**
   * @format rich-text
   */
  bottomText: string;
}

export default function PFFCards(props: PFFCardsProps) {
  return <PFFCardsIsland {...props} />;
}
