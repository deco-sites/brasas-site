import JuniorsAndTeensIsland from "site/islands/JuniorsAndTeens/JuniorsAndTeensIsland.tsx";

interface JuniorsAndTeensProps {
  /**
   * @format rich-text
   */
  text: string;
}

export default function JuniorsAndTeens(props: JuniorsAndTeensProps) {
  return <JuniorsAndTeensIsland {...props} />;
}
