import { useEffect, useState } from "preact/hooks";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/menu-2.tsx";
import Nav from "site/islands/nav.tsx";
import ButtonsAndFlags from "site/islands/buttons-and-flags.tsx";

export default function HeaderMenu({ navItems, TestButton, MyBrasasButton }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("teste", isOpen);
  }, []);

  return (
    <>
      <IconMenu2
        className="flex xl:hidden w-6 h-6 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`absolute z-50 xl:hidden top-14 left-0 w-full bg-blue-900 overflow-hidden transition-all duration-300 ease-in-out -mt-1 ${
          isOpen
            ? "max-h-screen opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 items-center justify-center py-6">
          <Nav navItems={navItems} isOpen={isOpen} />

          <ButtonsAndFlags
            TestButton={TestButton}
            MyBrasasButton={MyBrasasButton}
          />
        </div>
      </div>
    </>
  );
}
