import TextArea from "site/components/ui/Textarea.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconCloudUpload from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/cloud-upload.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import SelectInput from "site/components/ui/SelectInput.tsx";
import { useRef, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";

export default function WorkWithUsFormIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const fileInputRef = useRef(null);

  const desiredAreaOptionsPtBr = [
    { name: "Administrativo", value: "Administrativo" },
    { name: "BI", value: "BI" },
    { name: "Comercial", value: "Comercial" },
    { name: "Compras", value: "Compras" },
    { name: "Financeiro", value: "Financeiro" },
    { name: "Marketing", value: "Marketing" },
    { name: "Pedagógico", value: "Pedagógico" },
    { name: "RH", value: "RH" },
    { name: "TI", value: "TI" },
  ];

  const desiredAreaOptionsEnUS = [
    { name: "Administrative", value: "Administrativo" },
    { name: "BI", value: "BI" },
    { name: "Commercial", value: "Comercial" },
    { name: "Purchasing", value: "Compras" },
    { name: "Finance", value: "Financeiro" },
    { name: "Marketing", value: "Marketing" },
    { name: "Pedagogical", value: "Pedagógico" },
    { name: "Human Resources", value: "RH" },
    { name: "IT", value: "TI" },
  ];

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [desiredArea, setDesiredArea] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [additionalComments, setAdditionalComments] = useState("");

  const [acceptedSendData, setAcceptedSendData] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Cidade: ${city}
  Área Desejada: ${desiredArea}
  Comentários Adicionais: ${additionalComments}
`;

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedFile({
          name: file.name,
          type: file.type,
          content: reader.result.split(",")[1], // Pega o conteúdo base64
        });
      };
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: props.RecipientsEmailArr,
      CopyToArr: props.CopyToArr,
      subject: props.subject,
      attachment: selectedFile,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    //sendToRDStation(sendData, "work-with-us-form");

    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setDesiredArea("");
    setAcceptedSendData(false);
    setAcceptedTerms(false);
    setSelectedFile(null);
    setAdditionalComments("");
  };

  return (
    <>
      <section className="flex justify-center relative h-[82rem] sm:h-[75rem] md:h-[54rem]">
        <div className="absolute -top-16">
          <div className="pb-24 max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row">
            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-[45rem]"
            >
              <div className="flex flex-col gap-4">
                <span className="text-black-500 font-bold text-2xl leading-10">
                  {selectedLanguage.value === "ptBr"
                    ? "Faça parte do time BRASAS"
                    : "Be part of the BRASAS team"}
                </span>
                <span>
                  {selectedLanguage.value === "ptBr"
                    ? "Preencha o formulário com as suas informações e entraremos em contato."
                    : "Fill out the form with your information and we will contact you."}
                </span>
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4">
                <TextInput
                  label={selectedLanguage.value === "ptBr" ? "nome" : "name"}
                  placeholder={selectedLanguage.value === "ptBr"
                    ? "Insira seu nome"
                    : "Enter your name"}
                  value={name}
                  setValue={setName}
                  required
                />
                <TextInput
                  label={selectedLanguage.value === "ptBr" ? "e-mail" : "email"}
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
                    ? "telefone"
                    : "phone"}
                  placeholder="(dd) xxxxx-xxxx"
                  value={phone}
                  setValue={setPhone}
                  required
                  type="tel"
                />
                <TextInput
                  label={selectedLanguage.value === "ptBr" ? "cidade" : "city"}
                  placeholder={selectedLanguage.value === "ptBr"
                    ? "Insira sua cidade"
                    : "Enter your city"}
                  value={city}
                  setValue={setCity}
                  required
                />
                <SelectInput
                  label={selectedLanguage.value === "ptBr"
                    ? "área desejada"
                    : "desired area"}
                  placeholder={selectedLanguage.value === "ptBr"
                    ? "Selecione a área desejada"
                    : "Select the desired area"}
                  options={desiredAreaOptionsPtBr}
                  bgColor="gray"
                  value={desiredArea}
                  onChangeFunction={setDesiredArea}
                  required
                />

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                    {selectedLanguage.value === "ptBr" ? "Currículo" : "resume"}
                  </label>
                  <div className="relative">
                    <div className="flex cursor-pointer gap-2 justify-center items-center py-3 border border-dashed border-blue-500 rounded-lg">
                      <IconCloudUpload class="w-6 h-6 text-blue-300" />
                      <span className="text-gray-500 font-normal text-base">
                        {selectedFile !== null
                          ? selectedFile.name
                          : selectedLanguage.value === "ptBr"
                          ? "Selecione seu arquivo"
                          : "Select your file"}
                      </span>
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".doc,.docx,.pdf"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <TextArea
                label={selectedLanguage.value === "ptBr"
                  ? "comentários adicionais"
                  : "additional comments"}
                placeholder={selectedLanguage.value === "ptBr"
                  ? "Insira seu comentário"
                  : "Enter your comment"}
                value={additionalComments}
                setValue={setAdditionalComments}
                required
              />
              <InputCheckbox
                text={selectedLanguage.value === "ptBr"
                  ? "Eu concordo em enviar meus dados pessoais para análise em um possível processo seletivo para vaga."
                  : "I agree to send my personal data for analysis in a possible selection process for a vacancy."}
                value={acceptedSendData}
                setValue={setAcceptedSendData}
                required
              />
              <InputCheckbox
                text={selectedLanguage.value === "ptBr"
                  ? "Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"
                  : "I agree to receive personalized communications and offers according to my interests"}
                value={acceptedTerms}
                setValue={setAcceptedTerms}
                required
              />
              <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
                <IconSend class="w-6 h-6" />
                <span>
                  {selectedLanguage.value === "ptBr" ? "Enviar" : "Submit"}
                </span>
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
