import AboutPageBannerIsland from "site/islands/About/AboutPageBannerIsland.tsx";

interface AboutPageBannerProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
}

export default function AboutPageBanner(props: AboutPageBannerProps) {
  return <AboutPageBannerIsland {...props} />;
}
