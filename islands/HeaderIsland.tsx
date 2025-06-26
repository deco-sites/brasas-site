import Image from "apps/website/components/Image.tsx";
import HeaderMenu from "site/islands/header-menu.tsx";
import IconUserFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-filled.tsx";
import { HeaderProps } from "site/sections/Header.tsx";
import Nav from "site/islands/nav.tsx";
import InternationalizationController from "./InternationalizationController.tsx";

export default function HeaderIsland(
  { logo, navItems, TestButton, MyBrasasButton }: HeaderProps,
) {

  return (
    <section className="flex justify-center bg-blue-900 relative z-50">
      <header className="relative flex items-center justify-between h-14 xl:h-20 w-screen max-w-[88.5rem] px-9">
        <HeaderMenu
          navItems={navItems}
          TestButton={TestButton}
          MyBrasasButton={MyBrasasButton}
        />
        <a href="/">
          <div className="absolute z-50 left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 top-0 px-2 py-4 bg-white rounded-b-lg">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        </a>

        <Nav navItems={navItems} />

        <div className="hidden xl:flex gap-4">
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a href={TestButton.link} target="_blank">
                <button className="whitespace-nowrap bg-red-300 text-white uppercase py-3 px-4 rounded-lg text-xs font-bold leading-6 hover:bg-white hover:text-red-300 transition duration-300">
                  {TestButton.text}
                </button>
              </a>
              <a href={MyBrasasButton.link} target="_blank">
                <button className="notranslate whitespace-nowrap bg-white uppercase py-3 px-4 rounded-lg text-xs font-bold leading-6 flex gap-2 items-center text-blue-900 hover:bg-transparent hover:text-white border border-transparent hover:border-white transition duration-300">
                  <IconUserFilled className="w-4 h-4" />
                  {MyBrasasButton.text}
                </button>
              </a>
            </div>
            <InternationalizationController />
          </div>
        </div>
      </header>
    </section>
  );
}
