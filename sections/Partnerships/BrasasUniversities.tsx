import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasUniversitiesIsland from "site/islands/Partnerships/BrasasUniversitiesIsland.tsx";

/* @titleBy titleInPortuguese */
interface Item {
  icon: ImageWidget;
  titleInEnglish?: string;
  titleInPortuguese?: string;
  textInEnglish?: string;
  textInPortuguese?: string;
}

interface Section {
  titleInEnglish: string;
  titleInPortuguese: string;
  subtitleInEnglish?: string;
  subtitleInPortuguese?: string;
  items: Item[];
}

interface BrasasUniversitiesProps {
  logo: ImageWidget;
  sections: Section[];
}

export default function BrasasUniversities(props: BrasasUniversitiesProps) {
  return <BrasasUniversitiesIsland {...props} />;
}
