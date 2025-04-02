import { useEffect, useRef } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function NextStepsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      const links = spanRef.current.querySelectorAll("a");
      links.forEach((link) => {
        link.classList.add("text-blue-500", "hover:text-blue-700", "underline");
        link.target = "_self";
        link.rel = "noopener noreferrer";
      });
    }
  }, [props.titleInPortuguese, props.titleInEnglish, selectedLanguage.value]);

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
        <span
          ref={spanRef}
          className="text-xl font-black-500 max-w-64"
          dangerouslySetInnerHTML={{
            __html: selectedLanguage.value === "ptBr"
              ? props.nextStepTextInPortuguese
              : props.nextStepTextInEnglish,
          }}
        >
        </span>
      </div>
    </div>
  );
}
