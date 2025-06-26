import AboutTitlePageIsland from "site/islands/About/AboutTitlePageIsland.tsx";

interface AboutTitlePageProps {
  /**
   * @format rich-text
   */
  title: string;
}

export default function AboutTitlePage(props: AboutTitlePageProps) {
  return <AboutTitlePageIsland {...props} />;
}
