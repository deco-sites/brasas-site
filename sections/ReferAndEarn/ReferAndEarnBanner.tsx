import ReferAndEarnBannerIsland from "site/islands/ReferAndEarn/ReferAndEarnBannerIsland.tsx";

interface ReferAndEarnBannerProps {
    titleInEnglish: string;
    titleInPortuguese: string;
}

export default function ReferAndEarnBanner(props:ReferAndEarnBannerProps) {
  return <ReferAndEarnBannerIsland {...props} />;
}
