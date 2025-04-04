import CardsGrid from "site/components/ui/CardsGrid.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function CoursesCardsSectionIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div
      className="relative flex flex-col items-center bg-blue-100 w-full"
      style={{
        backgroundImage: ` url('/courses-bg-2.svg')`,
        backgroundPosition: "0px calc(100% - 296px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <span className="font-black text-black-500 text-4xl leading-10 pt-16 pb-12 text-center">
        {selectedLanguage.value === "ptBr"
          ? props.titleInPortuguese
          : props.titleInEnglish}
      </span>
      <div className="max-w-[88.5rem] px-9 pb-24 lg:pb-36">
        <CardsGrid cards={props.cards} />
      </div>
    </div>
  );
}
