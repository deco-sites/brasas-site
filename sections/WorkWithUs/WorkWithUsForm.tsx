import WorkWithUsFormIsland from "site/islands/WorkWithUs/WorkWithusFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface WorkWithUsFormProps {
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
}

export default function WorkWithUsForm(props: WorkWithUsFormProps) {
  return <WorkWithUsFormIsland {...props} />;
}
