import { useSelectLanguage } from "site/sdk/language.ts";

export default function TermsOfUseIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-[88.5rem] px-9 py-8 lg:py-14">
        <div className="flex justify-end">
          <span>
            {selectedLanguage.value === "ptBr"
              ? props.lastUpdateDateInPortuguese
              : props.lastUpdateDateInEnglish}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          {props.textBlocks.map((textBlock, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <h2 className="text-black-500 font-bold text-2xl leading-10">
                {selectedLanguage.value === "ptBr"
                  ? textBlock.titleInPortuguese
                  : textBlock.titleInEnglish}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? textBlock.textInPortuguese
                    : textBlock.textInEnglish,
                }}
              >
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
