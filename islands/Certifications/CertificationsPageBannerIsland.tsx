import { useSelectLanguage } from "site/sdk/language.ts";

export default function CertificationsPageBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section
      className={`flex items-center justify-center w-full bg-orange-300 min-h-[25rem]`}
      style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="normal-case flex flex-col gap-6 items-center justify-center w-[45rem] max-w-full px-9 pt-12 pb-10">
        <h1 className="text-white font-black text-5xl lg:text-7xl leading-[4.5rem] text-center">
          {selectedLanguage.value === "ptBr"
            ? props.titleInPortuguese
            : props.titleInEnglish}
        </h1>

        <p className="text-white text-2xl font-normal leading-8 text-center">
          {selectedLanguage.value === "ptBr"
            ? props.subtitleInPortuguese
            : props.subtitleInEnglish}
        </p>

        {props.hasNotice && (
          <p
            className="text-white text-center"
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? `Curso disponível nas modalidades presencial e <i>online</i>`
                : "Course available in In-Person and Online formats",
            }}
          >
          </p>
        )}
      </div>
    </section>
  );
}
