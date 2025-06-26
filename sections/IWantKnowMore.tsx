import IWantKnowMoreIsland from "site/islands/IWantKnowMoreIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

interface IWantKnowMoreProps {
  title: string;
  levelingTitle: string;
  levelingSubtitle: string;
  levelingButtonText: string;
  levelingButtonLink: string;
  formTitle: string;
  formSubtitle: string;
  nameInput: InputProps;
  emailInput: InputProps;
  telInput: InputProps;
  acceptanceTermText: string;
  sendButtonText: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
  rendersLeveling?: boolean;
}

export default function IWantKnowMore(props: IWantKnowMoreProps) {
  return (
    <IWantKnowMoreIsland
      {...props}
      rendersLeveling={props.rendersLeveling ?? true}
    />
  );
}
