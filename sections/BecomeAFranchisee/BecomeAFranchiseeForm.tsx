import BecomeAFranchiseeFormIsland from "site/islands/BecomeAFranchisee/BecomeAFranchiseeFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface BecomeAFranchiseeFormProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function BecomeAFranchiseeForm(
  props: BecomeAFranchiseeFormProps,
) {
  return <BecomeAFranchiseeFormIsland {...props} />;
}
