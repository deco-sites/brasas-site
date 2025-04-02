import Image from "apps/website/components/Image.tsx";
import IconMoodSmile from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mood-smile.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function PaymentsSectionIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex justify-center pb-14">
      <div className="px-5 max-w-[88.5rem] xl:px-9">
        <div className="border border-red-400 rounded-[35px] max-w-[55rem] p-5 flex flex-col xl:flex-row gap-5 justify-between text-blue-500">
          {props.items.map((item, index) => (
            <div key={index} className="flex gap-2 px-4">
              <Image src="blue-happy-face.svg" className="w-8 h-8" />

              <div className="flex flex-col">
                <h3 className="text-xl font-bold">
                  {selectedLanguage.value === "ptBr"
                    ? item.titleInPortuguese
                    : item.titleInEnglish}
                </h3>
                <p className="text-sm">
                  {selectedLanguage.value === "ptBr"
                    ? item.subTitleInPortuguese
                    : item.subTitleInEnglish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
