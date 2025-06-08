import { useId } from "site/sdk/useId.ts";
import SliderJS from "site/islands/sliderJS.tsx";
import Slider from "site/components/ui/Slider.tsx";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { Banner, Props } from "site/sections/BannerCarrousel.tsx";

const DEFAULT_PROPS = {
  images: [],
  preload: true,
};

function BannerItem({ image, lcp, id }: {
  image: Banner;
  lcp?: boolean;
  id: string;
}) {
  const { alt, mobile, tablet, laptop, desktop, ultrawide, link } = image;

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // inicial
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Escolhe a imagem com base na largura
  const getResponsiveImage = () => {
    if (windowWidth >= 1920) return ultrawide;
    if (windowWidth >= 1440) return desktop;
    if (windowWidth >= 1024) return laptop;
    if (windowWidth >= 768) return tablet;
    return mobile;
  };

  const selectedImage = getResponsiveImage();

  return (
    <a
      id={id}
      href={link ?? "#"}
      target="_blank"
      aria-label="Banners"
      className="relative overflow-y-hidden w-full h-full"
    >
      <Image
        className="object-cover w-full h-full"
        src={selectedImage.image}
        alt={alt}
        width={selectedImage.width ?? 1920}
        height={selectedImage.height ?? 1080}
        preload={lcp}
        loading={lcp ? "eager" : "lazy"}
        fetchPriority={lcp ? "high" : "auto"}
        decoding={"async"}
      />
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
      <ul className="hidden absolute -bottom-6 lg:bottom-4 left-1/2 -translate-x-1/2 carousel justify-center col-span-full gap-4 z-40 row-start-4">
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

  //Aqui faço um outro array sem as imagens com data de expiração menor que a data atual
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}T00:00:00`);
  };

  const currentDate = new Date();

  const imagesFiltered = images.filter((image) => {
    const { startDate, expirationDate } = image;

    const start = startDate ? parseDate(startDate) : null;
    const end = expirationDate ? parseDate(expirationDate) : null;

    if (!start && !end) return true; // Nenhuma data: incluir

    if (start && !end) return start <= currentDate; // Apenas início: incluir se já começou

    if (!start && end) return end >= currentDate; // Apenas fim: incluir se ainda não expirou

    return start <= currentDate && end >= currentDate; // Ambas: incluir se estiver no intervalo
  });

  return (
    <div
      className={`relative xl:pb-0 flex flex-col-reverse xl:flex-row justify-center bg-blue-300`}
    >
      <div className="flex gap-6 w-full h-[39.6rem] xl:h-[42rem]">
        <div
          id={id}
          className="w-full relative "
        >
          <Slider className="carousel carousel-center w-full col-span-full row-span-full gap-6 h-full">
            {imagesFiltered?.map((image, index) => {
              //const params = { promotion_name: image.alt };
              return (
                <Slider.Item
                  index={index}
                  className="carousel-item w-full"
                >
                  <BannerItem
                    image={image}
                    lcp={index === 0}
                    id={`${id}::${index}`}
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
