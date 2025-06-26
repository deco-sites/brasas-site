import { ImageWidget } from "apps/admin/widgets.ts";
import HighlightedDifferencesIsland from "site/islands/Method/HighlightedDifferencesIsland.tsx";

interface Icon {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

/* @titleBy text */
interface DifferenceCard {
  text: string;
  icon: Icon;
}

interface HighlightedDifferencesProps {
  title: string;
  description: string;
  differenceCards: DifferenceCard[];
}

export default function HighlightedDifferences(
  props: HighlightedDifferencesProps,
) {
  return <HighlightedDifferencesIsland {...props} />;
}
