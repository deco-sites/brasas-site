import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasCompaniesIsland from "site/islands/Partnerships/BrasasCompaniesIsland.tsx";

/* @titleBy textInPortuguese */
interface Item {
  icon: ImageWidget;
  /**
   * @format rich-text
   */
  text: string;
}

interface BrasasCompaniesProps {
  logo: ImageWidget;
  title: string;
  items: Item[];
  buttonText: string;
}

export default function BrasasCompanies(props: BrasasCompaniesProps) {
  return <BrasasCompaniesIsland {...props} />;
}
