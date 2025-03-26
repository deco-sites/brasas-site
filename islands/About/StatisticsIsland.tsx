import { useSelectLanguage } from "site/sdk/language.ts";

export default function StatisticsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex flex-col gap-12 items-center bg-green-100 py-20">
      <p className="text-2xl font-normal max-w-[44rem] text-center">
        {selectedLanguage.value === "ptBr"
          ? props.textInPortuguese
          : props.textInEnglish}
      </p>

      <div className="flex flex-col xl:flex-row gap-10 xl:gap-36">
        {props.items.map((item, index) => (
          <div className="flex xl:flex-col items-center gap-4">
            <div className="relative flex items-center justify-center bg-blue-300 w-14 h-14 rounded-full">
              <img
                src={item.icon}
                alt={item.textInEnglish}
              />
              {/*Linha esquerda*/}
              {index !== 0 && (
                <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-36 bg-blue-300 h-1">
                </div>
              )}
              {/*Linha direita*/}
              {props.items.length - 1 !== index && (
                <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-36 bg-blue-300 h-1">
                </div>
              )}
              {/* Linha abaixo */}
              {props.items.length - 1 !== index && (
                <div className="xl:hidden rotate-90 absolute top-full mt-4 w-11 bg-blue-300 h-1">
                </div>
              )}
            </div>
            <p className="font-black text-2xl">
              {selectedLanguage.value === "ptBr"
                ? item.textInPortuguese
                : item.textInEnglish}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
