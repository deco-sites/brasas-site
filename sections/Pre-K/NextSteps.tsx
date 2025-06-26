import NextStepsIsland from "site/islands/Pre-K/NextStepsIsland.tsx";

interface NextStepsProps {
  nextStepTitle: string;
  /**
   * @format rich-text
   */
  nextStepText: string;
}

export default function NextSteps(props: NextStepsProps) {
  return <NextStepsIsland {...props} />;
}
