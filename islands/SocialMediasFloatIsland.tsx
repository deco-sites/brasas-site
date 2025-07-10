import IconBrandFacebookFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-facebook-filled.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconBrandTiktokFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-tiktok-filled.tsx";
import IconBrandYoutubeFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-youtube-filled.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-linkedin.tsx";
import IconBrandSpotify from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-spotify.tsx";
import { useEffect, useState } from "preact/hooks";

export default function SocialMediasFloatIsland(props) {
  const ICONS = {
    "facebook": IconBrandFacebookFilled,
    "instagram": IconBrandInstagram,
    "tiktok": IconBrandTiktokFilled,
    "youtube": IconBrandYoutubeFilled,
    "linkedin": IconBrandLinkedin,
    "spotify": IconBrandSpotify,
  };

  const [isOpen, setIsOpen] = useState(null);

  if (props.device === "desktop") {
    return (
      <div
        className="fixed flex flex-col gap-9 right-0 top-24"
        style={{ zIndex: 1000 }}
      >
        {props.socialMedias.map((media) => {
          const IconComponent = ICONS[media.text.toLowerCase()];
          if (!IconComponent) return null;

          return (
            <a
              href={media.link}
              target="_blank"
              key={media.text}
              className="group block"
            >
              <div className="relative">
                <div className="absolute -right-32 group-hover:right-0 flex transition-all duration-300 items-center w-52">
                  <div className="translate-x-full bg-white group-hover:bg-blue-300 rounded-full shrink-0 h-8 w-8  flex justify-center items-center transition-all duration-300">
                    {IconComponent && (
                      <IconComponent className="h-[20px] w-[20px] object-contain text-blue-300 group-hover:text-white transition-all duration-300 group-hover:animate-short-spin" />
                    )}
                  </div>
                  <div className="bg-black-500 bg-opacity-30 group-hover:bg-white rounded-l-full group-hover:bg-opacity-50 flex items-center h-7 w-full pl-12 transition-all duration-300">
                    <span className="text-white group-hover:text-blue-300 transition-all duration-300">
                      {media.text}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="fixed flex flex-col gap-9 right-0 top-24"
      style={{ zIndex: 1000 }}
    >
      {props.socialMedias.map((media, index) => {
        const IconComponent = ICONS[media.text.toLowerCase()];
        if (!IconComponent) return null;

        const isActive = isOpen === index;

        return (
          <div
            key={media.text}
            className="block"
            onClick={() => setIsOpen((prev) => (prev === index ? null : index))}
          >
            <div className="relative">
              <div
                className={`absolute flex transition-all duration-300 items-center w-52 ${
                  isActive ? "right-0" : "-right-32"
                }`}
              >
                <div
                  className={`translate-x-full rounded-full shrink-0 h-8 w-8 flex justify-center items-center transition-all duration-300 ${
                    isActive ? "bg-blue-300" : "bg-white"
                  }`}
                >
                  {IconComponent && (
                    <IconComponent
                      className={`h-[20px] w-[20px] object-contain transition-all duration-300 ${
                        isActive
                          ? "text-white animate-short-spin"
                          : "text-blue-300"
                      }`}
                    />
                  )}
                </div>
                <div
                  className={`rounded-l-full flex items-center h-7 w-full pl-12 transition-all duration-300 ${
                    isActive
                      ? "bg-white bg-opacity-50"
                      : "bg-black-500 bg-opacity-30"
                  }`}
                >
                  <a
                    href={media.link}
                    target="_blank"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isActive ? "text-blue-300" : "text-white"
                      }`}
                    >
                      {media.text}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
