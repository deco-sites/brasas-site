import { ImageWidget } from "apps/admin/widgets.ts";
import TOIECCertificationIsland from "../../islands/Certifications/ToiecCertificationIsland.tsx";

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

interface Card {
  logo: ImageWidget;
  /**
   * @format rich-text
   */
  modalityInEnglish: string;
  /**
   * @format rich-text
   */
  modalityInPortuguese: string;
  /**
   * @format rich-text
   */
  sessionsInEnglish: string;
  /**
   * @format rich-text
   */
  sessionsInPortuguese: string;
}

interface TOIECCertificationProps {
  title: string;
  items: Item[];
  card: Card;
}

export default function TOIECCertification(props: TOIECCertificationProps) {
  return <TOIECCertificationIsland {...props} />;
}
