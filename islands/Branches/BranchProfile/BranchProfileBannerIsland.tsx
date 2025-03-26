export default function BranchProfileBannerIsland(props) {
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
      <h1 className="text-white text-6xl font-black">
        {props.branchName}
      </h1>
    </section>
  );
}
