export default function AboutPageBannerIsland(props) {
  return (
    <section
      className=" flex items-center justify-center bg-blue-200 h-[25rem]"
      style={{
        backgroundImage: `url('/about-banner-bg.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[45rem]">
        <h1 className="uppercase text-white font-black text-7xl leading-[4.5rem]">
          {props.title}
        </h1>
        <p className="text-white text-2xl font-normal leading-8 text-center">
          {props.description}
        </p>
      </div>
    </section>
  );
}
