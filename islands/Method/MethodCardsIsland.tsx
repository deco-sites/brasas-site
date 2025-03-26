import { useSelectLanguage } from "site/sdk/language.ts";

export default function MethodCardsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="flex flex-col items-center py-12">
      <div className="flex flex-col items-center gap-8 max-w-[88.5rem] px-9">
        <h2 className="text-red-300 bg-red-300/20 px-1 py-2 rounded-md font-bold text-4xl">
          {selectedLanguage.value === "ptBr"
            ? props.titleInPortuguese
            : props.titleInEnglish}
        </h2>
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 mt-14">
          {props.methodCards.map((methodCard) => (
            <div className="shadow-md flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 p-6 border-l-red-300 border-l-8 cursor-pointer transition duration-300 hover:scale-105">
              <h3 className="text-red-900 font-bold text-xl">
                {selectedLanguage.value === "ptBr"
                  ? methodCard.titleInPortuguese
                  : methodCard.titleInEnglish}
              </h3>
              <p
                className="text-blue-700 text-base"
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? methodCard.descriptionInPortuguese
                    : methodCard.descriptionInEnglish,
                }}
              >
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
