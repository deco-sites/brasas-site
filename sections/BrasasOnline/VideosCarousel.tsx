import { ImageWidget } from "apps/admin/widgets.ts";
import VideosCarouselIsland from "../../islands/BrasasOnline/VideosCarouselIsland.tsx";

/** @titleBy title */
interface Video {
  title: string;
  url: string;
  poster: ImageWidget;
}

interface VideosCarouselProps {
  videos: Video[];
}

export default function VideosCarousel(props: VideosCarouselProps) {
  return <VideosCarouselIsland {...props} />;
}