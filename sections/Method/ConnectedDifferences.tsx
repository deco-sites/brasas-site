import { ImageWidget } from "apps/admin/widgets.ts";
import ConnectedDifferencesIsland from "site/islands/Method/ConnectedDifferencesIsland.tsx";

interface ConnectedDifferencesProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  desktopImageEnglish: ImageWidget;
  mobileImageEnglish: ImageWidget;
  desktopImagePortuguese: ImageWidget;
  mobileImagePortuguese: ImageWidget;
}

export default function ConnectedDifferences(props: ConnectedDifferencesProps) {
  return <ConnectedDifferencesIsland {...props} />;
}
