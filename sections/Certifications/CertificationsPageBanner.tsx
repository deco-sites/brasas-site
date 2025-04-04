import { ImageWidget } from "apps/admin/widgets.ts";
import CertificationsPageBannerIsland from "site/islands/Certifications/CertificationsPageBannerIsland.tsx";

interface CertificationsPageBannerProps {
  bgImage: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  subtitleInEnglish?: string;
  subtitleInPortuguese?: string;
  hasNotice: boolean;
}

export default function CertificationsPageBanner(
  props: CertificationsPageBannerProps,
) {
  return <CertificationsPageBannerIsland {...props} />;
}
