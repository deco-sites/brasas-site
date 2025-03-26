import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasCompaniesIsland from "site/islands/Partnerships/BrasasCompaniesIsland.tsx";

interface Item {
  icon: ImageWidget;
  textInEnglish: string;
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
