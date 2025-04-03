import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import IconPlayerPlayFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/player-play-filled.tsx";
import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function VideoSectionIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full max-h-[54rem]">
        <Image
          src={props.poster}
          alt="Imagem de fundo"
          className="object-cover w-full max-h-[54rem]"
        />
        <div className="absolute z-40 h-full w-full bg-black-500/85"></div>
        <div className="flex flex-col items-center gap-8 absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
            onClick={handlePlayVideo}
          >
            <IconPlayerPlayFilled class="w-6 h-6" />
          </div>
          <span className="text-white font-bold text-4xl text-center">
            {props.titleInPortuguese}
          </span>
        </div>
      </div>

      {isPlaying && (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center max-h-[54rem]">
          <div className="fixed z-50 top-0 left-0 h-[100vh] w-[100vw] bg-[#00000060] flex items-center justify-center">
          </div>
          <div className="z-50 fixed overflow-hidden" style={{ zIndex: 999 }}>
            <div className="relative">
              <video controls controlsList="nodownload" autoPlay>
                <source
                  src="https://brasas-videos.s3.us-east-2.amazonaws.com/Manifesto_BRASAS_ejsjud.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div
                className="bg-transparent hover:bg-white text-white hover:text-black-500 transition-all duration-300 rounded-full w-8 h-8 flex items-center justify-center absolute right-4 top-4 cursor-pointer"
                onClick={() => setIsPlaying(false)}
              >
                <IconX className="w-6 h-6 " />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
