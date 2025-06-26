import TermsOfUseIsland from "site/islands/Terms/TermsOfUseIsland.tsx";

/* @titleBy title */
interface TextBlock {
  title?: string;
  /**
   * @format rich-text
   */
  text: string;
}

interface TermsOfUseProps {
  lastUpdateDate: string;
  textBlocks: TextBlock[];
}

export default function TermsOfUse(props: TermsOfUseProps) {
  return <TermsOfUseIsland {...props} />;
}
