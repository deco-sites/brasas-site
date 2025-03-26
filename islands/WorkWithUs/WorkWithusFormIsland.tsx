import TextArea from "site/components/ui/Textarea.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconCloudUpload from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/cloud-upload.tsx";

export default function WorkWithUsFormIsland() {
  return (
    <section className="flex justify-center relative h-[72rem] xl:h-[50rem]">
      <div className="absolute -top-16">
        <div className="pb-24 max-w-[88.5rem] px-9 w-full flex flex-col xl:flex-row">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-8 max-w-[45rem]">
            <div className="flex flex-col gap-4">
              <span className="text-black-500 font-bold text-2xl leading-10">
                Faça parte do time BRASAS
              </span>
              <span>
                Preencha o formulário com as suas informações e entraremos em
                contato.
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="nome" placeholder="Insira seu nome" />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                  Currículo
                </label>
                <div className="flex cursor-pointer gap-2 justify-center items-center py-3 border border-dashed border-blue-500 rounded-lg">
                  <IconCloudUpload class="w-6 h-6 text-blue-300" />
                  <span className="text-gray-500 font-normal text-base">
                    Selecione seu arquivo
                  </span>
                </div>
              </div>
            </div>
            <TextArea
              label="comentários adicionais"
              placeholder="Insira seu comentário"
            />
            <InputCheckbox text="Eu concordo em enviar meus dados pessoais para análise em um possível processo seletivo para vaga." />
            <InputCheckbox text="Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses" />
            <button className="bg-gray-500 hover:bg-blue-300 transition duration-300 text-white rounded-lg w-full py-4 flex gap-2 justify-center items-center">
              <IconSend class="w-6 h-6" />
              <span>Enviar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
