export default function BannerWithoutImageIsland(props) {
  const BG_COLORS = {
    "green": "bg-green-100",
    "blue": "bg-blue-300",
  };

  return (
    <section
      className={`flex items-center justify-center ${
        BG_COLORS[props.bgColor]
      } h-[25rem]`}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[45rem]">
        <h1
          className={`capitalize ${
            props.bgColor === "green" ? "text-blue-900" : "text-white"
          } font-black text-7xl leading-[4.5rem] text-center`}
        >
          {props.title}
        </h1>
      </div>
    </section>
  );
}
