import FormSectionIsland from "site/islands/Contact/FormSectionIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface FormSectionProps {
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function FormSection(
  { RecipientsEmailArr, CopyToArr, subject }: FormSectionProps,
) {
  return (
    <FormSectionIsland
      RecipientsEmailArr={RecipientsEmailArr}
      CopyToArr={CopyToArr}
      subject={subject}
    />
  );
}
