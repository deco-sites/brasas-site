import { useSelectLanguage } from "site/sdk/language.ts";
import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import { useEffect, useRef, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";

export default function BecomeAFranchiseeFormIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  const spanRef = useRef(null);

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Mensagem: ${message}
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

    //sendToRDStation(sendData, "become-a-franchisee-page-form");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAcceptedTerms(false);
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
  }, [props.titleInPortuguese, props.titleInEnglish, selectedLanguage.value]);

  return (
    <>
      <section className="flex justify-center w-full">
        <div className="max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row justify-center gap-6 xl:gap-8 pb-28 xl:pb-96">
          {/* Div de conteúdo (esquerda) */}
          <div className="flex flex-col gap-4 text-black-500 xl:max-w-[34rem] mt-10 w-full xl:w-1/2">
            <span
              className="font-semibold text-2xl leading-10"
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? props.titleInPortuguese
                  : props.titleInEnglish,
              }}
            />
            <span
              ref={spanRef}
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? props.textInPortuguese
                  : props.textInEnglish,
              }}
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
                  Entre em contato!
                </span>
                <span className="text-base font-normal">
                  Para enviar uma mensagem, é necessário preencher os campos.
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <TextInput
                  label="nome"
                  placeholder="insira seu nome"
                  value={name}
                  setValue={setName}
                  required
                />
                <TextInput
                  label="e-mail"
                  placeholder="insira seu e-mail"
                  value={email}
                  setValue={setEmail}
                  required
                />
                <TextInput
                  label="telefone"
                  placeholder="(dd) xxxxx-xxxx"
                  value={phone}
                  setValue={setPhone}
                  required
                />
                <TextArea
                  label="mensagem"
                  placeholder="insira sua mensagem"
                  value={message}
                  setValue={setMessage}
                  required
                />
                <InputCheckbox
                  text="Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"
                  value={acceptedTerms}
                  setValue={setAcceptedTerms}
                  required
                />
              </div>
              <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
                <IconSend class="w-6 h-6" />
                <span>Enviar</span>
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
