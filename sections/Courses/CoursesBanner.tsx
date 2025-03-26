import CoursesBannerIsland from "site/islands/Courses/CoursesBannerIsland.tsx";

interface CoursesBannerProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  descriptionInEnglish: string;
  descriptionInPortuguese: string;
}

export default function CoursesBanner(props: CoursesBannerProps) {
  return <CoursesBannerIsland {...props} />;
}
