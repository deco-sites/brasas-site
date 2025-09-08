import { useEffect, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconMailFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail-filled.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-whatsapp.tsx";
import IconPhoneFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/phone-filled.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map-pin-filled.tsx";
import Skeleton from "../../components/Skeleton.tsx";

export default function BranchProfilePageIsland(props) {
  const [branchInfos, setBranchInfos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedBranchInfos = localStorage.getItem("brasasBranchInfos");

    if (storedBranchInfos) {
      setBranchInfos(JSON.parse(storedBranchInfos));
    }

    setLoading(false);
  }, []);

  const normalTels = branchInfos?.branchTels.filter((tel) =>
    tel.isWhatsapp !== true
  );

  const branchWhatsapps = branchInfos?.branchTels.filter((tel) =>
    tel.isWhatsapp === true
  );

  if (loading) {
    return (
      <section className="flex justify-center pb-20 relative mb-[33rem] md:mb-80">
        <div className="max-w-[69.6rem] flex flex-col md:flex-row gap-8 w-full absolute -top-20 px-4">
          {/* Skeleton da imagem */}
          <Skeleton className="h-[22.5rem] md:w-1/2 rounded-3xl" />

          {/* Skeleton dos textos */}
          <div className="md:w-1/2 flex flex-col justify-end gap-6 py-4">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />

            <div className="flex flex-col gap-4 mt-4">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex justify-center pb-20 relative mb-[33rem] md:mb-80">
      <div className="max-w-[69.6rem] flex flex-col md:flex-row gap-8 w-full absolute -top-20 px-4">
        <Image
          src={branchInfos?.branchImage || "brasas-logo-ballon.png"}
          alt="Background"
          className={`rounded-3xl md:w-1/2 h-[22.5rem] ${
            branchInfos?.branchName === "BRASAS Online" ||
              !branchInfos?.branchImage
              ? "object-contain bg-gray-100 p-8"
              : "object-cover"
          } ${!branchInfos?.branchImage ? "bg-gray-100 p-8" : ""}`}
        />
        <div className="md:w-1/2 flex flex-col justify-end gap-6 py-4">
          <div className="flex justify-between">
            {branchInfos?.branchAddress && (
              <div className="flex gap-2">
                <IconMapPinFilled class="w-6 h-6 text-blue-900" />
                <div className="flex flex-col">
                  <span>{branchInfos?.branchAddress}</span>
                  <span>
                    {branchInfos?.branchNeighborhood},{" "}
                    {branchInfos?.branchCity}, {branchInfos?.branchState}
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${
                      encodeURIComponent(
                        `${branchInfos?.branchAddress}, ${branchInfos?.branchNeighborhood}, ${branchInfos?.branchCity}, ${branchInfos?.branchState}, ${branchInfos?.branchZipcode}`,
                      )
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline text-xs font-semibold"
                  >
                    {props.howToGetThereText}
                  </a>
                </div>
              </div>
            )}
            {branchInfos?.branchInstagram && (
              <a
                href={branchInfos?.branchInstagram}
                target="_blank"
                className="flex shrink-0 items-center justify-center rounded-full bg-blue-300 w-10 h-10"
              >
                <IconBrandInstagram class="w-6 h-6 text-white" />
              </a>
            )}
          </div>

          <div className="flex gap-2 py-6 border-y border-y-gray-100">
            <IconMailFilled class="w-6 h-6 text-blue-900" />
            <a
              href={`mailto:${branchInfos?.branchEmail}`}
              className="font-normal text-base text-blue-300 underline"
            >
              {branchInfos?.branchEmail}
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {branchWhatsapps.length > 0 && (
              <div className="flex flex-col">
                {branchWhatsapps?.map((whatsapp) => (
                  <div key={whatsapp.number} className="flex gap-2">
                    <IconBrandWhatsapp class="w-6 h-6 text-blue-900" />
                    <a
                      href={`https://api.whatsapp.com/send?1=pt_BR&phone=55${whatsapp.number}`}
                      target="_blank"
                      className="font-normal text-base text-blue-300 underline"
                    >
                      {whatsapp.number}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {normalTels.length > 0 && (
              <div className="flex flex-col">
                {normalTels?.map((tel) => (
                  <div key={tel.number} className="flex gap-2">
                    <IconPhoneFilled class="w-6 h-6 text-blue-900" />
                    <span>{tel.number}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
