import KidsCardsIsland from "site/islands/Kids/KidsCardsIsland.tsx";

interface KidsCardsProps {
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

export default function KidsCards(props: KidsCardsProps) {
  return <KidsCardsIsland {...props} />;
}
