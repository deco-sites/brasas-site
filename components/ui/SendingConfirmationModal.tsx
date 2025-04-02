import { useEffect, useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";
import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx";

export default function SendingConfirmationModal({ onClose }) {
  const { selectedLanguage } = useSelectLanguage();

  useEffect(() => {
    // Desabilita o scroll quando o modal é aberto
    document.body.style.overflow = "hidden";

    // Função de limpeza (reabilita o scroll quando o modal fecha)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Array de dependências vazio = executa apenas no mount/unmount

  return (
    <div
      className={`flex absolute top-0 left-0 h-screen w-full items-center justify-center`}
      style={{ zIndex: 999999 }}
    >
      <div
        className="fixed z-50 top-0 left-0 h-[100vh] w-[100vw] bg-[#00000060] flex items-center justify-center"
        onClose={onClose}
      >
      </div>
      <div className="z-50 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-lg ">
        <div className="flex relative justify-center bg-blue-900 py-4 px-8 text-white">
          <span className="text-center">
            {selectedLanguage.value === "ptBr"
              ? "E-mail enviado com sucesso"
              : "Email sent successfully"}
          </span>
          <IconX
            class=" absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="bg-white p-8">
          <span className="text-black-500">
            {selectedLanguage.value === "ptBr"
              ? "Em breve a equipe BRASAS entrará em contato."
              : "The BRASAS team will contact you shortly."}
          </span>
        </div>
      </div>
    </div>
  );
}
