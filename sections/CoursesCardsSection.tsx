import CoursesCardsSectionIsland from "site/islands/CoursesCardsSectionIsland.tsx";
import { CourseCard } from "site/types/CourseCards.ts";

interface CoursesCardsSectionProps {
  title?: string;
  cards: CourseCard[];
}

export default function CoursesCardsSection(props: CoursesCardsSectionProps) {
  return <CoursesCardsSectionIsland {...props} />;
}
