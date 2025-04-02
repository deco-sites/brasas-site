import BannerWithoutImageIsland from "site/islands/BannerWithoutImageIsland.tsx";

interface BannerWithoutImageProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  bgColor: string;
}

export default function BannerWithoutImage(props: BannerWithoutImageProps) {
  return <BannerWithoutImageIsland {...props} />;
}
