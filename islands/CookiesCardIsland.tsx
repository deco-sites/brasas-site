import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../helpers/getCookie.ts";
import { setCookie } from "../helpers/setCookie.ts";

export default function CookiesCardIsland() {
  const [isAccepted, setIsAccepted] = useState<boolean | null>(null);
  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
    setLanguage(currentLang);
  }, []);

  useEffect(() => {
    const savedPreference = localStorage.getItem("cookiesAccepted");

    if (savedPreference === "true" || savedPreference === "rejected") {
      setIsAccepted(true); // Já aceitou, não mostrar o modal
    } else {
      setIsAccepted(false); // Nunca aceitou ou recusou, então mostrar
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(true); // Esconder o modal permanentemente
  };

  const handleClose = () => {
    localStorage.setItem("cookiesAccepted", "rejected");
    setIsAccepted(null); // Esconder o modal agora, mas mostrar na próxima vez
  };

  if (isAccepted === true || isAccepted === null) return null; // Se aceitou ou está carregando, não mostra o modal

  return (
    <div
      className="fixed max-w-[32rem] bg-white rounded-xl shadow-2xl p-8 bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-6"
      style={{ zIndex: 99999 }}
    >
      <div className="flex gap-4 justify-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          className="w-12 h-12"
          width={48}
          height={48}
          alt="Cookie icon"
          loading="eager"
        />
        <span className="text-center font-bold">
          {language === "pt-BR"
            ? "Usamos cookies para garantir que oferecemos a melhor experiência em nosso site."
            : "We use cookies to ensure that we give you the best experience on our website."}
        </span>
      </div>
      <div className="flex justify-center gap-6">
        <button
          onClick={handleAccept}
          className="bg-blue-300 hover:bg-blue-950 transition-all duration-300 py-2 px-8 text-white rounded-lg"
        >
          {language === "pt-BR" ? "Aceitar" : "Accept"}
        </button>
        <button
          onClick={handleClose}
          className="bg-blue-300 hover:bg-blue-950 transition-all duration-300 py-2 px-8 text-white rounded-lg"
        >
          {language === "pt-BR" ? "Rejeitar" : "Reject"}
        </button>
      </div>
    </div>
  );
}
