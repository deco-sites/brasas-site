import Image from "apps/website/components/Image.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map-pin-filled.tsx";
import IconMailFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail-filled.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-whatsapp.tsx";
import IconPhoneFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/phone-filled.tsx";
import { useEffect, useState } from "preact/hooks";
import { getCookie } from "../helpers/getCookie.ts";
import { setCookie } from "../helpers/setCookie.ts";

export default function BranchCard(
  {
    name,
    image,
    address,
    neighborhood,
    city,
    state,
    email,
    tels,
    instagram,
    lon,
    lat,
    zip_code,
    index,
  },
) {
  const whatsappNumbers = tels.filter((tel) => tel.isWhatsapp === true);
  const telNumbers = tels.filter((tel) => tel.isWhatsapp === false);

  const saveBranchInfos = () => {
    const branchInfos = {
      branchName: name,
      branchImage: image,
      branchAddress: address,
      branchNeighborhood: neighborhood,
      branchCity: city,
      branchState: state,
      branchEmail: email,
      branchTels: tels,
      branchInstagram: instagram,
      branchLon: lon,
      branchLat: lat,
      branchZipcode: zip_code,
    };

    localStorage.setItem("brasasBranchInfos", JSON.stringify(branchInfos));
  };

  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    const currentLang = getCookie("language");

    if (!currentLang) {
      const userLanguage = navigator.language || navigator.languages[0];
      setCookie(userLanguage);
    }
    setLanguage(currentLang);
  }, []);

  return (
    <div className="flex flex-col min-h-60 lg:flex-row border border-gray-100 rounded-2xl overflow-hidden">
      <div className="w-full lg:w-1/3 relative">
        <div className="lg:absolute lg:inset-0">
          <Image
            src={image ? image : "brasas-logo-ballon.png"}
            className={`w-full h-full max-h-[14.2rem] lg:max-h-full
          ${
              name === "BRASAS Online" || !image
                ? "object-contain bg-gray-100 p-5"
                : "object-cover"
            }
        `}
          />
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 w-full max-h-min">
        <div className="flex items-center justify-between w-full">
          <a
            href={`/unidade_lista`}
            onClick={saveBranchInfos}
            className="text-black-500 font-bold text-2xl"
          >
            {name}
          </a>
          {instagram && (
            <a href={instagram} target="_blank">
              <IconBrandInstagram class="w-6 h-6 text-blue-300" />
            </a>
          )}
        </div>

        {address && (
          <div className="flex gap-2">
            <IconMapPinFilled class="w-6 h-6 text-blue-900" />
            <div className="flex flex-col font-normal text-base text-black-500">
              <span>{address}</span>
              <span>{neighborhood}, {city}</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${
                  encodeURIComponent(
                    `${address}, ${neighborhood}, ${city}, ${state}, ${zip_code}`,
                  )
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline text-xs font-semibold"
              >
                {language === "pt-BR" ? "Como chegar?" : "How to get there?"}
              </a>
            </div>
          </div>
        )}

        {email && (
          <div className="flex gap-2">
            <IconMailFilled class="w-6 h-6 text-blue-900" />
            <a
              href="mailto:bg@brasas.com"
              className="font-normal text-base text-black-500 underline"
            >
              {email}
            </a>
          </div>
        )}

        <div className="flex flex-wrap gap-4 items-center">
          {telNumbers?.map((tel) => (
            <div key={tel} className="flex gap-2">
              <IconPhoneFilled class="w-6 h-6 text-blue-900" />
              <span className="font-normal text-base text-black-500 underline">
                {tel.number}
              </span>
            </div>
          ))}
          {whatsappNumbers?.map((tel) => (
            <a
              href={`https://api.whatsapp.com/send?1=pt_BR&phone=55${tel.number}`}
              target="_blank"
              key={tel}
              className="flex gap-2"
            >
              <IconBrandWhatsapp class="w-6 h-6 text-blue-900" />
              <span className="font-normal text-base text-black-500 underline">
                {tel.number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
