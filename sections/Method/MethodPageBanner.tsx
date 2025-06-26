import MethodPageBannerIsland from "site/islands/Method/MethodPageBannerIsland.tsx";

interface MethodPageBannerProps {
  principalWord: string;
  secondaryWord: string;
}

export default function MethodPageBanner(props: MethodPageBannerProps) {
  return <MethodPageBannerIsland {...props} />;
}
