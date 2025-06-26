import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../../helpers/getCookie.ts";
import { setCookie } from "../../helpers/setCookie.ts";

export default function KidsCardsIsland(props) {
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
          <Image
            src={language === "pt-BR"
              ? "/kids-cards-pt.png"
              : "/kids-cards-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />
          <Image
            src={"/esquema_kids.png"}
            alt="Esquema Kids"
            className="lg:my-16 w-[45rem]"
          />
        </div>
      </div>
    </div>
  );
}
