import { ImageWidget } from "apps/admin/widgets.ts";
import SpecialCoursesIsland from "site/islands/Adults/SpecialCoursesIsland.tsx";

/** @titleBy altText */
interface SpecialCourseCard {
  logoInEnglish: ImageWidget;
  logoInPortuguese: ImageWidget;
  altText: string;
  color: string;
  /**
   * @format rich-text
   */
  descriptionInEnglish: string;
  /**
   * @format rich-text
   */
  descriptionInPortuguese: string;
}

interface SpecialCoursesProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  specialCoursesCards: SpecialCourseCard[];
}

export default function SpecialCourses(props: SpecialCoursesProps) {
  return <SpecialCoursesIsland {...props} />;
}
