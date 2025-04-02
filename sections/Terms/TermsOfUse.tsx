import TermsOfUseIsland from "site/islands/Terms/TermsOfUseIsland.tsx";

/* @titleBy titleInPortuguese */
interface TextBlock {
  titleInEnglish?: string;
  titleInPortuguese?: string;
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

interface TermsOfUseProps {
  lastUpdateDateInEnglish: string;
  lastUpdateDateInPortuguese: string;
  textBlocks: TextBlock[];
}

export default function TermsOfUse(props: TermsOfUseProps) {
  return <TermsOfUseIsland {...props} />;
}
