import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function KidsCardsIsland(props) {
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
              ? "/kids-cards-pt.png"
              : "/kids-cards-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />
          <Image
            src={"/esquema_kids.png"}
            alt="Esquema Kids"
            className="lg:my-16 w-[45rem]"
          />
        </div>
      </div>
    </div>
  );
}
