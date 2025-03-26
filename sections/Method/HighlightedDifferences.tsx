import { ImageWidget } from "apps/admin/widgets.ts";
import HighlightedDifferencesIsland from "site/islands/Method/HighlightedDifferencesIsland.tsx";

interface Icon {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

/* @titleBy textInPortuguese */
interface DifferenceCard {
  textInEnglish: string;
  textInPortuguese: string;
  icon: Icon;
}

interface HighlightedDifferencesProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
  differenceCards: DifferenceCard[];
}

export default function HighlightedDifferences(
  props: HighlightedDifferencesProps,
) {
  return <HighlightedDifferencesIsland {...props} />;
}
