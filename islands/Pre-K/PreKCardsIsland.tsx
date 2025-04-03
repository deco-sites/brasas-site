import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function PreKCardsIsland(props) {
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
          <Image
            src={selectedLanguage.value === "ptBr"
              ? "/prek-cards-pt.png"
              : "/prek-cards-en.png"}
            alt="Pre-K Cards"
            className="w-full max-w-[38.5rem]"
          />
          <Image src={"/esquema_prek.png"} alt="Esquema Pre-K" />
        </div>
      </div>
    </div>
  );
}
