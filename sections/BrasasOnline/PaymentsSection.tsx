import PaymentsSectionIsland from "site/islands/BrasasOnline/PaymentsSectionIsland.tsx";

interface Item {
  titleInEnglish: string;
  subTitleInEnglish: string;
  titleInPortuguese: string;
  subTitleInPortuguese: string;
}
interface PaymentsSectionProps {
  items: Item[];
}

export default function PaymentsSection(props: PaymentsSectionProps) {
  return <PaymentsSectionIsland {...props} />;
}
