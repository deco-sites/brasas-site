import { ImageWidget } from "apps/admin/widgets.ts";
import CertificationsBannerIsland from "../../islands/Certifications/CertificationsBannerIsland.tsx";

interface Item {
  icon: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  subtitleInEnglish: string;
  subtitleInPortuguese: string;
}

interface CertificationsBannerProps {
  items: Item[];
}

export default function CertificationsBanner(props: CertificationsBannerProps) {
  return <CertificationsBannerIsland {...props} />;
}
