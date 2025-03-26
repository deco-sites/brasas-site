import Image from "apps/website/components/Image.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map-pin-filled.tsx";
import IconMailFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail-filled.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-whatsapp.tsx";
import IconPhoneFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/phone-filled.tsx";

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
  },
) {
  return (
    <div className="flex flex-col xl:flex-row border border-gray-100 rounded-2xl">
      <Image
        src={image}
        className="rounded-t-2xl xl:rounded-l-2xl xl:rounded-tr-none object-cover w-full xl:w-1/3"
      />
      <div className="p-6 flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <a href="/unidade" className="text-black-500 font-bold text-2xl">
            {name}
          </a>
          <a href={instagram}>
            <IconBrandInstagram class="w-6 h-6 text-blue-300" />
          </a>
        </div>
        <div className="flex gap-2">
          <IconMapPinFilled class="w-6 h-6 text-blue-900" />
          <div className="flex flex-col font-normal text-base text-black-500">
            <span>{address}</span>
            <span>{neighborhood}, {city}</span>
            <a
              href="#"
              className="text-blue-300 underline text-xs font-semibold"
            >
              Como chegar?
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          <IconMailFilled class="w-6 h-6 text-blue-900" />
          <a
            href="mailto:bg@brasas.com"
            className="font-normal text-base text-black-500 underline"
          >
            {email}
          </a>
        </div>

        <div className="flex">
          {tels.map((tel) => (
            <div key={tel} className="flex gap-2">
              {tel.isWhatsapp === true
                ? <IconBrandWhatsapp class="w-6 h-6 text-blue-900" />
                : <IconPhoneFilled class="w-6 h-6 text-blue-900" />}

              <span className="font-normal text-base text-black-500 underline">
                {tel.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
