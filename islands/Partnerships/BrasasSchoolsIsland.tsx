import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function BrasasSchoolsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex w-full justify-center py-20 bg-gray-100/10">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex flex-col items-center xl:items-start xl:flex-row gap-8 w-full justify-center">
          <Image src={props.logo} className="w-44 h-20 object-contain" />
          <div className="flex flex-col max-w-2xl">
            <span className="text-blue-500 font-semibold text-2xl mb-6">
              {selectedLanguage.value === "ptBr"
                ? props.titleInPortuguese
                : props.titleInEnglish}
            </span>
            <span className="mb-6">
              {selectedLanguage.value === "ptBr"
                ? props.subtitleInPortuguese
                : props.subtitleInEnglish}
            </span>
            <div className="flex flex-col gap-5 mb-10">
              {props.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image src={item.icon} className="w-8 h-8 object-contain" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">
                      {selectedLanguage.value === "ptBr"
                        ? item.titleInPortuguese
                        : item.titleInEnglish}
                    </span>
                    <span className="text-base">
                      {selectedLanguage.value === "ptBr"
                        ? item.textInPortuguese
                        : item.textInEnglish}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#">
              <button className="text-white bg-blue-300 rounded-lg py-3 px-8 w-fit">
                {selectedLanguage.value === "ptBr"
                  ? "Quero saber mais"
                  : "I want to know more"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
