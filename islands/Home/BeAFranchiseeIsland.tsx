import Image from "apps/website/components/Image.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-narrow-right.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function BeAFranchiseeIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full h-[45rem]">
        <div
          className="flex items-center justify-center sm:w-1/2 bg-blue-500 py-12 px-8 sm:p-0"
          style={{
            backgroundImage:
              `url('/be-a-franchisee-bg-left.svg'), url('/be-a-franchisee-bg-right.svg')`,
            backgroundPosition: "0 115%, 100% 0",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "auto, auto",
          }}
        >
          <div className="flex gap-6">
            <div className="flex items-start">
              <Image src={"/blue-hat.svg"} alt="" className="my-2" />
            </div>
            <div className="flex flex-col text-white">
              <span
                className="font-black leading-10 text-4xl mb-4"
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? props.titleInPortuguese
                    : props.titleInEnglish,
                }}
              >
              </span>
              <span
                className="text-2xl font-medium leading-8 mb-8"
                dangerouslySetInnerHTML={{
                  __html: selectedLanguage.value === "ptBr"
                    ? props.descriptionInPortuguese
                    : props.descriptionInEnglish,
                }}
              >
              </span>
              <a href={props.link}>
                <button className="flex items-center justify-center gap-2 bg-white text-blue-300 hover:bg-blue-200 transition duration-300 rounded-lg px-4 py-3 w-fit">
                  <span className="font-bold text-base">
                    {selectedLanguage.value === "ptBr"
                      ? props.buttonTextInPortuguese
                      : props.buttonTextInEnglish}
                  </span>
                  <IconArrowNarrowRight class="w-6 h-6" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <Image
          className="sm:w-1/2 object-cover"
          src={props.sectionImage}
          alt="Franqueado"
        />
      </div>
    </>
  );
}
