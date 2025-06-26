import BranchProfilePageIsland from "site/islands/Branches/BranchProfilePageIsland.tsx";

interface BranchProfilePageProps {
  howToGetThereText: string;
}

export default function BranchProfilePage(props: BranchProfilePageProps) {
  return <BranchProfilePageIsland {...props} />;
}
