import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import IconSquareCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/square-check-filled.tsx";

export default function PFFCardsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="w-full flex justify-center py-14">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center gap-20">
        <span
          className=""
          dangerouslySetInnerHTML={{
            __html: selectedLanguage.value === "ptBr"
              ? props.textInPortuguese
              : props.textInEnglish,
          }}
        >
        </span>

        <div className="flex flex-col xl:flex-row gap-28">
          <div className="flex flex-col gap-8">
            {props.items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-green-200 py-7 px-8 flex gap-2"
              >
                <IconSquareCheckFilled class="w-6 h-6 text-green-200" />
                <span>
                  {selectedLanguage.value === "ptBr"
                    ? item.textInPortuguese
                    : item.textInEnglish}
                </span>
              </div>
            ))}

            <span
              className="font-normal text-2xl"
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? props.bottomTextInPortuguese
                  : props.bottomTextInEnglish,
              }}
            >
            </span>
          </div>
          <Image src={props.image} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
