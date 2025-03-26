import { useSelectLanguage } from "site/sdk/language.ts";

export default function NextStepsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="w-full flex flex-col xl:flex-row gap:4 xl:gap-10 justify-center items-center pb-12">
      <div className="flex justify-end xl:w-1/2 text-center">
        <span className="text-3xl font-semibold font-black-500">
          {selectedLanguage.value === "ptBr"
            ? props.nextStepTitleInPortuguese
            : props.nextStepTitleInEnglish}
        </span>
      </div>
      <div className="flex justify-start xl:w-1/2 text-center xl:text-left">
        <span className="text-xl font-black-500 max-w-64">
          {selectedLanguage.value === "ptBr"
            ? props.nextStepTextInPortuguese
            : props.nextStepTextInEnglish}
        </span>
      </div>
    </div>
  );
}
