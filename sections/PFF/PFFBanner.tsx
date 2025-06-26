import { ImageWidget } from "apps/admin/widgets.ts";
import PFFBannerIsland from "site/islands/PFF/PFFBannerIsland.tsx";

interface PFFBannerProps {
  bgImageDesktop: ImageWidget;
  bgImageMobile: ImageWidget;
  image: ImageWidget;
  hasNotice: boolean;
  /* @format rich-text */
  noticeText?: string;
}

export default function PFFBanner(props: PFFBannerProps) {
  return <PFFBannerIsland {...props} />;
}
