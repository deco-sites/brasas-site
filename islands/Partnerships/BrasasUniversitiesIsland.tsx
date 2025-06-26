import Image from "apps/website/components/Image.tsx";

export default function BrasasUniversitiesIsland(props) {
  return (
    <section className="flex w-full justify-center py-20">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex flex-col items-center xl:items-start xl:flex-row gap-8 w-full justify-center">
          <Image src={props.logo} className="w-44 h-20 object-contain" />
          <div className="flex flex-col max-w-2xl">
            {props.sections.map((section, index) => (
              <div className="flex flex-col max-w-2xl">
                <span className="text-blue-500 font-semibold text-2xl mb-6">
                  {section.title}
                </span>
                <span className="mb-6">
                  {section.subtitle}
                </span>
                <div
                  className={`flex flex-col gap-5 mb-10 pb-10 ${
                    index !== props.sections.length - 1
                      ? "border-b-2 border-b-black-500/50"
                      : ""
                  }`}
                >
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Image
                        src={item.icon}
                        className="w-8 h-8 object-contain"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">
                          {item.title}
                        </span>
                        <span className="text-base">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <a href="#quero-saber-mais">
              <button className="text-white bg-blue-300 hover:text-blue-300 hover:bg-white border border-blue-300 border-opacity-0 hover:border-opacity-100 transition-all duration-300 rounded-lg py-3 px-8 w-fit">
                {props.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
