import { ImageWidget } from "apps/admin/widgets.ts";
import BranchesIsland from "site/islands/Branches/BranchesIsland.tsx";

/**  @titleBy number */
interface Tel {
  number: string;
  isWhatsapp: boolean;
}

/** @titleBy name */
interface Branch {
  image?: ImageWidget;
  name: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  email?: string;
  tels?: Tel[];
  instagram?: string;
  lon?: string;
  lat?: string;
  zip_code?: string;
}

/** @titleBy name */
interface State {
  name: string;
  branches: Branch[];
}

interface BranchesProps {
  states: State[];
}

export default function Branches(props: BranchesProps) {
  return <BranchesIsland {...props} />;
}
