import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function ReferAndEarnBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="relative w-full h-[608px] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <clipPath id="sectionClip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.24 C1,0.24 0.855,0.525 0.743,0.602 C0.619,0.687 0.537,0.518 0.413,0.602 C0.314,0.669 0.283,0.841 0.184,0.899 C0.114,0.938 0,0.927 0,0.927 V0 Z" />
        </clipPath>
      </svg>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-green-100"
        style={{
          backgroundImage: `url(${props.bgImage})`,
          clipPath: "url(#sectionClip)",
        }}
      />

      <div className="flex justify-center w-full mt-32">
        <div className="relative w-full max-w-[88.5rem] px-9">
          <h1
            className="relative z-50 text-blue-900 font-bold text-4xl sm:text-5xl md:text-7xl md:ml-16 xl:ml-28"
            dangerouslySetInnerHTML={{
              __html: selectedLanguage.value === "ptBr"
                ? props.titleInPortuguese
                : props.titleInEnglish,
            }}
          >
          </h1>
          <Image src={props.iconImage} className="absolute top-0 right-20" />
        </div>
      </div>
    </section>
  );
}
