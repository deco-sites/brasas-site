import BannerWithoutImageIsland from "site/islands/BannerWithoutImageIsland.tsx";

interface BannerWithoutImageProps {
  title: string;
  bgColor: string;
}

export default function BannerWithoutImage(props: BannerWithoutImageProps) {
  return <BannerWithoutImageIsland {...props} />;
}
