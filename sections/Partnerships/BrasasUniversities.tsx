import { ImageWidget } from "apps/admin/widgets.ts";
import BrasasUniversitiesIsland from "site/islands/Partnerships/BrasasUniversitiesIsland.tsx";

/* @titleBy title */
interface Item {
  icon: ImageWidget;
  title?: string;
  text?: string;
}

interface Section {
  title: string;
  subtitle?: string;
  items: Item[];
}

interface BrasasUniversitiesProps {
  logo: ImageWidget;
  sections: Section[];
  buttonText: string;
}

export default function BrasasUniversities(props: BrasasUniversitiesProps) {
  return <BrasasUniversitiesIsland {...props} />;
}
