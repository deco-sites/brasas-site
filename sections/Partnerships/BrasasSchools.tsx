import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasSchoolsIsland from "site/islands/Partnerships/BrasasSchoolsIsland.tsx";

/* @titleBy title */
interface Item {
  icon: ImageWidget;
  title?: string;
  text?: string;
}

interface BrasasSchoolsProps {
  logo: ImageWidget;
  title: string;
  subtitle: string;
  items: Item[];
  buttonText: string;
}

export default function BrasasSchools(props: BrasasSchoolsProps) {
  return <BrasasSchoolsIsland {...props} />;
}
