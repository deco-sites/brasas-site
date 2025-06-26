import BrasasHistoryIsland from "site/islands/About/BrasasHistoryIsland.tsx";

/**
 * @titleBy title
 */
interface Card {
  title: string;
  description: string;
}

interface BrasasHistoryProps {
  title: string;
  foundersName: string;
  historyCards: Card[];
}

export default function BrasasHistory(props: BrasasHistoryProps) {
  return <BrasasHistoryIsland {...props} />;
}
