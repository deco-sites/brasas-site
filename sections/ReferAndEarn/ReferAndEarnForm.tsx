import { ImageWidget } from "apps/admin/widgets.ts";
import ReferAndEarnFormIsland from "site/islands/ReferAndEarn/ReferAndEarnFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

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
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function ReferAndEarnForm(props: ReferAndEarnFormProps) {
  return <ReferAndEarnFormIsland {...props} />;
}
