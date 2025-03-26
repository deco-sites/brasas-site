import BrasasHistoryIsland from "site/islands/About/BrasasHistoryIsland.tsx";

/**
 * @titleBy titleInEnglish
 */
interface Card {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
}

interface BrasasHistoryProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  foundersName: string;
  historyCards: Card[];
}

export default function BrasasHistory(props: BrasasHistoryProps) {
  return <BrasasHistoryIsland {...props} />;
}
