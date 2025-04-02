import { useId } from "site/sdk/useId.ts";
import SliderJS from "site/islands/sliderJS.tsx";
import Slider from "site/components/ui/Slider.tsx";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { Banner, Props } from "site/sections/BannerCarrousel.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

const DEFAULT_PROPS = {
  images: [],
  preload: true,
};

function BannerItem({ image, lcp, id, isMobile }: {
  image: Banner;
  lcp?: boolean;
  id: string;
  isMobile: boolean;
}) {
  const { alt, mobile, desktop, link } = image;

  return (
    <a
      id={id}
      href={link ?? "#"}
      aria-label="Banners"
      className="relative overflow-y-hidden w-full h-full"
    >
      {isMobile && (
        <Image
          className="object-cover w-full h-full"
          src={mobile.image}
          alt={alt}
          width={mobile.width ?? 350}
          height={mobile.height ?? 350}
          preload
          loading="eager"
          fetchPriority="high"
          decoding={"async"}
        />
      )}
      {!isMobile && (
        <Image
          className="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop.image}
          alt={alt}
          width={desktop.width ?? 1440}
          height={desktop.height ?? 520}
          fetchPriority={lcp ? "high" : "low"}
          preload={lcp ? true : false}
          decoding={"async"}
        />
      )}
    </a>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: ` 
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul className="absolute -bottom-6 lg:bottom-4 left-1/2 -translate-x-1/2 carousel justify-center col-span-full gap-4 z-10 row-start-4">
        {images?.map((_, index) => (
          <li className="carousel-item">
            <Slider.Dot index={index}>
              <div className="py-5">
                <div
                  className="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{
                    animationDuration: `${interval}s`,
                  }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 left-10 flex items-center justify-center z-10 bg-black-500 bg-opacity-30 w-8 py-2">
        <Slider.PrevButton>
          <Icon
            className="text-white"
            size={40}
            id="ChevronLeft"
            strokeWidth={2}
          />
        </Slider.PrevButton>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-10 flex items-center justify-center z-10 bg-black-500 bg-opacity-30 w-8 py-2">
        <Slider.NextButton>
          <Icon
            className="text-white rotate-180"
            size={40}
            id="ChevronLeft"
            strokeWidth={2}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default function BannerCarrouselIsland(props) {
  const id = useId();

  const { images, preload, interval, device } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="relative flex justify-center h-[42rem] bg-blue-300">
      <div className="absolute z-10 w-full h-full hidden xl:flex justify-end items-center max-w-[88.5rem] px-9">
        <div className="flex flex-col text-white">
          <span
            className="mb-4 font-black text-4xl leading-10"
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? props.titleInPortuguese
                : props.titleInEnglish,
            }}
          >
          </span>
          <span
            className="mb-10 font-medium leading-8 text-2xl"
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? props.descriptionInPortuguese
                : props.descriptionInEnglish,
            }}
          >
          </span>

          <a href={props.CTALink} target="_blank">
            <button className="flex gap-2 px-4 py-3 w-fit bg-red-300 rounded-lg transition duration-300 hover:bg-white hover:text-blue-300">
              <span className="font-bold text-base">
                {selectedLanguage.value === "ptBr"
                  ? props.CTAtextInPortuguese
                  : props.CTAtextInEnglish}
              </span>
              <IconArrowNarrowRight class="w-6 h-6" />
            </button>
          </a>
        </div>
      </div>

      <div className="flex gap-6 w-full">
        <div
          id={id}
          className="w-full relative grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
        >
          <Slider className="carousel carousel-center w-full col-span-full row-span-full gap-6 h-full">
            {images?.map((image, index) => {
              const params = { promotion_name: image.alt };
              return (
                <Slider.Item
                  index={index}
                  className="carousel-item w-full"
                >
                  <BannerItem
                    image={image}
                    lcp={index === 0}
                    id={`${id}::${index}`}
                    isMobile={isMobile}
                  />
                </Slider.Item>
              );
            })}
          </Slider>

          {images && images.length > 1 && (
            <>
              <Buttons />

              <Dots images={images} interval={interval} />

              <SliderJS
                rootId={id}
                interval={interval && interval * 1e3}
                infinite
                alwaysGo
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
