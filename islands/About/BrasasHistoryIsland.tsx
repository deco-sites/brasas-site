import { useSelectLanguage } from "site/sdk/language.ts";

export default function BrasasHistoryIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-[88.5rem] px-9 py-14">
        <h1 className="my-8">
          <span className="text-blue-800 text-4xl font-semibold">
            {selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish}
          </span>{" "}
          <span className="text-4xl font-bold text-blue-300 bg-blue-300 bg-opacity-25 rounded px-1 py-2 box-border">
            {props.foundersName}
          </span>
        </h1>
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 mt-14">
          {props.historyCards.map((card) => (
            <div
              key={card.titleInEnglish}
              className="shadow-md flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 p-6 border-l-blue-300 border-l-8 last:xl:col-span-2 cursor-pointer transition duration-300 hover:scale-105"
            >
              <h2 className="">
                {selectedLanguage.value === "ptBr"
                  ? card.titleInPortuguese
                  : card.titleInEnglish}
              </h2>
              <p>
                {selectedLanguage.value === "ptBr"
                  ? card.descriptionInPortuguese
                  : card.descriptionInEnglish}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
