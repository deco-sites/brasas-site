export default function CertificationsPageBannerIsland(props) {
  return (
    <section
      className={`flex items-center justify-center w-full bg-orange-300 min-h-[25rem]`}
      style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="normal-case flex flex-col gap-6 items-center justify-center w-[45rem] max-w-full px-9 pt-12 pb-10">
        <h1 className="text-white font-black text-5xl lg:text-7xl leading-[4.5rem] text-center">
          {props.title}
        </h1>

        <p className="text-white text-2xl font-normal leading-8 text-center">
          {props.subtitle}
        </p>

        {props.hasNotice && (
          <p
            className="text-white text-center"
            dangerouslySetInnerHTML={{
              __html: props.noticeText,
            }}
          >
          </p>
        )}
      </div>
    </section>
  );
}
