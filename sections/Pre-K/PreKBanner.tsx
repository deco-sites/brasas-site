import PreKBannerIsland from "site/islands/Pre-K/PreKBannerIsland.tsx";

interface PreKBannerProps {
  title: string;
  description: string;
}

export default function PreKBanner(props: PreKBannerProps) {
  return <PreKBannerIsland {...props} />;
}
