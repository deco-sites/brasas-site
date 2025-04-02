import TextInput from "site/components/ui/TextInput.tsx";
import SelectInput from "site/components/ui/SelectInput.tsx";
import Checkbox from "site/components/ui/Checkbox.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import englishData from "site/data/english/home.json" with { type: "json" };
import portugueseData from "site/data/portuguese/home.json" with {
  type: "json",
};
import { invoke } from "../runtime.ts";
import { useState } from "preact/hooks";
import SendingConfirmationModal from "site/components/ui/SendingConfirmationModal.tsx";

export default function HomeForm(
  { ptBrTitle, enUsTitle, RecipientsEmailArr, CopyToArr, subject },
) {
  const { selectedLanguage } = useSelectLanguage();
  const data = selectedLanguage.value === "ptBr" ? portugueseData : englishData;

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

  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Verifica se pelo menos uma opção foi selecionada
    if (!Object.values(selectedOptions).some((checked) => checked)) {
      setError("Selecione pelo menos uma opção de comunicação");
      return;
    }

    const emailSent = await invoke.site.actions.sendEmail({
      RecipientsEmailArr: RecipientsEmailArr,
      CopyToArr: CopyToArr,
      subject: subject,
      data: sendData,
    });

    if (emailSent === 200) setIsConfirmationModalOpen(true);

    //sendToRDStation(sendData, "home-page-form");

    setError("");
    setName("");
    setEmail("");
    setPhone("");
    setState("");
    setSelectedOptions({});
  };

  return (
    <>
      <section className="relative flex justify-center">
        <form
          onSubmit={(e) => handleSendEmail(e)}
          className="absolute z-50 -top-28 bg-white flex flex-col items-center gap-8 border-gray-100 rounded-2xl p-8 xl:min-w-[55rem]"
        >
          <span className="font-bold text-xl">
            {selectedLanguage.value === "ptBr" ? ptBrTitle : enUsTitle}
          </span>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-4">
            <TextInput
              label="nome completo"
              placeholder="Insira seu nome"
              value={name}
              setValue={setName}
              required
            />
            <TextInput
              label="celular/whatsapp"
              placeholder="(dd) xxxxx-xxxx"
              value={email}
              setValue={setEmail}
              required
            />
            <TextInput
              label="e-mail"
              placeholder="Insira seu e-mail"
              value={phone}
              setValue={setPhone}
              required
            />
            <SelectInput
              label="Estado"
              placeholder="Selecione um estado"
              options={stateOptions}
              bgColor="gray"
              onChangeFunction={setState}
              value={state} // Passa o valor atual
              required // Torna o campo obrigatório
            />
          </div>
          <div className="flex flex-col w-full items-start gap-2">
            <span className="text-sm font-semibold text-black-500 uppercase leading-6">
              {data.HomeForm.AcceptTerm}
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
