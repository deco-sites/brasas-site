import { ImageWidget } from "apps/admin/widgets.ts";
import InovationSectionIsland from "site/islands/BrasasOnline/InovationSectionIsland.tsx";

/* @titleBy text */
interface Item {
  icon: ImageWidget;
  /**
   * @format rich-text
   */
  text: string;
}

interface InovationSectionProps {
  title: string;
  items: Item[];
}

export default function InovationSection(props: InovationSectionProps) {
  return <InovationSectionIsland {...props} />;
}
