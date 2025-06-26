import CoursesBannerIsland from "site/islands/Courses/CoursesBannerIsland.tsx";

interface CoursesBannerProps {
  title: string;
  description: string;
}

export default function CoursesBanner(props: CoursesBannerProps) {
  return <CoursesBannerIsland {...props} />;
}
