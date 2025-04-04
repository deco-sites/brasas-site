import IconUserFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-filled.tsx";
import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function ButtonsAndFlags({ TestButton, MyBrasasButton }) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <div className="flex flex-col xl:flex-row gap-4">
        <a>
          <button className="whitespace-nowrap bg-red-300 text-white uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 hover:bg-white hover:text-red-300 transition duration-300">
            {TestButton.textInPortuguese}
          </button>
        </a>
        <a className="">
          <button className="notranslate whitespace-nowrap bg-white uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 flex w-full gap-2 items-center text-blue-900">
            <IconUserFilled className="w-6 h-6" />
            {MyBrasasButton.textInPortuguese}
          </button>
        </a>
      </div>
      <div className="flex gap-4">
        <Image
          src={"/brasil.svg"}
          alt="Brasil Flag"
          width=""
          height=""
          className="w-8 h-8 cursor-pointer"
          onClick={() => selectedLanguage.value = "ptBr"}
        />

        <Image
          src={"/estados-unidos.svg"}
          alt="Brasil Flag"
          width=""
          height=""
          className="w-8 h-8 cursor-pointer"
          onClick={() => selectedLanguage.value = "enUs"}
        />
      </div>
    </div>
  );
}
