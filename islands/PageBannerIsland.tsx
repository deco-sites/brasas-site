import { useSelectLanguage } from "site/sdk/language.ts";

export default function PageBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  const bgColors = {
    "blue-300": "bg-blue-300",
    "blue-200": "bg-blue-200",
    "blue-500": "bg-blue-500",
    "blue-900": "bg-blue-900",
    "yellow-400": "bg-yellow-400",
    "yellow-500": "bg-yellow-500",
    "green-100": "bg-green-100",
    "red-300": "bg-red-300",
    "orange-300": "bg-orange-300",
  };

  return (
    <section
      className={`flex items-center justify-center ${
        bgColors[props.bgColor]
      } h-[25rem]`}
      style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[45rem]">
        <h1 className="capitalize text-white font-black text-7xl leading-[4.5rem] text-center">
          {selectedLanguage.value === "ptBr"
            ? props.titleInPortuguese
            : props.titleInEnglish}
        </h1>

        {props.descriptionInPortuguese
          ? (
            <p className="text-white text-2xl font-normal leading-8 text-center">
              {selectedLanguage.value === "ptBr"
                ? props.descriptionInPortuguese
                : props.descriptionInEnglish}
            </p>
          )
          : ("")}

        {props.hasNotice && (
          <p className="text-white">
            {selectedLanguage.value === "ptBr"
              ? "Curso disponível nas modalidades Presencial e Online"
              : "Course available in In-Person and Online formats"}
          </p>
        )}
      </div>
    </section>
  );
}
