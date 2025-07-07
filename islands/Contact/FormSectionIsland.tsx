import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-right.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import { useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";
import Recaptcha from "site/helpers/recaptcha.tsx";
import AlreadyStudentModal from "./AlreadyStudentModal.tsx";
import Loading from "../../components/ui/Loading.tsx";

export default function FormSectionIsland(props) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    if (recaptchaToken === null) {
      setWarnRecaptcha(true);
      return;
    }

    try {
      console.log("Token aki:", props.accessToken);
      // Verificar se o e-mail pertence a um aluno
      const studentResponse = await fetch(
        `https://apitest.brasas.com/sophia/student/search?email=${
          encodeURIComponent(email)
        }`,
        {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
        },
      );

      if (studentResponse.status === 200) {
        // Já é aluno
        console.log("Já é aluno");
        setIsStudent(true);
        setLoading(false);
        return; // Impede envio
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: props.RecipientsEmailArr,
      CopyToArr: props.CopyToArr,
      subject: props.subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);
    setLoading(false);

    sendToRDStation(sendDataToRD, "contact-page-form");

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

  return (
    <>
      <section className="flex justify-center relative h-[80rem] xl:h-[52rem] ">
        <div className="absolute -top-16">
          <div className="pb-28 max-w-[88.5rem] mx-auto px-4 w-full flex flex-col xl:flex-row gap-12 xl:gap-28">
            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-lg"
            >
              <div className="flex flex-col gap-4">
                <span className="font-bold text-3xl text-black-500 leading-10">
                  {props.formTitle}
                </span>
                <span className="text-black-500">
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
                  text={props.acceptanceTermText}
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
                {loading ? <Loading /> : (
                  <>
                    <IconSend class="w-6 h-6" />
                    <span>
                      {props.sendButtonText}
                    </span>
                  </>
                )}
              </button>
            </form>

            <div className="bg-white border h-fit border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-md">
              <div className="flex flex-col gap-4">
                <span className="text-black-500 font-semibold text-2xl leading-10">
                  {props.branchBoxTitle}
                </span>
                <span className="text-black-500">
                  {props.branchBoxDescription}
                </span>
              </div>
              <a href="/unidades">
                <button className="flex justify-center py-3 bg-transparent hover:bg-blue-300 hover:text-white transition duration-300 gap-2 items-center w-full border text-blue-300 border-blue-300 rounded-lg">
                  <span>
                    {props.branchBoxButtonText}
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
      {isStudent && <AlreadyStudentModal onClose={() => setIsStudent(false)} />}
    </>
  );
}
