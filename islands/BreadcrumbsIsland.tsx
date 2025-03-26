import { useSelectLanguage } from "site/sdk/language.ts";

export default function BreadcrumbsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex py-4 text-base font-medium text-black-500">
          <a href="/cursos">
            <span className="underline">
              {selectedLanguage.value === "ptBr" ? "Cursos" : "Courses"}
            </span>
          </a>
          <span className="">&nbsp;/&nbsp;</span>

          <span className="font-bold">
            {selectedLanguage.value === "ptBr"
              ? props.pageNameInPortuguese
              : props.pageNameInEnglish}
          </span>
        </div>
      </div>
    </div>
  );
}
