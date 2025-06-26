import PreKCardsIsland from "site/islands/Pre-K/PreKCardsIsland.tsx";

interface PreKCardsProps {
  /**
   * @format rich-text
   */
  text: string;
}

export default function PreKCards(props: PreKCardsProps) {
  return <PreKCardsIsland {...props} />;
}
