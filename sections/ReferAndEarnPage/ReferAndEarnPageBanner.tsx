import { ImageWidget } from "apps/admin/widgets.ts";
import ReferAndEarnPageBannerIsland from "site/islands/ReferAndEarnPage/ReferAndEarnPageBannerIsland.tsx";

interface ReferAndEarnPageBannerProps {
  image: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export default function ReferAndEarnPageBanner(
  props: ReferAndEarnPageBannerProps,
) {
  return <ReferAndEarnPageBannerIsland {...props} />;
}
