import AdultsCardsIsland from "site/islands/Adults/AdultsCardsIsland.tsx";

interface AdultsCardsProps {
  /**
   * @format rich-text
   */
  text: string;
  leftItem: string;
  rightItem: string;
  firstDescriptionPhrase: string;
  secondDescriptionPhrase: string;
}

export default function AdultsCards(props: AdultsCardsProps) {
  return <AdultsCardsIsland {...props} />;
}
