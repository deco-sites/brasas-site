import { ImageWidget } from "apps/admin/widgets.ts";
import PageBannerIsland from "site/islands/PageBannerIsland.tsx";

interface PageBannerProps {
  bgColor: string;
  bgImage: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish?: string;
  descriptionInPortuguese?: string;
}

export default function PageBanner(props: PageBannerProps) {
  return <PageBannerIsland {...props} />;
}
