import { AppContext } from "site/apps/site.ts";
import { Secret } from "apps/website/loaders/secret.ts";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";
//import sendgrid from "sendgrid"; //assim tbm funcionou, basta usar sendgrid no lugar de sgMail, por exemplo sendgrid.setApiKey ou sengrid.send
//import sgMail from "sendgrid";      Esse aqui também funcionou, basta usar sgMail no lugar de sendgrid

export interface DataProps {
  name: string;
  email: string;
  tel: string;
  uf: string;
}

export interface Attachment {
  name: string;
  type: string;
  content: string;
}

export interface Props {
  data: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
  attachment?: Attachment | null;
}

const sendEmail = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const { sendgrid } = ctx;

  const msg = {
    "personalizations": [
      {
        "to": props.RecipientsEmailArr.map((emailObj) => ({
          email: emailObj.email,
        })),

        // Adiciona "cc" apenas se props.CopyToArr existir e não for vazio
        ...(props.CopyToArr && props.CopyToArr.length > 0
          ? {
            "cc": props.CopyToArr.map((emailObj) => ({
              email: emailObj.email,
            })),
          }
          : {}),
      },
    ],
    "subject": props.subject,
    "from": {
      "email": "nao_responder@brasas.com",
    },
    "content": [
      {
        "type": "text/plain",
        "value": props.data,
      },
    ],
  };

  if (props.attachment) {
    msg.attachments = [
      {
        "content": props.attachment.content,
        "filename": props.attachment.name,
        "type": props.attachment.type,
        "disposition": "attachment",
      },
    ];
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sendgrid}`,
      },
      body: JSON.stringify(msg),
    });

    if (response.ok) {
      //console.log("Email sent successfully");
      return 200;
    } else {
      const errorData = await response.json();
      //console.error("SendGrid API error:", errorData);
      return errorData;
    }
  } catch (error) {
    return error;
    //console.error("Error sending email:", error);
  }
};

export default sendEmail;
