import { useSelectLanguage } from "site/sdk/language.ts";
import TextInput from "site/components/ui/TextInput.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";
import { useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";

export default function IWantKnowMoreIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: props.RecipientsEmailArr,
      CopyToArr: props.CopyToArr,
      subject: props.subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    sendToRDStation(sendDataToRD, "i-want-know-more-form");

    setName("");
    setEmail("");
    setPhone("");
    setAcceptedTerms(false);
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
          className="flex flex-col gap-16 items-center max-w-[88.5rem] px-9"
        >
          <h2 className="text-white font-black text-4xl leading-10 text-center">
            {selectedLanguage.value === "ptBr"
              ? "Quero saber mais"
              : "I want to know more"}
          </h2>

          <div className="flex flex-col gap-10 max-w-[38rem]">
            {props.rendersLeveling && (
              <div className="hidden xl:flex flex-col bg-white rounded-3xl p-8 gap-8">
                <div className="flex flex-col gap-4">
                  <span className="font-bold text-2xl text-black-500">
                    {selectedLanguage.value === "ptBr"
                      ? "Para começar, descubra seu nível em nosso teste de nivelamento."
                      : "To start, discover your level with our placement test."}
                  </span>
                  <span className="text-black-500 text-base font-normal">
                    {selectedLanguage.value === "ptBr"
                      ? "O nosso teste de nivelamento te ajuda a descobrir em que módulo você deve ingressar. Acesse o link abaixo e comece o seu teste agora mesmo!"
                      : "Our placement test helps you find out which module you should enroll in. Access the link below and start your test now!"}
                  </span>
                </div>
                <a
                  className="w-full"
                  href={props.testButtonLink}
                  target="_blank"
                >
                  <button className="bg-white w-full hover:bg-blue-300 flex items-center justify-center gap-2 rounded-lg text-blue-300 hover:text-white border border-blue-300  font-bold text-base py-3 transition duration-300">
                    {selectedLanguage.value === "ptBr"
                      ? "Acessar o teste"
                      : "Access the test"}
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
                  {selectedLanguage.value === "ptBr"
                    ? "Solicite um contato"
                    : "Request a contact"}
                </span>
                <span className="text-base font-normal">
                  {selectedLanguage.value === "ptBr"
                    ? "Deixe os seus dados abaixo e entraremos em contato para mais informações."
                    : "Leave your details below and we will contact you for more information."}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <TextInput
                  label={selectedLanguage.value === "ptBr" ? "Nome" : "Name"}
                  placeholder={selectedLanguage.value === "ptBr"
                    ? "Insira seu nome"
                    : "Enter your name"}
                  value={name}
                  setValue={setName}
                  required
                />
                <TextInput
                  label={selectedLanguage.value === "ptBr" ? "E-mail" : "Email"}
                  placeholder={selectedLanguage.value === "ptBr"
                    ? "Insira seu e-mail"
                    : "Enter your email"}
                  value={email}
                  setValue={setEmail}
                  required
                  type="email"
                />
                <TextInput
                  label={selectedLanguage.value === "ptBr"
                    ? "Telefone"
                    : "Phone"}
                  placeholder="(dd) xxxxx-xxxx"
                  value={phone}
                  setValue={setPhone}
                  required
                  type="tel"
                />
              </div>

              <InputCheckbox
                text={selectedLanguage.value === "ptBr"
                  ? "Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"
                  : "I agree to receive communications and personalized offers according to my interests"}
                value={acceptedTerms}
                setValue={setAcceptedTerms}
                required
              />

              <button className="bg-blue-300 hover:bg-white flex items-center justify-center gap-2 rounded-lg text-white hover:text-blue-300 border border-opacity-0 hover:border-opacity-100 border-blue-300 font-bold text-base py-4 transition duration-300">
                <IconSend class="w-6 h-6" />
                {selectedLanguage.value === "ptBr"
                  ? "Solicitar contato"
                  : "Request contact"}
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
