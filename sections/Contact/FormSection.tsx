import { FnContext } from "@deco/deco";
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

export const loader = async (
  props: FormSectionProps,
  req: Request,
  ctx: FnContext,
) => {
  try {
    const response = await fetch(
      "https://api.brasas.com/users/login/68e905212fc5fe55464b0a46?exp_secs=600",
      {
        method: "GET",
        headers: {
          community_id: "sophia-4375-44",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();
    //console.log("Resposta da API:", data);

    return {
      ...props,
      accessToken: data.access_token,
    };
  } catch (error) {
    console.error("Erro na requisição:", error);
    return {
      ...props,
      accessToken: null,
    };
  }
};
