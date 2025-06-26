import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../helpers/getCookie.ts";
import { setCookie } from "../helpers/setCookie.ts";

export default function CertificationTitle() {
  //const textStyle = { WebkitTextStroke: "1px #001E60" };

  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
    setLanguage(currentLang);
  }, []);

  return (
    <div className="flex justify-center xl:hidden w-full px-9 pt-10 pb-6">
      <div className="flex justify-center xl:w-1/2">
        <h2 className="font-bold text-2xl leading-8 text-blue-900 uppercase text-center" //style={textStyle}
        >
          {language === "pt-BR" ? "Certificação" : "Certification"}
        </h2>
      </div>
    </div>
  );
}
