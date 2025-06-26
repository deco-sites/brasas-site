import Image from "apps/website/components/Image.tsx";
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx";
import CertificationTitle from "site/components/CertificationTitle.tsx";
import PreparatoryCourseTitle from "site/components/PreparatoryCourseTitle.tsx";

export default function TOEICCertificationIsland(props) {

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="hidden xl:flex justify-between w-full max-w-[88.5rem] px-9 pt-10 pb-5">
        <div className="flex justify-center xl:w-1/2 xl:max-w-[35rem]">
          <h2 className="font-bold text-4xl leading-8 uppercase text-blue-900">
            {props.certificationTitle}
          </h2>
        </div>
        <div className="flex justify-center xl:w-1/2 xl:max-w-[23.75rem]">
          <h2 className="font-bold text-4xl leading-8 uppercase text-blue-900 whitespace-nowrap">
            {props.preparatoryCourseTitle}
          </h2>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 justify-between w-full pt-10 pb-5 max-w-[88.5rem] px-9">
        <CertificationTitle />
        <div className="flex flex-col xl:w-1/2 xl:max-w-[35rem]">
          <span className="text-center xl:text-start text-red-300 font-bold text-4xl leading-8 mb-6">
            {props.title}
          </span>
          <div className="flex flex-col gap-6">
            {props.items.map((item, index) => (
              <div className="flex gap-4">
                <Image src={item.icon} className="w-8 h-8" />
                <span
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                >
                </span>
              </div>
            ))}
          </div>
        </div>

        <PreparatoryCourseTitle />
        <div className="flex justify-center xl:w-1/2 xl:max-w-[23.75rem]">
          <div className="flex flex-col items-center border border-red-300 rounded-[50px] p-8 h-fit">
            <Image src={props.card.logo} className="w-52 h-24 object-contain" />
            <div className="flex gap-4">
              <IconCheck class="w-8 h-8 text-red-300 font-bold" />
              <div className="flex flex-col">
                <span
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: props.card.modality,
                  }}
                >
                </span>
                <span
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: props.card.sessions,
                  }}
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
