import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function JuniorsAndTeensIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex w-full justify-center">
          <div className="py-8 max-w-[48rem]">
            <span
              className="text-2xl"
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? props.textInPortuguese
                  : props.textInEnglish,
              }}
            >
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-5 pb-11">
          <div className="flex flex-wrap w-full justify-center gap-8">
            <Image
              src={selectedLanguage.value === "ptBr"
                ? "/JuniorsAndTeensPage/juniors-and-teens-1-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-1-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem] object-contain"
            />
            <Image
              src={selectedLanguage.value === "ptBr"
                ? "/JuniorsAndTeensPage/juniors-and-teens-2-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-2-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem] object-contain"
            />
          </div>
          <Image
            src={"/JuniorsAndTeensPage/esquema_jr.png"}
            alt="Esquema Kids"
          />
          <a href="/certificacoes#toeicjr" target="_self">
            <Image
              src={selectedLanguage.value === "ptBr"
                ? "/JuniorsAndTeensPage/juniors-and-teens-3-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-3-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
