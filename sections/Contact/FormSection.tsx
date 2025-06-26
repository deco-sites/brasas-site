import FormSectionIsland from "site/islands/Contact/FormSectionIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

interface FormSectionProps {
  formTitle: string;
  formSubtitle: string;
  nameInput: InputProps;
  emailInput: InputProps;
  telInput: InputProps;
  messageInput: InputProps;
  acceptanceTermText: string;
  sendButtonText: string;
  branchBoxTitle: string;
  branchBoxDescription: string;
  branchBoxButtonText: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function FormSection(props: FormSectionProps) {
  return <FormSectionIsland {...props} />;
}
