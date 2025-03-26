import Image from "apps/website/components/Image.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconMailFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail-filled.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-whatsapp.tsx";
import IconPhoneFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/phone-filled.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map-pin-filled.tsx";

export default function BranchProfilePageIsland() {
  return (
    <section className="flex justify-center pb-20 relative mb-80">
      <div className="max-w-[69.6rem] flex gap-8 w-full absolute -top-20">
        <Image
          src="/brasas-sede.webp"
          alt="Background"
          className="object-cover rounded-3xl w-1/2"
        />
        <div className="w-1/2 flex flex-col justify-end gap-6 py-4">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <IconMapPinFilled class="w-6 h-6 text-blue-900" />
              <div className="flex flex-col">
                <span>Endereço</span>
                <span className="text-blue-300 underline text-xs font-semibold">
                  Como chegar?
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-full bg-blue-300 w-10 h-10">
              <IconBrandInstagram class="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex gap-2 py-6 border-y border-y-gray-100">
            <IconMailFilled class="w-6 h-6 text-blue-900" />
            <span className="font-normal text-base text-blue-300 underline">
              po@brasas.com
            </span>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <IconBrandWhatsapp class="w-6 h-6 text-blue-900" />
                <span className="font-normal text-base text-blue-300 underline">
                  (21) 97098-5768
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <IconPhoneFilled class="w-6 h-6 text-blue-900" />
                <span>(21) 97098-9532</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
