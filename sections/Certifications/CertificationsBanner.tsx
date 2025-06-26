import { ImageWidget } from "apps/admin/widgets.ts";
import CertificationsBannerIsland from "../../islands/Certifications/CertificationsBannerIsland.tsx";

/* @titleBy title */
interface Item {
  icon: ImageWidget;
  title: string;
  subtitle: string;
}

interface CertificationsBannerProps {
  items: Item[];
}

export default function CertificationsBanner(props: CertificationsBannerProps) {
  return <CertificationsBannerIsland {...props} />;
}
