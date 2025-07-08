import TextInput from "site/components/ui/TextInput.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";
import { useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";
import Recaptcha from "site/helpers/recaptcha.tsx";

export default function IWantKnowMoreIsland(props) {
  const [formId, setFormId] = useState("default-form-id");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [warnRecaptcha, setWarnRecaptcha] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
`;

  const sendDataToRD = {
    nome: name,
    email: email,
    telefone: phone,
  };

  useEffect(() => {
    const pathname = window.location.pathname.replace(/\//g, "-").replace(
      /^-|-$/g,
      "",
    );
    const id = pathname || "home";
    setFormId(id);
  }, []);

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

    sendToRDStation(sendDataToRD, `i-want-know-more-form-${formId}`);

    setName("");
    setEmail("");
    setPhone("");
    setAcceptedTerms(false);
    setWarnRecaptcha(false);

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken(null);
    }
  };

  return (
    <>
      <div
        className={`bg-blue-900 w-full flex justify-center py-14 bg-[url('/i-want-know-more-mobile-bg.svg')] xl:bg-[url('/i-want-know-more-bg.svg')]`}
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          id="quero-saber-mais"
          className="flex flex-col gap-16 items-center max-w-full px-9"
        >
          <h2 className="text-white font-black text-4xl leading-10 text-center">
            {props.title}
          </h2>

          <div className="flex flex-col gap-10 max-w-[38rem]">
            {props.rendersLeveling && (
              <div className="hidden xl:flex flex-col bg-white rounded-3xl p-8 gap-8">
                <div className="flex flex-col gap-4">
                  <span className="font-bold text-2xl text-black-500">
                    {props.levelingTitle}
                  </span>
                  <span className="text-black-500 text-base font-normal">
                    {props.levelingSubtitle}
                  </span>
                </div>
                <a
                  className="w-full"
                  href={props.levelingButtonLink}
                  target="_blank"
                >
                  <button className="bg-white w-full hover:bg-blue-300 flex items-center justify-center gap-2 rounded-lg text-blue-300 hover:text-white border border-blue-300  font-bold text-base py-3 transition duration-300">
                    {props.levelingButtonText}
                    <IconArrowNarrowRight class="w-6 h-6" />
                  </button>
                </a>
              </div>
            )}

            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="bg-white rounded-2xl p-8 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4 font-black-500">
                <span className="font-bold text-4xl leading-10">
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
              </div>

              <InputCheckbox
                text={props.acceptanceTermText}
                value={acceptedTerms}
                setValue={setAcceptedTerms}
                required
              />

              <Recaptcha
                setToken={setRecaptchaToken}
                setWidgetId={setRecaptchaWidgetId}
                warnRecaptcha={warnRecaptcha}
              />

              <button className="bg-blue-300 hover:bg-white flex items-center justify-center gap-2 rounded-lg text-white hover:text-blue-300 border border-opacity-0 hover:border-opacity-100 border-blue-300 font-bold text-base py-4 transition duration-300">
                <IconSend class="w-6 h-6" />
                {props.sendButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
      {isConfirmationModalOpen && (
        <SendingConfirmationModal
          onClose={() => setIsConfirmationModalOpen(false)}
        />
      )}
    </>
  );
}
