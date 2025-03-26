import { CourseCard } from "site/types/CourseCards.ts";
import PreKCoursesCardsIsland from "site/islands/Pre-K/PreKCoursesCardsIsland.tsx";

interface PreKCoursesCardsProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  cards: CourseCard[];
}

export default function PreKCoursesCards(props: PreKCoursesCardsProps) {
  return <PreKCoursesCardsIsland {...props} />;
}
