import { useSelectLanguage } from "site/sdk/language.ts";

export default function CertificationTitle() {
  //const textStyle = { WebkitTextStroke: "1px #001E60" };
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="flex justify-center xl:hidden w-full px-9 pt-10 pb-6">
      <div className="flex justify-center xl:w-1/2">
        <h2 className="font-bold text-2xl leading-8 text-blue-900 uppercase text-center" //style={textStyle}
        >
          {selectedLanguage.value === "ptBr" ? "Certificação" : "Certification"}
        </h2>
      </div>
    </div>
  );
}
