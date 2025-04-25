import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function CardsGrid({ cards }) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div className="w-full flex flex-wrap justify-center gap-x-4 gap-y-6 xl:grid-cols-4">
      {cards.map((card) => (
        <a
          href={card.link}
          className="flex flex-col justify-between bg-white h-[16.75rem] w-[20.25rem] overflow-hidden rounded-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-105"
        >
          <div className="flex flex-col items-center gap-2 text-blue-900 p-4 h-[36.36%]">
            <span className="leading-8 font-black text-xl text-center">
              {selectedLanguage.value === "ptBr"
                ? card.portugueseTitle
                : card.englishTitle}
            </span>
            <span
              className="leading-6 font-medium font-base"
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.value === "ptBr"
                  ? card.portugueseDescription
                  : card.englishDescription,
              }}
            >
            </span>
          </div>
          <div className="relative max-w-full h-[63.64%]">
            <Image
              src={card.image}
              alt=""
              className="absolute bottom-0 rounded-b-2xl w-full h-auto object-cover"
              style={{ overflowClipMargin: "content-box" }}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
