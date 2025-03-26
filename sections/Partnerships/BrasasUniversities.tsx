import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasUniversitiesIsland from "site/islands/Partnerships/BrasasUniversitiesIsland.tsx";

interface Item {
  icon: ImageWidget;
  titleInEnglish?: string;
  titleInPortuguese?: string;
  textInEnglish?: string;
  textInPortuguese?: string;
}

interface BrasasUniversitiesProps {
  logo: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  items: Item[];
}

export default function BrasasUniversities(props: BrasasUniversitiesProps) {
  return <BrasasUniversitiesIsland {...props} />;
}
