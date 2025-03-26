import Image from "apps/website/components/Image.tsx";
import TextInput from "site/components/ui/TextInput.tsx";
import InputCheckbox from "site/components/ui/InputCheckbox.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function ReferAndEarnFormIsland(props) {

    const {selectedLanguage} = useSelectLanguage();

  return (
    <section className="flex justify-center w-full">
      <div className="w-full max-w-[88.5rem] px-9 flex">

        <div className="flex flex-col">
            <span>O seu amigo(a) #fulano# indicou você para um curso de inglês no BRASAS.</span>
            <span>Preencha o formulário ao lado para saber mais e iniciar agora mesmo!</span>
            <Image src={props.image} className="" />
        </div>

        <div className="flex flex-col gap-8 border border-gray-100 rounded-2xl p-8">
            <div className="flex flex-col gap-4">
                <span>Vamos começar?</span>
                <span>Deixe os seus dados abaixo e entraremos em contato para mais informações.</span>
            </div>
            <div className="flex flex-col gap-4">
                <TextInput label="Nome" placeholder="Insira seu nome" />
                <TextInput label="E-mail" placeholder="Insira seu e-mail" />
                <TextInput label="Telefone" placeholder="Insira seu telefone" />
                <TextInput label="Código de indicação" placeholder="ABC123-EXEMPLO" />
                <InputCheckbox text={"Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses"} />
            </div>
            <button>Solicitar contato</button>
        </div>
      </div>
    </section>
  );
}
