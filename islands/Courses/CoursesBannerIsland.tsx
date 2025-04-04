import { useSelectLanguage } from "site/sdk/language.ts";

export default function CoursesBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section
      className=" flex items-center justify-center bg-blue-300 min-h-[25rem]"
      style={{
        backgroundImage: `url('/courses-banner-bg.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[45rem] max-w-full px-9 pt-12 pb-10">
        <h1 className="capitalize text-white font-black text-7xl leading-[4.5rem]">
          {selectedLanguage.value === "ptBr"
            ? props.titleInPortuguese
            : props.titleInEnglish}
        </h1>
        <p className="text-white text-2xl font-normal leading-8 text-center">
          {selectedLanguage.value === "ptBr"
            ? props.descriptionInPortuguese
            : props.descriptionInEnglish}
        </p>
      </div>
    </section>
  );
}
