import Image from "apps/website/components/Image.tsx";
import IconArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-left.tsx";
import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-right.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export default function ProfileCoursesCardsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const currentIndex = useSignal(0);
  const containerRef = useRef(null);
  const visibleCards = 4;
  const gapSize = 16; // 1rem = 16px

  // Atualiza a posição do carrossel
  const updatePosition = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = (containerWidth - (visibleCards - 1) * gapSize) /
        visibleCards;
      containerRef.current.style.transform = `translateX(-${
        currentIndex.value * (cardWidth + gapSize)
      }px)`;
    }
  };

  // Avança para o próximo card
  const next = () => {
    if (currentIndex.value < props.cards.length - visibleCards) {
      currentIndex.value += 1;
    }
  };

  // Volta para o card anterior
  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
    }
  };

  const screenWidth = useSignal(globalThis.innerWidth);

  useEffect(() => {
    const updateWidth = () => (screenWidth.value = globalThis.innerWidth);
    globalThis.addEventListener("resize", updateWidth);
    return () => globalThis.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    updatePosition();
    globalThis.addEventListener("resize", updatePosition);
    return () => globalThis.removeEventListener("resize", updatePosition);
  }, [currentIndex.value]);

  return (
    <section
      className="relative bg-blue-100 flex w-full justify-center"
      style={{
        backgroundImage: `url('/courses-bg-2.svg')`,
        backgroundPosition: "0px 90%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <Image
        src="/line-bg.svg"
        className="hidden lg:block absolute top-28 left-0"
      />
      <div className="w-full flex flex-col gap-16 max-w-[88.5rem] px-9 py-16 pb-28">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-center lg:text-start text-black-500 font-bold text-4xl ">
            {selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish}
          </h2>
          <div className="hidden lg:flex gap-4">
            <button
              onClick={prev}
              disabled={currentIndex.value === 0}
              className={`bg-blue-300 w-12 h-12 flex items-center justify-center text-white rounded-full ${
                currentIndex.value === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <IconArrowLeft class="w-8 h-w-8" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex.value >= props.cards.length - visibleCards}
              className={`bg-blue-300 w-12 h-12 flex items-center justify-center text-white rounded-full ${
                currentIndex.value >= props.cards.length - visibleCards
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <IconArrowRight class="w-8 h-w-8" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex flex-col lg:flex-row gap-4 transition-transform duration-300"
            style={{ width: "100%" }}
          >
            {props.cards.map((card) => (
              <a
                href={card.link}
                className="flex flex-col shrink justify-between bg-white h-[20rem] overflow-hidden rounded-2xl border border-gray-100"
                style={screenWidth.value >= 1024
                  ? {
                    flex: `0 0 calc((100% - ${
                      (visibleCards - 1) * gapSize
                    }px) / ${visibleCards})`,
                  }
                  : {}}
              >
                <div className="flex flex-col items-center gap-2 text-blue-900 p-4 h-[35%]">
                  <span className="leading-8 font-black text-xl text-center">
                    {selectedLanguage.value === "ptBr"
                      ? card.portugueseTitle
                      : card.englishTitle}
                  </span>
                  <span
                    className="leading-6 font-medium font-base text-center"
                    dangerouslySetInnerHTML={{
                      __html: selectedLanguage.value === "ptBr"
                        ? card.portugueseDescription
                        : card.englishDescription,
                    }}
                  >
                  </span>
                </div>
                <div className="relative max-w-full h-[65%]">
                  <Image
                    src={card.image}
                    alt=""
                    className="lg:absolute bottom-0 w-full h-full lg:h-auto object-cover max-h-[13rem]"
                    style={{ overflowClipMargin: "content-box" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
