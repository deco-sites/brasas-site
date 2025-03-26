import { ImageWidget } from "apps/admin/widgets.ts";
import PFFCardsIsland from "site/islands/PFF/PFFCardsIsland.tsx";

interface Item {
  textInEnglish: string;
  textInPortuguese: string;
}

interface PFFCardsProps {
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
  items: Item[];
  image: ImageWidget;
  /**
   * @format rich-text
   */
  bottomTextInEnglish: string;
  /**
   * @format rich-text
   */
  bottomTextInPortuguese: string;
}

export default function PFFCards(props: PFFCardsProps) {
  return <PFFCardsIsland {...props} />;
}
