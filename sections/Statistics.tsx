import { ImageWidget } from "apps/admin/widgets.ts";
import StatisticsIsland from "site/islands/About/StatisticsIsland.tsx";

/*@titleBy text*/
interface Item {
  text: string;
  icon: ImageWidget;
}

interface StatisticsProps {
  text: string;
  items: Item[];
}

export default function Statistics(props: StatisticsProps) {
  return <StatisticsIsland {...props} />;
}
