import { ImageWidget } from "apps/admin/widgets.ts";
import BranchesIsland from "site/islands/Branches/BranchesIsland.tsx";

interface InputProps {
  label: string;
  placeholder: string;
}

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
  branchInput: InputProps;
  cityInput: InputProps;
  geolocationText: string;
  filterLabel: string;
  stateLabel: string;
  clearButtonText: string;
  searchInputPlaceholder: string;
  selectCityFirst: string;
  branchNotFoundText: string;
  states: State[];
}

export default function Branches(props: BranchesProps) {
  return <BranchesIsland {...props} />;
}
