import { ImageWidget } from "apps/admin/widgets.ts";
import InovationSectionIsland from "site/islands/BrasasOnline/InovationSectionIsland.tsx";

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

interface InovationSectionProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  items: Item[];
}

export default function InovationSection(props: InovationSectionProps) {
  return <InovationSectionIsland {...props} />;
}
