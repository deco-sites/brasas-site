import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import IconUserFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-filled.tsx";

export default function FooterIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <footer className="flex flex-col items-center bg-gray-200">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex flex-col">
          <div className="flex gap-4 lg:gap-10 lg:flex-row justify-between sm:justify-evenly py-10 lg:px-4 xl:p-12">
            <div className="flex flex-col lg:px-9 lg:hidden">
              <div className="flex xl:hidden flex-col w-fit">
                <div className="lg:pb-[10.25rem] lg:border-b lg:border-b-gray-100 ">
                  <a href="/" className="flex justify-center">
                    <Image
                      src={props.footerLogo.src}
                      width={props.footerLogo.width ?? 197.25}
                      height={props.footerLogo.height ?? 140.36}
                      alt="Footer Logo"
                      className="mb-6 min-w-28 min-h-20 xl:w-52 xl:h-36 object-contain"
                    />
                  </a>
                </div>
                <div className="hidden lg:flex flex-col gap-2">
                  <p className="uppercase font-black text-xs leading-6">
                    {selectedLanguage.value === "ptBr"
                      ? props.socialMediaTitleInPortuguese
                      : props.socialMediaTitleInEnglish}
                  </p>
                  <div className="flex gap-4">
                    {props.socialMediaIcons.map((item) => (
                      <a href={item.link} target="_blank" className="flex">
                        <Image
                          src={item.icon}
                          alt={item.altText}
                          className="w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {props.footerNav.map((navItem) => (
                  <a
                    href={navItem.url}
                    className="text-blue-300 uppercase text-xs leading-6 font-black"
                  >
                    {selectedLanguage.value === "ptBr"
                      ? navItem.textInPortuguese
                      : navItem.textInEnglish}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col min-w-56">
              <div className="pb-[10.25rem] lg:border-b lg:border-b-gray-100">
                <a href="/">
                  <Image
                    src={props.footerLogo.src}
                    width={props.footerLogo.width ?? 197.25}
                    height={props.footerLogo.height ?? 140.36}
                    alt="Footer Logo"
                    className="mb-6 w-52 h-36 object-contain"
                  />
                </a>
              </div>
              <div className="hidden lg:flex flex-col gap-2">
                <p className="uppercase font-black text-xs leading-6">
                  {selectedLanguage.value === "ptBr"
                    ? props.socialMediaTitleInPortuguese
                    : props.socialMediaTitleInEnglish}
                </p>
                <div className="flex gap-4">
                  {props.socialMediaIcons.map((item) => (
                    <a href={item.link} target="_blank" className="flex">
                      <Image
                        src={item.icon}
                        alt={item.altText}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between xl:justify-evenly xl:px-9">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 xl:flex-row xl:gap-6 h-[8.76rem] mb-6 lg:hidden">
                  <a href={props.testButton.url}>
                    <button className="whitespace-nowrap bg-red-300 text-white hover:bg-white hover:text-red-300 border border-red-300 border-opacity-0 hover:border-opacity-100 uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 transition duration-300 w-full">
                      {selectedLanguage.value === "ptBr"
                        ? props.testButton.textInPortuguese
                        : props.testButton.textInEnglish}
                    </button>
                  </a>
                  <a href={props.myBrasasButton.url}>
                    <button className="whitespace-nowrap bg-blue-300 text-white hover:bg-white hover:text-blue-300 border border-blue-300 uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 flex gap-2 items-center justify-center border-opacity-0 hover:border-opacity-100 transition duration-300 w-full">
                      <IconUserFilled className="w-6 h-6" />
                      {selectedLanguage.value === "ptBr"
                        ? props.myBrasasButton.textInPortuguese
                        : props.myBrasasButton.textInEnglish}
                    </button>
                  </a>
                </div>
                <div className="hidden lg:flex flex-col gap-4">
                  {props.footerNav.map((navItem) => (
                    <a
                      href={navItem.url}
                      className="text-blue-300 uppercase text-xs leading-6 font-black"
                    >
                      {selectedLanguage.value === "ptBr"
                        ? navItem.textInPortuguese
                        : navItem.textInEnglish}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="uppercase font-black leading-6 text-xs text-blue-300">
                  {selectedLanguage.value === "ptBr"
                    ? props.coursesTitleInPortuguese
                    : props.coursesTitleInEnglish}
                </span>
                {props.coursesList.map((course) => (
                  <a
                    href={course.url}
                    className="capitalize text-blue-300 text-xs font-bold leading-4"
                  >
                    {selectedLanguage.value === "ptBr"
                      ? course.nameInPortuguese
                      : course.nameInEnglish}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex gap-6">
                <a href={props.testButton.url} target="_blank">
                  <button className="whitespace-nowrap bg-red-300 text-white hover:bg-white hover:text-red-300 border border-red-300 border-opacity-0 hover:border-opacity-100 uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 transition duration-300 w-full">
                    {selectedLanguage.value === "ptBr"
                      ? props.testButton.textInPortuguese
                      : props.testButton.textInEnglish}
                  </button>
                </a>
                <a href={props.myBrasasButton.url} target="_blank">
                  <button className="whitespace-nowrap bg-blue-300 text-white hover:bg-white hover:text-blue-300 border border-blue-300 uppercase py-3 px-4 rounded-lg text-xs font-black-900 leading-6 flex gap-2 items-center justify-center border-opacity-0 hover:border-opacity-100 transition duration-300 w-full">
                    <IconUserFilled className="w-6 h-6" />
                    {selectedLanguage.value === "ptBr"
                      ? props.myBrasasButton.textInPortuguese
                      : props.myBrasasButton.textInEnglish}
                  </button>
                </a>
              </div>
              <div className="flex gap-4">
                {props.seals.map((seal) => (
                  <a
                    href={seal.link}
                    target="_blank"
                    title={seal.title}
                    key={seal.textInEnglish}
                    className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-500 w-24 h-24 p-2"
                  >
                    <Image
                      src={"/verified-seal.svg"}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-xs">
                      {selectedLanguage.value === "ptBr"
                        ? seal.textInPortuguese
                        : seal.textInEnglish}
                    </span>
                    <Image
                      src={seal.image.src}
                      width={seal.image.width ?? 74}
                      height={seal.image.height ?? 13}
                      className="w-16 h-16 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-4">
            <div className="flex lg:hidden gap-4">
              {props.seals.map((seal) => (
                <a
                  href={seal.link}
                  target="_blank"
                  title={seal.title}
                  key={seal.textInEnglish}
                  className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-500 w-24 h-24 p-2"
                >
                  <Image
                    src={"/verified-seal.svg"}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xs">
                    {selectedLanguage.value === "ptBr"
                      ? seal.textInPortuguese
                      : seal.textInEnglish}
                  </span>
                  <Image
                    src={seal.image.src}
                    width={seal.image.width ?? 74}
                    height={seal.image.height ?? 13}
                    className="w-16 h-16 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden flex-col items-center gap-4 xl:gap-2 py-10 border-t border-t-gray-100">
            <p className="uppercase font-black text-xs leading-6">
              {selectedLanguage.value === "ptBr"
                ? props.socialMediaTitleInPortuguese
                : props.socialMediaTitleInEnglish}
            </p>
            <div className="flex w-full justify-evenly">
              {props.socialMediaIcons.map((item) => (
                <a href={item.link} target="_blank" className="flex">
                  <Image
                    src={item.icon}
                    alt={item.altText}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-blue-900 border-t-8 border-t-red-300 py-6 xl:h-14">
        <div className="flex flex-col gap-8 xl:flex-row justify-between w-full max-w-[88.5rem] px-9">
          <div className="flex gap-12 justify-center xl:justify-start">
            {props.endPageNavItems.map((item) => (
              <a
                href={item.url}
                className="text-white capitalize text-xs leading-4 font-bold underline"
              >
                {selectedLanguage.value === "ptBr"
                  ? item.textInPortuguese
                  : item.textInEnglish}
              </a>
            ))}
          </div>
          <p className="text-white text-xs text-center leading-4 font-medium">
            &copy; BRASAS &bull; {selectedLanguage.value === "ptBr"
              ? props.copyright.textInPortuguese
              : props.copyright.textInEnglish}
          </p>
        </div>
      </div>
    </footer>
  );
}
