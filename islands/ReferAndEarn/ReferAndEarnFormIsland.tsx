import Image from "apps/website/components/Image.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye.tsx";
import { useState } from "preact/hooks";
import IconEyeClosed from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye-closed.tsx";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { invoke } from "../../runtime.ts";

export default function ReferAndEarnFormIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const [showingPassword, setShowingPassword] = useState(false);

  const handleChangeVisibility = () => {
    console.log("trocou a visibilidade");
    setShowingPassword(!showingPassword);
  };

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Código: ${referralCode}
`;

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: props.RecipientsEmailArr,
      CopyToArr: props.CopyToArr,
      subject: props.subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    //sendToRDStation(sendData, "home-page-form");

    setName("");
    setEmail("");
    setPhone("");
    setReferralCode("");
    setAcceptedTerms(false);
  };

  return (
    <>
      <section className="flex justify-center w-full pb-16 xl:pb-24">
        <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center xl:flex-row justify-center gap-20">
          <div className="flex flex-col items-center max-w-[27.6rem]">
            <div className="flex flex-col items-start gap-10 text-black-500">
              <span className="text-center xl:text-start font-bold text-3xl">
                {selectedLanguage.value === "ptBr"
                  ? props.titleInPortuguese
                  : props.titleInEnglish}
              </span>
              <span className="text-center xl:text-start font-normal text-base">
                {selectedLanguage.value === "ptBr"
                  ? props.subtitleInPortuguese
                  : props.subtitleInEnglish}
              </span>
            </div>
            <Image
              src={props.image}
              className="hidden xl:flex mt-20 w-[19.68rem] h-[22.4rem]"
            />
          </div>

          <form
            onSubmit={(e) => handleSendEmail(e)}
            className="xl:-mt-32 flex flex-col gap-8 border border-gray-100 rounded-2xl p-8 max-w-[33.8rem]"
          >
            <div className="flex flex-col gap-4 text-black-500">
              <span className="font-bold text-4xl">
                {selectedLanguage.value === "ptBr"
                  ? props.formTitleInPortuguese
                  : props.formTitleInEnglish}
              </span>
              <span className="text-base font-normal">
                {selectedLanguage.value === "ptBr"
                  ? props.formSubtitleInPortuguese
                  : props.formSubtitleInEnglish}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <TextInput
                label="Nome"
                placeholder={selectedLanguage.value === "ptBr"
                  ? "Insira seu nome"
                  : "Enter your name"}
                value={name}
                setValue={setName}
                required
              />
              <TextInput
                label="E-mail"
                placeholder={selectedLanguage.value === "ptBr"
                  ? "Insira seu e-mail"
                  : "Enter your email"}
                value={email}
                setValue={setEmail}
                required
              />
              <TextInput
                label="Telefone"
                placeholder={selectedLanguage.value === "ptBr"
                  ? "Insira seu telefone"
                  : "Enter your phone"}
                value={phone}
                setValue={setPhone}
                required
              />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                  {selectedLanguage.value === "ptBr"
                    ? "Código de indicação"
                    : "Referral code"}
                </label>
                <div className="flex items-center w-full bg-gray-100 p-3 border border-gray-500 focus:ring-2 focus:ring-gray-500 rounded-lg text-gray-700 ">
                  <input
                    type={showingPassword ? "text" : "password"}
                    placeholder={selectedLanguage.value === "ptBr"
                      ? "ABC123-EXEMPLO"
                      : "ABC123-EXAMPLE"}
                    className="w-full bg-gray-100 outline-none h-full placeholder:text-black-500 focus:outline-none "
                    value={name}
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
                text={selectedLanguage.value === "ptBr"
                  ? "Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"
                  : "I agree to receive communications and personalized offers according to my interests"}
                value={acceptedTerms}
                setValue={setAcceptedTerms}
                required
              />
            </div>
            <button className="bg-blue-300 hover:bg-white border border-blue-300 border-opacity-0 hover:border-opacity-100 text-white hover:text-blue-300 transition-all duration-300 py-4 rounded-lg flex items-center justify-center gap-2">
              <IconSend class="w-4 h-4" />
              <span>
                {selectedLanguage.value === "ptBr"
                  ? "Solicitar contato"
                  : "Request contact"}
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
