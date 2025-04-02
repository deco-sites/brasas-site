import { useEffect, useState } from "preact/hooks";

export default function BranchProfileBannerIsland() {
  const [branchInfos, setBranchInfos] = useState({});
  useEffect(() => {
    const storedBranchInfos = JSON.parse(
      localStorage.getItem("brasasBranchInfos"),
    );
    setBranchInfos(storedBranchInfos);
  }, []);

  return (
    <section
      className=" flex items-center justify-center bg-blue-300 h-[25rem]"
      style={{
        backgroundImage: `url('/branches-banner-bg.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-white text-6xl font-black text-center">
        <span>{branchInfos.branchName}</span>
      </h1>
    </section>
  );
}
