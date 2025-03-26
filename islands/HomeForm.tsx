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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");

  const sendData = `
  Nome: Teste
  Email: teste@teste.com
  Telefone: 123456789
  Estado: RJ
`;

  const handleSendEmail = async (e) => {
    e.preventDefault();
    await invoke.site.actions.sendEmail({
      RecipientsEmailArr: RecipientsEmailArr,
      CopyToArr: CopyToArr,
      subject: subject,
      data: sendData,
    });
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
          {data.HomeForm.TextInputs.map((input) => (
            <TextInput
              key={input.label}
              label={input.label}
              placeholder={input.placeholder}
              value={name}
              setValue={setName}
            />
          ))}
          {data.HomeForm.SelectInputs.map((input) => (
            <SelectInput
              key={input.label}
              label={input.label}
              placeholder={input.placeholder}
              options={input.options}
              bgColor="gray"
            />
          ))}
        </div>
        <div className="flex flex-col w-full items-start gap-2">
          <span className="text-sm font-semibold text-black-500 uppercase leading-6">
            {data.HomeForm.AcceptTerm}
          </span>
          <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8">
            {data.HomeForm.CommunicationOptions.map((option) => (
              <Checkbox
                key={option.name}
                label={option.name}
                value={option.value}
              />
            ))}
          </div>
        </div>
        <button className="bg-blue-300 text-white hover:bg-white hover:text-blue-300 transition duration-300 border border-transparent hover:border-blue-300 rounded-lg w-full xl:w-fit px-6 py-3">
          {data.HomeForm.SendButtonText}
        </button>
      </form>
    </section>
  );
}
