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
`;

  const sendToRDStation = () => {
    const data = {
      home_name: formData.get("know_more[nomecontato]"),
      email: formData.get("know_more[emailcontato]"),
      home_telefone: formData.get("know_more[telefonecontato]"),
      home_acordo: formData.get("know_more[acordo]") ? "Sim" : "Não",
      identificador: "queromaisform",
      token_rdstation: "69e11690d06eb320c8a8c4f7caa4c345",
      form_url: window.location.href,
      page_title: document.title,
      client_id: "5de4681e-5816-4db9-b635-6b0aa95b268f",
      traffic_source:
        "encoded_eyJmaXJzdF9zZXNzaW9uIjp7InZhbHVlIjoiKG5vbmUpIiwiZXh0cmFfcGFyYW1zIjp7fX0sImN1cnJlbnRfc2Vzc2lvbiI6eyJ2YWx1ZSI6Imh0dHBzOi8vYXBwLnJkc3RhdGlvbi5jb20uYnIvY29uZmlndXJhY29lcy9hbmFsaXNlLWUtbW9uaXRvcmFtZW50byIsImV4dHJhX3BhcmFtcyI6e319LCJjcmVhdGVkX2F0IjoxNzMwODE4OTQ2MzI0fQ==",
    };

    // Envia os dados como JSON usando fetch
    fetch("https://www.rdstation.com.br/api/1.3/form-integrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Converte o objeto data para uma string JSON
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(
          "Formulário enviado com sucesso para o RD Station:",
          result,
        );
        // Aqui, você pode adicionar uma ação de sucesso, como redirecionamento ou mensagem
      })
      .catch((error) =>
        console.error("Erro ao enviar o formulário para o RD Station:", error)
      );
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Verifica se pelo menos uma opção foi selecionada
    if (!Object.values(selectedOptions).some((checked) => checked)) {
      setError("Selecione pelo menos uma opção de comunicação");
      return;
    }

    await invoke.site.actions.sendEmail({
      RecipientsEmailArr: RecipientsEmailArr,
      CopyToArr: CopyToArr,
      subject: subject,
      data: sendData,
    });

    setError("");
    setName("");
    setEmail("");
    setPhone("");
    setState("");
    setSelectedOptions({});
  };

  return (
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
  );
}
