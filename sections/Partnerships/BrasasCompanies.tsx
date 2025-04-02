import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasCompaniesIsland from "site/islands/Partnerships/BrasasCompaniesIsland.tsx";

/* @titleBy textInPortuguese */
interface Item {
  icon: ImageWidget;
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

interface BrasasCompaniesProps {
  logo: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  items: Item[];
}

export default function BrasasCompanies(props: BrasasCompaniesProps) {
  return <BrasasCompaniesIsland {...props} />;
}
