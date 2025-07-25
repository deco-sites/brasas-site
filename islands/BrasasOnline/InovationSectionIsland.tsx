import Image from "apps/website/components/Image.tsx";

export default function InovationSectionIsland(props) {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[88.5rem] px-9 flex flex-col items-center gap-10 py-14">
        <span className="text-black-500 font-bold text-4xl leading-10 text-center">
          {props.title}
        </span>

        <div className="bg-blue-300 rounded-[30px] xl:rounded-[50px] grid gap-14 grid-cols-1 xl:grid-cols-3 grid-rows-1 xl:grid-rows-3 py-10 px-12">
          {props.items.map((item, index) => (
            <div className="flex justify-start gap-4" key={index}>
              <Image
                src={item.icon}
                className="text-green-100 fill-current w-8 h-8"
              />
              <span
                className="text-white text-xl leading-8"
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              >
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
