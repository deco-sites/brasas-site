import TextInput from "site/components/ui/TextInput.tsx";
import SelectInput from "site/components/ui/SelectInput.tsx";
import Checkbox from "site/components/ui/Checkbox.tsx";
import englishData from "site/data/english/home.json" with { type: "json" };
import portugueseData from "site/data/portuguese/home.json" with {
  type: "json",
};
import { invoke } from "../runtime.ts";
import { useEffect, useState } from "preact/hooks";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";
import { sendToRDStation } from "site/helpers/sendToRDStation.ts";
import Recaptcha from "site/helpers/recaptcha.tsx";
import { getCookie } from "../helpers/getCookie.ts";
import { setCookie } from "../helpers/setCookie.ts";
import { nameMask } from "../helpers/nameMaks.ts";
import { phoneMask } from "../helpers/phoneMask.ts";

export default function HomeForm(props) {
  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
    setLanguage(currentLang);
  }, []);

  const isPortuguese = language === "pt-BR";
  const data = isPortuguese ? portugueseData : englishData;

  const stateOptions = [
    { "name": "Rio de Janeiro", "value": "rj" },
    { "name": "Distrito Federal", "value": "df" },
    { "name": "Espírito Santo", "value": "es" },
    { "name": "Goiás", "value": "go" },
    { "name": "Minas Gerais", "value": "mg" },
    { "name": "São Paulo", "value": "sp" },
    { "name": "Sou Estrangeiro", "value": "foreigner" },
  ];

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, boolean>
  >({});
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [warnRecaptcha, setWarnRecaptcha] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedOptions((prev) => ({ ...prev, [value]: checked }));
    setError(""); // Limpa o erro quando o usuário seleciona
  };

  const sendData = `
  Nome: ${name}
  Email: ${email}
  Telefone: ${phone}
  Estado: ${state}
  Opções Selecionadas: ${Object.keys(selectedOptions)}
`;

  const sendDataToRD = {
    nome: name,
    email: email,
    telefone: phone,
    estado: state,
    opcoes_selecionadas: Object.keys(selectedOptions).join(", "),
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (recaptchaToken === null) {
      setWarnRecaptcha(true);
      return;
    }

    // Verifica se pelo menos uma opção foi selecionada
    if (!Object.values(selectedOptions).some((checked) => checked)) {
      setError("Selecione pelo menos uma opção de comunicação");
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

    setError("");
    setName("");
    setEmail("");
    setPhone("");
    setState("");
    setSelectedOptions({});
    setWarnRecaptcha(false);

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken(null);
    }
  };

  return (
    <>
      <section className="relative flex justify-center">
        <form
          onSubmit={(e) => handleSendEmail(e)}
          className="absolute z-50 -top-28 bg-white flex flex-col items-center gap-8 border-gray-100 rounded-2xl p-8 xl:min-w-[55rem]"
        >
          <span className="font-bold text-xl">
            {props.formTitle}
          </span>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-4">
            <TextInput
              label={props.nameInput.label}
              placeholder={props.nameInput.placeholder}
              value={name}
              setValue={setName}
              mask={nameMask}
              required
            />
            <TextInput
              label={props.telInput.label}
              placeholder={props.telInput.placeholder}
              value={phone}
              setValue={setPhone}
              required
              type="tel"
              maxLength={15}
              mask={phoneMask}
            />
            <TextInput
              label={props.emailInput.label}
              placeholder={props.emailInput.placeholder}
              value={email}
              setValue={setEmail}
              required
              type="email"
            />
            <SelectInput
              label={props.stateInput.label}
              placeholder={props.stateInput.placeholder}
              options={stateOptions}
              bgColor="gray"
              onChangeFunction={setState}
              value={state}
              required
            />
          </div>
          <div className="flex flex-col w-full items-start gap-2">
            <span className="text-sm font-semibold text-black-500 uppercase leading-6">
              {props.acceptanceTermText}
            </span>
            <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8">
              {data.HomeForm.CommunicationOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.name}
                  value={option.value}
                  checked={selectedOptions[option.value] || false}
                  onChange={(checked) =>
                    handleCheckboxChange(option.value, checked)}
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <Recaptcha
            setToken={setRecaptchaToken}
            setWidgetId={setRecaptchaWidgetId}
            warnRecaptcha={warnRecaptcha}
          />
          <button className="bg-blue-300 text-white hover:bg-white hover:text-blue-300 transition duration-300 border border-transparent hover:border-blue-300 rounded-lg w-full xl:w-fit px-6 py-3">
            {data.HomeForm.SendButtonText}
          </button>
        </form>
      </section>
      {isConfirmationModalOpen && (
        <SendingConfirmationModal
          onClose={() => setIsConfirmationModalOpen(false)}
        />
      )}
    </>
  );
}
