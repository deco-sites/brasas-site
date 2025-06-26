import { ImageWidget } from "apps/admin/widgets.ts";
import ConnectedDifferencesIsland from "site/islands/Method/ConnectedDifferencesIsland.tsx";

interface ConnectedDifferencesProps {
  title: string;
  desktopImage: ImageWidget;
  mobileImage: ImageWidget;
}

export default function ConnectedDifferences(props: ConnectedDifferencesProps) {
  return <ConnectedDifferencesIsland {...props} />;
}
