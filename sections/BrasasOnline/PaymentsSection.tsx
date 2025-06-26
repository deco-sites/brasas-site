import PaymentsSectionIsland from "site/islands/BrasasOnline/PaymentsSectionIsland.tsx";

/* @titleBy title */
interface Item {
  title: string;
  subtitle: string;
}

interface PaymentsSectionProps {
  items: Item[];
}

export default function PaymentsSection(props: PaymentsSectionProps) {
  return <PaymentsSectionIsland {...props} />;
}
