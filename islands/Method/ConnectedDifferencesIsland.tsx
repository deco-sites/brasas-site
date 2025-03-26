import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function ConnectedDifferencesIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex flex-col gap-6 xl:gap-9 items-center justify-center pb-24">
      <h2 className="font-normal leading-8 text-2xl max-w-[45rem] text-center">
        {selectedLanguage.value === "ptBr"
          ? props.titleInPortuguese
          : props.titleInEnglish}
      </h2>
      <Image
        src={selectedLanguage.value === "ptBr"
          ? props.desktopImagePortuguese
          : props.desktopImageEnglish}
        alt="Mandala"
        className="hidden md:flex object-cover"
      />
      <Image
        src={selectedLanguage.value === "ptBr"
          ? props.mobileImagePortuguese
          : props.mobileImageEnglish}
        alt="Mandala"
        className="md:hidden object-cover"
      />
    </section>
  );
}
