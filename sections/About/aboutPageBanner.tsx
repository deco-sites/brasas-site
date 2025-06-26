import AboutPageBannerIsland from "site/islands/About/AboutPageBannerIsland.tsx";

interface AboutPageBannerProps {
  title: string;
  description: string;
}

export default function AboutPageBanner(props: AboutPageBannerProps) {
  return <AboutPageBannerIsland {...props} />;
}
