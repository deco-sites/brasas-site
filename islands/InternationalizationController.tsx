import Image from "apps/website/components/Image.tsx";
import { useEffect } from "preact/hooks";
import { getCookie } from "../helpers/getCookie.ts";
import { setCookie } from "../helpers/setCookie.ts";

const InternationalizationController = () => {
  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
  }, []);

  return (
    <div className="flex gap-4">
      <Image
        src="/brasil.svg"
        alt="Brasil Flag"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setCookie("pt-BR")}
      />
      <Image
        src="/estados-unidos.svg"
        alt="USA Flag"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setCookie("en-US")}
      />
    </div>
  );
};

export default InternationalizationController;
