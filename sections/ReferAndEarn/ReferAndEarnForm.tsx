import ReferAndEarnFormIsland from "site/islands/ReferAndEarn/ReferAndEarnFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

interface ReferAndEarnFormProps {
  title: string;
  /**
   * @format rich-text
   */
  subtitle: string;
  highlightedWords: string[];
  /**
   * @format rich-text
   */
  regulationText: string;
  formTitle: string;
  formSubtitle: string;
  nameInput: InputProps;
  emailInput: InputProps;
  telInput: InputProps;
  referralCodeInput: InputProps;
  acceptanceText: string;
  sendButtonText: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function ReferAndEarnForm(props: ReferAndEarnFormProps) {
  return <ReferAndEarnFormIsland {...props} />;
}
