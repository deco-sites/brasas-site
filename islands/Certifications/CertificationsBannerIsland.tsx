import { useSelectLanguage } from "site/sdk/language.ts";

export default function CertificationsBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section
      className="bg-orange-300 px-9 h-96 xl:h-[15.25rem] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          `url('/CertificationsPage/certifications-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-8">
        {props.items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <img
              className="w-8 h-8 object-contain"
              src={item.icon}
              alt={item.titleInEnglish}
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">
                {selectedLanguage.value === "ptBr"
                  ? item.titleInPortuguese
                  : item.titleInEnglish}
              </span>
              <span className="text-base">
                {selectedLanguage.value === "ptBr"
                  ? item.subtitleInPortuguese
                  : item.subtitleInEnglish}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
