import AdultsCardsIsland from "site/islands/Adults/AdultsCardsIsland.tsx";

interface AdultsCardsProps {
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

export default function AdultsCards(props: AdultsCardsProps) {
  return <AdultsCardsIsland {...props} />;
}
