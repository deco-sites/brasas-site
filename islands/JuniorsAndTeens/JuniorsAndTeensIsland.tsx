import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../../helpers/getCookie.ts";
import { setCookie } from "../../helpers/setCookie.ts";

export default function JuniorsAndTeensIsland(props) {
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
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex w-full justify-center">
          <div className="py-8 max-w-[48rem]">
            <span
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: props.text }}
            >
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-5 pb-11">
          <div className="flex flex-wrap w-full justify-center gap-8">
            <Image
              src={language === "pt-BR"
                ? "/JuniorsAndTeensPage/juniors-and-teens-1-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-1-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem] object-contain"
            />
            <Image
              src={language === "pt-BR"
                ? "/JuniorsAndTeensPage/juniors-and-teens-2-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-2-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem] object-contain"
            />
          </div>
          <Image
            src={"/JuniorsAndTeensPage/esquema_jr.png"}
            alt="Esquema Jr and Teens"
            className="lg:my-16 w-[65rem]"
          />
          <a href="/certificacoes#toeicjr" target="_self">
            <Image
              src={language === "pt-BR"
                ? "/JuniorsAndTeensPage/juniors-and-teens-3-pt.png"
                : "/JuniorsAndTeensPage/juniors-and-teens-3-en.png"}
              alt="Kids Cards"
              className="w-[33.75rem]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
