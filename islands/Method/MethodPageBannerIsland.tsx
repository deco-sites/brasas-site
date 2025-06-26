import { useEffect, useState } from "preact/hooks";

export default function MethodPageBannerIsland(props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const textStyle = isMobile ? { WebkitTextStroke: "1px #1e22be" } : {};

  return (
    <section
      className=" flex items-center justify-center bg-blue-200 h-[25rem] px-9"
      style={{
        backgroundImage: `url('/method-banner-bg.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="flex flex-col text-center uppercase font-bold">
        <span
          className="text-blue-200 md:text-white text-7xl"
          style={textStyle}
        >
          {props.principalWord}
        </span>
        <br />
        <span className="text-blue-300 md:text-white text-5xl">
          {props.secondaryWord}
        </span>
      </h1>
    </section>
  );
}
