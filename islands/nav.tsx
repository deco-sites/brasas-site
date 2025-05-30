import { useEffect, useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

interface NavItem {
  nameInEnglish: string;
  nameInPortuguese: string;
  link: string;
}

interface Props {
  navItems: NavItem[];
  isOpen?: boolean;
}

export default function Nav({ navItems, isOpen }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { selectedLanguage } = useSelectLanguage();

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
    <>
      {isMobile
        ? (
          <nav
            className={`flex flex-col items-center justify-start pt-14 h-full gap-4 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-xs font-bold uppercase text-white"
              >
                {selectedLanguage.value === "ptBr"
                  ? item.nameInPortuguese
                  : item.nameInEnglish}
              </a>
            ))}
          </nav>
        )
        : (
          <nav className="hidden xl:flex grow justify-evenly ml-28 text-xs font-bold text-white uppercase">
            {navItems.map((item) => (
              <a
                className="first:ml-6 whitespace-nowrap"
                key={item.nameInPortuguese}
                href={item.link}
              >
                {selectedLanguage.value === "ptBr"
                  ? item.nameInPortuguese
                  : item.nameInEnglish}
              </a>
            ))}
          </nav>
        )}
    </>
  );
}
