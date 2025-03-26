import IWantKnowMoreIsland from "site/islands/IWantKnowMoreIsland.tsx";

interface IWantKnowMoreProps {
  titleInEnglish: string;
  titleInPortuguese: string;
}

export default function IWantKnowMore(props: IWantKnowMoreProps) {
  return <IWantKnowMoreIsland {...props} />;
}
