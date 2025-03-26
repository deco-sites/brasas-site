import { useSelectLanguage } from "site/sdk/language.ts";

export default function PartnersCarouselIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="bg-gray-100/10 flex flex-col gap-20 items-center justify-center h-[22rem]">
      <h2 className="text-center text-2xl font-bold text-blue-500">
        {selectedLanguage.value === "ptBr"
          ? props.titleInPortuguese
          : props.titleInEnglish}
      </h2>
      <div className="overflow-hidden flex justify-center relative w-full">
        <div
          className="flex gap-12 whitespace-nowrap w-max overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {props.partnersLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.image}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
