import BecomeAFranchiseeFormIsland from "site/islands/BecomeAFranchisee/BecomeAFranchiseeFormIsland.tsx";

interface BecomeAFranchiseeFormProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

export default function BecomeAFranchiseeForm(
  props: BecomeAFranchiseeFormProps,
) {
  return <BecomeAFranchiseeFormIsland {...props} />;
}
