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
          <div className="flex gap-8">
            <Image
              src={selectedLanguage.value === "ptBr"
                ? "/JuniorsAndTeensPage/juniors-and-teens-1-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-1-en.png"}
              alt="Kids Cards"
              className="w-full max-w-[38.5rem]"
            />
            <Image
              src={selectedLanguage.value === "ptBr"
                ? "/JuniorsAndTeensPage/juniors-and-teens-2-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-2-en.png"}
              alt="Kids Cards"
              className="w-full max-w-[38.5rem]"
            />
          </div>
          <Image
            src={"/JuniorsAndTeensPage/esquema_jr.png"}
            alt="Esquema Kids"
          />
          <Image
            src={selectedLanguage.value === "ptBr"
              ? "/JuniorsAndTeensPage/juniors-and-teens-3-pt.png"
              : "/JuniorsAndTeensPage/juniors-and-teens-3-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
