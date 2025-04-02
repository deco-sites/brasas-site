import { useSelectLanguage } from "site/sdk/language.ts";
import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-right.tsx";

export default function BrasasOnlineCardsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="w-full flex flex-col">
      <div className="bg-blue-600 w-full flex justify-center">
        <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center">
          <span className="font-bold text-black-500 text-4xl leading-10 py-9">
            {selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish}
          </span>
          <div className="py-20 grid xl:flex grid-cols-1 gap-8">
            {props.classesCards.map((card, index) => (
              <div
                key={index}
                className="border border-blue-500 rounded-2xl p-6 flex-1 basis-0 flex flex-col gap-8"
              >
                <span className="text-blue-500 font-bold text-xl">
                  {card.title}
                </span>

                <div className="flex flex-col gap-1">
                  {card.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <IconArrowRight class="w-3 h-3 shrink-0 mt-1" />
                      <span className="text-gray-500">
                        {selectedLanguage.value === "ptBr"
                          ? item.textInPortuguese
                          : item.textInEnglish}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
