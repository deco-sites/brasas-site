import IconUserFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-filled.tsx";
import InternationalizationController from "./InternationalizationController.tsx";

export default function ButtonsAndFlags({ TestButton, MyBrasasButton }) {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <div className="flex flex-col xl:flex-row gap-4">
        <a href={TestButton.link} target="_blank">
          <button className="whitespace-nowrap bg-red-300 text-white uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 hover:bg-white hover:text-red-300 transition duration-300">
            {TestButton.text}
          </button>
        </a>
        <a href={MyBrasasButton.link} target="_blank">
          <button className="notranslate whitespace-nowrap bg-white uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 flex w-full gap-2 items-center text-blue-900">
            <IconUserFilled className="w-6 h-6" />
            {MyBrasasButton.text}
          </button>
        </a>
      </div>
      <InternationalizationController />
    </div>
  );
}
