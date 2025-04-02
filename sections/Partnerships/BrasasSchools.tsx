import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasSchoolsIsland from "site/islands/Partnerships/BrasasSchoolsIsland.tsx";

/* @titleBy titleInPortuguese */
interface Item {
  icon: ImageWidget;
  titleInEnglish?: string;
  titleInPortuguese?: string;
  textInEnglish?: string;
  textInPortuguese?: string;
}

interface BrasasSchoolsProps {
  logo: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  subtitleInEnglish: string;
  subtitleInPortuguese: string;
  items: Item[];
}

export default function BrasasSchools(props: BrasasSchoolsProps) {
  return <BrasasSchoolsIsland {...props} />;
}
