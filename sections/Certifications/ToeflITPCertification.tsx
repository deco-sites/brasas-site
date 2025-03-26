import { ImageWidget } from "apps/admin/widgets.ts";
import ToeflITPCertificationIsland from "../../islands/Certifications/ToeflITPCertificationIsland.tsx";

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

interface ToeflITPCertificationProps {
  title: string;
  items: Item[];
  card: Card;
}

export default function ToeflITPCertification(
  props: ToeflITPCertificationProps,
) {
  return <ToeflITPCertificationIsland {...props} />;
}
