import { useEffect, useRef, useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function Recaptcha({ setToken, setWidgetId, warnRecaptcha }) {
  const recaptchaRef = useRef(null);
  const hasRendered = useRef(false);
  const SITE_KEY = "6LeFE0QrAAAAAE5gmXmBrSaslOMF7Ftnsg0naINk";
  const { selectedLanguage } = useSelectLanguage();
  const [isLoading, setIsLoading] = useState(true);

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
        ? (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-300" />
        )
        : <div ref={recaptchaRef} className="g-recaptcha" />}

      {warnRecaptcha && (
        <span className="text-xs -my-4 text-center text-red-300">
          {selectedLanguage.value === "ptBr"
            ? "Marque a caixa acima para continuar"
            : "Mark the box above to continue"}
        </span>
      )}
    </div>
  );
}
