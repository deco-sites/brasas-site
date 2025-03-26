import { CourseCard } from "site/types/CourseCards.ts";
import DiscoverOurCoursesIsland from "site/islands/Home/DiscoverOurCoursesIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

export interface DiscoverOurCoursesProps {
  englishTitle: string;
  portugueseTitle: string;
  englishFormTitle: string;
  portugueseFormTitle: string;
  RecipientsEmailArr: RecipientsEmail[];
  CopyToArr?: CopyEmail[];
  subject: string;
  cards: CourseCard[];
}

export default function DiscoverOurCourses(
  props: DiscoverOurCoursesProps,
) {
  return <DiscoverOurCoursesIsland {...props} />;
}
