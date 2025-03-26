import { ImageWidget } from "apps/admin/widgets.ts";
import BranchesIsland from "site/islands/Branches/BranchesIsland.tsx";

interface Tel {
  number: string;
  isWhatsapp: boolean;
}

/** @titleBy name */
interface Branch {
  image: ImageWidget;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  tels: Tel[];
  instagram: string;
  lon: string;
  lat: string;
  zip_code: string;
}

interface BranchesProps {
  branches: Branch[];
}

export default function Branches(props: BranchesProps) {
  return <BranchesIsland {...props} />;
}
