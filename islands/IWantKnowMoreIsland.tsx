import { useSelectLanguage } from "site/sdk/language.ts";
import TextInput from "site/components/ui/TextInput.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/send.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";

export default function IWantKnowMoreIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div
      className={`bg-blue-900 w-full flex justify-center py-14 bg-[url('/i-want-know-more-mobile-bg.svg')] xl:bg-[url('/i-want-know-more-bg.svg')]`}
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-16 items-center max-w-[88.5rem] px-9">
        <h2 className="text-white font-black text-4xl leading-10">
          {selectedLanguage.value === "ptBr"
            ? "Quero saber mais"
            : "I want to know more"}
        </h2>

        <div className="flex flex-col gap-10 max-w-[38rem]">
          <div className="hidden xl:flex flex-col bg-white rounded-3xl p-8 gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-2xl text-black-500">
                {selectedLanguage.value === "ptBr"
                  ? "Para começar, descubra seu nível em nosso teste de nivelamento."
                  : "To start, discover your level with our placement test."}
              </span>
              <span className="text-black-500 text-base font-normal">
                {selectedLanguage.value === "ptBr"
                  ? "O nosso teste de nivelamento te ajuda a descobrir em que módulo você deve ingressar. Acesse o link abaixo e comece o seu teste agora mesmo!"
                  : "Our placement test helps you find out which module you should enroll in. Access the link below and start your test now!"}
              </span>
            </div>
            <button className="bg-white hover:bg-blue-300 flex items-center justify-center gap-2 rounded-lg text-blue-300 hover:text-white border border-blue-300  font-bold text-base py-3 transition duration-300">
              {selectedLanguage.value === "ptBr"
                ? "Acessar o teste"
                : "Access the test"}
              <IconArrowNarrowRight class="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4 font-black-500">
              <span className="font-bold text-4xl leading-10">
                {selectedLanguage.value === "ptBr"
                  ? "Solicite um contato"
                  : "Request a contact"}
              </span>
              <span className="text-base font-normal">
                {selectedLanguage.value === "ptBr"
                  ? "Deixe os seus dados abaixo e entraremos em contato para mais informações."
                  : "Leave your details below and we will contact you for more information."}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <TextInput label="nome" placeholder="Insira seu nome" />
              <TextInput label="e-mail" placeholder="Insira seu e-mail" />
              <TextInput label="telefone" placeholder="(dd) xxxxx-xxxx" />
            </div>

            <div className="flex items-start gap-2">
              <input className="mt-1 xl:mt-0" type="checkbox" />
              <span>
                {selectedLanguage.value === "ptBr"
                  ? "Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses."
                  : "I agree to receive communications and personalized offers based on my interests."}
              </span>
            </div>

            <button className="bg-blue-300 hover:bg-white flex items-center justify-center gap-2 rounded-lg text-white hover:text-blue-300 border border-opacity-0 hover:border-opacity-100 border-blue-300 font-bold text-base py-4 transition duration-300">
              <IconSend class="w-6 h-6" />
              {selectedLanguage.value === "ptBr"
                ? "Solicitar contato"
                : "Request contact"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
