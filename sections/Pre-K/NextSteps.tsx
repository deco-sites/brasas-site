import NextStepsIsland from "site/islands/Pre-K/NextStepsIsland.tsx";

interface NextStepsProps {
  nextStepTitleInEnglish: string;
  nextStepTitleInPortuguese: string;
  /**
   * @format rich-text
   */
  nextStepTextInEnglish: string;
  /**
   * @format rich-text
   */
  nextStepTextInPortuguese: string;
}

export default function NextSteps(props: NextStepsProps) {
  return <NextStepsIsland {...props} />;
}
