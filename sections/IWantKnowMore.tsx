import IWantKnowMoreIsland from "site/islands/IWantKnowMoreIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface IWantKnowMoreProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
  rendersLeveling?: boolean;
  testButtonLink: string;
}

export default function IWantKnowMore(props: IWantKnowMoreProps) {
  return (
    <IWantKnowMoreIsland
      {...props}
      rendersLeveling={props.rendersLeveling ?? true}
    />
  );
}
