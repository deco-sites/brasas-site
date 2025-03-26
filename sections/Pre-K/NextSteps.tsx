import NextStepsIsland from "site/islands/Pre-K/NextStepsIsland.tsx";

interface NextStepsProps {
  nextStepTitleInEnglish: string;
  nextStepTitleInPortuguese: string;
  nextStepTextInEnglish: string;
  nextStepTextInPortuguese: string;
}

export default function NextSteps(props: NextStepsProps) {
  return <NextStepsIsland {...props} />;
}
