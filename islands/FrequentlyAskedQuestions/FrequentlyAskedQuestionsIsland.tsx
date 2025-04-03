import { useSelectLanguage } from "site/sdk/language.ts";
import { useState } from "preact/hooks";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-down.tsx";

export default function FrequentlyAskedQuestionsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center w-full py-12">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center gap-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4 w-full max-w-[62.5rem]">
          {props.items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-xl flex-1">
                  {selectedLanguage.value === "ptBr"
                    ? item.titleInPortuguese
                    : item.titleInEnglish}
                </span>
                <IconChevronDown
                  class={`w-6 h-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      .blue-link a {
                      color: #0D6EFD !important;
                      }
                    `,
                  }}
                />
                <div
                  className="blue-link bg-gray-400 rounded-lg p-4 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: selectedLanguage.value === "ptBr"
                      ? item.textInPortuguese
                      : item.textInEnglish,
                  }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
