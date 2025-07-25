import Image from "apps/website/components/Image.tsx";
import IconSquareCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/square-check-filled.tsx";

export default function PFFCardsIsland(props) {
  return (
    <section className="w-full flex justify-center py-14">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center gap-20">
        <span
          className="text-2xl text-justify"
          dangerouslySetInnerHTML={{ __html: props.text }}
        >
        </span>

        <div className="flex flex-col w-full items-start gap-6">
          {props.items.map((item, index) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <IconSquareCheckFilled class="w-8 h-8 text-green-200 shrink-0" />
              {/*<span className="w-6 h-6 text-green-200 shrink-0">✅</span>*/}
              <span className="text-2xl">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center w-full">
          <span
            className="font-normal text-2xl sm:text-[40px] leading-10"
            dangerouslySetInnerHTML={{ __html: props.bottomText }}
          >
          </span>
          <Image
            src={props.image}
            className="w-[21.18rem] h-[23.75rem] sm:w-[15.8rem] sm:h-[17.7rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
