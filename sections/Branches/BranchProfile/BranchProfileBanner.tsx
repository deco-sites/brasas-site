import BranchProfileBannerIsland from "site/islands/Branches/BranchProfile/BranchProfileBannerIsland.tsx";

interface BranchProfileBannerProps {
  branchName: string;
}

export default function BranchProfileBanner(props: BranchProfileBannerProps) {
  return <BranchProfileBannerIsland {...props} />;
}
