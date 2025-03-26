import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-right.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import TextArea from "site/components/ui/Textarea.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";

export default function FormSectionIsland() {
  return (
    <section className="flex justify-center relative h-[72rem] xl:h-[46rem]">
      <div className="absolute -top-16">
        <div className="pb-24 max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row gap-12 xl:gap-28">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-lg">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-3xl text-black-500 leading-10">
                Contato
              </span>
              <span className="text-black-500">
                Para enviar uma mensagem, é necessário preencher os campos.
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="e-mail" placeholder="Insira seu e-mail" />
              <TextInput label="telefone" placeholder="(dd) xxxxx-xxxx" />
              <TextArea label="mensagem" placeholder="Insira sua mensagem" />
              <InputCheckbox text="Eu concordo em receber comunicações e ofertas personalizadas
                          de acordo com meus interesses" />
            </div>
            <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
              <IconSend class="w-6 h-6" />
              <span>Enviar</span>
            </button>
          </div>

          <div className="bg-white border h-fit border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-md">
            <div className="flex flex-col gap-4">
              <span className="text-black-500 font-semibold text-2xl leading-10">
                Quer falar com uma unidade específica?
              </span>
              <span className="text-black-500">
                Para informações sobre valor da mensalidade, horários e
                promoções, entre em contato direto com a unidade desejada.
              </span>
            </div>
            <a>
              <button className="flex justify-center py-3 bg-transparent hover:bg-blue-300 hover:text-white transition duration-300 gap-2 items-center w-full border text-blue-300 border-blue-300 rounded-lg">
                <span>Ver Unidades</span>
                <IconArrowRight class="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
