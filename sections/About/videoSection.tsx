//import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import IconPlayerPlayFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/player-play-filled.tsx";

interface VideoSectionProps {
  video: string;
  poster: ImageWidget;
  titleInEnglish: string;
  titleInPortuguese: string;
}

export default function VideoSection(props: VideoSectionProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <Image
        src={props.poster}
        alt="Imagem de fundo"
        className="object-cover w-full"
      />
      <div className="absolute z-40 h-full w-full bg-black-500/85"></div>
      <div className="flex flex-col items-center gap-8 absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer">
          <IconPlayerPlayFilled class="w-6 h-6 " />
        </div>
        <span className="text-white font-bold text-4xl">
          {props.titleInPortuguese}
        </span>
      </div>
    </div>
  );
}
