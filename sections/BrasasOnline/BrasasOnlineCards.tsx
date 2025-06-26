import BrasasOnlineCardsIsland from "site/islands/BrasasOnline/BrasasOnlineCardsIsland.tsx";

/* @titleBy text */
interface Item {
  text: string;
}

/* @titleBy title */
interface ClasseCard {
  title: string;
  items: Item[];
  //footerText: string;
}

interface BrasasOnlineCardsProps {
  title: string;
  classesCards: ClasseCard[];
}

export default function BrasasOnlineCards(props: BrasasOnlineCardsProps) {
  return <BrasasOnlineCardsIsland {...props} />;
}
