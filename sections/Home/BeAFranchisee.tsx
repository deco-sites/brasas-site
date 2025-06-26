import { ImageWidget } from "apps/admin/widgets.ts";
import BeAFranchiseeIsland from "../../islands/Home/BeAFranchiseeIsland.tsx";

interface BeAFranchiseeProps {
  title: string;
  description: string;
  buttonText: string;
  sectionImage: ImageWidget;
  link: string;
}

export default function BeAFranchisee(props: BeAFranchiseeProps) {
  return <BeAFranchiseeIsland {...props} />;
}
