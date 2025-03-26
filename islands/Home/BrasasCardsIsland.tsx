import Image from "apps/website/components/Image.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function BrasasCardIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  const COLORS = {
    "blue-50": "bg-blue-50",
    "blue-900": "bg-blue-900",
    "blue-300": "bg-blue-300",
    "red-500": "bg-red-500",
    "yellow-500": "bg-yellow-500",
    "purple-300": "bg-purple-300",
    "green-100": "bg-green-100",
    "orange-200": "bg-orange-200",
  };

  const POSITION = {
    "left": "left-0",
    "right": "right-0",
    "center": "",
  };

  return (
    <>
      <div className="flex justify-center pt-20 pb-14 bg-[url('/brasas-card-bg.svg')] bg-no-repeat bg-top">
        <div className="flex flex-wrap justify-center gap-20 max-w-[88.5rem] px-9">
          {props.cards.map((card) => (
            <div
              key={card.titleInEnglish}
              className={`relative flex flex-col items-center gap-4 pt-8 px-8 rounded-2xl shadow-lg max-w-96 min-h-[37.5rem] ${
                COLORS[card.cardBgColor]
              }`}
            >
              <h2 className="text-4xl leading-10 font-black text-center text-blue-900">
                {selectedLanguage.value === "ptBr"
                  ? card.titleInPortuguese
                  : card.titleInEnglish}
              </h2>
              <p className="text-center text-blue-900 text-base font-medium ">
                {selectedLanguage.value === "ptBr"
                  ? card.descriptionInPortuguese
                  : card.descriptionInEnglish}
              </p>
              <a href={card.link}>
                <button
                  className={`flex items-center justify-center gap-2 px-6 py-4 text-white rounded-lg ${
                    COLORS[card.buttonBgColor]
                  }`}
                >
                  <span className="text-base font-bold">
                    {selectedLanguage.value === "ptBr"
                      ? card.buttonTextInPortuguese
                      : card.buttonTextInEnglish}
                  </span>
                  <IconArrowNarrowRight class="w-6 h-6" />
                </button>
              </a>
              <Image
                src={card.cardImage}
                alt={card.titleInEnglish}
                className={`absolute bottom-0 ${POSITION[card.bgPosition]}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
