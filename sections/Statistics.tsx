import { ImageWidget } from "apps/admin/widgets.ts";
import StatisticsIsland from "site/islands/About/StatisticsIsland.tsx";

interface Item {
  textInEnglish: string;
  textInPortuguese: string;
  icon: ImageWidget;
}

interface StatisticsProps {
  textInEnglish: string;
  textInPortuguese: string;
  items: Item[];
}

export default function Statistics(props: StatisticsProps) {
  return <StatisticsIsland {...props} />;
}
