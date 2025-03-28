import { ImageWidget } from "apps/admin/widgets.ts";
import ReferAndEarnBannerIsland from "site/islands/ReferAndEarn/ReferAndEarnBannerIsland.tsx";

interface ReferAndEarnBannerProps {
  /**
   * @format rich-text
   */
  titleInEnglish: string;
  /**
   * @format rich-text
   */
  titleInPortuguese: string;
  bgImage: ImageWidget;
  iconImage: ImageWidget;
}

export default function ReferAndEarnBanner(props: ReferAndEarnBannerProps) {
  return <ReferAndEarnBannerIsland {...props} />;
}
