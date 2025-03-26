import JuniorsAndTeensIsland from "site/islands/JuniorsAndTeens/JuniorsAndTeensIsland.tsx";

interface JuniorsAndTeensProps {
  /**
   * @format rich-text
   */
  textInEnglish: string;
  /**
   * @format rich-text
   */
  textInPortuguese: string;
}

export default function JuniorsAndTeens(props: JuniorsAndTeensProps) {
  return <JuniorsAndTeensIsland {...props} />;
}
