import WorkWithUsFormIsland from "site/islands/WorkWithUs/WorkWithusFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

/**
 * @titleBy nameInPortuguese
 */
interface DesiredArea {
  nameInPortuguese: string;
  nameInEnglish: string;
  value: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
}

interface WorkWithUsFormProps {
  desiredAreas: DesiredArea[];
  subject: string;
}

export default function WorkWithUsForm(props: WorkWithUsFormProps) {
  return <WorkWithUsFormIsland {...props} />;
}
