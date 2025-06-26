import { ImageWidget } from "apps/admin/widgets.ts";
import SpecialCoursesIsland from "site/islands/Adults/SpecialCoursesIsland.tsx";

/** @titleBy altText */
interface SpecialCourseCard {
  logo: ImageWidget;
  altText: string;
  color: string;
  /**
   * @format rich-text
   */
  description: string;
}

interface SpecialCoursesProps {
  title: string;
  specialCoursesCards: SpecialCourseCard[];
  examPreparationText: string;
}

export default function SpecialCourses(props: SpecialCoursesProps) {
  return <SpecialCoursesIsland {...props} />;
}
