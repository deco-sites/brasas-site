import PreKCardsIsland from "site/islands/Pre-K/PreKCardsIsland.tsx";

interface PreKCardsProps {
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

export default function PreKCards(props: PreKCardsProps) {
  return <PreKCardsIsland {...props} />;
}
