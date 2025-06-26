import { ImageWidget } from "apps/admin/widgets.ts";
import ToefljrCertificationIsland from "../../islands/Certifications/ToefljrCertificationIsland.tsx";

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

interface ToefljrCertificationProps {
  title: string;
  items: Item[];
  card: Card;
}

export default function ToefljrCertification(props: ToefljrCertificationProps) {
  return <ToefljrCertificationIsland {...props} />;
}
