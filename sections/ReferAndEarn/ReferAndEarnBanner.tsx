import { ImageWidget } from "apps/admin/widgets.ts";
import ReferAndEarnBannerIsland from "site/islands/ReferAndEarn/ReferAndEarnBannerIsland.tsx";

interface Image {
  image: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

interface ReferAndEarnBannerProps {
  background: Image;
  centeredImage: Image;
}

export default function ReferAndEarnPageBanner(
  props: ReferAndEarnBannerProps,
) {
  return <ReferAndEarnBannerIsland {...props} />;
}
