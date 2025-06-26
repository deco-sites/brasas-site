import BecomeAFranchiseeFormIsland from "site/islands/BecomeAFranchisee/BecomeAFranchiseeFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

interface BecomeAFranchiseeFormProps {
  title: string;
  /**
   * @format rich-text
   */
  text: string;
  formTitle: string;
  formSubtitle: string;
  nameInput: InputProps;
  emailInput: InputProps;
  telInput: InputProps;
  messageInput: InputProps;
  acceptanceText: string;
  buttonText: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function BecomeAFranchiseeForm(
  props: BecomeAFranchiseeFormProps,
) {
  return <BecomeAFranchiseeFormIsland {...props} />;
}
