import Image from "apps/website/components/Image.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye.tsx";
import { useState } from "preact/hooks";
import IconEyeClosed from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/eye-closed.tsx";

export default function ReferAndEarnFormIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const [showingPassword, setShowingPassword] = useState(false);

  const handleChangeVisibility = () => {
    console.log("trocou a visibilidade");
    setShowingPassword(!showingPassword);
  };

  return (
    <section className="flex justify-center w-full pb-16 xl:pb-24">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center xl:flex-row justify-center gap-20">
        <div className="flex flex-col items-center max-w-[27.6rem]">
          <div className="flex flex-col items-start gap-10 text-black-500">
            <span className="text-center xl:text-start font-bold text-3xl">
              O seu amigo(a) #fulano# indicou você para um curso de inglês no
              BRASAS.
            </span>
            <span className="text-center xl:text-start font-normal text-base">
              Preencha o formulário ao lado para saber mais e iniciar agora
              mesmo!
            </span>
          </div>
          <Image
            src={props.image}
            className="hidden xl:flex mt-20 w-[19.68rem] h-[22.4rem]"
          />
        </div>

        <div className="xl:-mt-32 flex flex-col gap-8 border border-gray-100 rounded-2xl p-8 max-w-[33.8rem]">
          <div className="flex flex-col gap-4 text-black-500">
            <span className="font-bold text-4xl">Vamos começar?</span>
            <span className="text-base font-normal">
              Deixe os seus dados abaixo e entraremos em contato para mais
              informações.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <TextInput label="Nome" placeholder="Insira seu nome" />
            <TextInput label="E-mail" placeholder="Insira seu e-mail" />
            <TextInput label="Telefone" placeholder="Insira seu telefone" />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black-500 uppercase leading-6">
                Código de indicação
              </label>
              <div className="flex items-center w-full bg-gray-100 p-3 border border-gray-500 focus:ring-2 focus:ring-gray-500 rounded-lg text-gray-700 ">
                <input
                  type={showingPassword ? "text" : "password"}
                  placeholder="ABC123-EXEMPLO"
                  className="w-full bg-gray-100 outline-none h-full placeholder:text-black-500 focus:outline-none "
                />
                {showingPassword
                  ? (
                    <IconEyeClosed
                      className="w-6 h-6 text-blue-300 cursor-pointer"
                      onClick={handleChangeVisibility}
                    />
                  )
                  : (
                    <IconEye
                      className="w-6 h-6 text-blue-300 cursor-pointer"
                      onClick={handleChangeVisibility}
                    />
                  )}
              </div>
            </div>

            <InputCheckbox
              text={"Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"}
            />
          </div>
          <button className="bg-blue-300 hover:bg-white border border-blue-300 border-opacity-0 hover:border-opacity-100 text-white hover:text-blue-300 transition-all duration-300 py-4 rounded-lg flex items-center justify-center gap-2">
            <IconSend class="w-4 h-4" />
            <span>Solicitar contato</span>
          </button>
        </div>
      </div>
    </section>
  );
}
