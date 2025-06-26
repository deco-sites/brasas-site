import TextArea from "site/components/ui/Textarea.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconCloudUpload from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/cloud-upload.tsx";
import SelectInput from "site/components/ui/SelectInput.tsx";
import { useRef, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import Recaptcha from "site/helpers/recaptcha.tsx";

export default function WorkWithUsFormIsland(props) {
  const fileInputRef = useRef(null);

  const desiredAreaOptions = props.desiredAreas.map((area) => ({
    name: area.name,
    value: area.value,
  }));

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
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [warnRecaptcha, setWarnRecaptcha] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

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

    if (recaptchaToken === null) {
      setWarnRecaptcha(true);
      return;
    }

    const selectedEmail = props.desiredAreas.find(
      (area) => area.value === desiredArea,
    );

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: selectedEmail.RecipientsEmailArr,
      CopyToArr: selectedEmail.CopyToArr,
      subject: props.subject,
      attachment: selectedFile,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setDesiredArea("");
    setAcceptedSendData(false);
    setAcceptedTerms(false);
    setSelectedFile(null);
    setAdditionalComments("");
    setWarnRecaptcha(false);

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken(null);
    }
  };

  return (
    <>
      <section className="flex justify-center relative h-[86rem] sm:h-[80rem] md:h-[60rem]">
        <div className="absolute -top-16">
          <div className="pb-24 max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row">
            <form
              onSubmit={(e) => handleSendEmail(e)}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-[45rem]"
            >
              <div className="flex flex-col gap-4">
                <span className="text-black-500 font-bold text-2xl leading-10">
                  {props.formTitle}
                </span>
                <span>
                  {props.formSubtitle}
                </span>
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4">
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
                <TextInput
                  label={props.cityInput.label}
                  placeholder={props.cityInput.placeholder}
                  value={city}
                  setValue={setCity}
                  required
                />
                <SelectInput
                  label={props.desiredAreaInput.label}
                  placeholder={props.desiredAreaInput.placeholder}
                  options={desiredAreaOptions}
                  bgColor="gray"
                  value={desiredArea}
                  onChangeFunction={setDesiredArea}
                  required
                />

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                    {props.curriculumInput.label}
                  </label>
                  <div className="relative">
                    <div className="flex cursor-pointer gap-2 justify-center items-center py-3 border border-dashed border-blue-500 rounded-lg">
                      <IconCloudUpload class="w-6 h-6 text-blue-300" />
                      <span className="text-gray-500 font-normal text-base">
                        {selectedFile !== null
                          ? selectedFile.name
                          : props.curriculumInput.placeholder}
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
                label={props.additionalCommentsInput.label}
                placeholder={props.additionalCommentsInput.placeholder}
                value={additionalComments}
                setValue={setAdditionalComments}
                required
              />
              <InputCheckbox
                text={props.acceptanceSendText}
                value={acceptedSendData}
                setValue={setAcceptedSendData}
                required
              />
              <InputCheckbox
                text={props.acceptanceReceiveText}
                value={acceptedTerms}
                setValue={setAcceptedTerms}
                required
              />
              <Recaptcha
                setToken={setRecaptchaToken}
                setWidgetId={setRecaptchaWidgetId}
                warnRecaptcha={warnRecaptcha}
              />
              <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
                <IconSend class="w-6 h-6" />
                <span>
                  {props.buttonText}
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
