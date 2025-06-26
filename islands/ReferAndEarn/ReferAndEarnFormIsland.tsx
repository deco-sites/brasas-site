import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye.tsx";
import { useEffect, useState } from "preact/hooks";
import IconEyeClosed from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye-closed.tsx";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { invoke } from "../../runtime.ts";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";
import Recaptcha from "site/helpers/recaptcha.tsx";

export default function ReferAndEarnFormIsland(props) {
  const [showingPassword, setShowingPassword] = useState(false);

  const handleChangeVisibility = () => {
    setShowingPassword(!showingPassword);
  };

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loadedCode, setLoadedCode] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [warnRecaptcha, setWarnRecaptcha] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const code = params.get("code");
    if (code) {
      setLoadedCode(code);
    }
  }, []);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Código: ${referralCode}
`;

  const sendDataToRD = {
    nome: name,
    email: email,
    telefone: phone,
    codigo: referralCode,
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

    sendToRDStation(sendDataToRD, "home-page-form");

    setName("");
    setEmail("");
    setPhone("");
    setReferralCode("");
    setAcceptedTerms(false);
    setWarnRecaptcha(false);

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken(null);
    }
  };

  return (
    <>
      <section className="flex justify-center w-full py-16 xl:py-24">
        <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center xl:flex-row justify-center gap-20">
          <div className="flex flex-col items-center max-w-[27.6rem]">
            <div className="flex flex-col items-start gap-10 text-black-500">
              <span className="text-center w-full xl:text-start font-bold text-3xl uppercase">
                {props.title}
              </span>
              <span
                className="text-center xl:text-start font-normal text-xl"
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              >
              </span>

              <div className="flex justify-center gap-2 text-yellow-500 font-bold text-xl rounded-full w-full py-4 bg-purple-500">
                {props.highlightedWords.map((word, index) => (
                  <>
                    <span>
                      {word}
                    </span>
                    {index !== props.highlightedWords.length - 1 && (
                      <span className="text-white">&gt;&gt;</span>
                    )}
                  </>
                ))}
              </div>

              <span
                className="text-center xl:text-start font-normal text-xs"
                dangerouslySetInnerHTML={{ __html: props.regulationText }}
              >
              </span>
            </div>
          </div>

          <form
            onSubmit={(e) => handleSendEmail(e)}
            className=" flex flex-col gap-8 border border-gray-100 rounded-2xl p-8 max-w-[33.8rem]"
          >
            <div className="flex flex-col gap-4 text-black-500">
              <span className="font-bold text-4xl">
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
              />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                  {props.referralCodeInput.label}
                </label>
                <div className="flex items-center w-full bg-gray-100 p-3 border border-gray-500 focus:ring-2 focus:ring-gray-500 rounded-lg text-gray-700 ">
                  <input
                    type={showingPassword ? "text" : "password"}
                    placeholder={props.referralCodeInput.placeholder}
                    className="w-full bg-gray-100 outline-none h-full placeholder:text-black-500 focus:outline-none "
                    value={loadedCode !== null ? loadedCode : name}
                    onChange={(e) => setReferralCode(e.target.value)}
                    required
                  />
                  {showingPassword
                    ? (
                      <IconEyeClosed
                        className="w-6 h-6 text-blue-300 cursor-pointer"
                        onClick={handleChangeVisibility}
                      />
                    )
                    : (
                      <IconEye
                        className="w-6 h-6 text-blue-300 cursor-pointer"
                        onClick={handleChangeVisibility}
                      />
                    )}
                </div>
              </div>

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
            <button className="bg-blue-300 hover:bg-white border border-blue-300 border-opacity-0 hover:border-opacity-100 text-white hover:text-blue-300 transition-all duration-300 py-4 rounded-lg flex items-center justify-center gap-2">
              <IconSend class="w-4 h-4" />
              <span>
                {props.sendButtonText}
              </span>
            </button>
          </form>
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
