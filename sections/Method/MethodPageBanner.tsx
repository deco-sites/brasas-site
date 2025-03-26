import MethodPageBannerIsland from "site/islands/Method/MethodPageBannerIsland.tsx";

interface MethodPageBannerProps {
  principalWordInEnglish: string;
  secondaryWordInEnglish: string;
  principalWordInPortuguese: string;
  secondaryWordInPortuguese: string;
}

export default function MethodPageBanner(props: MethodPageBannerProps) {
  return <MethodPageBannerIsland {...props} />;
}
