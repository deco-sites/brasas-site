import CoursesCardsIsland from "site/islands/Courses/CoursesCardsIsland.tsx";
import { CourseCard } from "site/types/CourseCards.ts";

interface CoursesCardsProps {
  cards: CourseCard[];
}

export default function CoursesCards(props: CoursesCardsProps) {
  return <CoursesCardsIsland {...props} />;
}
