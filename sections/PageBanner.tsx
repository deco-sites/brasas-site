import { ImageWidget } from "apps/admin/widgets.ts";
import PageBannerIsland from "site/islands/PageBannerIsland.tsx";

interface PageBannerProps {
  bgColor: string;
  bgImageDesktop: ImageWidget;
  bgImageMobile?: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish?: string;
  descriptionInPortuguese?: string;
  hasNotice: boolean;
}

export default function PageBanner(props: PageBannerProps) {
  return <PageBannerIsland {...props} />;
}
