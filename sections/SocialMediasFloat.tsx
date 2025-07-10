import { FnContext } from "@deco/deco";
import SocialMediasFloatIsland from "../islands/SocialMediasFloatIsland.tsx";

/* @titleBy text */
interface socialMedia {
  text: string;
  link: string;
}

interface SocialMediaFloatProps {
  socialMedias: socialMedia[];
}

export default function SocialMediaFloat(props: SocialMediaFloatProps) {
  return <SocialMediasFloatIsland {...props} />;
}

export const loader = (
  props: SocialMediaFloatProps,
  req: Request,
  ctx: FnContext,
) => {
  return {
    ...props,
    device: ctx.device,
  };
};
