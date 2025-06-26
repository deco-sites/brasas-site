export default function PreKBannerIsland(props) {
  return (
    <section
      className=" flex items-center justify-center bg-yellow-500 h-[25rem]"
      style={{
        backgroundImage: `url('/prek-banner-bg.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[45rem]">
        <h1 className="capitalize text-black-500 font-black text-7xl leading-[4.5rem]">
          {props.title}
        </h1>
        <p className="text-black-500 text-2xl font-normal leading-8 text-center">
          {props.description}
        </p>
      </div>
    </section>
  );
}
