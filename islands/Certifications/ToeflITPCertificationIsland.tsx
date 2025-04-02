import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import CertificationTitle from "site/components/CertificationTitle.tsx";
import PreparatoryCourseTitle from "site/components/PreparatoryCourseTitle.tsx";
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx";

export default function ToeflITPCertificationIsland(props) {
  const textStyle = { WebkitTextStroke: "1px #001E60" };
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col xl:flex-row w-full justify-between pt-10 pb-5 max-w-[88.5rem] px-9">
        <CertificationTitle />
        <div className="flex flex-col xl:w-1/2 xl:max-w-[35rem]">
          <span className="text-center xl:text-start text-orange-300 font-bold text-4xl leading-8 mb-6">
            {props.title}
          </span>
          <div className="flex flex-col gap-6">
            {props.items.map((item, index) => (
              <div className="flex gap-4">
                <Image src={item.icon} className="w-8 h-8" />
                <span
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: selectedLanguage.value === "ptBr"
                      ? item.textInPortuguese
                      : item.textInEnglish,
                  }}
                >
                </span>
              </div>
            ))}
          </div>
        </div>

        <PreparatoryCourseTitle />
        <div className="flex justify-center xl:w-1/2 xl:max-w-[23.75rem]">
          <div className="flex flex-col items-center border border-orange-300 rounded-[50px] p-8 h-fit">
            <Image src={props.card.logo} className="w-52 h-24 object-contain" />
            <div className="flex gap-4">
              <IconCheck class="w-8 h-8 text-orange-300 font-bold" />
              <div className="flex flex-col">
                <span
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: selectedLanguage.value === "ptBr"
                      ? props.card.modalityInPortuguese
                      : props.card.modalityInEnglish,
                  }}
                >
                </span>
                <span
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: selectedLanguage.value === "ptBr"
                      ? props.card.sessionsInPortuguese
                      : props.card.sessionsInEnglish,
                  }}
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
