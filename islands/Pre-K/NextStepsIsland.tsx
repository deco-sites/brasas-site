import { useEffect, useRef, useState } from "preact/hooks";
import { getCookie } from "../../helpers/getCookie.ts";
import { setCookie } from "../../helpers/setCookie.ts";

export default function NextStepsIsland(props) {
  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
    setLanguage(currentLang);
  }, []);

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
  }, [props.title, language]);

  return (
    <div className="w-full flex flex-col xl:flex-row gap:4 xl:gap-10 justify-center items-center pb-12">
      <div className="flex justify-end xl:w-1/2 text-center">
        <span className="text-3xl font-semibold font-black-500">
          {props.nextStepTitle}
        </span>
      </div>
      <div className="flex justify-start xl:w-1/2 text-center xl:text-left">
        <span
          ref={spanRef}
          className="text-xl font-black-500 max-w-64"
          dangerouslySetInnerHTML={{ __html: props.nextStepText }}
        >
        </span>
      </div>
    </div>
  );
}
