import AboutTitlePageIsland from "site/islands/About/AboutTitlePageIsland.tsx";

interface AboutTitlePageProps {
  /**
   * @format rich-text
   */
  titleInEnglish: string;
  /**
   * @format rich-text
   */
  titleInPortuguese: string;
}

export default function AboutTitlePage(props: AboutTitlePageProps) {
  return <AboutTitlePageIsland {...props} />;
}
