import FrequentlyAskedQuestionsIsland from "site/islands/FrequentlyAskedQuestions/FrequentlyAskedQuestionsIsland.tsx";

/* @titleBy title */
interface Item {
  title: string;
  /**
   * @format rich-text
   */
  text: string;
}

interface FrequentlyAskedQuestionsProps {
  items: Item[];
}

export default function FrequentlyAskedQuestions(
  props: FrequentlyAskedQuestionsProps,
) {
  return <FrequentlyAskedQuestionsIsland {...props} />;
}
