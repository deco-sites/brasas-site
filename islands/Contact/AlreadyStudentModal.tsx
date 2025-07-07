import { useEffect } from "preact/hooks";

export default function AlreadyStudentModal({ onClose }) {
  useEffect(() => {
    // Desabilita o scroll quando o modal é aberto
    document.body.style.overflow = "hidden";

    // Função de limpeza (reabilita o scroll quando o modal fecha)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md text-center space-y-4">
        <h2 className="text-xl font-semibold text-red-500">Atenção</h2>
        <p className="text-black">
          Identificamos que você já é aluno BRASAS, por favor use a{" "}
          <a
            href="https://id.layers.digital/sign-in/select-account?community=sophia-4375-25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            área de atendimento
          </a>.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-300 text-white hover:bg-white hover:text-blue-300 transition duration-300 border border-transparent hover:border-blue-300 rounded-lg w-full xl:w-fit px-6 py-3"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
