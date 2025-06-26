import { ImageWidget } from "apps/admin/widgets.ts";
import TOEICCertificationIsland from "../../islands/Certifications/ToeicCertificationIsland.tsx";

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

interface TOEICCertificationProps {
  title: string;
  items: Item[];
  card: Card;
  certificationTitle: string;
  preparatoryCourseTitle: string;
}

export default function TOEICCertification(props: TOEICCertificationProps) {
  return <TOEICCertificationIsland {...props} />;
}
