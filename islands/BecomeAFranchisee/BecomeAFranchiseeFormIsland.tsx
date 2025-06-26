import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import { useEffect, useRef, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";
import Recaptcha from "site/helpers/recaptcha.tsx";
import { getCookie } from "../../helpers/getCookie.ts";
import { setCookie } from "../../helpers/setCookie.ts";

export default function BecomeAFranchiseeFormIsland(props) {
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

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [warnRecaptcha, setWarnRecaptcha] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Mensagem: ${message}
`;

  const sendDataToRD = {
    nome: name,
    email: email,
    telefone: phone,
    mensagem: message,
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (recaptchaToken === null) {
      setWarnRecaptcha(true);
      return;
    }

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: props.RecipientsEmailArr,
      CopyToArr: props.CopyToArr,
      subject: props.subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    sendToRDStation(sendDataToRD, "become-a-franchisee-page-form");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAcceptedTerms(false);
    setWarnRecaptcha(false);

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken(null);
    }
  };

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
    <>
      <section className="flex justify-center w-full">
        <div className="max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row justify-center gap-6 xl:gap-8 pb-28 xl:pb-[28rem]">
          {/* Div de conteúdo (esquerda) */}
          <div className="flex flex-col gap-4 text-black-500 xl:max-w-[34rem] mt-10 w-full xl:w-1/2">
            <span
              className="font-semibold text-2xl leading-10"
              dangerouslySetInnerHTML={{ __html: props.title }}
            />
            <span
              ref={spanRef}
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          </div>

          {/* Div do formulário (direita) */}
          <div className="relative w-full xl:w-1/2">
            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="xl:absolute xl:-top-8 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 w-full"
            >
              <div className="flex flex-col gap-4 text-black-500">
                <span className="font-bold text-3xl leading-10">
                  {props.formTitle}
                </span>
                <span className="text-base font-normal">
                  {props.formSubtitle}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <TextInput
                  label={props.nameInput.label}
                  placeholder={props.nameInput.placeholder}
                  value={name}
                  setValue={setName}
                  required
                />
                <TextInput
                  label={props.emailInput.label}
                  placeholder={props.emailInput.placeholder}
                  value={email}
                  setValue={setEmail}
                  required
                  type="email"
                />
                <TextInput
                  label={props.telInput.label}
                  placeholder={props.telInput.placeholder}
                  value={phone}
                  setValue={setPhone}
                  required
                  type="tel"
                />
                <TextArea
                  label={props.messageInput.label}
                  placeholder={props.messageInput.placeholder}
                  value={message}
                  setValue={setMessage}
                  required
                />
                <InputCheckbox
                  text={props.acceptanceText}
                  value={acceptedTerms}
                  setValue={setAcceptedTerms}
                  required
                />
              </div>

              <Recaptcha
                setToken={setRecaptchaToken}
                setWidgetId={setRecaptchaWidgetId}
                warnRecaptcha={warnRecaptcha}
              />

              <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
                <IconSend class="w-6 h-6" />
                <span>{props.buttonText}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      {isConfirmationModalOpen && (
        <SendingConfirmationModal
          onClose={() => setIsConfirmationModalOpen(false)}
        />
      )}
    </>
  );
}
