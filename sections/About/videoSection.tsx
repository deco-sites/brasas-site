//import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

import { ImageWidget } from "apps/admin/widgets.ts";

import VideoSectionIsland from "site/islands/About/VideoSectionIsland.tsx";

interface VideoSectionProps {
  videoLink: string;
  poster: ImageWidget;
  title: string;
}

export default function VideoSection(props: VideoSectionProps) {
  return <VideoSectionIsland {...props} />;
}
