import { ImageWidget } from "apps/admin/widgets.ts";
import ToeflITPCertificationIsland from "../../islands/Certifications/ToeflITPCertificationIsland.tsx";

/* @titleBy text */
interface Item {
  icon: ImageWidget;
  /**
   * @format rich-text
   */
  text: string;
}

interface Card {
  logo: ImageWidget;
  /**
   * @format rich-text
   */
  modality: string;
  /**
   * @format rich-text
   */
  sessions: string;
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
