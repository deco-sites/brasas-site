import KidsCardsIsland from "site/islands/Kids/KidsCardsIsland.tsx";

interface KidsCardsProps {
  /**
   * @format rich-text
   */
  text: string;
}

export default function KidsCards(props: KidsCardsProps) {
  return <KidsCardsIsland {...props} />;
}
