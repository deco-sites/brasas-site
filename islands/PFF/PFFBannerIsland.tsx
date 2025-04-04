import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function PFFBannerIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className={`flex items-center justify-center bg-yellow-400 min-h-[25rem]`}
      style={{
        backgroundImage: `url(${
          isMobile ? props.bgImageMobile : props.bgImageDesktop
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center px-9">
        <Image
          src={selectedLanguage.value === "ptBr"
            ? props.imageInPortuguese
            : props.imageInEnglish}
          className="w-96 object-contain"
        />
        {
          /*
        <div className="flex flex-col uppercase">
          <span className="text-red-300 bg-white rounded-t-2xl w-fit pt-2 flex text-4xl px-5 font-black">
            brasas
          </span>
          <div className="bg-white rounded-tr-2xl rounded-b-2xl pl-5 font-black text-blue-900 w-[22rem]">
            <span className=" py-1 flex text-5xl">
              portuguese
            </span>
            <span className=" pt-1 pb-2 flex text-4xl tracking-wide">
              for foreigners
            </span>
          </div>
        </div>*/
        }

        {props.hasNotice && (
          <p className="text-white text-center">
            {selectedLanguage.value === "ptBr"
              ? "Curso disponível nas modalidades Presencial e Online"
              : "Course available in In-Person and Online formats"}
          </p>
        )}
      </div>
    </section>
  );
}
