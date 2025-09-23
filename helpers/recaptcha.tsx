import { useEffect, useRef, useState } from "preact/hooks";
import { getCookie } from "./getCookie.ts";
import { setCookie } from "./setCookie.ts";
import Loading from "../components/ui/Loading.tsx";

export default function Recaptcha({ setToken, setWidgetId, warnRecaptcha }) {
  const recaptchaRef = useRef(null);
  const hasRendered = useRef(false);
  const SITE_KEY = "6LfS4tIrAAAAAHUK7amd0qQ9SWpGEK38XmgN5ZYD";
  const [isLoading, setIsLoading] = useState(true);
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
    const loadReCaptchaScript = () => {
      if (document.getElementById("recaptcha-script")) return;

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.id = "recaptcha-script";
      document.body.appendChild(script);
      setIsLoading(false);
    };

    loadReCaptchaScript();

    const interval = setInterval(() => {
      if (
        window.grecaptcha && window.grecaptcha.render && recaptchaRef.current &&
        !hasRendered.current
      ) {
        hasRendered.current = true;
        const widgetId = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: SITE_KEY,
          callback: (token) => {
            setToken(token);
          },
          "expired-callback": () => {
            setToken(null);
          },
        });

        if (setWidgetId) setWidgetId(widgetId);
        clearInterval(interval);
      }
    }, 200);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-[78px]">
      {isLoading
        ? <Loading />
        : <div ref={recaptchaRef} className="g-recaptcha" />}

      {warnRecaptcha && (
        <span className="text-xs -my-4 text-center text-red-300">
          {language === "pt-BR"
            ? "Marque a caixa acima para continuar"
            : "Mark the box above to continue"}
        </span>
      )}
    </div>
  );
}
