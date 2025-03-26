import { useSelectLanguage } from "site/sdk/language.ts";
import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";

export default function BecomeAFranchiseeFormIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex justify-center">
      <div className="relative max-w-[88.5rem] px-9 flex flex-col xl:flex-row gap-6 xl:gap-8 pb-28">
        <div className="flex flex-col gap-4 text-black-500 max-w-[34rem] mt-10">
          <span
            className="font-semibold text-xl leading-10"
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? props.titleInPortuguese
                : props.titleInEnglish,
            }}
          >
          </span>
          <span
            className=""
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? props.textInPortuguese
                : props.textInEnglish,
            }}
          >
          </span>
        </div>

        <div className="border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-[34rem]">
          <div className="flex flex-col gap-4 text-black-500">
            <span className="font-bold text-2xl leading-10">
              Entre em contato!
            </span>
            <span className="text-base font-normal">
              Para enviar uma mensagem, é necessário preencher os campos.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <TextInput label="nome" placeholder="insira seu nome" />
            <TextInput label="e-mail" placeholder="insira seu e-mail" />
            <TextInput label="telefone" placeholder="(dd) xxxxx-xxxx" />
            <TextArea label="mensagem" placeholder="insira sua mensagem" />
            <InputCheckbox text="Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses" />
          </div>
          <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
            <IconSend class="w-6 h-6" />
            <span>Enviar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
