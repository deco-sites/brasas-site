import { ImageWidget } from "apps/admin/widgets.ts";
import ReferAndEarnFormIsland from "site/islands/ReferAndEarn/ReferAndEarnFormIsland.tsx";

interface ReferAndEarnFormProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  subtitleInEnglish: string;
  subtitleInPortuguese: string;
  image: ImageWidget;
  formTitleInEnglish: string;
  formTitleInPortuguese: string;
  formSubtitleInEnglish: string;
  formSubtitleInPortuguese: string;
}

export default function ReferAndEarnForm(props: ReferAndEarnFormProps) {
  return <ReferAndEarnFormIsland {...props} />;
}
