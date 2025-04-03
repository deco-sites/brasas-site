import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-right.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import { useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";

export default function FormSectionIsland(
  { RecipientsEmailArr, CopyToArr, subject },
) {
  const { selectedLanguage } = useSelectLanguage();

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
      RecipientsEmailArr: RecipientsEmailArr,
      CopyToArr: CopyToArr,
      subject: subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    //sendToRDStation(sendData, "contact-page-form");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAcceptedTerms(false);
  };

  return (
    <>
      <section className="flex justify-center relative h-[72rem] xl:h-[46rem]">
        <div className="absolute -top-16">
          <div className="pb-24 max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row gap-12 xl:gap-28">
            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-lg"
            >
              <div className="flex flex-col gap-4">
                <span className="font-bold text-3xl text-black-500 leading-10">
                  {selectedLanguage.value === "ptBr" ? "Contato" : "Contact"}
                </span>
                <span className="text-black-500">
                  {selectedLanguage.value === "ptBr"
                    ? "Para enviar uma mensagem, é necessário preencher os campos."
                    : "To send a message, you must fill in the fields."}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <TextInput
                  label="nome"
                  placeholder="Insira seu nome"
                  value={name}
                  setValue={setName}
                  required
                />
                <TextInput
                  label="e-mail"
                  placeholder="Insira seu e-mail"
                  value={email}
                  setValue={setEmail}
                  required
                  type="email"
                />
                <TextInput
                  label="telefone"
                  placeholder="(dd) xxxxx-xxxx"
                  value={phone}
                  setValue={setPhone}
                  required
                  type="tel"
                />
                <TextArea
                  label="mensagem"
                  placeholder="Insira sua mensagem"
                  value={message}
                  setValue={setMessage}
                  required
                />
                <InputCheckbox
                  text={selectedLanguage.value === "ptBr"
                    ? "Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"
                    : "I agree to receive communications and personalized offers according to my interests"}
                  value={acceptedTerms}
                  setValue={setAcceptedTerms}
                  required
                />
              </div>
              <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
                <IconSend class="w-6 h-6" />
                <span>
                  {selectedLanguage.value === "ptBr" ? "Enviar" : "Submit"}
                </span>
              </button>
            </form>

            <div className="bg-white border h-fit border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-md">
              <div className="flex flex-col gap-4">
                <span className="text-black-500 font-semibold text-2xl leading-10">
                  {selectedLanguage.value === "ptBr"
                    ? "Quer falar com uma unidade específica?"
                    : "Want to speak to a specific unit?"}
                </span>
                <span className="text-black-500">
                  {selectedLanguage.value === "ptBr"
                    ? "Para informações sobre valor da mensalidade, horários e promoções, entre em contato direto com a unidade desejada."
                    : "For information on monthly fee, hours and promotions, please contact the desired unit directly."}
                </span>
              </div>
              <a href="/unidades">
                <button className="flex justify-center py-3 bg-transparent hover:bg-blue-300 hover:text-white transition duration-300 gap-2 items-center w-full border text-blue-300 border-blue-300 rounded-lg">
                  <span>
                    {selectedLanguage.value === "ptBr"
                      ? "Ver Unidades"
                      : "See Branches"}
                  </span>
                  <IconArrowRight class="w-4 h-4" />
                </button>
              </a>
            </div>
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
