import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function SpecialCoursesIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="max-w-[88.5rem] px-9 py-16">
        <div className="flex justify-center py-16">
          <h2 className="font-black text-black-500 text-4xl leading-10">
            {selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish}
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 xl:gap-4 ">
          {props.specialCoursesCards.map((card, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center rounded-[50px] border border-blue-400 px-7 xl:px-16 py-20"
            >
              <div className="absolute bg-white flex items-center justify-center top-0 -translate-y-1/2 w-[15.7rem] h-[5.25rem] rounded-tr-xl rounded-bl-xl border border-blue-400">
                <Image
                  src={card.logo}
                  alt="Logo"
                  className="object-contain"
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
        </div>
      </div>
    </section>
  );
}
