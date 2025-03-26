import BrasasOnlineCardsIsland from "site/islands/BrasasOnline/BrasasOnlineCardsIsland.tsx";

/* @titleBy textInPortuguese */
interface Item {
  textInEnglish: string;
  textInPortuguese: string;
}

/* @titleBy title */
interface ClasseCard {
  title: string;
  items: Item[];
  //footerText: string;
}

interface BrasasOnlineCardsProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  classesCards: ClasseCard[];
}

export default function BrasasOnlineCards(props: BrasasOnlineCardsProps) {
  return <BrasasOnlineCardsIsland {...props} />;
}
