import { ImageWidget } from "apps/admin/widgets.ts";
import CertificationsPageBannerIsland from "site/islands/Certifications/CertificationsPageBannerIsland.tsx";

interface CertificationsPageBannerProps {
  bgImage: ImageWidget;
  title: string;
  subtitle?: string;
  hasNotice: boolean;
  /**
   * @format rich-text
   */
  noticeText?: string;
}

export default function CertificationsPageBanner(
  props: CertificationsPageBannerProps,
) {
  return <CertificationsPageBannerIsland {...props} />;
}
