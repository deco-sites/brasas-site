import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../../helpers/getCookie.ts";
import { setCookie } from "../../helpers/setCookie.ts";

export default function AdultsCardsIsland(props) {
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
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            >
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center py-5 lg:pb-11">
          <Image
            src={language === "pt-BR"
              ? "/AdultsPage/adults-1-pt.png"
              : "/AdultsPage/adults-1-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />

          <div className="flex flex-col gap-6 py-5 max-w-[37rem]">
            <div className="flex flex-col items-center lg:flex-row gap-6">
              <div className="flex gap-4">
                <Image
                  src="/AdultsPage/signal-bars.svg"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-blue-900 font-black text-xl">
                  {props.leftItem}
                </span>
              </div>
              <div className="flex gap-4 lg:max-w-[40%]">
                <Image
                  src="/AdultsPage/circled-dollar.svg"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-blue-900 font-black text-xl">
                  {props.rightItem}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-blue-900 text-xs">
              <span className="text-center">
                {props.firstDescriptionPhrase}
              </span>
              <span className="text-center">
                {props.secondDescriptionPhrase}
              </span>
            </div>
          </div>
          {
            /*
          <Image
            src={language === "ptBr"
              ? "/AdultsPage/adults-2-pt.png"
              : "/AdultsPage/adults-2-en.png"}
            alt="Kids Cards"
            className="w-full max-w-[38.5rem]"
          />*/
          }
          <Image
            src={"/AdultsPage/esquema_adults.png"}
            alt="Esquema Adults"
            className="w-[32rem] h-[32rem] lg:my-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
