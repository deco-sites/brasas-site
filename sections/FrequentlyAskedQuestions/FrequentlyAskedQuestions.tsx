import FrequentlyAskedQuestionsIsland from "site/islands/FrequentlyAskedQuestions/FrequentlyAskedQuestionsIsland.tsx";

/* @titleBy titleInPortuguese */
interface Item {
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

interface FrequentlyAskedQuestionsProps {
  items: Item[];
}

export default function FrequentlyAskedQuestions(
  props: FrequentlyAskedQuestionsProps,
) {
  return <FrequentlyAskedQuestionsIsland {...props} />;
}
