import BranchesBannerIsland from "site/islands/Branches/BranchesBannerIsland.tsx";

interface BranchesBannerProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
}

export default function BranchesBanner(props: BranchesBannerProps) {
  return <BranchesBannerIsland {...props} />;
}
