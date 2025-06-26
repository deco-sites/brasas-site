export default function CertificationsBannerIsland(props) {
  return (
    <section
      className="bg-orange-300 px-9 h-96 xl:h-[15.25rem] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          `url('/CertificationsPage/certifications-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-8">
        {props.items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <img
              className="w-8 h-8 object-contain"
              src={item.icon}
              alt={item.title}
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">
                {item.title}
              </span>
              <span className="text-base">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
