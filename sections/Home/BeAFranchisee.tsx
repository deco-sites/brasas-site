import { ImageWidget } from "apps/admin/widgets.ts";
import BeAFranchiseeIsland from "../../islands/Home/BeAFranchiseeIsland.tsx";

interface BeAFranchiseeProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
  buttonTextInEnglish: string;
  buttonTextInPortuguese: string;
  sectionImage: ImageWidget;
  link: string;
}

export default function BeAFranchisee(props: BeAFranchiseeProps) {
  return <BeAFranchiseeIsland {...props} />;
}
