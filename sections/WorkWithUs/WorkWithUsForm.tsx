import WorkWithUsFormIsland from "site/islands/WorkWithUs/WorkWithusFormIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

/**
 * @titleBy name
 */
interface DesiredArea {
  name: string;
  value: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
}

interface WorkWithUsFormProps {
  formTitle: string;
  formSubtitle: string;
  nameInput: InputProps;
  emailInput: InputProps;
  telInput: InputProps;
  cityInput: InputProps;
  stateInput: InputProps;
  desiredAreaInput: InputProps;
  unitsInput: InputProps;
  curriculumInput: InputProps;
  additionalCommentsInput: InputProps;
  acceptanceSendText: string;
  acceptanceReceiveText: string;
  buttonText: string;
  desiredAreas: DesiredArea[];
  subject: string;
}

export default function WorkWithUsForm(props: WorkWithUsFormProps) {
  return <WorkWithUsFormIsland {...props} />;
}
