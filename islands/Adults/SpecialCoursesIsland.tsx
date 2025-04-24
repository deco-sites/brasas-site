import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function SpecialCoursesIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section
      className="flex flex-col items-center justify-center w-full"
      id="ancora-immersion-conversation"
    >
      <div className="max-w-[88.5rem] px-9 pb-16">
        <div className="flex justify-center pt-0 lg:pt-16 pb-24">
          <h2 className="font-black text-black-500 text-4xl leading-10">
            {selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish}
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-x-8 xl:gap-y-16 ">
          {props.specialCoursesCards.map((card, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center rounded-[50px] border border-blue-400 px-7 xl:px-16 py-20"
            >
              <div className="absolute bg-white flex items-center justify-center top-0 -translate-y-1/2 w-[15.7rem] h-[5.25rem] rounded-tr-xl rounded-bl-xl border border-blue-400">
                <Image
                  src={selectedLanguage.value === "ptBr"
                    ? card.logoInPortuguese
                    : card.logoInEnglish}
                  alt="Logo"
                  className="object-contain w-40"
                />
              </div>

              <span
                className="text-gray-500 font-normal text-xl"
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? card.descriptionInPortuguese
                    : card.descriptionInEnglish,
                }}
              >
              </span>
            </div>
          ))}

          <div className="relative flex justify-center items-center rounded-[50px] border border-blue-400 px-7 xl:px-16 py-20">
            <div className="absolute bg-white flex items-center justify-center top-0 -translate-y-1/2 w-[15.7rem] h-[5.25rem] rounded-tr-xl rounded-bl-xl border border-blue-400">
              <Image
                src={"/AdultsPage/brasas-exam-preparation.png"}
                alt="Logo"
                className="object-contain w-40"
              />
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <span
                className="text-gray-500 font-normal text-xl"
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? "Informe-se sobre o curso preparatório e aplicações dos testes."
                    : "Find out about the preparatory course and the test application.",
                }}
              >
              </span>
              <div className="flex gap-4">
                <Image
                  src="/AdultsPage/toeic.png"
                  alt="Logo"
                  className="object-contain"
                />
                <Image
                  src="/AdultsPage/toefl-itp.png"
                  alt="Logo"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {
            /*
          <div className="flex justify-center gap-4 items-center rounded-[50px] border border-blue-400 px-7 xl:px-16 py-20 -mt-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/AdultsPage/brasas_exam-preparation_toefl-itp.png"
                alt="Logo"
                className="object-contain"
              />
              <Image
                src="/AdultsPage/brasas_exam-preparation_toeic.png"
                alt="Logo"
                className="object-contain"
              />
            </div>

            <span
              className="text-gray-500 font-normal text-xl"
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? "Informe-se sobre o curso preparatório e aplicações dos testes."
                  : "Find out about the preparatory course and the test application.",
              }}
            >
            </span>
          </div>*/
          }
        </div>
      </div>
    </section>
  );
}
