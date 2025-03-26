import PreKBannerIsland from "site/islands/Pre-K/PreKBannerIsland.tsx";

interface PreKBannerProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
}

export default function PreKBanner(props: PreKBannerProps) {
  return <PreKBannerIsland {...props} />;
}
