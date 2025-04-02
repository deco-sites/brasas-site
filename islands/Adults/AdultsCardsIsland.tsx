import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function AdultsCardsIsland(props) {
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

        <div className="flex flex-col items-center justify-center py-5 lg:pb-11">
          <Image
            src={selectedLanguage.value === "ptBr"
              ? "/AdultsPage/adults-1-pt.png"
              : "/AdultsPage/adults-1-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />

          <div className="flex flex-col gap-4 py-5 max-w-[37rem]">
            <div className="flex gap-6">
              <div className="flex gap-4">
                <Image
                  src="/AdultsPage/signal-bars.svg"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-blue-900 font-black text-xl">
                  {selectedLanguage.value === "ptBr"
                    ? "teste de nivelamento grátis sem compromisso"
                    : "free placement test without obligation"}
                </span>
              </div>
              <div className="flex gap-4 max-w-[40%]">
                <Image
                  src="/AdultsPage/circled-dollar.svg"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-blue-900 font-black text-xl">
                  {selectedLanguage.value === "ptBr"
                    ? "aulas de apoio gratuitas"
                    : "free support classes"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-blue-900 text-xs">
              <span>
                {selectedLanguage.value === "ptBr"
                  ? "*duração aproximada do curso (sem férias, recessos e feriados)."
                  : "*approximate duration of the course (without holidays, breaks and public holidays)."}
              </span>
              <span>
                {selectedLanguage.value === "ptBr"
                  ? "**Podem ser 2 dias na semana ou 2 aulas consecutivas no mesmo"
                  : "**It can be 2 days a week or 2 consecutive classes in the same day."}
                dia.
              </span>
            </div>
          </div>
          {
            /*
          <Image
            src={selectedLanguage.value === "ptBr"
              ? "/AdultsPage/adults-2-pt.png"
              : "/AdultsPage/adults-2-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />*/
          }
          <Image
            src={"/AdultsPage/esquema_adults.png"}
            alt="Esquema Adults"
            className="w-[32rem] h-[32rem] lg:my-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
