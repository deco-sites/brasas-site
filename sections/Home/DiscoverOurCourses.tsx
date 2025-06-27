import { CourseCard } from "site/types/CourseCards.ts";
import DiscoverOurCoursesIsland from "site/islands/Home/DiscoverOurCoursesIsland.tsx";
import { CopyEmail, RecipientsEmail } from "site/types/Emails.ts";

interface InputProps {
  label: string;
  placeholder: string;
}

export interface DiscoverOurCoursesProps {
  title: string;
  formTitle: string;
  nameInput: InputProps;
  telInput: InputProps;
  emailInput: InputProps;
  stateInput: InputProps;
  acceptanceTermText: string;
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
