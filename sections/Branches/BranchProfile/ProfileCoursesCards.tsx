import ProfileCoursesCardsIsland from "site/islands/Branches/BranchProfile/ProfileCoursesCardsIsland.tsx";
import { CourseCard } from "site/types/CourseCards.ts";

interface ProfileCoursesCardsProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  cards: CourseCard[];
}

export default function ProfileCoursesCards(props:ProfileCoursesCardsProps) {
  return <ProfileCoursesCardsIsland {...props} />;
}
