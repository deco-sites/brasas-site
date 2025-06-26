import { useEffect, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx";
import IconMailFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail-filled.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-whatsapp.tsx";
import IconPhoneFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/phone-filled.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/map-pin-filled.tsx";

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
      <div role="status" className="flex w-full justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
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
