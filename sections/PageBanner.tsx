import { ImageWidget } from "apps/admin/widgets.ts";
import PageBannerIsland from "site/islands/PageBannerIsland.tsx";

interface PageBannerProps {
  bgColor: string;
  bgImageDesktop: ImageWidget;
  bgImageMobile?: ImageWidget;
  title: string;
  /**
   * @format rich-text
   */
  description?: string;
  hasNotice: boolean;
  /**
   * @format rich-text
   */
  noticeText?: string;
}

export default function PageBanner(props: PageBannerProps) {
  return <PageBannerIsland {...props} />;
}
