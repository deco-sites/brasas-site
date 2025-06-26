import BranchesBannerIsland from "site/islands/Branches/BranchesBannerIsland.tsx";

interface BranchesBannerProps {
  title: string;
  description: string;
}

export default function BranchesBanner(props: BranchesBannerProps) {
  return <BranchesBannerIsland {...props} />;
}
