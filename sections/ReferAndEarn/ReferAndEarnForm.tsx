import ReferAndEarnFormIsland from "site/islands/ReferAndEarn/ReferAndEarnFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface ReferAndEarnFormProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  /**
   * @format rich-text
   */
  subtitleInEnglish: string;
  /**
   * @format rich-text
   */
  subtitleInPortuguese: string;
  /**
   * @format rich-text
   */
  regulationTextInEnglish: string;
  /**
   * @format rich-text
   */
  regulationTextInPortuguese: string;
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
